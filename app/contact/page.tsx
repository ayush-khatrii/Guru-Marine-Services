import React from "react"
import GetInTouch from "@/components/pages/GetInTouch"

export const metadata = {
  title: "Contact Us | Guru Marine Services",
  description: "Get in touch with Guru Marine Services for ship chandling, repairs, and disposal at any Indian port.",
}

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <GetInTouch />
    </main>
  )
}
