import React from "react"
import ServicesGrid from "@/components/pages/ServicesGrid"

export const metadata = {
  title: "Services | Guru Marine Services",
  description: "Explore our comprehensive range of maritime support services including provisions, safety equipment, spare parts, inspections, and more.",
}

export default function ServicesPage() {
  return (
    <main className="flex flex-col bg-white">
      {/* Page Hero */}
      <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop"
            alt="Port Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-slate-200">Complete Maritime Supply Solutions</p>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />
    </main>
  )
}
