"use client"

import React, { useState } from "react"
import { Send, CheckCircle2, Phone, Mail } from "lucide-react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center rounded-2xl bg-blue-50 border border-blue-100">
        <CheckCircle2 className="size-12 text-blue-600 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900">Request Sent</h3>
        <p className="text-gray-500 mt-2">
          Our team will contact you shortly.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">

      {/* HEADER */}
      <div className="mb-6">
        <p className="text-sm text-blue-600 font-semibold tracking-wide">
          QUICK REQUEST
        </p>
        <h3 className="text-2xl font-bold text-gray-900">
          Request Ship Supply
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Get fast response across all Indian ports
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          placeholder="Vessel Name"
          required
          className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-blue-500 outline-none"
        />

        <input
          placeholder="Port (Kandla / Mumbai / etc.)"
          required
          className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-blue-500 outline-none"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="h-12 px-4 rounded-lg border border-gray-200 focus:border-blue-500 outline-none"
          />

          <input
            type="tel"
            placeholder="Phone"
            className="h-12 px-4 rounded-lg border border-gray-200 focus:border-blue-500 outline-none"
          />
        </div>

        <textarea
          rows={4}
          placeholder="Requisition details..."
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 outline-none resize-none"
        />

        {/* CTA */}
        <button
          type="submit"
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition"
        >
          <Send size={16} />
          Send Request
        </button>
      </form>

      {/* QUICK CONTACT */}
      <div className="mt-6 border-t pt-4 text-sm text-gray-600 space-y-2">

        <div className="flex items-center gap-2">
          <Phone size={16} className="text-blue-600" />
          <a href="tel:+919825737080" className="hover:text-blue-600">
            +91 9825737080
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={16} className="text-blue-600" />
          <a href="mailto:info@gurumarineservices.com" className="hover:text-blue-600">
            info@gurumarineservices.com
          </a>
        </div>

        <p className="text-xs text-gray-400 pt-2">
          ⚓ Available 24/7 • All India Ports
        </p>
      </div>
    </div>
  )
}