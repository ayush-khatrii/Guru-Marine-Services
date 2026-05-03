import React from "react"
import Link from "next/link"

export const metadata = {
  title: "About Us | Guru Marine Services",
  description:
    "Trusted ship chandling, marine supply & repair services across all Indian ports.",
}

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-white">

      {/* HERO SECTION */}
      <section className="relative h-[320px] w-full flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/ships.png" // 🔥 use your real hero background here
            alt="Port Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Guru Marine Services
          </h1>
          <p className="text-white/80 text-lg">
            Delivering reliable ship chandling, repairs, and marine supply
            solutions across all Indian ports.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>
          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-3">
            WHO WE ARE
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted Marine Partner <br />
            Across India
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Guru Marine Services is a dedicated maritime support company specializing in
            ship chandling, repair assistance, and marine supply operations across India.
            Our team works closely with vessel operators to ensure timely and efficient
            service at both major and minor ports.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            We focus on delivering dependable solutions — from fresh provisions and bonded
            stores to technical supplies for deck and engine requirements. With an emphasis
            on quality, responsiveness, and competitive pricing, we help vessels maintain
            smooth and uninterrupted operations throughout their journey.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f02d5e] hover:bg-[#d91e4c] text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Contact Us
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[420px] w-full rounded-xl overflow-hidden shadow-lg">
          <img
            src="/image.png" // 🔥 replace with real marine/team image if possible
            alt="Marine Services"
            className="w-full h-full object-cover"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

      </section>

      {/* HIGHLIGHTS / WHY US */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">
              Why Choose Us
            </h3>
            <p className="text-gray-600 mt-3">
              Delivering excellence in marine services with reliability and speed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-lg mb-2">
                All India Port Coverage
              </h4>
              <p className="text-gray-600 text-sm">
                Serving major and minor ports across India with fast response.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-lg mb-2">
                24/7 Availability
              </h4>
              <p className="text-gray-600 text-sm">
                Round-the-clock support to ensure uninterrupted operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-lg mb-2">
                Quality & Reliability
              </h4>
              <p className="text-gray-600 text-sm">
                High-quality supplies and dependable service every time.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}