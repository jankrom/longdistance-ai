"use client"

import type React from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Link as ScrollLink } from "react-scroll"
import { Menu, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect } from "react"

const NavBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    // Check if there's a hash in the URL when we land on the home page
    if (isHome && window.location.hash) {
      const id = window.location.hash.slice(1) // Remove the # from the hash
      const element = document.getElementById(id)
      if (element) {
        const offset = -20
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset + offset
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }, [isHome])

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Features", href: "features", isScroll: true },
    { name: "Pricing", href: "pricing", isScroll: true },
    { name: "FAQ", href: "faq", isScroll: true },
  ]

  const handleNavigation = (href: string) => {
    if (!isHome) {
      // Just navigate to the URL with hash, the useEffect will handle scrolling
      router.push(`/#${href}`)
    }
  }

  const renderNavLink = (item: {
    name: string
    href: string
    isScroll?: boolean
  }) => {
    if (item.isScroll) {
      return isHome ? (
        <ScrollLink
          key={item.name}
          to={item.href}
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          activeClass="text-white bg-gray-700"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out cursor-pointer"
        >
          {item.name}
        </ScrollLink>
      ) : (
        <button
          key={item.name}
          onClick={() => handleNavigation(item.href)}
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out cursor-pointer"
        >
          {item.name}
        </button>
      )
    }

    return (
      <Link
        key={item.name}
        href={item.href}
        className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out ${
          pathname === item.href ? "bg-gray-700 text-white" : ""
        }`}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" onClick={handleLogoClick} className="flex-shrink-0">
              <span className="flex items-center text-xl font-bold text-white">
                <Heart className="h-6 w-6 text-blue-500 mr-2" />
                LongDistance AI
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => renderNavLink(item))}
            </div>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 text-white">
                <SheetHeader>
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col space-y-4">
                  {navItems.map((item) =>
                    item.isScroll ? (
                      isHome ? (
                        <ScrollLink
                          key={item.name}
                          to={item.href}
                          spy={true}
                          smooth={true}
                          offset={-20}
                          duration={500}
                          activeClass="text-white bg-gray-700"
                          className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                        >
                          {item.name}
                        </ScrollLink>
                      ) : (
                        <button
                          key={item.name}
                          onClick={() => handleNavigation(item.href)}
                          className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer text-left"
                        >
                          {item.name}
                        </button>
                      )
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                          pathname === item.href ? "bg-gray-700 text-white" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
