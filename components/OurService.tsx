"use client"

import React from "react"
import Link from "next/link"

const services = [
  {
    title: "Deck & Engine Stores",
    desc: "Complete deck, engine, and technical supplies for smooth vessel operations.",
    image: "https://globalmarineindia.in/wp-content/uploads/2022/09/pexels-tom-fisk-3840447.jpg",
    link: "/services/engine",
  },
  {
    title: "Ship Provision",
    desc: "Fresh, high-quality food supplies for crew with strict quality standards.",
    image: "/ship-provision.png",
    link: "/ship-provision.png",
  },
  {
    title: "Bond Stores",
    desc: "Imported beverages, bonded goods & crew essentials at competitive rates.",
    image: "https://apolloshipstores.com/img/Bond-Stores-2.jpg",
    link: "/services/bond",
  },
]

const OurService = () => {
  return (
    <section className="w-full py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold tracking-widest">
            OUR SERVICES
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            What We Provide
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div className="group relative h-[350px] rounded-xl overflow-hidden cursor-pointer">

                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/80 mb-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    {service.desc}
                  </p>

                  <span className="text-sm font-medium flex items-center gap-2 text-blue-400">
                    Explore →
                  </span>
                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}

export default OurService