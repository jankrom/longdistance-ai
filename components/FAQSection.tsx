"use client"

import type React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQSection = () => {
  const faqs = [
    {
      question: "What is LongDistance AI?",
      answer:
        "LongDistance AI is an all-in-one platform designed to help long-distance couples stay connected. We offer AI-powered date ideas, movie and show recommendations, multiplayer games, time zone syncing, a relationship chatbot, and more to make long-distance relationships easier and more fun.",
    },
    {
      question: "Why use our product?",
      answer:
        "Being apart is hard, but staying close shouldn’t be. LongDistance AI brings you creative date ideas, perfect movie nights, fun games, and seamless ways to stay connected—all powered by AI. Make every moment together special, no matter the distance.",
    },

    {
      question: "Is it free?",
      answer:
        "Yes! We offer a free version with access to core features. For premium AI-powered recommendations and exclusive features, we offer a paid plan for $25 lifetime access.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up, explore our features, and start strengthening your long-distance relationship with AI-powered tools!",
    },
    {
      question: "What kind of date ideas does the AI recommend?",
      answer:
        "Our AI suggests virtual and in-person date ideas based on your preferences. These include online experiences, DIY romantic activities, gaming nights, and even surprise challenges to keep things exciting.",
    },
    {
      question: "How does the movie and show recommendation feature work?",
      answer:
        "We analyze both partners' favorite genres, past viewing history, and available streaming services to suggest the best movies and shows to watch together.",
    },
    {
      question: "What multiplayer games can we play?",
      answer:
        "We curate a list of engaging browser-based and mobile-friendly games that couples can enjoy together, whether cooperative, competitive, or casual.",
    },
    {
      question: "What does the AI chatbot assistant do?",
      answer:
        "Our chatbot provides relationship advice, fun conversation starters, reminders for special dates, and even suggests thoughtful ways to stay connected.",
    },
    {
      question: "How does time zone and schedule syncing help?",
      answer:
        "LongDistance AI automatically detects both partners' time zones and suggests the best times for calls, virtual dates, and shared activities based on your schedules.",
    },
    {
      question: "What is the countdown and memory-sharing feature?",
      answer:
        "You can set a countdown to your next in-person meetup and keep a shared digital memory book with photos, notes, and videos to cherish your relationship moments.",
    },
    {
      question: "How does the AI-powered gift finder work?",
      answer:
        "Simply enter details about your partner's interests, budget, and occasion, and our AI will generate personalized gift ideas from trusted online stores.",
    },
    {
      question: "Is my data safe on LongDistance AI?",
      answer:
        "Absolutely! We prioritize user privacy and do not share personal data. All conversations, schedules, and shared memories remain private between you and your partner.",
    },
  ]

  return (
    <section id="faq" className="py-12 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Everything you need to know about LongDistance AI
        </p>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-800 rounded-lg border border-gray-700 px-4"
            >
              <AccordionTrigger className="text-white hover:text-blue-400 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQSection
