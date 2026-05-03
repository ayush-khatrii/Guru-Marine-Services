import React from "react"
import ServicesSection from "@/components/pages/ServicesSection"

export const metadata = {
  title: "Services | Guru Marine Services",
  description: "Explore our comprehensive range of maritime support services including ship chandling, repairs, water supply, and waste disposal.",
}

export default function ServicesPage() {
  return (
    <main className="flex flex-col bg-white">
      {/* Page Hero */}
      <section className="relative h-48 w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://placehold.co/1920x400/1e3a8a/60a5fa?text=Port"
            alt="Port Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a4f8f]/80"></div>
        </div>
        <h1 className="relative z-10 text-5xl font-bold text-white">Our Services</h1>
      </section>

      {/* Services Grid */}
      <ServicesSection />
    </main>
  )
}
