import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "./AnimatedBackground"
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden lg:pt-0 pt-16">
      <AnimatedBackground />
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 leading-tight">
                Bridging the Distance, One AI-Powered Moment at a Time
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 font-light">
                Your AI-powered platform for strengthening long-distance
                relationships through personalized experiences and connection
                tools.
              </p>
              <Button className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base">
                Start Connecting Now
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full max-w-md lg:w-1/2">
              <Image
                src="/images/img1.png"
                alt="Couple hugging through the computer"
                width={300}
                height={300}
                className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square"
                priority
              />
              <Image
                src="/images/img2.jpg"
                alt="Couple talking through the computer"
                width={300}
                height={300}
                className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square"
                priority
              />
              <Image
                src="/images/img3.jpg"
                alt="Couple sharing a flower through a phone"
                width={300}
                height={300}
                className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square"
              />
              <Image
                src="/images/img4.jpg"
                alt="Couple getting married"
                width={300}
                height={300}
                className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
