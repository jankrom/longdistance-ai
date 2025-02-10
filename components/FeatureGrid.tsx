import type React from "react"
import FeatureCard from "./FeatureCard"
import { FEATURES } from "../lib/features"

const features = FEATURES

const FeatureGrid = () => {
  return (
    <section id="features" className="py-12 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          AI-Powered Features for Long-Distance Couples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
