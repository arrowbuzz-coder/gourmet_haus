"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react"

interface ChefsSpecialProps {
  language?: "en" | "de" // Made language prop optional with default
}

export function ChefsSpecial({ language = "en" }: ChefsSpecialProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const specialDishes = {
    en: [
      {
        name: "Gourmet Prawn Composition",
        description:
          "Exquisite tiger prawns delicately seasoned and paired with crispy kale, yellow pepper coulis, white chocolate spheres, and micro herbs. A stunning visual and culinary masterpiece.",
        price: "72",
        rating: 5.0,
        chef: "Chef Heinrich Müller",
        plateImage: "/gourmet-prawn-dish-transparent-background.png",
        since: "SINCE 2020",
      },
      {
        name: "Physalis Chocolate Symphony",
        description:
          "An artistic dessert featuring delicate white chocolate panna cotta, golden physalis flower with translucent petals, and rich dark chocolate sauce artistically drizzled. A visual and culinary celebration.",
        price: "38",
        rating: 5.0,
        chef: "Chef Heinrich Müller",
        plateImage: "/gourmet-dessert-physalis-chocolate-transparent-background.png",
        since: "SINCE 2020",
      },
      {
        name: "Phyllo Pistachio Floral Cup",
        description:
          "Delicate phyllo pastry cup filled with crushed pistachios, edible purple flowers, micro greens, and gourmet garnishes. A sophisticated blend of textures and colors that celebrates spring.",
        price: "42",
        rating: 5.0,
        chef: "Chef Heinrich Müller",
        plateImage: "/images/monique-caraballo-u4jpro57jze-unsplash-removebg-preview.png",
        since: "SINCE 2020",
      },
    ],
    de: [
      {
        name: "Gourmet Garnelen Komposition",
        description:
          "Exquisite Tigergarnelen zart gewürzt und kombiniert mit knusprigem Grünkohl, gelbem Paprikacoulis, weißen Schokoladenkugeln und Mikrogemüse. Ein atemberaubendes visuelles und kulinarisches Meisterwerk.",
        price: "72",
        rating: 5.0,
        chef: "Chefkoch Heinrich Müller",
        plateImage: "/gourmet-prawn-dish-transparent-background.png",
        since: "SEIT 2020",
      },
      {
        name: "Physalis Schokoladen-Symphonie",
        description:
          "Ein künstlerisches Dessert mit zarter weißer Schokoladen-Panna Cotta, goldener Physalis-Blume mit durchscheinenden Blütenblättern und reichhaltiger dunkler Schokoladensauce. Eine visuelle und kulinarische Feier.",
        price: "38",
        rating: 5.0,
        chef: "Chefkoch Heinrich Müller",
        plateImage: "/gourmet-dessert-physalis-chocolate-transparent-background.png",
        since: "SEIT 2020",
      },
      {
        name: "Phyllo-Pistazie Blütenschale",
        description:
          "Zarte Phyllo-Teigschale gefüllt mit zerkleinerten Pistazien, essbaren lila Blüten, Mikrogrün und Gourmet-Garnituren. Eine raffinierte Mischung aus Texturen und Farben, die den Frühling feiert.",
        price: "42",
        rating: 5.0,
        chef: "Chefkoch Heinrich Müller",
        plateImage: "/images/monique-caraballo-u4jpro57jze-unsplash-removebg-preview.png",
        since: "SEIT 2020",
      },
    ],
  }

  const dishes = specialDishes[language]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dishes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [dishes.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dishes.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dishes.length) % dishes.length)
  }

  const currentDish = dishes[currentSlide]

  return (
    <div
      className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mt-12 sm:mt-16 lg:mt-20 border-2 sm:border-4 border-charcoal/10"
      style={{
        backgroundColor: "var(--color-cream)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 text-[100px] sm:text-[150px] lg:text-[200px] font-serif text-charcoal/20 select-none">
          ✦
        </div>
        <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 text-[100px] sm:text-[150px] lg:text-[200px] font-serif text-charcoal/20 select-none">
          ✦
        </div>
      </div>

      <div className="relative grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 p-6 sm:p-10 lg:p-16 items-center min-h-[500px] sm:min-h-[600px] bg-gradient-to-br from-cream via-amber-50/30 to-cream rounded-xl sm:rounded-2xl border-2 border-charcoal/10">
        {/* Left side - Fixed plate and content */}
        <div className="relative flex flex-col items-center justify-center space-y-6 sm:space-y-8">
          {/* Circular plate with dish */}
          <div
            className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] flex items-center justify-center group cursor-pointer"
            style={{ perspective: "1000px" }}
          >
            {/* Fixed ceramic plate - doesn't change */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-cream to-white shadow-2xl border-4 sm:border-6 lg:border-8 border-cream/90 overflow-visible transition-all duration-500 ease-out group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] group-hover:scale-110 group-hover:-translate-y-8">
              {/* Plate rim details */}
              <div className="absolute inset-0 rounded-full border-[8px] sm:border-[10px] lg:border-[12px] border-white/40"></div>
              <div className="absolute inset-2 sm:inset-3 rounded-full border-2 border-cognac/20"></div>

              {/* Subtle rotating shine effect on plate */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/30 to-transparent animate-spin-slow pointer-events-none"></div>

              {/* Plate center depression effect */}
              <div className="absolute inset-8 sm:inset-10 rounded-full bg-gradient-to-br from-cream/50 via-white to-cream/50 shadow-inner"></div>
            </div>

            {/* Food served on the plate - changes with slides */}
            <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] rounded-full z-10 flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-8">
              <img
                key={currentSlide}
                src={currentDish.plateImage || "/placeholder.svg"}
                alt={currentDish.name}
                className="w-full h-full object-contain animate-fade-in-scale"
                style={{
                  filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
                }}
              />
              {/* Soft shadow directly underneath the food for depth */}
              <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-6 bg-black/15 rounded-full blur-xl transition-all duration-500 ease-out group-hover:opacity-30 group-hover:scale-75"
                style={{ zIndex: -1 }}
              ></div>
            </div>
          </div>

          {/* Chef attribution and sparkle accents */}
          <div className="flex items-center gap-2 sm:gap-3 text-charcoal/80">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cognac animate-pulse" />
            <span className="text-xs sm:text-sm font-serif italic tracking-wide">{currentDish.chef}</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cognac animate-pulse" />
          </div>
        </div>

        {/* Right side - Sliding content */}
        <div className="relative flex flex-col justify-center space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4" key={currentSlide}>
            {/* Title */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cognac leading-tight animate-fade-in-right text-balance">
              {language === "en" ? "CHEF'S" : "CHEF'S"}
            </h3>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal leading-tight animate-fade-in-right delay-100 text-balance">
              {language === "en" ? "SPECIAL" : "SPEZIALITÄT"}
            </h3>

            {/* Dish name */}
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-charcoal/90 pt-3 sm:pt-4 animate-fade-in-right delay-200 text-balance">
              {currentDish.name}
            </h4>

            {/* Star rating */}
            <div className="flex items-center gap-1.5 sm:gap-2 animate-fade-in-right delay-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-cognac text-cognac" />
              ))}
              <span className="text-charcoal/90 text-base sm:text-lg font-bold ml-1 sm:ml-2">{currentDish.rating}</span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-charcoal/70 leading-relaxed max-w-xl animate-fade-in-right delay-[400ms]">
              {currentDish.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 animate-fade-in-right delay-500">
              <span className="text-3xl sm:text-4xl font-bold text-cognac">€{currentDish.price}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-cognac/60 to-transparent"></div>
            </div>

            {/* Since badge */}
            <div className="pt-1 sm:pt-2 animate-fade-in-right delay-[600ms]">
              <span className="text-cognac/80 text-xs sm:text-sm font-serif italic tracking-widest">
                {currentDish.since}
              </span>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-6 animate-fade-in-right delay-700">
            <button
              onClick={prevSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-cognac/40 bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-cognac/20 hover:border-cognac transition-all duration-300 hover:scale-110"
              aria-label="Previous dish"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-cognac/40 bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-cognac/20 hover:border-cognac transition-all duration-300 hover:scale-110"
              aria-label="Next dish"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
