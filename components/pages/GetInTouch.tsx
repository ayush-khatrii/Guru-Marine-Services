"use client"

import React, { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { ADDRESS } from "@/constants"

export default function GetInTouch() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="w-full bg-gradient-to-b from-[#f8fafc] to-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          <span className="text-blue-600 text-sm font-semibold tracking-widest">
            GET IN TOUCH
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Request Ship Supply <br />
            <span className="text-blue-600">& Marine Services</span>
          </h2>

          <p className="text-gray-600 mb-6">
            Guru Marine Services operates across all Indian ports, providing
            fast-response ship chandling, repairs, and marine supplies.
            Contact us for immediate vessel requirements.
          </p>

          {/* CONTACT BLOCK */}
          <div className="space-y-4 mb-6">

            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" size={18} />
              <div>
                <p className="font-medium">Sunil Khatri</p>
                <a href="tel:+919825737080" className="text-blue-600 text-sm">
                  +91 9825737080
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" size={18} />
              <div>
                <p className="font-medium">Varun Khatri</p>
                <a href="tel:+919537080095" className="text-blue-600 text-sm">
                  +91 9537080095
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" size={18} />
              <a
                href="mailto:info@gurumarineservices.com"
                className="text-blue-600 text-sm"
              >
                info@gurumarineservices.com
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600 mt-1" size={18} />
              <p className="text-sm text-gray-600">
                Capital Six Business Center<br />
                Plot No. 233, Shop No.04<br />
                Ground Floor, Ward No. DC2 ,
                Gandhidham, Kutch,<br />
                Gujarat (India) 370201<br />
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/919825737080"
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            WhatsApp Now
          </a>

          <p className="mt-4 text-xs text-gray-500">
            ⚓ 24/7 Support • All India Ports Coverage
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border">

          <h3 className="text-xl font-bold mb-4">
            Send Your Requirement
          </h3>

          {submitted ? (
            <div className="text-green-600 bg-green-50 p-4 rounded-lg">
              Request sent successfully. We’ll contact you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                placeholder="Vessel Name"
                required
                className="w-full h-12 px-4 border rounded-lg focus:border-blue-500 outline-none"
              />

              <input
                placeholder="Port Location (India)"
                required
                className="w-full h-12 px-4 border rounded-lg focus:border-blue-500 outline-none"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="h-12 px-4 border rounded-lg focus:border-blue-500 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="h-12 px-4 border rounded-lg focus:border-blue-500 outline-none"
                />
              </div>

              <textarea
                rows={4}
                placeholder="Mention your requirements..."
                required
                className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}