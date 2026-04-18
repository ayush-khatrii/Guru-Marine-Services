import React from "react"
import { Badge } from "@/components/ui/badge"
import { Anchor, Users, Shield, Flag, Compass, Clock, MapPin } from "lucide-react"

export const metadata = {
  title: "About Us | Guru Marine Services",
  description: "Learn about our mission and operations across all Indian ports.",
}

const stats = [
  { value: "All India", label: "Ports Served" },
  { value: "24/7", label: "Operations" },
  { value: "100%", label: "Compliance" },
  { value: "1000+", label: "Vessels Supplied" },
]

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="secondary"
              className="mb-6 gap-1.5 border border-border px-3 py-1.5 text-xs font-medium uppercase tracking-wider"
            >
              <Anchor className="size-3.5 text-primary" />
              Our Story
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Dedication to Maritime Excellence
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Guru Marine Services is headquartered in Gandhidham, Gujarat, and has established itself as an authoritative leader in ship chandling, repair, and vessel support operations. We proudly operate across every major and minor port in India.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:grid-cols-4 lg:p-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center gap-1 text-center ${
                  i < stats.length - 1 ? "sm:border-r sm:border-border" : ""
                }`}
              >
                <span className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</span>
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Core Principles</h2>
            <p className="mt-4 text-muted-foreground">The standards that guide every vessel we support.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Round the Clock Operations",
                desc: "We understand that ships operate 24/7. Our logistics and supply chains are primed to dispatch provisions, technicians, and equipment at any hour of the day or night.",
              },
              {
                icon: Shield,
                title: "Strict Compliance",
                desc: "From ensuring fresh, high-quality provisions to safely disposing of sludge and garbage according to MARPOL regulations, we do not compromise on standards.",
              },
              {
                icon: MapPin,
                title: "Pan-India Network",
                desc: "With operations deeply integrated into all Indian ports, we utilize robust local knowledge and vendor connections to expedite services wherever your vessel docks.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="size-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}