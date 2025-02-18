"use client"

import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/features/chat/api",
    })

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl h-[calc(100vh-4rem)]">
      <div className="flex flex-col h-full space-y-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient">
            Long Distance Relationship Guide
          </h1>
          <p className="text-gray-300">
            Get caring advice and support for navigating long distance relationships and maintaining strong connections.
          </p>
        </div>

        <div className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-pink-500/20 shadow-xl overflow-hidden flex flex-col">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex w-full",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-4 py-2",
                      message.role === "user"
                        ? "bg-pink-600/20 text-pink-100"
                        : "bg-purple-600/20 text-purple-100"
                    )}
                  >
                    <div className="text-xs opacity-50 mb-1">
                      {message.role === "user" ? "You" : "AI Assistant"}
                    </div>
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-pink-500/20 bg-gray-900/50"
          >
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800/50 border-pink-500/30 text-white placeholder:text-pink-200/40 focus:border-pink-500/50"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white"
              >
                {isLoading ? "Thinking..." : "Send"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
