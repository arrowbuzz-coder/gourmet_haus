"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TexturedBackground } from "@/components/textured-background"
import { translations } from "@/lib/translations"
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "de">("de")
  const t = translations[language]

  return (
    <div className="min-h-screen bg-cream">
      <Header language={language} setLanguage={setLanguage} t={t} loaderComplete={true} />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-20 right-[10%] w-32 h-32 bg-cognac/5 rounded-full blur-3xl animate-leaf-float-1"></div>
        <div className="absolute top-40 left-[15%] w-24 h-24 bg-cognac/10 rounded-full blur-3xl animate-leaf-float-2"></div>
        <div className="absolute top-60 right-[25%] w-28 h-28 bg-cognac/5 rounded-full blur-3xl animate-leaf-float-3"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cognac" />
              <span className="text-cognac font-semibold tracking-wider uppercase text-xs sm:text-sm">
                {language === "en" ? "Get In Touch" : "Kontaktieren Sie Uns"}
              </span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cognac" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-charcoal leading-tight mb-4 sm:mb-6">
              {t.contactTitle}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              {language === "en"
                ? "We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello."
                : "Wir würden uns freuen, von Ihnen zu hören. Kontaktieren Sie uns für Reservierungen, Anfragen oder einfach nur um Hallo zu sagen."}
            </p>
          </div>
        </div>
      </section>

      <TexturedBackground>
        <main className="py-16 sm:py-20 lg:py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
              {/* Contact Form */}
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl border border-cognac/10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal mb-2">
                  {language === "en" ? "Send us a Message" : "Senden Sie uns eine Nachricht"}
                </h2>
                <p className="text-sm sm:text-base text-charcoal/60 mb-6 sm:mb-8">
                  {language === "en"
                    ? "Fill out the form below and we'll get back to you as soon as possible."
                    : "Füllen Sie das untenstehende Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden."}
                </p>

                <form className="space-y-5 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        {language === "en" ? "First Name" : "Vorname"}
                      </label>
                      <Input
                        className="bg-cream/50 border-charcoal/20 focus:border-cognac rounded-xl h-12"
                        placeholder={language === "en" ? "John" : "Max"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        {language === "en" ? "Last Name" : "Nachname"}
                      </label>
                      <Input
                        className="bg-cream/50 border-charcoal/20 focus:border-cognac rounded-xl h-12"
                        placeholder={language === "en" ? "Doe" : "Mustermann"}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Email</label>
                    <Input
                      type="email"
                      className="bg-cream/50 border-charcoal/20 focus:border-cognac rounded-xl h-12"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      {language === "en" ? "Phone Number" : "Telefonnummer"}
                    </label>
                    <Input
                      type="tel"
                      className="bg-cream/50 border-charcoal/20 focus:border-cognac rounded-xl h-12"
                      placeholder="+49 123 456 7890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      {language === "en" ? "Message" : "Nachricht"}
                    </label>
                    <Textarea
                      className="bg-cream/50 border-charcoal/20 focus:border-cognac rounded-xl min-h-[150px] resize-none"
                      placeholder={
                        language === "en" ? "Tell us about your inquiry..." : "Erzählen Sie uns von Ihrer Anfrage..."
                      }
                    />
                  </div>

                  <Button className="w-full bg-cognac hover:bg-cognac/90 text-cream font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-xl text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    {language === "en" ? "Send Message" : "Nachricht Senden"}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8">
                {/* Contact Details Cards */}
                <div className="space-y-5 sm:space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-cognac/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cognac/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cognac" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1 text-base sm:text-lg">{t.address}</h3>
                        <p className="text-sm sm:text-base text-charcoal/70">Alpenstraße 15</p>
                        <p className="text-sm sm:text-base text-charcoal/70">
                          82467 Garmisch-Partenkirchen, Deutschland
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-cognac/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cognac/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-cognac" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1 text-base sm:text-lg">{t.phone}</h3>
                        <p className="text-sm sm:text-base text-charcoal/70">+49 8821 9876 543</p>
                        <p className="text-sm sm:text-base text-charcoal/70 text-sm mt-1">
                          {language === "en" ? "Call for reservations" : "Anrufen für Reservierungen"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-cognac/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cognac/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cognac" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1 text-base sm:text-lg">Email</h3>
                        <p className="text-sm sm:text-base text-charcoal/70">reservierung@bistroalpen.de</p>
                        <p className="text-sm sm:text-base text-charcoal/70">info@bistroalpen.de</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-cognac/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cognac/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-cognac" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1 text-base sm:text-lg">{t.hours}</h3>
                        <div className="space-y-1 text-charcoal/70">
                          <p>{language === "en" ? "Monday - Friday" : "Montag - Freitag"}: 12:00 - 22:00</p>
                          <p>{language === "en" ? "Saturday - Sunday" : "Samstag - Sonntag"}: 11:00 - 23:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="relative h-[250px] sm:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/elegant-restaurant-interior-warm-lighting-atmosphe.jpg"
                    alt="Restaurant location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-cream font-semibold text-lg">
                      {language === "en" ? "Find us in the heart of Munich" : "Finden Sie uns im Herzen Münchens"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </TexturedBackground>

      <Footer t={t} />
    </div>
  )
}
