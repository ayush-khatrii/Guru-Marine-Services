"use client"

import React from "react"
import Link from "next/link"
import { Anchor, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

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
    <footer className="bg-[#060f1e] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="flex rounded-md size-10 items-center justify-center rounded-xl bg-[#4a9eff]">
                <img
                  src="/logo.png"
                  alt="Guru Marine Services"
                  className="h-20 w-auto object-contain rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base leading-tight font-black tracking-tight text-white">
                  Guru Marine Services
                </span>
                <span className="text-[10px] leading-tight font-semibold tracking-widest text-slate-500 uppercase">
                  Operating at all India ports
                </span>
              </div>
            </Link>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
              Providing top-tier ship chandling, repairs, and supply services across all major and minor ports in India.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:info@gurumarineservices.com"
                className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-[#4a9eff]"
              >
                <Mail className="size-4 text-[#4a9eff]" />
                info@gurumarineservices.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <Phone className="size-4 mt-0.5 text-[#4a9eff]" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919825737080" className="hover:text-[#4a9eff] transition-colors">Sunil Khatri: +91 9825737080</a>
                  <a href="tel:+919537080095" className="hover:text-[#4a9eff] transition-colors">Varun Khatri: +91 9537080095</a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#4a9eff]" />
                <span>
                  Capital Six Business Center<br />
                  Plot No. 233, Shop No.04<br />
                  Ground Floor, Ward No. DC2 ,
                  Gandhidham, Kutch,<br />
                  Gujarat (India) 370201<br />
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="mb-5 text-sm font-black tracking-wider text-white uppercase">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-[#4a9eff]"
                  >
                    <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="mb-5 text-sm font-black tracking-wider text-white uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-[#4a9eff]"
                  >
                    <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations Column */}
          <div>
            <h4 className="mb-5 text-sm font-black tracking-wider text-white uppercase">
              Operations
            </h4>
            <p className="mb-5 text-sm text-slate-400 leading-relaxed">
              We proudly operate at all India ports, providing 24/7 reliable maritime services.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Anchor className="size-4 text-[#4a9eff]" />
                <span className="text-sm font-bold text-white">Direct Contacts</span>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="text-xs text-[#4a9eff] font-semibold">Sunil Khatri</span>
                  <a href="tel:+919825737080" className="block text-sm font-bold text-white hover:text-[#4a9eff] transition-colors">+91 9825737080</a>
                </div>
                <div className="mt-2">
                  <span className="text-xs text-[#4a9eff] font-semibold">Varun Khatri</span>
                  <a href="tel:+919537080095" className="block text-sm font-bold text-white hover:text-[#4a9eff] transition-colors">+91 9537080095</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Guru Marine Services. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Gandhidham, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  )
}
