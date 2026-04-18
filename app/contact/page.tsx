import React from "react"
import ContactForm from "@/components/pages/ContactForm"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Clock, MessageSquare, Anchor } from "lucide-react"

export const metadata = {
  title: "Contact Us | Guru Marine Services",
  description: "Get in touch with Guru Marine Services for ship chandling, repairs, and disposal at any Indian port.",
}

export default function ContactPage() {
  return (
    <main className="flex flex-col pt-16">
      {/* Header Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-6 gap-1.5 border border-border px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-primary"
          >
            <MessageSquare className="size-3.5" />
            Vessel Services & Inquiries
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s Service Your Vessel
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Our team is ready to dispatch provisions, technicians, and disposal units to any port in India immediately.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Left Col: Contact Info */}
            <div className="flex flex-col gap-12 lg:col-span-2">
              <div>
                <div className="mb-6 flex items-center gap-2">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary">
                    <Anchor className="size-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Headquarters</h2>
                </div>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Physical Address</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        S.F.X.-139, Gurunagar<br />
                        Gandhidham 370 201<br />
                        Kutch, Gujarat<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Direct Lines</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Sunil Khatri: <a href="tel:+919825737080" className="hover:text-primary font-medium">+91 9825737080</a><br />
                        Varun Khatri: <a href="tel:+919537080095" className="hover:text-primary font-medium">+91 9537080095</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Email Address</p>
                      <p className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground">
                        <a href="mailto:info@gurumarineservices.com" className="hover:text-primary font-medium">info@gurumarineservices.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Availability</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        24/7 Services<br />
                        We operate at all India ports.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Col: Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm variant="standalone" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
