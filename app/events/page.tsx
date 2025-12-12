"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { translations } from "@/lib/translations"
import { Calendar, Clock, Users, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"

export default function EventsPage() {
  const [language, setLanguage] = useState<"en" | "de">("de")
  const t = translations[language]
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const events = [
    {
      title: language === "en" ? "Wine Tasting Evening" : "Weinverkostungsabend",
      date: "2024-02-15",
      time: "19:00 - 22:00",
      capacity: 20,
      description:
        language === "en"
          ? "Join us for an exclusive wine tasting featuring premium German wines paired with selected appetizers."
          : "Begleiten Sie uns zu einer exklusiven Weinverkostung mit erstklassigen deutschen Weinen und ausgewählten Vorspeisen.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop&q=80",
      category: language === "en" ? "Wine & Spirits" : "Wein & Spirituosen",
    },
    {
      title: language === "en" ? "Chef's Table Experience" : "Chef's Table Erlebnis",
      date: "2024-02-22",
      time: "18:00 - 23:00",
      capacity: 12,
      description:
        language === "en"
          ? "An intimate 7-course dining experience with our head chef, featuring seasonal specialties and cooking demonstrations."
          : "Ein intimes 7-Gänge-Menü mit unserem Chefkoch, mit saisonalen Spezialitäten und Kochvorführungen.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop&q=80",
      category: language === "en" ? "Culinary Experience" : "Kulinarisches Erlebnis",
    },
    {
      title: language === "en" ? "Valentine's Special" : "Valentinstag Spezial",
      date: "2024-02-14",
      time: "17:00 - 23:00",
      capacity: 40,
      description:
        language === "en"
          ? "Celebrate love with a romantic 5-course menu designed for couples, featuring live music and candlelit ambiance."
          : "Feiern Sie die Liebe mit einem romantischen 5-Gänge-Menü für Paare, mit Live-Musik und Kerzenlicht-Atmosphäre.",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&h=600&fit=crop&q=80",
      category: language === "en" ? "Special Occasion" : "Besondere Anlässe",
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      <Header language={language} setLanguage={setLanguage} t={t} loaderComplete={true} />

      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 overflow-hidden">
        {/* Animated leaf shadows */}
        <div className="absolute top-20 right-[10%] w-32 h-32 bg-charcoal/5 rounded-full blur-3xl animate-leaf-float-1"></div>
        <div className="absolute top-40 left-[15%] w-24 h-24 bg-charcoal/5 rounded-full blur-3xl animate-leaf-float-2"></div>
        <div className="absolute top-60 right-[25%] w-28 h-28 bg-charcoal/5 rounded-full blur-3xl animate-leaf-float-3"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cognac" />
              <span className="text-cognac font-semibold tracking-wider uppercase text-xs sm:text-sm">
                {language === "en" ? "Exclusive Events" : "Exklusive Veranstaltungen"}
              </span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cognac" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-charcoal leading-tight mb-4 sm:mb-6">
              {t.eventsTitle}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              {t.eventsSubtitle}
            </p>
          </div>
        </div>
      </section>

      <main className="pb-20 sm:pb-28 lg:pb-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image container with parallax effect */}
                  <div
                    className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                    style={{
                      transform: hoveredIndex === index ? "scale(1.02)" : "scale(1)",
                      transition: "transform 0.6s ease",
                    }}
                  >
                    <DirectionAwareHover
                      imageUrl={event.image || "/placeholder.svg"}
                      className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl shadow-2xl"
                      imageClassName="object-cover"
                    >
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-serif font-bold">{event.title}</h3>
                        <p className="text-xs sm:text-sm text-cream/90">{event.time}</p>
                      </div>
                    </DirectionAwareHover>

                    {/* Category badge */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-cream/95 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full z-50">
                      <span className="font-semibold text-xs sm:text-sm text-input">{event.category}</span>
                    </div>

                    {/* Date badge */}
                    <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-cognac text-cream px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg">
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold leading-none">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-[10px] sm:text-xs uppercase mt-1 tracking-wider">
                          {new Date(event.date).toLocaleDateString(language, { month: "short" })}
                        </div>
                      </div>
                    </div>

                    {/* Decorative glow */}
                    <div
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-cognac/20 blur-xl rounded-full transition-opacity duration-500"
                      style={{ opacity: hoveredIndex === index ? 1 : 0.5 }}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-5 sm:space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-tight">
                      {event.title}
                    </h2>

                    <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed">{event.description}</p>

                    {/* Event details grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
                      <div className="flex items-center gap-3 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-charcoal/10">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cognac/10 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cognac" />
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-xs text-charcoal/60 font-medium uppercase tracking-wide">
                            {language === "en" ? "Date" : "Datum"}
                          </div>
                          <div className="text-xs sm:text-sm text-charcoal font-semibold">
                            {new Date(event.date).toLocaleDateString(language, {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-charcoal/10">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cognac/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-cognac" />
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-xs text-charcoal/60 font-medium uppercase tracking-wide">
                            {language === "en" ? "Time" : "Uhrzeit"}
                          </div>
                          <div className="text-xs sm:text-sm text-charcoal font-semibold">{event.time}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-charcoal/10">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cognac/10 flex items-center justify-center flex-shrink-0">
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cognac" />
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-xs text-charcoal/60 font-medium uppercase tracking-wide">
                            {t.maxGuests}
                          </div>
                          <div className="text-xs sm:text-sm text-charcoal font-semibold">{event.capacity}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-charcoal/10">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cognac/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cognac" />
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-xs text-charcoal/60 font-medium uppercase tracking-wide">
                            {language === "en" ? "Location" : "Ort"}
                          </div>
                          <div className="text-xs sm:text-sm text-charcoal font-semibold">Bistro Alpen</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button className="bg-cognac hover:bg-cognac/90 text-cream font-semibold px-8 sm:px-10 py-5 sm:py-7 rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 w-full sm:w-auto">
                      {t.bookNow}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer t={t} />
    </div>
  )
}
