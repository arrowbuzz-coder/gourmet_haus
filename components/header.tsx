"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname, useRouter } from "next/navigation"

interface HeaderProps {
  language: "en" | "de"
  setLanguage: (lang: "en" | "de") => void
  t: any
  loaderComplete: boolean
}

export function Header({ language, setLanguage, t, loaderComplete }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (!loaderComplete) return

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [loaderComplete])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`
      return
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const handleNavLinkClick = (href: string) => {
    setIsOpen(false)
    router.push(href)
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" })
    }, 100)
  }

  const navLinks = [
    { id: "hero", label: "HOME" },
    { href: "/gallery", label: t.gallery.toUpperCase() },
    { href: "/events", label: t.events.toUpperCase() },
    { href: "/contact", label: t.contact.toUpperCase() },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pt-6 px-4 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
    >
      <div
        className={`
        max-w-7xl mx-auto 
        border border-[#d4a574]/30
        shadow-lg shadow-charcoal/10
        rounded-full
        transition-all duration-300
        ${isScrolled ? "shadow-2xl shadow-charcoal/20 border-[#d4a574]/50" : ""}
      `}
        style={{
          backgroundImage: "url(/images/canvas-texture.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
          opacity: 0.95,
        }}
      >
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          <button onClick={() => scrollToSection("hero")} className="group transition-all hover:scale-105">
            <img src="/bistro-alpen-logo.png" alt="Bistro Alpen" className="h-14 w-auto object-contain" />
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.href ? (
                <button
                  key={link.href}
                  onClick={() => handleNavLinkClick(link.href)}
                  className="text-sm font-semibold text-charcoal hover:text-[#d4a574] transition-all px-4 py-2 rounded-full hover:bg-[#d4a574]/10"
                >
                  {link.label}
                </button>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id!)}
                  className="text-sm font-semibold text-charcoal hover:text-[#d4a574] transition-all px-4 py-2 rounded-full hover:bg-[#d4a574]/10"
                >
                  {link.label}
                </button>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => scrollToSection("reservation")}
              className="hidden lg:flex bg-gradient-to-r from-[#d4a574] to-[#c49564] hover:from-[#e5b684] hover:to-[#d4a574] text-white px-6 h-9 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-[#d4a574]/30 hover:shadow-xl hover:shadow-[#d4a574]/40"
            >
              {t.bookTable.toUpperCase()}
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-charcoal hover:text-[#d4a574] h-9 w-9 p-0 rounded-full hover:bg-[#d4a574]/10"
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-cream border-l border-[#d4a574]/30 w-[280px]"
                style={{
                  backgroundImage: "url(/images/canvas-texture.png)",
                  backgroundRepeat: "repeat",
                  backgroundSize: "400px",
                }}
              >
                <nav className="flex flex-col gap-2 mt-12">
                  {navLinks.map((link) =>
                    link.href ? (
                      <button
                        key={link.href}
                        onClick={() => handleNavLinkClick(link.href)}
                        className="text-charcoal hover:text-[#d4a574] text-base font-semibold px-4 py-3 text-left rounded-lg hover:bg-[#d4a574]/10 transition-colors"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id!)}
                        className="text-charcoal hover:text-[#d4a574] text-base font-semibold px-4 py-3 text-left rounded-lg hover:bg-[#d4a574]/10 transition-colors"
                      >
                        {link.label}
                      </button>
                    ),
                  )}
                  <div className="mt-4 px-4">
                    <Button
                      onClick={() => scrollToSection("reservation")}
                      className="w-full bg-gradient-to-r from-[#d4a574] to-[#c49564] hover:from-[#e5b684] hover:to-[#d4a574] text-white rounded-full font-bold shadow-lg shadow-[#d4a574]/30"
                    >
                      {t.bookTable.toUpperCase()}
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
