import Hero from "@/components/pages/Hero"
import WhoWeAre from "@/components/pages/WhoWeAre"
import ServicesSection from "@/components/pages/ServicesSection"
import GetInTouch from "@/components/pages/GetInTouch"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <WhoWeAre />
      <ServicesSection />
      <GetInTouch />
    </main>
  )
}