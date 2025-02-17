"use client"

import type React from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FEATURES } from "@/lib/features"
const PricingSection = () => {
  const freeFeatures = FEATURES.filter((feature) => !feature.isPremium).map(
    (feature) => feature.title
  )

  const premiumFeatures = [
    "Everything in Free Tier",
    ...FEATURES.filter((feature) => feature.isPremium).map(
      (feature) => feature.title
    ),
  ]

  return (
    <section id="pricing" className="py-12 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Choose the perfect plan for your relationship. No hidden fees, no
          monthly subscriptions.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Free</h3>
                <p className="text-sm text-gray-400">Perfect for trying out</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-white">$0</span>
                <span className="text-sm text-gray-400 block">Forever</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-start text-sm">
                  <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Get Started Free
            </Button>
          </div>

          {/* Premium Tier */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500 hover:border-purple-400 transition-all duration-300 relative">
            <Badge className="absolute -top-2.5 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-xs">
              Most Popular
            </Badge>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Premium</h3>
                <p className="text-sm text-gray-400">
                  All features, one payment
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-white">$25</span>
                <span className="text-sm text-gray-400 block">Lifetime</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {premiumFeatures.map((feature) => (
                <li key={feature} className="flex items-start text-sm">
                  <Check className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
              Get Premium Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
