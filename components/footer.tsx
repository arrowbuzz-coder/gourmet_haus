"use client"

import Link from "next/link"

export function Footer({ t }: { t: any }) {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative z-50 bg-charcoal text-cream py-10 sm:py-12 px-4 border-t border-cognac/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <img
              src="/images/logo-bg-remove-photoroom.png"
              alt="Bistro Alpen"
              className="h-10 sm:h-12 w-auto mb-3 sm:mb-4 object-contain"
            />
            <p className="text-sm sm:text-base text-cream/80 leading-relaxed">{t.footerDescription}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-cognac text-base sm:text-lg">{t.quickLinks}</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-cream/80">
              <li>
                <Link href="/" onClick={handleLinkClick} className="hover:text-cognac transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/gallery" onClick={handleLinkClick} className="hover:text-cognac transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/events" onClick={handleLinkClick} className="hover:text-cognac transition-colors">
                  Veranstaltungen
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleLinkClick} className="hover:text-cognac transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-cognac text-base sm:text-lg">{t.followUs}</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-cream/80">
              <li>
                <a href="#" className="hover:text-cognac transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cognac transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cognac transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cognac/20 pt-6 sm:pt-8 text-center text-cream/60 text-xs sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} Bistro Alpen. {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}
