import Hero from "@/components/pages/Hero"
import ServicesSection from "@/components/pages/ServicesSection"
import GetInTouch from "@/components/pages/GetInTouch"
import OurService from "@/components/OurService"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ServicesSection />
      <OurService />
      <GetInTouch />
    </main>
  )
}