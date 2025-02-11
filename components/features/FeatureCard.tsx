"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  ctaText: string
  isPremium: boolean
  iconColor: string
}

const FeatureCard = ({
  icon,
  title,
  description,
  ctaText,
  isPremium,
  iconColor,
}: FeatureCardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 group relative h-full flex flex-col">
        <CardHeader className="pb-4">
          <div className="flex items-start mb-2">
            <div
              className={`w-8 h-8 ${iconColor} group-hover:text-blue-300 transition-colors duration-300 mr-3 flex-shrink-0 mt-1`}
            >
              {icon}
            </div>
            <div className="flex-grow">
              <CardTitle className="text-xl font-semibold text-gray-100 pr-16">
                {title}
              </CardTitle>
              {isPremium && (
                <Badge className="absolute top-4 right-4 bg-yellow-500 text-gray-900">
                  Premium
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow pb-4">
          <CardDescription className="text-gray-300">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            {ctaText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default FeatureCard
