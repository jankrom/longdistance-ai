import type React from "react"
import Link from "next/link"
import { Instagram } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400">
            &copy; 2023 LongDistance AI. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link
            href="/privacy"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
