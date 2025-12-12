"use client"

import type React from "react"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { gsap } from "gsap"

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
  const get = () => {
    // Check if we're in the browser environment
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return defaultValue
    }

    const matchIndex = queries.findIndex((q) => {
      try {
        return window.matchMedia(q).matches
      } catch {
        return false
      }
    })

    return matchIndex !== -1 ? values[matchIndex] : defaultValue
  }

  const [value, setValue] = useState<number>(defaultValue)

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return

    // Set initial value on mount
    setValue(get())

    const handler = () => setValue(get())

    const mediaQueryLists = queries.map((q) => window.matchMedia(q))
    mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler))

    return () => {
      mediaQueryLists.forEach((mql) => mql.removeEventListener("change", handler))
    }
  }, [queries])

  return value
}

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (!ref.current) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])

  return [ref, size] as const
}

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image()
          img.src = src
          img.onload = img.onerror = () => resolve()
        }),
    ),
  )
}

interface Item {
  id: string
  img: string
  url: string
  height: number
}

interface GridItem extends Item {
  x: number
  y: number
  w: number
  h: number
}

interface MasonryProps {
  items: Item[]
  ease?: string
  duration?: number
  stagger?: number
  animateFrom?: "bottom" | "top" | "left" | "right" | "center" | "random"
  scaleOnHover?: boolean
  hoverScale?: number
  blurToFocus?: boolean
  colorShiftOnHover?: boolean
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    ["(min-width:1536px)", "(min-width:1280px)", "(min-width:1024px)", "(min-width:768px)", "(min-width:640px)"],
    [5, 4, 3, 2, 2],
    1,
  )

  const [containerRef, { width }] = useMeasure<HTMLDivElement>()
  const [imagesReady, setImagesReady] = useState(false)
  const [containerHeight, setContainerHeight] = useState(0)
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [validItems, setValidItems] = useState<Item[]>([])

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (!containerRect) return { x: item.x, y: item.y }

    let direction = animateFrom
    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"]
      direction = dirs[Math.floor(Math.random() * dirs.length)] as typeof animateFrom
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 }
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 }
      case "left":
        return { x: -200, y: item.y }
      case "right":
        return { x: window.innerWidth + 200, y: item.y }
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        }
      default:
        return { x: item.x, y: item.y + 100 }
    }
  }

  useEffect(() => {
    const validImageUrls = items.filter((item) => item.img && item.img !== "/placeholder.svg")

    Promise.all(
      validImageUrls.map(
        (item) =>
          new Promise<{ item: Item; valid: boolean }>((resolve) => {
            const img = new Image()
            img.src = item.img
            img.onload = () => resolve({ item, valid: true })
            img.onerror = () => resolve({ item, valid: false })
          }),
      ),
    ).then((results) => {
      const valid = results.filter((r) => r.valid).map((r) => r.item)
      setValidItems(valid)
      setImagesReady(true)
    })
  }, [items])

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return []
    const colHeights = new Array(columns).fill(0)
    const gap = width < 640 ? 12 : width < 1024 ? 14 : 16
    const totalGaps = (columns - 1) * gap
    const columnWidth = (width - totalGaps) / columns

    const gridItems = validItems.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights))
      const x = col * (columnWidth + gap)
      const heightScale = width < 640 ? 2.2 : 2
      const height = child.height / heightScale
      const y = colHeights[col]

      colHeights[col] += height + gap
      return { ...child, x, y, w: columnWidth, h: height }
    })

    setContainerHeight(Math.max(...colHeights))

    return gridItems
  }, [columns, validItems, width])

  const hasMounted = useRef(false)

  useLayoutEffect(() => {
    if (!imagesReady) return

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h }

      if (!hasMounted.current) {
        const start = getInitialPosition(item)
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          },
        )
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: "auto",
        })
      }
    })

    hasMounted.current = true
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease])

  const handleMouseEnter = (id: string, element: HTMLElement) => {
    if (window.matchMedia("(hover: hover)").matches && scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      })
    }
    if (colorShiftOnHover && window.matchMedia("(hover: hover)").matches) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 })
    }
  }

  const handleMouseLeave = (id: string, element: HTMLElement) => {
    if (window.matchMedia("(hover: hover)").matches && scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }
    if (colorShiftOnHover && window.matchMedia("(hover: hover)").matches) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 })
    }
  }

  if (!imagesReady || !width) {
    return <div ref={containerRef} className="relative w-full min-h-[600px] sm:min-h-[800px] lg:min-h-[1000px]" />
  }

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: `${containerHeight}px` }}>
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className="absolute box-content cursor-pointer"
          style={{ willChange: "transform, width, height, opacity" }}
          onClick={() => window.open(item.url, "_blank", "noopener")}
          onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
        >
          <div className="relative w-full h-full rounded-lg sm:rounded-[10px] shadow-lg sm:shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] overflow-hidden">
            <img src={item.img || "/placeholder.svg"} alt="Gallery image" className="w-full h-full object-cover" />
            {colorShiftOnHover && (
              <div className="color-overlay absolute inset-0 rounded-lg sm:rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Masonry
