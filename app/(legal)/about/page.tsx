import type React from "react"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          About LongDistance AI
        </h1>

        <div className="space-y-6 text-gray-300">
          <p>
            Hi! I&apos;m the creator of LongDistance AI. For over 4 years,
            I&apos;ve been in a long-distance relationship, and I know firsthand
            both the challenges and joys that come with loving someone from
            afar. Throughout this journey, I often wished there was a tool that
            could help make the distance feel a little smaller.
          </p>

          <p>
            That&apos;s why I created LongDistance AI. Every feature in this
            platform comes from real experiences and solutions that have helped
            strengthen my own relationship. From finding creative ways to spend
            time together virtually to keeping the romance alive across time
            zones, each tool is designed to solve real challenges that
            long-distance couples face.
          </p>

          <p>The platform includes AI-powered features like:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Virtual date ideas tailored to your interests</li>
            <li>Movie and show recommendations for watching together</li>
            <li>Multiplayer games and activities</li>
            <li>Gift suggestions for special occasions</li>
            <li>Time zone management for easier scheduling</li>
            <li>Conversation starters and relationship tips</li>
          </ul>

          <p>
            Whether you&apos;re separated by a few cities or several continents,
            my goal is to help you maintain and strengthen your connection. I
            understand that every long-distance relationship is unique, which is
            why our AI-powered tools adapt to your specific needs and
            circumstances.
          </p>

          <p>
            I hope LongDistance AI can help make your long-distance journey a
            little easier and a lot more special.
          </p>
        </div>
      </div>
    </div>
  )
}
