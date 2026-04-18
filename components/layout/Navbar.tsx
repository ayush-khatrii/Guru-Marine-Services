"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  ShoppingCart,
  Wrench,
  Store,
  Droplet,
  Trash2,
  Recycle,
  FileText,
  ChevronDown,
  Anchor,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Professional Ship Chandling",
    description: "One-stop shop for high-quality provisions, technical stores, and global port logistics.",
    href: "/services#ship-chandling",
    icon: ShoppingCart,
  },
  {
    title: "Marine Engineering & Repairs",
    description: "Expert afloat repairs, main machinery overhauls, and structural maintenance.",
    href: "/services#ship-repairs",
    icon: Wrench,
  },
  {
    title: "Bonded Store Supply",
    description: "Duty-free luxury goods and crew welfare items under strict customs compliance.",
    href: "/services#bond-store",
    icon: Store,
  },
  {
    title: "Potable Fresh Water Supply",
    description: "Barge and tanker delivery of WHO-standard potable water for crew health.",
    href: "/services#fresh-water",
    icon: Droplet,
  },
  {
    title: "MARPOL Garbage Disposal",
    description: "Traceable segregation and eco-friendly processing of vessel solid waste.",
    href: "/services#garbage-disposal",
    icon: Trash2,
  },
  {
    title: "Sludge & Oily Waste Disposal",
    description: "Certified MARPOL Annex I disposal using dedicated double-hulled vessels.",
    href: "/services#sludge-disposal",
    icon: Recycle,
  },
]

export default function Navbar() {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()


  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all bg-background duration-300",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
            <Anchor className="size-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-base leading-tight font-bold tracking-tight text-foreground">
              Guru Marine Services
            </span>
            <span className="text-[10px] leading-tight font-medium tracking-widest text-muted-foreground uppercase">
              India Ports Operations
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "text-sm font-medium",
                    pathname === "/services"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[540px] gap-1 p-2 md:grid-cols-2">
                    {services.map((service) => (
                      <NavigationMenuLink key={service.title} asChild>
                        <Link
                          href={service.href}
                          className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                        >
                          <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <service.icon className="size-4" />
                          </div>
                          <div className="space-y-0.5">
                            <div className="text-sm font-medium leading-tight text-foreground">
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                    <div className="col-span-2 mt-1 border-t pt-2">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services"
                          className="flex items-center justify-center gap-2 rounded-lg p-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                        >
                          <FileText className="size-4" />
                          View All Services
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/contact"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
              pathname === "/contact"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <span className="text-xs font-semibold text-muted-foreground hidden xl:inline-block pr-2 border-r border-border">
            +91 9825737080
          </span>
          <Button size="sm" asChild>
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                  <Anchor className="size-4 text-primary-foreground" />
                </div>
                Guru Marine Services
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 mt-6">
              {navLinks.slice(0, 2).map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                      pathname === link.href
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}

              {/* Mobile Services Accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                  pathname === "/services"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground"
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-200",
                    mobileServicesOpen && "rotate-180"
                  )}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-3 flex flex-col gap-0.5 border-l-2 border-border pl-3">
                  {services.map((service) => (
                    <SheetClose key={service.title} asChild>
                      <Link
                        href={service.href}
                        className="flex items-center gap-2.5 rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <service.icon className="size-4 text-primary" />
                        {service.title}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              )}

              <SheetClose asChild>
                <Link
                  href="/contact"
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                    pathname === "/contact"
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  Contact
                </Link>
              </SheetClose>

              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-center">
                <p className="text-xs text-muted-foreground mb-2">Call us directly:</p>
                <a href="tel:+919825737080" className="text-sm font-semibold text-foreground">+91 9825737080</a>
                <a href="tel:+919537080095" className="text-sm font-semibold text-foreground">+91 9537080095</a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
