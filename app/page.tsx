"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Phone, Clock } from "lucide-react"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { ReservationForm } from "@/components/reservation-form"
import { TexturedBackground } from "@/components/textured-background"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { translations } from "@/lib/translations"
import { testimonials } from "@/lib/testimonials"
import { RestaurantLoader } from "@/components/restaurant-loader"
import { Header } from "@/components/header"
import { OffersLoop } from "@/components/offers-loop"
import { ChefsSpecial } from "@/components/chefs-special"
import { MenuSection } from "@/components/menu-section"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "de">("de")
  const t = translations[language]
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [showLoader, setShowLoader] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [loaderComplete, setLoaderComplete] = useState(false) // Track loader completion state

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          } else {
            setVisibleSections((prev) => {
              const next = new Set(prev)
              next.delete(entry.target.id)
              return next
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleLoaderComplete = () => {
    setShowLoader(false)
    setShowContent(true)
    setLoaderComplete(true) // Set loader complete flag
  }

  return (
    <>
      {showLoader && <RestaurantLoader onComplete={handleLoaderComplete} />}

      <div className={showContent ? "opacity-100" : "opacity-0"}>
        <Header language={language} setLanguage={setLanguage} t={t} loaderComplete={loaderComplete} />

        <main className="min-h-screen">
          <Hero t={t} loaderComplete={loaderComplete} />

          <TexturedBackground>
            <section
              className={`py-3 px-4 bg-black border-y border-white/10 transition-all duration-1000 ${
                visibleSections.has("about") ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="container mx-auto max-w-7xl">
                <OffersLoop />
              </div>
            </section>
          </TexturedBackground>

          <TexturedBackground>
            <section
              id="about"
              className={`relative py-16 sm:py-20 md:py-24 px-4 bg-cream/30 transition-all duration-1000 overflow-hidden ${
                visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Animated leaf shadows in background */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                {/* Leaf shadow 1 - top left */}
                <div className="absolute top-10 left-10 w-32 h-32 animate-leaf-float-1">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-charcoal/30">
                    <path
                      d="M50 10 Q 70 30 80 50 Q 70 70 50 90 Q 40 70 35 50 Q 40 30 50 10"
                      fill="currentColor"
                      opacity="0.3"
                    />
                  </svg>
                </div>

                {/* Leaf shadow 2 - top center */}
                <div className="absolute top-20 left-1/4 w-40 h-40 animate-leaf-float-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-charcoal/30">
                    <path
                      d="M50 5 Q 75 25 85 50 Q 75 75 50 95 Q 35 75 25 50 Q 35 25 50 5"
                      fill="currentColor"
                      opacity="0.25"
                    />
                  </svg>
                </div>

                {/* Leaf shadow 3 - top right */}
                <div className="absolute top-32 right-20 w-36 h-36 animate-leaf-float-3">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-charcoal/30">
                    <path
                      d="M50 15 Q 68 28 78 50 Q 68 72 50 85 Q 42 72 32 50 Q 42 28 50 15"
                      fill="currentColor"
                      opacity="0.28"
                    />
                  </svg>
                </div>

                {/* Leaf shadow 4 - middle left */}
                <div className="absolute top-1/3 left-1/3 w-28 h-28 animate-leaf-float-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-charcoal/30">
                    <path d="M50 20 Q 65 35 75 50 Q 65 65 50 80 Q 45 65 35 50 Q 45 35 50 20" fill="currentColor" />
                  </svg>
                </div>

                {/* Leaf shadow 5 - center right */}
                <div className="absolute top-1/2 right-1/4 w-44 h-44 animate-leaf-float-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-charcoal/30">
                    <path d="M50 8 Q 72 22 82 50 Q 72 78 50 92 Q 38 78 28 50 Q 38 22 50 8" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
                  <div className="space-y-4 sm:space-y-6">
                    <div
                      className={`space-y-2 transition-all duration-1000 ${
                        visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                      }`}
                      style={{ transitionDelay: "400ms" }}
                    >
                      <p className="text-sm text-charcoal/60 uppercase tracking-widest">Präsentiert von Bistro Alpen</p>
                    </div>

                    <div
                      className={`transition-all duration-1000 ${
                        visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                      }`}
                      style={{ transitionDelay: "600ms" }}
                    >
                      <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-tight">
                        {t.aboutTitle}
                      </h2>
                    </div>

                    <p
                      className={`text-base text-charcoal/70 leading-relaxed max-w-xl transition-all duration-1000 ${
                        visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                      }`}
                      style={{ transitionDelay: "800ms" }}
                    >
                      {t.aboutDescription}
                    </p>

                    <p
                      className={`text-base text-charcoal/70 leading-relaxed max-w-xl transition-all duration-1000 ${
                        visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                      }`}
                      style={{ transitionDelay: "1000ms" }}
                    >
                      {t.aboutDescription2}
                    </p>

                    <div
                      className={`pt-4 transition-all duration-1000 ${
                        visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                      }`}
                      style={{ transitionDelay: "1200ms" }}
                    >
                      <p className="text-sm text-cognac uppercase tracking-wider font-semibold">Seit 1995</p>
                    </div>
                  </div>

                  <div
                    className={`flex justify-center md:justify-end transition-all duration-1000 ${
                      visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    <div className="relative w-full max-w-[520px]">
                      <div className="relative h-[340px] rounded-tl-[170px] rounded-bl-[170px] rounded-tr-none rounded-br-none overflow-hidden shadow-2xl border-4 border-white/60">
                        <img
                          src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&h=700&fit=crop&q=80"
                          alt="People dining at restaurant"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-tl-[170px] rounded-bl-[170px] rounded-tr-none rounded-br-none bg-cognac/10 blur-3xl -z-10"></div>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-12 sm:mt-16">
                  {/* Card 1: Founder Vision */}
                  <div
                    className={`bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:shadow-cognac/20 transition-all duration-1000 cursor-pointer ${
                      visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: "800ms" }}
                  >
                    <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 sm:mb-4">Vision des Gründers</h3>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                      Daniel Gallego inspirierte unsere Reise und vereinte Leidenschaft und Können, um ein
                      außergewöhnliches kulinarisches Erlebnis zu schaffen.
                    </p>
                  </div>

                  {/* Card 2: Local Roots */}
                  <div
                    className={`bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:shadow-cognac/20 transition-all duration-1000 cursor-pointer ${
                      visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: "900ms" }}
                  >
                    <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 sm:mb-4">Lokale Wurzeln</h3>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                      Aus unserer Gemeinde verwurzelt, feiern wir die reiche kulinarische Tradition der Region mit jedem
                      Gericht.
                    </p>
                  </div>

                  {/* Card 3: Passion for Food */}
                  <div
                    className={`bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:shadow-cognac/20 transition-all duration-1000 cursor-pointer ${
                      visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: "1000ms" }}
                  >
                    <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 sm:mb-4">Leidenschaft für Essen</h3>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                      Unsere Leidenschaft treibt uns an, exquisite Gerichte zu kreieren, die unvergessliche kulinarische
                      Erinnerungen schaffen.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </TexturedBackground>

          <TexturedBackground>
            <section
              className={`relative py-24 px-4 bg-cream/50 transition-all duration-1000 overflow-hidden pt-4 ${
                visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Animated leaf shadows in background */}
              <div className="absolute inset-0 pointer-events-none opacity-15">
                {/* Leaf shadow 1 */}
                <div className="absolute top-20 right-10 w-32 h-32 animate-leaf-float-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-charcoal/30">
                    <path
                      d="M50 10 Q 70 30 80 50 Q 70 70 50 90 Q 40 70 35 50 Q 40 30 50 10"
                      fill="currentColor"
                      opacity="0.3"
                    />
                  </svg>
                </div>
                {/* Leaf shadow 2 */}
                <div className="absolute top-1/3 left-20 w-40 h-40 animate-leaf-float-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-charcoal/30">
                    <path
                      d="M50 5 Q 75 25 85 50 Q 75 75 50 95 Q 35 75 25 50 Q 35 25 50 5"
                      fill="currentColor"
                      opacity="0.25"
                    />
                  </svg>
                </div>
              </div>

              <div className="container mx-auto max-w-7xl relative z-10">
                {/* Top section: Title and Image */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                  {/* Left: Rounded rectangle image with peak pointing right */}
                  <div
                    className={`flex justify-center md:justify-start transition-all duration-1000 ${
                      visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    <div className="relative w-full max-w-[520px]">
                      <div className="relative h-[340px] rounded-tr-[170px] rounded-br-[170px] rounded-tl-none rounded-bl-none overflow-hidden shadow-2xl border-4 border-white/60">
                        <img
                          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&h=700&fit=crop&q=80"
                          alt="Restaurant dining experience"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-tr-[170px] rounded-br-[170px] rounded-tl-none rounded-bl-none bg-cognac/10 blur-3xl -z-10"></div>
                    </div>
                  </div>

                  {/* Right: Text content */}
                  <div className="space-y-6">
                    <h2
                      className={`text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-tight transition-all duration-1000 ${
                        visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                      }`}
                      style={{ transitionDelay: "400ms" }}
                    >
                      Reise der
                      <br />
                      Kulinarischen Leidenschaft
                    </h2>

                    <p
                      className={`text-base text-charcoal/70 leading-relaxed max-w-xl transition-all duration-1000 ${
                        visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                      }`}
                      style={{ transitionDelay: "600ms" }}
                    >
                      Mit Hingabe gegründet, entwickelte sich unser Restaurant von einem bescheidenen Traum zu einem
                      lebendigen Zentrum exquisiter Aromen und kulinarischer Meisterschaft.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </TexturedBackground>

          <TexturedBackground>
            <section
              id="reviews"
              className={`relative py-24 px-4 bg-white transition-all duration-1000 overflow-hidden ${
                visibleSections.has("reviews") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-12">
                  <p className="text-sm text-charcoal/60 uppercase tracking-widest mb-3">Kundenstimmen</p>
                  <h2 className="text-5xl md:text-6xl font-serif text-charcoal mb-4">Was Unsere Gäste Sagen</h2>
                  <p className="text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
                    Erleben Sie die Geschichten der kulinarischen Freude von unseren geschätzten Gästen
                  </p>
                </div>

                <InfiniteMovingCards
                  items={testimonials}
                  direction="right"
                  speed="slow"
                  pauseOnHover={true}
                  className="py-8"
                />
              </div>
            </section>
          </TexturedBackground>

          <TexturedBackground>
            <section
              id="menu"
              className={`py-24 px-4 transition-all duration-1000 pb-8 ${
                visibleSections.has("menu") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                  <p className="text-sm text-charcoal/60 uppercase tracking-widest mb-3">Unsere Auswahl</p>
                  <h2 className="text-5xl md:text-6xl font-serif text-charcoal mb-4">Exquisiter Menü</h2>
                  <p className="text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
                    Entdecken Sie unsere sorgfältig zusammengestellte Auswahl kulinarischer Meisterwerke
                  </p>
                </div>

                <MenuSection language={language} />
              </div>
            </section>
          </TexturedBackground>

          <TexturedBackground>
            <section
              id="chefs-special"
              className={`relative py-24 px-4 bg-cream/30 transition-all duration-1000 pt-16 ${
                visibleSections.has("chefs-special") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="container mx-auto max-w-7xl">
                <ChefsSpecial language="de" />
              </div>
            </section>
          </TexturedBackground>

          <section
            id="reservation"
            className={`relative py-16 sm:py-20 md:py-24 px-4 bg-charcoal overflow-hidden transition-all duration-1000 ${
              visibleSections.has("reservation") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ backgroundColor: "#2d2d2d" }}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute top-20 right-10 w-40 h-40 animate-leaf-float-1">
                <svg viewBox="0 0 100 100" className="w-full h-full text-cognac">
                  <path d="M50 10 Q 70 30 80 50 Q 70 70 50 90 Q 40 70 35 50 Q 40 30 50 10" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-32 left-20 w-36 h-36 animate-leaf-float-3">
                <svg viewBox="0 0 100 100" className="w-full h-full text-cognac">
                  <path d="M50 5 Q 75 25 85 50 Q 75 75 50 95 Q 35 75 25 50 Q 35 25 50 5" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
              <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
                {/* Left side - Image gallery */}
                <div className="space-y-6 animate-fade-in-left">
                  <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                    <DirectionAwareHover
                      imageUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80"
                      className="h-full rounded-3xl"
                    >
                      <div className="text-center space-y-2">
                        <h3 className="text-2xl md:text-3xl font-serif text-white">Unforgettable Experience</h3>
                        <p className="text-white/90 text-sm">Awaits at Bistro Alpen</p>
                      </div>
                    </DirectionAwareHover>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <DirectionAwareHover
                      imageUrl="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&q=80"
                      className="h-[250px] sm:h-[300px] md:h-[350px]"
                      imageClassName="object-cover"
                    >
                      <div className="text-center">
                        <p className="font-bold text-lg text-white">Fine Dining</p>
                        <p className="text-white/80 text-sm">Exquisite Setup</p>
                      </div>
                    </DirectionAwareHover>

                    <DirectionAwareHover
                      imageUrl="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop&q=80"
                      className="h-[250px] sm:h-[300px] md:h-[350px]"
                      imageClassName="object-cover"
                    >
                      <div className="text-center">
                        <p className="font-bold text-lg text-white">Gourmet Cuisine</p>
                        <p className="text-white/80 text-sm">Masterfully Crafted</p>
                      </div>
                    </DirectionAwareHover>
                  </div>
                </div>

                {/* Right side - Reservation form */}
                <div className="animate-fade-in-right">
                  <div className="bg-cream rounded-3xl p-10 lg:p-12 shadow-2xl">
                    {/* Decorative top accent */}
                    <div className="flex justify-center mb-8">
                      <div className="w-20 h-1 bg-cognac rounded-full"></div>
                    </div>

                    <div className="text-center mb-10">
                      <p className="text-sm text-charcoal/60 uppercase tracking-widest mb-3">
                        Reservieren Sie Ihren Tisch
                      </p>
                      <h2 className="text-4xl md:text-5xl font-serif text-charcoal leading-tight mb-4">
                        {t.reservationTitle}
                      </h2>
                      <p className="text-charcoal/70 leading-relaxed">{t.reservationSubtitle}</p>
                    </div>

                    <ReservationForm t={t} />

                    {/* Bottom decorative element */}
                    <div className="mt-8 pt-8 border-t border-charcoal/10">
                      <div className="flex items-center justify-center gap-8 text-sm text-charcoal/60">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-cognac" />
                          <span>+49 89 1234 5678</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-cognac" />
                          <span>Täglich Geöffnet</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <TexturedBackground>
            <section
              id="contact"
              className={`py-24 px-4 text-charcoal transition-all duration-1000 ${
                visibleSections.has("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-serif mb-8 text-balance animate-fade-in-up">
                      {t.contactTitle}
                    </h2>

                    <div className="space-y-6 animate-fade-in-up delay-100">
                      <div className="flex items-start gap-4">
                        <ChevronDown className="w-6 h-6 text-cognac mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold mb-1">{t.address}</div>
                          <div className="text-charcoal/80">Maximilianstraße 42, 80539 München, Deutschland</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-cognac mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold mb-1">{t.phone}</div>
                          <div className="text-charcoal/80">+49 89 1234 5678</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <ChevronDown className="w-6 h-6 text-cognac mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold mb-1">Email</div>
                          <div className="text-charcoal/80">reservations@bistroalpen.de</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-cognac mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold mb-1">{t.hours}</div>
                          <div className="text-charcoal/80">
                            <div>Monday - Friday: 12:00 - 22:00</div>
                            <div>Saturday - Sunday: 11:00 - 23:00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-[400px] rounded-2xl overflow-hidden group animate-fade-in-right">
                    <img
                      src="/elegant-restaurant-interior-warm-lighting-atmosphe.jpg"
                      alt="Restaurant interior"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </section>
          </TexturedBackground>
        </main>

        <Footer t={t} />
      </div>
    </>
  )
}
