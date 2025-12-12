"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { translations } from "@/lib/translations"
import Masonry from "@/components/masonry"

export default function GalleryPage() {
  const [language, setLanguage] = useState<"en" | "de">("de")
  const t = translations[language]
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const categories = [
    { id: "all", label: language === "en" ? "All" : "Alle" },
    { id: "interior", label: language === "en" ? "Interior" : "Innenraum" },
    { id: "exterior", label: language === "en" ? "Exterior" : "Außenbereich" },
    { id: "customers", label: language === "en" ? "Customers" : "Kunden" },
    { id: "food", label: language === "en" ? "Food Items" : "Speisen" },
  ]

  const galleryItems = [
    // Interior
    {
      id: "interior-1",
      img: "/elegant-restaurant-interior-warm-ambiance.jpg",
      url: "#",
      height: 600,
      category: "interior",
    },
    {
      id: "interior-2",
      img: "/elegant-restaurant-interior-warm-lighting-atmosphe.jpg",
      url: "#",
      height: 450,
      category: "interior",
    },
    {
      id: "interior-3",
      img: "/elegant-upscale-restaurant-interior-with-warm-ambi.jpg",
      url: "#",
      height: 500,
      category: "interior",
    },
    {
      id: "interior-4",
      img: "/modern-restaurant-dining-area-elegant.jpg",
      url: "#",
      height: 400,
      category: "interior",
    },
    {
      id: "interior-5",
      img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=950&fit=crop&q=80",
      url: "#",
      height: 475,
      category: "interior",
    },
    {
      id: "interior-6",
      img: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&h=1100&fit=crop&q=80",
      url: "#",
      height: 550,
      category: "interior",
    },
    {
      id: "interior-7",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=800&fit=crop&q=80",
      url: "#",
      height: 400,
      category: "interior",
    },
    {
      id: "interior-8",
      img: "https://images.unsplash.com/photo-1588433274279-3a829d96720f?w=800&h=1000&fit=crop&q=80",
      url: "#",
      height: 500,
      category: "interior",
    },
    // Exterior
    {
      id: "exterior-1",
      img: "https://images.unsplash.com/photo-1555396273367-4c7edcad34c4?w=800&h=1000&fit=crop&q=80",
      url: "#",
      height: 500,
      category: "exterior",
    },
    {
      id: "exterior-2",
      img: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800&h=900&fit=crop&q=80",
      url: "#",
      height: 450,
      category: "exterior",
    },
    {
      id: "exterior-3",
      img: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&h=1100&fit=crop&q=80",
      url: "#",
      height: 550,
      category: "exterior",
    },
    {
      id: "exterior-4",
      img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&h=800&fit=crop&q=80",
      url: "#",
      height: 400,
      category: "exterior",
    },
    {
      id: "exterior-5",
      img: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=950&fit=crop&q=80",
      url: "#",
      height: 475,
      category: "exterior",
    },
    {
      id: "exterior-6",
      img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=1000&fit=crop&q=80",
      url: "#",
      height: 500,
      category: "exterior",
    },
    {
      id: "exterior-7",
      img: "https://images.unsplash.com/photo-1533777324565-a040eb52facd?w=800&h=900&fit=crop&q=80",
      url: "#",
      height: 450,
      category: "exterior",
    },
    {
      id: "exterior-8",
      img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&h=1100&fit=crop&q=80",
      url: "#",
      height: 550,
      category: "exterior",
    },
    {
      id: "customers-1",
      img: "/wine-tasting-event-elegant-restaurant.jpg",
      url: "#",
      height: 450,
      category: "customers",
    },
    {
      id: "customers-2",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=1000&fit=crop&q=80",
      url: "#",
      height: 500,
      category: "customers",
    },
    {
      id: "customers-3",
      img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&h=800&fit=crop&q=80",
      url: "#",
      height: 400,
      category: "customers",
    },
    {
      id: "customers-4",
      img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=1200&fit=crop&q=80",
      url: "#",
      height: 600,
      category: "customers",
    },
    {
      id: "customers-5",
      img: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=950&fit=crop&q=80",
      url: "#",
      height: 475,
      category: "customers",
    },
    {
      id: "customers-6",
      img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&h=1000&fit=crop&q=80",
      url: "#",
      height: 500,
      category: "customers",
    },
    {
      id: "customers-7",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=900&fit=crop&q=80",
      url: "#",
      height: 450,
      category: "customers",
    },
    {
      id: "customers-8",
      img: "https://images.unsplash.com/photo-1529543544946-b28f40a0ae38?w=800&h=800&fit=crop&q=80",
      url: "#",
      height: 400,
      category: "customers",
    },
    // Food Items
    {
      id: "food-1",
      img: "/gourmet-plated-dish-fine-dining.jpg",
      url: "#",
      height: 400,
      category: "food",
    },
    {
      id: "food-2",
      img: "/beautifully-plated-dessert-fine-dining.jpg",
      url: "#",
      height: 500,
      category: "food",
    },
    {
      id: "food-3",
      img: "/professional-chef-preparing-gourmet-dish-in-upscal.jpg",
      url: "#",
      height: 450,
      category: "food",
    },
    {
      id: "food-4",
      img: "/chef-preparing-dish-professional-kitchen.jpg",
      url: "#",
      height: 550,
      category: "food",
    },
    {
      id: "food-5",
      img: "/gourmet-appetizer-artistic-plating.jpg",
      url: "#",
      height: 400,
      category: "food",
    },
    {
      id: "food-6",
      img: "/colorful-pasta-dish-with-vegetables.jpg",
      url: "#",
      height: 475,
      category: "food",
    },
    {
      id: "food-7",
      img: "/fresh-ingredients-premium-quality.jpg",
      url: "#",
      height: 500,
      category: "food",
    },
    {
      id: "food-8",
      img: "/gourmet-grilled-salmon-with-lemon-and-herbs-on-whi.jpg",
      url: "#",
      height: 450,
      category: "food",
    },
    {
      id: "food-9",
      img: "/premium-wine-collection-restaurant.jpg",
      url: "#",
      height: 400,
      category: "food",
    },
    {
      id: "food-10",
      img: "/chef-cooking-demonstration-fine-dining.jpg",
      url: "#",
      height: 550,
      category: "food",
    },
    {
      id: "food-11",
      img: "/pasta-dish-italian-cuisine.jpg",
      url: "#",
      height: 450,
      category: "food",
    },
  ]

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header language={language} setLanguage={setLanguage} t={t} loaderComplete={true} />

      <main className="pt-28 sm:pt-32 pb-32 sm:pb-40 lg:pb-48 px-4">
        <div className="container mx-auto max-w-[1600px]">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-3 sm:mb-4 text-balance text-foreground">
              {t.galleryTitle}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
              {t.gallerySubtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                    activeCategory === category.id
                      ? "bg-cognac text-white shadow-lg scale-105"
                      : "bg-cream text-charcoal hover:bg-cognac/20 hover:scale-105"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[800px] sm:min-h-[1000px] mb-16 sm:mb-20 lg:mb-24">
            <Masonry
              items={filteredItems}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={1.05}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>
        </div>
      </main>

      <Footer t={t} />
    </div>
  )
}
