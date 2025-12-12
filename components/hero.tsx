"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

interface HeroProps {
  t: any
  loaderComplete: boolean // Add prop to track loader completion
}

export function Hero({ t, loaderComplete }: HeroProps) {
  const [scrollY, setScrollY] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const [showReviews, setShowReviews] = useState(false)
  const [showMichelin, setShowMichelin] = useState(false)
  const [showBadge, setShowBadge] = useState(false)
  const [showHeadline, setShowHeadline] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const [showPhone, setShowPhone] = useState(false)

  const [revealedChars, setRevealedChars] = useState(0)
  const fullText = "Wo Jeder"
  const momentText = "Moment"
  const magicText = "Zu Magie Wird"

  useEffect(() => {
    if (!loaderComplete) return

    const timers = [
      setTimeout(() => setShowVideo(true), 0), // Video appears immediately
      setTimeout(() => setShowImage(true), 400), // Image at 0.4s (was 0.8s)
      setTimeout(() => setShowReviews(true), 800), // Reviews at 0.8s (was 1.5s)
      setTimeout(() => setShowMichelin(true), 1100), // Michelin at 1.1s (was 2s)
      setTimeout(() => setShowBadge(true), 1400), // Badge at 1.4s (was 2.5s)
      setTimeout(() => setShowHeadline(true), 1700), // Headline at 1.7s (was 3s)
      setTimeout(() => setShowSubtitle(true), 2000), // Subtitle at 2s (was 3.5s)
      setTimeout(() => setShowButtons(true), 2300), // Buttons at 2.3s (was 4s)
      setTimeout(() => setShowPhone(true), 2600), // Phone at 2.6s (was 4.5s)
    ]

    return () => timers.forEach(clearTimeout)
  }, [loaderComplete])

  useEffect(() => {
    if (!showHeadline) return

    const totalChars = fullText.length + momentText.length + magicText.length
    let currentChar = 0

    const interval = setInterval(() => {
      currentChar++
      setRevealedChars(currentChar)
      if (currentChar >= totalChars) {
        clearInterval(interval)
      }
    }, 50) // 50ms per character for smooth writing effect

    return () => clearInterval(interval)
  }, [showHeadline])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${showVideo ? "opacity-100" : "opacity-0"}`}
      >
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1111421-hd_1920_1080_30fps%20%281%29-QLu7XMwYatug9r4sU5twgDHT4323c3.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className={`absolute inset-0 bg-black/70 transition-opacity duration-1000 ${showVideo ? "opacity-100" : "opacity-0"}`}
      ></div>

      {/* Floating leaves decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-[0.06]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-leaf ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random() * 0.8}) rotate(${Math.random() * 360}deg)`,
            }}
          >
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
              <path
                d="M50 10 Q30 30 25 50 Q30 70 50 90 Q70 70 75 50 Q70 30 50 10Z"
                fill="currentColor"
                className="text-cream"
              />
            </svg>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full py-20 sm:py-28 lg:py-32 pt-24 sm:pt-28 lg:pt-32">
          <div className="space-y-6 sm:space-y-8">
            <div
              className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-cognac/20 backdrop-blur-sm rounded-full border border-cognac/30 transition-all duration-700 ${showBadge ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cognac" />
              <span className="text-xs sm:text-sm font-medium text-cream tracking-wide">FEINE KÜCHE EXZELLENZ</span>
            </div>

            <div
              className={`space-y-3 sm:space-y-4 transition-all duration-700 ${showHeadline ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-cream leading-[0.95] tracking-tight drop-shadow-2xl">
                {fullText.split("").map((char, i) => (
                  <span
                    key={i}
                    className={`inline-block transition-all duration-300 ${
                      i < revealedChars ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                    style={{
                      transitionDelay: `${i * 50}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
                <br />
                <span className="font-cursive text-cognac italic text-7xl md:text-8xl lg:text-9xl">
                  {momentText.split("").map((char, i) => {
                    const charIndex = fullText.length + i
                    return (
                      <span
                        key={i}
                        className={`inline-block transition-all duration-300 ${
                          charIndex < revealedChars
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-4 scale-95"
                        }`}
                        style={{
                          transitionDelay: `${charIndex * 50}ms`,
                          transformOrigin: "bottom left",
                        }}
                      >
                        {char}
                      </span>
                    )
                  })}
                </span>
                <br />
                {magicText.split("").map((char, i) => {
                  const charIndex = fullText.length + momentText.length + i
                  return (
                    <span
                      key={i}
                      className={`inline-block transition-all duration-300 ${
                        charIndex < revealedChars ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}
                      style={{
                        transitionDelay: `${charIndex * 50}ms`,
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  )
                })}
              </h1>
            </div>

            <p
              className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-light drop-shadow-lg text-input transition-all duration-700 ${showSubtitle ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              Erleben Sie kulinarische Kunstfertigkeit, kreiert von Weltklasse-Köchen in einer Atmosphäre raffinierter
              Eleganz. Jedes Gericht erzählt eine Geschichte, jeder Geschmack eine Symphonie.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 transition-all duration-700 ${showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Button
                onClick={() => scrollToSection("menu")}
                className="bg-cognac hover:bg-cognac/90 text-cream px-6 sm:px-8 py-6 sm:py-7 text-sm sm:text-base font-semibold transition-all hover:scale-105 hover:shadow-2xl group w-full sm:w-auto"
              >
                MENÜ ENTDECKEN
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => scrollToSection("reservations")}
                variant="outline"
                className="border-2 border-cream hover:bg-cream hover:text-charcoal px-6 sm:px-8 py-6 sm:py-7 text-sm sm:text-base font-semibold transition-all hover:scale-105 backdrop-blur-sm text-primary w-full sm:w-auto"
              >
                TISCH RESERVIEREN
              </Button>
            </div>

            <div
              className={`flex items-center gap-4 sm:gap-6 pt-4 transition-all duration-700 ${showPhone ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-cream/30 to-transparent"></div>
              <a
                href="tel:1-800-222-000"
                className="flex items-center gap-2 sm:gap-3 text-cream hover:text-cognac transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cognac/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-cognac/30 transition-colors">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cognac" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] sm:text-xs text-cream/70 font-medium">RESERVIERUNGEN</p>
                  <p className="text-base sm:text-lg font-bold text-cream">1-800-222-000</p>
                </div>
              </a>
            </div>
          </div>

          <div
            className={`relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] transition-all duration-1000 ${showImage ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="absolute inset-0 rounded-tl-[100px] sm:rounded-tl-[150px] lg:rounded-tl-[200px] rounded-br-[100px] sm:rounded-br-[150px] lg:rounded-br-[200px] overflow-hidden shadow-2xl border-4 sm:border-6 lg:border-8 border-white/60">
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal/20 via-transparent to-cognac/20 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&h=1200&fit=crop&q=80"
                alt="Restaurant experience"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute -inset-1 bg-gradient-to-br from-cognac/30 to-charcoal/30 blur-2xl -z-10"></div>
            </div>

            <div
              className={`absolute -left-4 sm:-left-6 lg:-left-8 top-24 sm:top-32 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-cognac/10 hover:scale-105 transition-all duration-700 ${showReviews ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              style={{
                transform: `translateY(${scrollY * -0.05}px)`,
                backgroundImage: 'url("/images/canvas-texture.png")',
                backgroundRepeat: "repeat",
                backgroundSize: "350px",
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cognac">5.0</div>
                <div>
                  <div className="flex gap-0.5 sm:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-cognac text-xs sm:text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] sm:text-xs text-charcoal/60 font-medium mt-1">1.200+ Bewertungen</p>
                </div>
              </div>
            </div>

            <div
              className={`absolute -right-4 sm:-right-6 bottom-24 sm:bottom-32 backdrop-blur-sm text-charcoal p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl hover:scale-105 transition-all duration-700 ${showMichelin ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              style={{
                transform: `translateY(${scrollY * -0.08}px)`,
                backgroundImage: 'url("/images/canvas-texture.png")',
                backgroundRepeat: "repeat",
                backgroundSize: "350px",
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-cognac/20 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-cognac" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-charcoal">Michelin Stern</p>
              <p className="text-[10px] sm:text-xs mt-1 text-charcoal/70">Restaurant 2024</p>
            </div>

            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-cognac to-cognac/50 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-charcoal to-charcoal/50 rounded-full blur-xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
