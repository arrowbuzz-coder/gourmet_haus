"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { menuData } from "@/lib/menu-data"
import { Utensils, Wine, Cake, Star } from "lucide-react"

interface MenuSectionProps {
  language: "en" | "de"
}

export function MenuSection({ language }: MenuSectionProps) {
  const [hoveredDish, setHoveredDish] = useState<string | null>(null)
  const menu = menuData[language]

  const categories = [
    {
      id: "starters" as const,
      title: menu.starters.title,
      items: menu.starters.items,
      icon: Wine,
      bgGradient: "from-cream via-amber-50/30 to-cream",
    },
    {
      id: "mains" as const,
      title: menu.mains.title,
      items: menu.mains.items,
      icon: Utensils,
      bgGradient: "from-cream via-orange-50/30 to-cream",
    },
    {
      id: "desserts" as const,
      title: menu.desserts.title,
      items: menu.desserts.items,
      icon: Cake,
      bgGradient: "from-cream via-rose-50/30 to-cream",
    },
  ]

  const dishImages: Record<string, string> = {
    "Chicken Tartare": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&q=80",
    "Burrata & Heritage Tomatoes":
      "https://images.unsplash.com/photo-1608877907149-a206d75ba011?w=800&h=600&fit=crop&q=80",
    "Smoked Salmon Roulade": "https://images.unsplash.com/photo-1580554530778-ca36943938b2?w=800&h=600&fit=crop&q=80",
    "Wild Mushroom Soup": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&q=80",
    "Wiener Schnitzel": "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=800&h=600&fit=crop&q=80",
    "Chicken Rouladen": "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop&q=80",
    "Pan-Seared Sea Bass": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&h=600&fit=crop&q=80",
    "Wild Boar Medallions": "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&h=600&fit=crop&q=80",
    "Truffle Risotto": "https://images.unsplash.com/photo-1476124369491-c4684d6c701e?w=800&h=600&fit=crop&q=80",
    "Duck Confit": "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&h=600&fit=crop&q=80",
    "Black Forest Gâteau": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop&q=80",
    "Apple Strudel": "https://images.unsplash.com/photo-1562007908-17c67e878c88?w=800&h=600&fit=crop&q=80",
    "Crème Brûlée": "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&h=600&fit=crop&q=80",
    "Chocolate Fondant": "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&h=600&fit=crop&q=80",
    // German names
    Rindertatar: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&q=80",
    "Burrata & Erbstück-Tomaten":
      "https://images.unsplash.com/photo-1608877907149-a206d75ba011?w=800&h=600&fit=crop&q=80",
    "Geräucherte Lachs-Roulade":
      "https://images.unsplash.com/photo-1580554530778-ca36943938b2?w=800&h=600&fit=crop&q=80",
    Waldpilzsuppe: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&q=80",
    Rinderrouladen: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop&q=80",
    "Gebratener Wolfsbarsch": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&h=600&fit=crop&q=80",
    "Wildschwein-Medaillons": "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&h=600&fit=crop&q=80",
    "Trüffel-Risotto": "https://images.unsplash.com/photo-1476124369491-c4684d6c701e?w=800&h=600&fit=crop&q=80",
    Entenconfit: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&h=600&fit=crop&q=80",
    "Schwarzwälder Kirschtorte":
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop&q=80",
    Apfelstrudel: "https://images.unsplash.com/photo-1562007908-17c67e878c88?w=800&h=600&fit=crop&q=80",
    "Schokoladen-Fondant": "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&h=600&fit=crop&q=80",
  }

  return (
    <div className="relative">
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {categories.map((category, categoryIndex) => {
          const IconComponent = category.icon
          return (
            <Card
              key={category.id}
              className={`relative overflow-visible border-2 border-charcoal/10 bg-gradient-to-b ${category.bgGradient} shadow-lg hover:shadow-xl transition-all duration-500`}
            >
              <div className="relative p-6 sm:p-8 border-b border-charcoal/10">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cognac/10 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-cognac" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-center font-bold text-charcoal text-balance">
                  {category.title}
                </h3>
                <div className="h-px w-16 sm:w-20 mx-auto mt-3 sm:mt-4 bg-gradient-to-r from-transparent via-cognac to-transparent"></div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {category.items.slice(0, 4).map((item, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => {
                      setHoveredDish(`${category.id}-${index}`)
                    }}
                    onMouseLeave={() => {
                      setHoveredDish(null)
                    }}
                  >
                    <div className="p-3 sm:p-4 rounded-lg border border-charcoal/10 bg-background/60 backdrop-blur-sm hover:bg-background/90 hover:border-cognac/30 hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-start gap-2 sm:gap-3 mb-2">
                        <h4 className="text-sm sm:text-base font-serif font-semibold text-charcoal leading-tight flex-1">
                          {item.name}
                        </h4>
                        <span className="text-base sm:text-lg font-bold text-cognac flex-shrink-0">€{item.price}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">{item.description}</p>
                      {item.allergens && (
                        <p className="text-[10px] sm:text-xs text-charcoal/50 mt-2 italic">
                          {language === "en" ? "Allergens: " : "Allergene: "}
                          {item.allergens}
                        </p>
                      )}
                    </div>

                    {hoveredDish === `${category.id}-${index}` && (
                      <div
                        className={`
                          hidden lg:block
                          absolute z-[200] pointer-events-none
                          ${
                            categoryIndex === 0
                              ? "left-[calc(100%+1rem)] top-0"
                              : categoryIndex === 1
                                ? "left-[calc(100%+1rem)] top-0"
                                : "right-[calc(100%+1rem)] top-0"
                          }
                        `}
                      >
                        <div className="animate-scale-in">
                          <div className="flex gap-4 items-stretch">
                            <div className="relative w-[280px] h-[320px] rounded-xl overflow-hidden shadow-2xl border-4 border-cream">
                              <img
                                src={
                                  dishImages[item.name] ||
                                  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop" ||
                                  "/placeholder.svg" ||
                                  "/placeholder.svg" ||
                                  "/placeholder.svg" ||
                                  "/placeholder.svg" ||
                                  "/placeholder.svg"
                                }
                                alt={item.name}
                                className="w-full h-full object-cover animate-slow-zoom"
                              />
                            </div>

                            <div className="w-[180px] h-[320px] bg-[#FDF8F3] rounded-xl border-4 border-charcoal/30 shadow-2xl p-4 flex flex-col justify-between">
                              <div className="flex-1 flex flex-col">
                                <h5 className="font-serif font-bold text-base text-charcoal leading-tight mb-2 text-balance">
                                  {item.name}
                                </h5>

                                <div className="flex items-center gap-1 mb-2">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-3 h-3 ${
                                        i < Math.floor(item.rating || 0) ? "fill-cognac text-cognac" : "text-cognac/30"
                                      }`}
                                    />
                                  ))}
                                  <span className="text-xs text-charcoal/90 ml-1 font-semibold">
                                    {item.rating || "N/A"}
                                  </span>
                                </div>

                                <div className="flex items-center justify-center mb-2">
                                  <span className="text-lg font-bold text-cognac bg-[#F5E6D3] px-2 py-1 rounded-lg border-2 border-cognac/40">
                                    €{item.price}
                                  </span>
                                </div>

                                <p className="text-[11px] leading-relaxed text-charcoal/90 mb-2 flex-1">
                                  {item.description}
                                </p>
                              </div>

                              {item.allergens && (
                                <div className="border-t border-charcoal/20 pt-2">
                                  <p className="text-[10px] text-charcoal/70 italic leading-relaxed">
                                    {language === "en" ? "Contains: " : "Enthält: "}
                                    {item.allergens}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="h-1 bg-gradient-to-r from-transparent via-cognac to-transparent"></div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
