"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  Anchor,
  ArrowRight,
  MapPin,
  Wrench,
  Droplet,
  Trash2,
} from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[50vh] pt-16 flex flex-col justify-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        />
        <div className="absolute inset-0 bg-zinc-950/75 backdrop-blur-[2px]" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Badge
            variant="outline"
            className="mb-8 gap-2 border-primary/40 bg-zinc-950/50 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-lg shadow-primary/10"
          >
            <Anchor className="size-4" />
            We Operate At All India Ports
          </Badge>
        </motion.div>
        <motion.h1
          className="text-5xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-6xl lg:text-[5rem] drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          Premier Marine Support <br className="hidden md:block" />
          <span className="text-primary italic pr-2 font-black">& Ship Chandling</span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl font-medium drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          A comprehensive suite of maritime support solutions to ensure the operational readiness, safety, and compliance of the global merchant fleet, delivered with world-class 24/7 responsiveness.
        </motion.p>
        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
        >
          <Button size="lg" asChild className="w-full sm:w-auto gap-2 px-8 h-14 text-base font-bold bg-primary text-primary-foreground shadow-[0_0_40px_-10px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_-15px_rgba(34,197,94,0.6)] hover:-translate-y-1 transition-all duration-300">
            <Link href="/contact">
              Contact For Supply
              <ArrowRight className="size-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto gap-2 px-8 h-14 text-base font-bold text-white border-white/20 bg-white/5 hover:bg-white/10 hover:text-white backdrop-blur-md transition-all duration-300">
            <Link href="/services">
              Explore Our Services
            </Link>
          </Button>
        </motion.div>
        <motion.div
          className="mt-16 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        >
          <MapPin className="size-5 text-primary" />
          <span className="text-zinc-300 text-sm font-medium tracking-wide">
            S.F.X.-139, Gurunagar, Gandhidham - 370 201, Gujarat, India
          </span>
        </motion.div>
      </div>
      <motion.div
        className="relative z-20 w-full mt-auto border-t border-white/10 bg-zinc-950/40 backdrop-blur-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "All India Ports", label: "Operations Coverage", icon: MapPin },
              { value: "Ship Chandling", label: "Bond & Provisions", icon: Droplet },
              { value: "Safe Disposal", label: "Garbage & Sludge", icon: Trash2 },
              { value: "Technical", label: "Afloat Ship Repairs", icon: Wrench },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 md:border-l md:border-white/10 md:first:border-0 md:pl-8 md:first:pl-0">
                <div className="flex size-10 md:size-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-inner">
                  <stat.icon className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm md:text-base font-bold text-white tracking-wide">{stat.value}</p>
                  <p className="text-[10px] md:text-xs font-medium text-zinc-400 uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}