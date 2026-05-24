import React from "react"
import { notFound } from "next/navigation"
import { getServiceBySlug } from "@/constants/serviceData"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Phone, Mail, CheckCircle2, Anchor } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: "Service Not Found" }

  return {
    title: `${service.title} | Guru Marine Services`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="flex flex-col bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link
            href="/services"
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <div className="h-1.5 w-24 bg-blue-500 rounded-full"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Anchor className="w-8 h-8 text-blue-600" />
                  Service Overview
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.fullDescription || service.description}
                </p>
              </div>

              {/* Highlights Card */}
              {service.highlights && service.highlights.length > 0 && (
                <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Key Features & Benefits
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Sub-Services */}
              {service.subServices && service.subServices.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Our Sub-Services
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.subServices.map((subService, idx) => (
                      <Card key={idx} className="p-4 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group">
                        <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {subService}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Choose Us */}
              <div className="bg-slate-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Why Choose Guru Marine Services?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Available 24/7 at all major and minor Indian ports",
                    "Strict adherence to international quality and safety standards",
                    "Competitive pricing with no compromise on quality",
                    "Fast response and efficient logistics coordination",
                    "Expert team with extensive maritime industry experience",
                    "Customized solutions for your specific vessel requirements"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Contact Card */}
                <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 p-8 shadow-2xl rounded-2xl mb-6">
                  <h3 className="text-2xl font-bold mb-2">Get a Quote</h3>
                  <p className="text-slate-300 mb-8 text-sm">
                    Need {service.title.toLowerCase()} for your vessel? Contact our experts for a personalized quote.
                  </p>

                  <div className="space-y-5 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-600/20 p-3 rounded-lg flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wide">Call Us</p>
                        <p className="font-bold text-lg">+91 98257 37080</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-blue-600/20 p-3 rounded-lg flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wide">Email Us</p>
                        <p className="font-bold text-sm break-all">info@gurumarineservices.com</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact" className="block">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl">
                      Request Quote Now
                    </Button>
                  </Link>
                </Card>

                {/* Quick Info Card */}
                <Card className="border border-slate-200 p-6 bg-white">
                  <h4 className="font-bold text-slate-900 mb-4">Service Availability</h4>
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-center justify-between">
                      <span>Coverage:</span>
                      <span className="font-semibold text-slate-900">All India Ports</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Availability:</span>
                      <span className="font-semibold text-blue-600">24/7</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Response:</span>
                      <span className="font-semibold text-slate-900">Rapid</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
