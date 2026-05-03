"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden text-center">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image.png"
          alt="Port Background"
          className="w-full h-full object-cover"
        />

        {/* Premium dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">

        {/* Top Badge */}
        <div className="inline-block mb-6 px-4 py-1 text-sm tracking-wide text-blue-300 border border-white/20 rounded-full bg-white/5 backdrop-blur">
          WE OPERATE AT ALL INDIA PORTS
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
          Premier Marine Support
          <span className="block text-blue-400 mt-2">
            & Ship Chandling
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
          Guru Marine Services delivers reliable ship supply, repair, fuel, and
          marine contracting solutions across all Indian ports — ensuring safety,
          compliance, and 24/7 operational readiness.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-lg rounded-md"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact For Supply
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-6 py-6 text-lg rounded-md"
          >
            <Link href="/services" className="flex items-center gap-2">
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Location */}
        <div className="mt-10 text-sm text-white/60">
          S.F.X-139, Gurunagar, Gandhidham - 370 201, Gujarat, India
        </div>
      </div>
    </section>
  )
}