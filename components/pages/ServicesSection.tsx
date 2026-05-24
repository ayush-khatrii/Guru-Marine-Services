"use client"

import { Mail, Phone, MapPin, Wrench, Ship, Package } from "lucide-react"

export default function AboutServices() {
  return (
    <section className="w-full py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">

          {/* LEFT */}
          <div>
            <p className="text-sm tracking-widest text-blue-500 font-semibold mb-3">
              WHO WE ARE
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Guru Marine <br />
              <span className="text-blue-600">Services</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Operating at all India ports, Guru Marine Services delivers
              top-tier ship chandling, repairs, and marine supply solutions.
              We ensure reliability, compliance, and efficiency for vessels
              across major and minor ports.
            </p>

            {/* Extra Value Line */}
            <p className="text-gray-500 mt-4">
              Trusted by industry professionals for fast response, quality
              materials, and 24/7 operational support.
            </p>
          </div>

          {/* RIGHT (Contact Card) */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-600">

              <div className="flex items-center gap-3">
                <Mail className="text-blue-500 w-5 h-5" />
                info@gurumarineservices.com
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-500 w-5 h-5" />
                Sunil Khatri: +91 9825737080
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-500 w-5 h-5" />
                Varun Khatri: +91 9537080095
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500 w-5 h-5 mt-1" />
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
        </div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
            <Ship className="text-blue-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-3">Ship Chandling</h4>
            <p className="text-gray-600">
              Complete vessel supply solutions including provisions, bonded
              stores, and essential consumables delivered efficiently.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
            <Package className="text-blue-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-3">Marine Supplies</h4>
            <p className="text-gray-600">
              High-quality deck & engine stores, chemicals, lubricants,
              and spare parts tailored to vessel requirements.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
            <Wrench className="text-blue-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-3">Ship Repairs</h4>
            <p className="text-gray-600">
              Reliable afloat repairs, maintenance, and technical support
              to ensure uninterrupted vessel operations.
            </p>
          </div>
        </div>
        <div>
          <img src="/cert.png" alt="certificates" className="w-full h-full object-cover my-10" />
        </div>
      </div>
    </section>
  )
}