"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Anchor, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const serviceLinks = [
  { href: "/services/provision", label: "Ship Provision", icon: "🚢" },
  { href: "/services/bond", label: "Bond Stores", icon: "📦" },
  { href: "/services/deck-engine", label: "Deck & Engine Stores", icon: "⚙️" },
  { href: "/services/galley", label: "Galley & Cabin Stores", icon: "🍽️" },
  { href: "/services/hardware", label: "Hardware & Tools", icon: "🔧" },
  { href: "/services/safety", label: "Safety Stores", icon: "🦺" },
  { href: "/services/ropes", label: "Ropes & Lifting Tackles", icon: "🪢" },
  { href: "/services/electrical", label: "Electrical Stores", icon: "⚡" },
  { href: "/services/chemicals", label: "Marine Chemicals", icon: "🧪" },
  { href: "/services/paints", label: "Marine Paints", icon: "🎨" },
  { href: "/services/spares", label: "Engine Spare Parts", icon: "🔩" },
  { href: "/services/charts", label: "Charts & Publications", icon: "🗺️" },
  { href: "/services/inspection", label: "Annual Inspection", icon: "🔍" },
  { href: "/services/medical", label: "Medical Equipment", icon: "🏥" },
  { href: "/services/bunkers", label: "Bunkers", icon: "⛽" },
  { href: "/services/lubricants", label: "Lubricants", icon: "🛢️" },
  { href: "/services/other", label: "Other Services", icon: "➕" },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDropdownOpen(true)
  }
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 120)
  }

  return (
    <>
      <header className="w-full bg-background sticky top-0 z-50 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src="/logo.png"
              alt="Guru Marine Services"
              className="h-18 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-extrabold tracking-tight text-foreground">
                Guru Marine
              </span>
              <span className="text-[10px] font-semibold tracking-[0.12em] text-primary uppercase">
                Services
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-md text-sm font-semibold transition-colors",
                        dropdownOpen || pathname.startsWith("/services")
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-accent"
                      )}
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          dropdownOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* ── MEGA DROPDOWN ── */}
                    <div
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[680px] bg-popover rounded-xl border border-border shadow-lg overflow-hidden transition-all duration-200 origin-top",
                        dropdownOpen
                          ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                      )}
                    >
                      {/* Header strip */}
                      <div className="flex items-center justify-between px-5 py-3 bg-foreground text-background">
                        <div className="flex items-center gap-2">
                          <Anchor className="w-4 h-4 text-primary" />
                          <span className="text-xs font-bold tracking-widest uppercase text-primary">
                            Our Services
                          </span>
                        </div>
                        <Link
                          href="/services"
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-background transition"
                        >
                          View all <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {/* Grid of services */}
                      <div className="p-4 grid grid-cols-3 gap-1">
                        {serviceLinks.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className={cn(
                              "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-all",
                              pathname === item.href
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                          >
                            <span className="text-base leading-none">{item.icon}</span>
                            <span className="font-medium leading-tight">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-semibold transition-colors",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* ── CTA + MOBILE TOGGLE ── */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden lg:inline-flex font-bold text-sm h-9 px-5 rounded-lg shadow-none"
            >
              <Link href="/contact">Get A Quote</Link>
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md text-foreground hover:bg-accent transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER OVERLAY ── */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-foreground/40 lg:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── MOBILE DRAWER PANEL ── */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[300px] bg-background flex flex-col lg:hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl border-l border-border",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-[68px] border-b border-border shrink-0">
          <div className="flex items-center gap-2">
            <Anchor className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-foreground tracking-tight">
              Guru Marine Services
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-accent transition"
          >
            <X className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Scrollable nav area */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <nav className="flex flex-col py-3 px-3">

            {/* Primary links */}
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors",
                        mobileServicesOpen || pathname.startsWith("/services")
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-accent"
                      )}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          mobileServicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Collapsible service list — single column */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        mobileServicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="flex flex-col gap-0.5 pl-3 pr-1 pb-2 pt-1">
                        {serviceLinks.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors",
                              pathname === item.href
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                          >
                            <span className="text-base w-5 text-center leading-none shrink-0">
                              {item.icon}
                            </span>
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg text-sm font-semibold transition-colors",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-accent"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Drawer footer CTA */}
        <div className="p-4 border-t border-border shrink-0">
          <Button
            asChild
            className="w-full font-bold h-11 rounded-xl shadow-none"
          >
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Get A Quote
            </Link>
          </Button>
        </div>
      </aside>
    </>
  )
}