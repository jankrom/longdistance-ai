"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ChangeEvent } from "react"
import { chat } from "./_chat/ai_chat"
import Spinner from "@/components/Spinner"
export default function LoveLetterGenerator() {
  const [input, setInput] = useState("")
  const [generatedLetter, setGeneratedLetter] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = async () => {
    setIsLoading(true)
    const letter = await chat(input)
    setGeneratedLetter(letter)
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient">
          Love Letter Generator
        </h1>
        <p>
          Share details about your loved one and let AI craft a heartfelt love
          letter. The more information you provide, the more personalized your
          letter will be.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-xl border border-pink-500/20">
          <Textarea
            placeholder="Tell us about your loved one... (e.g., their personality, your favorite memories together, what makes them special)"
            className="bg-gray-800/50 text-white border-pink-500/30 placeholder:text-pink-200/40 focus:border-pink-500/50"
            value={input}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setInput(e.target.value)
            }
          />
          <Button
            className="w-full mt-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold shadow-lg transition-all duration-200 hover:shadow-pink-500/20"
            onClick={handleGenerate}
            disabled={!input.trim() || isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="animate-pulse">Crafting your letter...</span>
              </span>
            ) : (
              "Generate Love Letter"
            )}
          </Button>
        </div>
        {isLoading && <Spinner />}
        {generatedLetter && (
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-xl border border-indigo-500/20">
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Your Generated Love Letter
            </h2>
            <div className="bg-gray-800/50 p-6 rounded-lg whitespace-pre-wrap border border-pink-500/20">
              {generatedLetter}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
