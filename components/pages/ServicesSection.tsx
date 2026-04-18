"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  ShoppingCart,
  Wrench,
  Store,
  Droplet,
  Trash2,
  Recycle,
  ArrowRight,
  Layers,
} from "lucide-react"

const services = [
  {
    title: "Professional Ship Chandling",
    description: "Serving as your essential link between shore and vessel. We provide high-quality provisions, technical stores ranging from OEM parts to maintenance consumables, and global 24/7 logistics.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
    features: ["High-Quality Provisions", "Technical Stores & OEM Parts", "Barge & Truck Delivery", "Dietary Needs & Culture"],
    href: "/services#ship-chandling",
  },
  {
    title: "Marine Engineering & Ship Repairs",
    description: "Our engineering division provides the technical expertise to maintain seaworthiness and structural integrity, specializing in minimizing downtime through efficient repair and maintenance cycles.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    features: ["Afloat & Structural Repairs", "Propulsion & Machinery", "Hull & Underwater Maint.", "Drydocking Support"],
    href: "/services#ship-repairs",
  },
  {
    title: "Bonded Store Supply",
    description: "We provide a wide range of duty-free goods under strict customs compliance, enhancing crew welfare and supporting passenger retail operations for long voyages.",
    icon: Store,
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a54?auto=format&fit=crop&q=80&w=800",
    features: ["Luxury & Retail Goods", "Branded Spirits & Tobacco", "Crew Welfare Focus", "Customs Expertise & Seal Mgmt"],
    href: "/services#bond-store",
  },
  {
    title: "Potable Fresh Water Supply",
    description: "Ensure your vessel has access to clean, safe, and WHO-standard potable water delivered directly to vessel tanks via our highly sanitary fleet of barges and trucks.",
    icon: Droplet,
    image: "https://images.unsplash.com/photo-1548834925-e48f8a27ae6f?auto=format&fit=crop&q=80&w=800",
    features: ["Barge & Tanker Delivery", "WHO Standard Potable Water", "Strict Quality Control", "Sustainability Solutions"],
    href: "/services#fresh-water",
  },
  {
    title: "MARPOL-Compliant Garbage Disposal",
    description: "We help shipowners navigate the complexities of environmental regulations through authorized, traceable garbage collection and eco-friendly management.",
    icon: Trash2,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
    features: ["Annex V Compliance", "Segregated Waste Collection", "Transparent Traceability", "Eco-Friendly Processing"],
    href: "/services#garbage-disposal",
  },
  {
    title: "Sludge & Oily Waste Disposal",
    description: "Specialized MARPOL Annex I services for safe and efficient removal of oily bilge water and sludge residues, utilizing double-hulled harbor vessels.",
    icon: Recycle,
    image: "https://images.unsplash.com/photo-1605626245464-9ed6340f10c6?auto=format&fit=crop&q=80&w=800",
    features: ["Certified MARPOL Collection", "Safe Oily Waste Transfer", "Environmental Protection", "Comprehensive Documentation"],
    href: "/services#sludge-disposal",
  },
]

export default function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 gap-1.5 border border-border px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-primary"
          >
            <Layers className="size-3.5" />
            Our Core Competencies
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Complete Marine Solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Operating across all major Indian ports, we provide a comprehensive suite of maritime support solutions designed to ensure the operational readiness, safety, and compliance of the global merchant fleet.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative flex flex-col overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <img
                  src={service.image || ""}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-md bg-white/20 text-white backdrop-blur-md">
                    <service.icon className="size-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white shadow-black/10 drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              <CardHeader className="pt-6">
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="flex flex-col gap-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                      <div className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pb-6 pt-4">
                <Button
                  variant="outline"
                  className="w-full gap-2 transition-colors hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <Link href="/contact">
                    Request {service.title}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 shadow-sm sm:flex-row sm:gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-foreground">
                In port right now? Need urgent supply?
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Call our operations team at +91 9825737080 for immediate assistance round the clock.
              </p>
            </div>
            <Button size="lg" asChild className="gap-2 shrink-0">
              <Link href="/contact">
                Contact Operations
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
