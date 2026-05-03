"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  const serviceLinks = [
    { href: "/services/provision", label: "Ship Provision" },
    { href: "/services/bond", label: "Bond Stores" },
    { href: "/services/deck-engine", label: "Deck & Engine Stores" },
    { href: "/services/galley", label: "Galley And Cabin Stores" },
    { href: "/services/hardware", label: "Hardware And Tools" },
    { href: "/services/safety", label: "Safety Stores" },
    { href: "/services/ropes", label: "Ropes And Lifting Tackles" },
    { href: "/services/electrical", label: "Electrical Stores" },
    { href: "/services/chemicals", label: "Marine Chemicals" },
    { href: "/services/paints", label: "Marine Paints And Accessories" },
    { href: "/services/spares", label: "Engine Spare Parts" },
    { href: "/services/charts", label: "Charts And Publications" },
    { href: "/services/inspection", label: "Annual Inspection" },
    { href: "/services/medical", label: "Medical Equipments" },
    { href: "/services/bunkers", label: "Bunkers" },
    { href: "/services/lubricants", label: "Lubricants" },
    { href: "/services/other", label: "Other Services" },
  ]

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6">

        {/* LOGO */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-black text-[#1E293B] uppercase">
            Guru Marine Services
          </span>
          <span className="text-[10px] tracking-widest text-primary uppercase">
            All India Ports
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.label === "Services") {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <button className="flex items-center gap-1 text-sm font-bold text-[#1E293B] hover:text-primary transition">
                    Services
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* DROPDOWN */}
                  <div
                    className={cn(
                      "absolute left-0 mt-4 w-96 bg-white border border-gray-200 rounded-lg shadow-lg p-3 transition-all duration-200",
                      open
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    )}
                  >
                    <div className="text-xs font-semibold text-gray-400 px-2 pb-2">
                      Services
                    </div>

                    <ScrollArea className="h-72 pr-2">
                      <div className="grid grid-cols-2 gap-1">
                        {serviceLinks.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-[#F8FAFC] hover:text-primary transition"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-bold transition",
                  pathname === link.href
                    ? "text-primary"
                    : "text-[#1E293B] hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button className="bg-primary hover:bg-[#A17F1A] text-white">
            Get A Quote
          </Button>
        </div>

        {/* MOBILE */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">

              {navLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    href={link.href}
                    className="text-lg font-bold text-[#1E293B]"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}

              {/* Mobile Services */}
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">
                  Services
                </p>

                <ScrollArea className="h-72 pr-2">
                  <div className="grid grid-cols-2 gap-1">
                    {serviceLinks.map((item, i) => (
                      <SheetClose key={i} asChild>
                        <Link
                          href={item.href}
                          className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-[#F8FAFC] hover:text-primary transition"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </ScrollArea>
              </div>

            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  )
}