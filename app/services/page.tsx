import React from "react"
import { Badge } from "@/components/ui/badge"
import { Layers } from "lucide-react"

export const metadata = {
  title: "Services | GlobalShip Logistics",
  description: "Explore our comprehensive range of global logistics and supply chain services.",
}

import ServicesSection from "@/components/pages/ServicesSection"

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      {/* Page Header (Optional, since ServicesSection has its own header, but we can do a distinct hero here) */}
      <section className="bg-muted/30 pt-24 pb-12 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <Badge
            variant="outline"
            className="mb-6 gap-1.5 border border-border px-3 py-1.5 text-xs font-medium text-primary"
          >
            <Layers className="size-3.5" />
            Our Core Competencies
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Logistics Solutions Designed for You
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We provide end-to-end supply chain solutions tailored to your specific industry requirements.
          </p>
        </div>
      </section>

      {/* Reuse the Services Component */}
      <ServicesSection />
    </main>
  )
}
