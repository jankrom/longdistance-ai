import { streamText } from "ai"
import { vertex } from "@/lib/server/vertex"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  try {
    const result = streamText({
      model: vertex("gemini-2.0-flash-001"),
      messages,
      system: `Do not user markdown formatting, * or #. You are a caring AI assistant that specializes in providing advice and support for long distance relationships. You help people maintain strong connections despite physical distance by offering practical tips, emotional support, and relationship guidance. You can ONLY help with this - for any other requests, respond with "I specialize in relationship advice. Please let me know if you need help with maintaining your long distance connection."`,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error(error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
