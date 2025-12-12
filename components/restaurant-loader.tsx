"use client"

import { useEffect, useState } from "react"
import { UtensilsCrossed, ChefHat, Wine } from "lucide-react"

export function RestaurantLoader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<"writing" | "icons" | "fadeout">("writing")

  useEffect(() => {
    // Stage 1: Writing animation (3s)
    const writingTimer = setTimeout(() => {
      setStage("icons")
    }, 3000)

    // Stage 2: Show restaurant icons (2s)
    const iconsTimer = setTimeout(() => {
      setStage("fadeout")
    }, 5000)

    // Stage 3: Fade out and complete (0.8s)
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 5800)

    return () => {
      clearTimeout(writingTimer)
      clearTimeout(iconsTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-800 ${
        stage === "fadeout" ? "opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundImage: "url('/images/canvas-texture.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "400px",
        backgroundColor: "white",
      }}
    >
      <div className="relative flex flex-col items-center justify-center py-16 px-8">
        <div className="relative mb-8 py-4">
          <img
            src="/bistro-alpen-logo.png"
            alt="Bistro Alpen"
            className={`h-24 md:h-32 w-auto object-contain transition-opacity duration-1000 ${
              stage === "writing" ? "opacity-0" : "opacity-100"
            }`}
            style={{
              animation: stage === "writing" ? "writeSignature 3s ease-out forwards" : "none",
            }}
          />

          {stage === "writing" && (
            <div
              className="absolute bottom-0 right-0 w-3 h-3 bg-charcoal rounded-full"
              style={{
                animation: "movePen 3s ease-out forwards",
              }}
            />
          )}
        </div>

        <div
          className={`flex items-center gap-8 transition-all duration-1000 ${
            stage === "icons" || stage === "fadeout" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="animate-float-1">
            <UtensilsCrossed className="w-8 h-8 text-cognac" />
          </div>
          <div className="animate-float-2">
            <ChefHat className="w-10 h-10 text-cognac" />
          </div>
          <div className="animate-float-3">
            <Wine className="w-8 h-8 text-cognac" />
          </div>
        </div>

        <p
          className={`mt-6 text-sm text-charcoal/60 uppercase tracking-[0.3em] transition-all duration-1000 delay-300 ${
            stage === "icons" || stage === "fadeout" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Gehobene Küche Erlebnis
        </p>
      </div>
    </div>
  )
}
