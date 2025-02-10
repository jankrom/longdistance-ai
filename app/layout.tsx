import type React from "react"
import { Metadata } from "next"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { metadata as METADATA } from "../lib/metadata"

export const metadata: Metadata = METADATA

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-900 text-white">
          <div className="min-h-screen">
            <NavBar />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
