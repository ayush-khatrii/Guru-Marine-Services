"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Anchor,
  Target,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Award,
  Phone,
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
  "Certified vendors for bond stores and technical stores",
  "Environmentally compliant sludge and garbage disposal",
]

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">
      {/* Section label */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a1628]/5 border border-[#0a1628]/10 text-[#0a1628] text-xs font-semibold uppercase tracking-widest">
            <Anchor className="size-3.5 text-[#4a9eff]" />
            About Guru Marine Services
          </span>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-[#0a1628] tracking-tight">
            Your Trusted Maritime Partner
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Based in Gandhidham, Gujarat, Guru Marine Services led by Sunil & Varun Khatri is a premier provider of marine supplies, offering comprehensive ship chandling, waste disposal, and repair services for vessels calling upon any port in India.
          </p>
        </div>

        {/* Image + content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://placehold.co/800x400/0a1628/4a9eff?text=Port+Operations"
                  alt="Port Operations"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://placehold.co/400x300/0d2137/4a9eff?text=Ship+Supply"
                  alt="Ship Supply"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://placehold.co/400x300/1a3a5c/4a9eff?text=Marine+Repairs"
                  alt="Marine Repairs"
                  className="w-full h-44 object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0a1628] text-white rounded-2xl px-6 py-4 shadow-2xl text-center">
              <p className="text-3xl font-black text-[#4a9eff]">1000+</p>
              <p className="text-xs text-slate-300 font-medium mt-0.5">Vessels Supplied</p>
            </div>
          </div>

          {/* Right: content */}
          <div>
            {/* Highlights */}
            <div className="flex flex-col gap-6 mb-10">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-5 group">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#0a1628] group-hover:bg-[#4a9eff] transition-colors duration-300">
                    <item.icon className="size-5 text-[#4a9eff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0a1628]">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Milestones */}
            <div className="flex flex-col gap-3 mb-8">
              {milestones.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 shrink-0 text-[#4a9eff] mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact + CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button asChild className="bg-[#0a1628] hover:bg-[#0d1f3a] text-white px-6 h-12 rounded-xl font-bold gap-2">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <a
                href="tel:+919825737080"
                className="inline-flex items-center gap-2 px-6 h-12 rounded-xl border-2 border-[#0a1628]/20 text-[#0a1628] font-bold text-sm hover:border-[#4a9eff] hover:text-[#4a9eff] transition-colors duration-200"
              >
                <Phone className="size-4" />
                +91 9825737080
              </a>
            </div>
          </div>
        </div>

        {/* Leadership cards */}
        <div className="mt-24 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow">
            <div className="size-16 rounded-2xl bg-[#0a1628] flex items-center justify-center shrink-0">
              <Award className="size-8 text-[#4a9eff]" />
            </div>
            <div>
              <span className="text-xs text-[#4a9eff] font-bold uppercase tracking-widest">Operations Lead</span>
              <h4 className="text-xl font-black text-[#0a1628] mt-1">Sunil Khatri</h4>
              <a href="tel:+919825737080" className="text-slate-600 font-semibold text-sm hover:text-[#4a9eff] transition-colors">
                +91 9825737080
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow">
            <div className="size-16 rounded-2xl bg-[#0a1628] flex items-center justify-center shrink-0">
              <Award className="size-8 text-[#4a9eff]" />
            </div>
            <div>
              <span className="text-xs text-[#4a9eff] font-bold uppercase tracking-widest">Operations Director</span>
              <h4 className="text-xl font-black text-[#0a1628] mt-1">Varun Khatri</h4>
              <a href="tel:+919537080095" className="text-slate-600 font-semibold text-sm hover:text-[#4a9eff] transition-colors">
                +91 9537080095
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
