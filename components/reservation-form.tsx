"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface ReservationFormProps {
  t: any
}

export function ReservationForm({ t }: ReservationFormProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: t.reservationSuccess,
      description: t.reservationSuccessMessage,
    })
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
    })
  }

  return (
    <Card className="p-6 sm:p-8 bg-card border-gray-200 hover:border-cognac/30 transition-all duration-500 hover:shadow-2xl animate-fade-in-up delay-200">
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-card-foreground font-semibold text-sm sm:text-base">
              {t.name}
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background border-input focus:border-cognac focus:ring-cognac transition-all duration-300 h-11 sm:h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-card-foreground font-semibold text-sm sm:text-base">
              {t.email}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background border-input focus:border-cognac focus:ring-cognac transition-all duration-300 h-11 sm:h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-card-foreground font-semibold text-sm sm:text-base">
              {t.phone}
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-background border-input focus:border-cognac focus:ring-cognac transition-all duration-300 h-11 sm:h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests" className="text-card-foreground font-semibold text-sm sm:text-base">
              {t.guests}
            </Label>
            <Input
              id="guests"
              type="number"
              min="1"
              max="12"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              required
              className="bg-background border-input focus:border-cognac focus:ring-cognac transition-all duration-300 h-11 sm:h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-card-foreground font-semibold text-sm sm:text-base">
              {t.date}
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
              className="bg-background border-input focus:border-cognac focus:ring-cognac transition-all duration-300 h-11 sm:h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time" className="text-card-foreground font-semibold text-sm sm:text-base">
              {t.time}
            </Label>
            <Input
              id="time"
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              required
              className="bg-background border-input focus:border-cognac focus:ring-cognac transition-all duration-300 h-11 sm:h-12"
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-cognac hover:bg-cognac/90 text-cream font-semibold py-5 sm:py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl text-sm sm:text-base"
        >
          {t.submitReservation}
        </Button>
      </form>
    </Card>
  )
}
