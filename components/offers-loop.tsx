"use client"

import { LogoLoop } from "@/components/logo-loop"

const offers = [
  {
    node: <span className="text-white text-base font-semibold tracking-wide">20% Rabatt auf Mittagsmenüs</span>,
    title: "Lunch Discount",
  },
  {
    node: <span className="text-white text-base font-semibold tracking-wide">Kostenlose Lieferung über €30</span>,
    title: "Free Delivery",
  },
  {
    node: <span className="text-white text-base font-semibold tracking-wide">VIP-Mitgliedervorteile</span>,
    title: "VIP Benefits",
  },
  {
    node: <span className="text-white text-base font-semibold tracking-wide">Happy Hour 17-19 Uhr</span>,
    title: "Happy Hour",
  },
  {
    node: <span className="text-white text-base font-semibold tracking-wide">Chef's Degustationsmenü Verfügbar</span>,
    title: "Tasting Menu",
  },
  {
    node: <span className="text-white text-base font-semibold tracking-wide">Geburtstagsdessert Gratis</span>,
    title: "Birthday Special",
  },
]

export function OffersLoop() {
  return (
    <div className="w-full py-2">
      <LogoLoop
        logos={offers}
        speed={40}
        direction="left"
        logoHeight={24}
        gap={48}
        pauseOnHover={true}
        scaleOnHover={false}
        fadeOut={true}
        fadeOutColor="#000000"
        ariaLabel="Restaurant offers and promotions"
      />
    </div>
  )
}
