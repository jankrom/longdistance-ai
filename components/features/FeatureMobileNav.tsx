"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { FEATURES } from "@/lib/features"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"

export default function FeatureMobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const currentFeature = FEATURES.find((feature) => feature.href === pathname)

  return (
    <div className="fixed bottom-4 left-0 right-0 sm:hidden px-4 z-50">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="w-full bg-gray-900 text-white border-gray-700 hover:bg-gray-800"
          >
            <Menu className="w-4 h-4 mr-2" />
            {currentFeature?.title || "Select Feature"}
          </Button>
        </DrawerTrigger>
        <DrawerContent className="fixed inset-x-0 bottom-0 mt-24 h-[80%] rounded-t-[10px] bg-gray-900">
          <div className="p-4 flex-1 overflow-y-auto">
            <DrawerHeader className="text-left">
              <DrawerTitle className="text-lg font-semibold text-white">
                Features
              </DrawerTitle>
            </DrawerHeader>
            <div className="space-y-3">
              {FEATURES.map((feature) => (
                <Link
                  key={feature.title}
                  href={feature.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200 ease-in-out ${
                    pathname === feature.href
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <div className={`flex-shrink-0 w-5 h-5 ${feature.iconColor}`}>
                    {feature.icon}
                  </div>
                  <span className="ml-3 text-sm font-medium">
                    {feature.title}
                  </span>
                  {feature.isPremium && (
                    <Badge className="ml-auto bg-yellow-500 text-gray-900 text-xs">
                      Premium
                    </Badge>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
