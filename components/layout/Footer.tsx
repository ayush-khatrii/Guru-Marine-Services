"use client"

import React from "react"
import Link from "next/link"
import { Anchor, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  services: [
    { label: "Ship Chandling", href: "/services#ship-chandling" },
    { label: "Ship Repairs", href: "/services#ship-repairs" },
    { label: "Bond Store Suppliers", href: "/services#bond-store" },
    { label: "Fresh Water Suppliers", href: "/services#fresh-water" },
    { label: "Garbage Disposal", href: "/services#garbage-disposal" },
    { label: "Sludge Disposal", href: "/services#sludge-disposal" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
                <Anchor className="size-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-base leading-tight font-bold tracking-tight text-foreground">
                  Guru Marine Services
                </span>
                <span className="text-[10px] leading-tight font-medium tracking-widest text-muted-foreground uppercase">
                  Operating at all India ports
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Providing top-tier ship chandling, repairs, and supply services across all major and minor ports in India.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:info@gurumarineservices.com"
                className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-primary" />
                info@gurumarineservices.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Phone className="size-4 mt-0.5 text-primary" />
                <div className="flex flex-col">
                  <a href="tel:+919825737080">Sunil Khatri: +91 9825737080</a>
                  <a href="tel:+919537080095">Varun Khatri: +91 9537080095</a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  S.F.X.-139, Gurunagar, Gandhidham<br />
                  370 201 - Kutch - Gujarat - India
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-foreground uppercase">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-foreground uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-foreground uppercase">
              Operations
            </h4>
            <p className="mb-4 text-sm text-muted-foreground">
              We proudly operate at all India ports, providing 24/7 reliable maritime services.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <span className="text-secondary-foreground font-semibold text-sm">Sunil Khatri</span>
              <a href="tel:+919825737080" className="text-sm font-medium text-foreground hover:text-primary transition-colors">+91 9825737080</a>
              <span className="text-secondary-foreground font-semibold text-sm mt-3">Varun Khatri</span>
              <a href="tel:+919537080095" className="text-sm font-medium text-foreground hover:text-primary transition-colors">+91 9537080095</a>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Guru Marine Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
