"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FEATURES } from "@/lib/features"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronsLeft, ChevronsRight } from "lucide-react"

export default function FeatureSideNav() {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <nav
      className={`hidden overflow-y-auto sm:flex flex-col w-16 ${
        isExpanded ? "sm:w-64" : "sm:w-16"
      } lg:w-64 bg-gray-900 px-4 transition-all duration-300 ease-in-out top-16 bottom-0`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="hidden sm:flex lg:hidden w-full mb-2 text-gray-400 hover:text-white hover:bg-gray-800"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {!isExpanded ? (
          <ChevronsRight className="h-4 w-4" />
        ) : (
          <>
            <ChevronsLeft className="h-4 w-4" />
            Hide Features
          </>
        )}
      </Button>
      <div className="flex-1 space-y-2">
        {FEATURES.map((feature) => (
          <Link
            key={feature.title}
            href={feature.href}
            className={`flex items-center justify-center ${
              isExpanded ? "sm:justify-start" : "sm:justify-center"
            } lg:justify-start rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out group px-1 py-2 ${
              pathname === feature.href
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <div
              className={`flex-shrink-0 w-5 h-5 ${feature.iconColor} transition-transform duration-200 ease-in-out group-hover:scale-110`}
            >
              {feature.icon}
            </div>
            <span
              className={`hidden ${
                isExpanded ? "sm:inline" : "sm:hidden"
              } lg:inline lg:ml-3 text-sm font-medium transform transition-all duration-1000 ease-in-out opacity-0 ${
                isExpanded ? "sm:opacity-100" : "sm:opacity-0"
              } lg:opacity-100`}
            >
              {feature.title}
            </span>
            {feature.isPremium && (
              <Badge
              
                className={`ml-auto hidden ${
                  isExpanded ? "sm:inline" : "sm:hidden"
                } lg:inline bg-yellow-500 text-gray-900 text-xs transform transition-all duration-200 ease-in-out ${
                  isExpanded ? "sm:opacity-100" : "sm:opacity-0"
                } lg:opacity-100`}
              >
                Premium
              </Badge>
            )}
          </Link>
        ))}
      </div>
    </nav>
  )
}
