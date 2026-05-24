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
          src="https://plus.unsplash.com/premium_photo-1661963559074-9655a9404f1a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Port Background"
          className="w-full h-full object-cover"
        />

        {/* Premium dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />
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
        <p className="text-lg text-white leading-relaxed mb-8 max-w-2xl mx-auto">
          Guru Marine Services is a  Ship Chandler,  Ship Repairs,  Supply of Ship Lubricants Marine Contractor. Our skilled workforce manages operations across the entire network of Indian ports.
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
      </div>
    </section>
  )
}