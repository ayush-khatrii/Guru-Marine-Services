"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative flex h-[650px] w-full items-center justify-center overflow-hidden text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          fill
          priority
          src="/hero-port.png"
          alt="Port Background"
          className="h-full w-full object-cover object-top"
        />

        {/* Premium dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        {/* Top Badge */}
        <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm tracking-wide text-blue-300 backdrop-blur">
          WE OPERATE AT ALL INDIA PORTS
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl">
          Premier Marine Support
          <span className="mt-2 block text-blue-400">& Ship Chandling</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white">
          Guru Marine Services is a Ship Chandler, Ship Repairs, Supply of Ship
          Lubricants Marine Contractor. Our skilled workforce manages operations
          across the entire network of Indian ports.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            className="rounded-md bg-blue-600 px-6 py-6 text-lg text-white hover:bg-blue-700"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact For Supply
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="rounded-md border-white/30 px-6 py-6 text-lg text-white hover:bg-white/10"
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
