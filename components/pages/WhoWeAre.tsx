"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Anchor,
  Target,
  ShieldCheck,
  Award,
  CheckCircle2,
  Clock
} from "lucide-react"

const highlights = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We aim to be the most reliable and efficient partner for shipping vessels operating at Indian ports, providing uncompromising quality in supplies and repairs.",
  },
  {
    icon: Clock,
    title: "24/7 Readiness",
    description:
      "Vessels don't wait, and neither do we. Our team operates round the clock to ensure timely deliveries and rapid response for any emergency repairs.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Safety",
    description:
      "Strict adherence to MARPOL regulations for waste disposal and international maritime standards for all supplies and technical services.",
  },
]

const milestones = [
  "Operating seamlessly across all major and minor Indian ports",
  "Extensive network for immediate fresh provisions dispatch",
  "Certified vendors for bond stories and technical stores",
  "Environmentally compliant sludge and garbage disposal",
]

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Subtle Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 gap-1.5 border border-border px-3 py-1.5 text-xs font-medium uppercase tracking-wider"
          >
            <Anchor className="size-3.5 text-primary" />
            About Guru Marine Services
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Your Trusted Maritime Partner
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Based in Gandhidham, Gujarat, Guru Marine Services led by Sunil & Varun Khatri is a premier provider of marine supplies, offering comprehensive ship chandling, waste disposal, and repair services for vessels calling upon any port in India.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="size-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Area */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Milestones */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Excellence at Port
            </h3>
            <div className="flex flex-col gap-3">
              {milestones.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild className="gap-2">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact / Leadership panel */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Award className="size-5 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground">Management & Operations</h4>
                <p className="text-xs text-muted-foreground">Direct Contact</p>
              </div>
            </div>
            <Separator className="mb-6" />
            <div className="grid gap-4">
               <div className="rounded-lg border border-border bg-muted/50 p-4 transition-colors hover:bg-muted">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Operations Lead</span>
                  <div className="flex justify-between items-center mt-1">
                      <p className="text-sm font-bold text-foreground">Sunil Khatri</p>
                      <a href="tel:+919825737080" className="text-sm font-semibold hover:text-primary">+91 9825737080</a>
                  </div>
               </div>
               <div className="rounded-lg border border-border bg-muted/50 p-4 transition-colors hover:bg-muted">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Operations Director</span>
                  <div className="flex justify-between items-center mt-1">
                      <p className="text-sm font-bold text-foreground">Varun Khatri</p>
                      <a href="tel:+919537080095" className="text-sm font-semibold hover:text-primary">+91 9537080095</a>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
