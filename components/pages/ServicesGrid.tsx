"use client"

import Link from "next/link"
import { services } from "@/constants/serviceData"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Anchor, Zap, Shield, Wrench, Droplets, Wind, Cable, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const iconMap: Record<string, React.ReactNode> = {
  provision: <Anchor className="w-6 h-6" />,
  bond: <Zap className="w-6 h-6" />,
  "deck-engine": <Shield className="w-6 h-6" />,
  galley: <Wrench className="w-6 h-6" />,
  hardware: <Wrench className="w-6 h-6" />,
  safety: <Shield className="w-6 h-6" />,
  ropes: <Cable className="w-6 h-6" />,
  electrical: <Zap className="w-6 h-6" />,
  chemicals: <Droplets className="w-6 h-6" />,
  paints: <Wind className="w-6 h-6" />,
  spares: <Wrench className="w-6 h-6" />,
  charts: <Anchor className="w-6 h-6" />,
  inspection: <Shield className="w-6 h-6" />,
  medical: <Shield className="w-6 h-6" />,
  bunkers: <Zap className="w-6 h-6" />,
  lubricants: <Droplets className="w-6 h-6" />,
  other: <Wrench className="w-6 h-6" />,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ServicesGrid() {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-background to-slate-50/50">
      <div className="container mx-auto max-w-7xl">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm bg-blue-100 text-blue-700 hover:bg-blue-200">
            What We Offer
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Comprehensive Maritime
            <span className="block text-blue-600">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From provisions to propulsion systems, we offer complete marine supply services
            available 24/7 at all major and minor Indian ports.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, idx) => (
            <motion.div key={service.slug} variants={itemVariants}>
              <Link href={`/services/${service.slug}`}>
                <Card className="group h-full bg-white border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden cursor-pointer relative">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />

                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 text-blue-600">
                      {iconMap[service.slug] || <Anchor className="w-6 h-6" />}
                    </div>

                    {/* Service Number */}
                    <div className="absolute top-4 left-4 text-white/30 font-bold text-5xl group-hover:text-white/50 transition-colors duration-300">
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-[280px]">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Sub-services Tags */}
                    {service.subServices && service.subServices.length > 0 && (
                      <div className="mb-6 flex flex-wrap gap-2">
                        {service.subServices.slice(0, 3).map((sub, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                          >
                            {sub}
                          </Badge>
                        ))}
                        {service.subServices.length > 3 && (
                          <Badge variant="outline" className="text-xs border-slate-300 text-slate-600">
                            +{service.subServices.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}

                    {/* Learn More Button */}
                    <Button
                      className="w-full bg-slate-900 hover:bg-blue-600 text-white group/btn transition-all duration-300 rounded-xl"
                      size="lg"
                    >
                      Explore Service
                      <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: <Anchor className="w-8 h-8" />,
              title: "All Indian Ports",
              description: "Coverage at 50+ major and minor ports across India",
              color: "blue",
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "24/7 Availability",
              description: "Round-the-clock support for urgent requirements",
              color: "cyan",
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Quality Assured",
              description: "Premium quality products with international standards",
              color: "indigo",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${feature.color}-100 text-${feature.color}-600 flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}