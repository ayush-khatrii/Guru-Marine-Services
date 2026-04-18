"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Clock, MessageSquare, Anchor } from "lucide-react"
import ContactForm from "@/components/pages/ContactForm"

export default function GetInTouch() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 gap-1.5 border border-border px-3 py-1.5 text-xs font-medium uppercase tracking-wider"
          >
            <MessageSquare className="size-3.5 text-primary" />
            Contact Us
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Require urgent supplies, fresh water, or repairs for your vessel at an Indian port? Our team is available 24/7.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-lg font-semibold text-foreground">Contact Information</h3>
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: Mail,
                  label: "Email Support",
                  value: "info@gurumarineservices.com",
                  href: "mailto:info@gurumarineservices.com",
                },
                {
                  icon: Phone,
                  label: "Phone - Sunil Khatri",
                  value: "+91 9825737080",
                  href: "tel:+919825737080",
                },
                {
                  icon: Phone,
                  label: "Phone - Varun Khatri",
                  value: "+91 9537080095",
                  href: "tel:+919537080095",
                },
                {
                  icon: MapPin,
                  label: "Headquarters",
                  value: "S.F.X.-139, Gurunagar, Gandhidham 370 201 - Kutch - Gujarat - India",
                  href: null,
                },
                {
                  icon: Clock,
                  label: "Operations",
                  value: "24/7 Operations across ALL INDIA PORTS",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-8" />

            <div>
              <div className="flex items-center gap-2 mb-3">
               <Anchor className="size-4 text-primary" />
               <h4 className="text-sm font-semibold text-foreground">Coverage</h4>
              </div>
              <div className="rounded-lg border border-border bg-card p-4 text-center">
                  <p className="text-sm font-bold text-foreground">WE OPERATE AT ALL INDIA PORTS</p>
                  <p className="text-xs text-muted-foreground mt-1">Ready to dispatch supplies and technical teams anywhere in India.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
