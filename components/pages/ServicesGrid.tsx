"use client"

import Link from "next/link"
import { services } from "@/constants/serviceData"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Anchor, Zap, Shield, Wrench, Droplets, Wind, Cable } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  provision: <Anchor className="w-12 h-12" />,
  bond: <Zap className="w-12 h-12" />,
  "deck-engine": <Shield className="w-12 h-12" />,
  galley: <Wrench className="w-12 h-12" />,
  hardware: <Wrench className="w-12 h-12" />,
  safety: <Shield className="w-12 h-12" />,
  ropes: <Cable className="w-12 h-12" />,
  electrical: <Zap className="w-12 h-12" />,
  chemicals: <Droplets className="w-12 h-12" />,
  paints: <Wind className="w-12 h-12" />,
  spares: <Wrench className="w-12 h-12" />,
  charts: <Anchor className="w-12 h-12" />,
  inspection: <Shield className="w-12 h-12" />,
  medical: <Shield className="w-12 h-12" />,
  bunkers: <Zap className="w-12 h-12" />,
  lubricants: <Droplets className="w-12 h-12" />,
  other: <Wrench className="w-12 h-12" />,
}

export default function ServicesGrid() {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-3 uppercase">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Maritime Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From provisions to propulsion systems, we offer complete marine supply services available 24/7 at all major and minor Indian ports.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, idx) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="h-full bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-slate-600">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 right-4 bg-blue-600/90 p-3 rounded-full text-white">
                    {iconMap[service.slug] || <Anchor className="w-8 h-8" />}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3">
                    {service.description}
                  </p>

                  {/* Sub-services Preview */}
                  {service.subServices && service.subServices.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {service.subServices.slice(0, 2).map((sub, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {sub}
                        </span>
                      ))}
                      {service.subServices.length > 2 && (
                        <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                          +{service.subServices.length - 2} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Learn More Button */}
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Specific Service?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert team is available 24/7 to coordinate any maritime supply requirement. Contact us for personalized solutions.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-slate-100 font-semibold px-8 py-3 text-lg">
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
