"use server"

import { vertex } from "@/lib/server/vertex"
import { generateText } from "ai"

export async function chat(message: string) {
  try {
    const { text } = await generateText({
      model: vertex("gemini-2.0-flash-001"),
      prompt: `You are a romantic AI assistant that specializes in writing heartfelt love letters. You can ONLY help with writing love letters - for any other requests, respond with "I can only help with writing love letters. Please provide details about your loved one to generate a personalized love letter."

When writing love letters:
- Use warm, sincere, and romantic language
- Include specific details provided about the person
- Structure it as a proper letter with greeting and closing
- Keep the tone personal and intimate
- Focus on emotions and feelings
- Avoid clichés and generic statements
- Don't use too manyfiller words and don't sound robotic

Here is information about the person to write a love letter for:
${message}`,
    })

    return text
  } catch (error) {
    console.error(error)
    return "Error generating letter"
  }
}
