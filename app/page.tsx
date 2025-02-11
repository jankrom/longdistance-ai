import type React from "react"
import Hero from "../components/Hero"
import FeatureGrid from "../components/features/FeatureGrid"
import PricingSection from "../components/PricingSection"
import FAQSection from "../components/FAQSection"

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <PricingSection />
      <FAQSection />
    </>
  )
}
