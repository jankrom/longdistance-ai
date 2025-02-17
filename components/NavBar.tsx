"use client"

import type React from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Link as ScrollLink } from "react-scroll"
import { Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from "react"
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/nextjs"
import Image from "next/image"

export default function NavBar() {
  const router = useRouter()
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const { user, isLoaded } = useUser()

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
    { name: "Features", href: "features", isScroll: true },
    { name: "Pricing", href: "pricing", isScroll: true },
    { name: "FAQ", href: "faq", isScroll: true },
    { name: "About", href: "/about" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" onClick={handleLogoClick} className="flex-shrink-0">
            <span className="flex items-center text-xl font-bold text-white">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={350}
                height={200}
                className="w-[250px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
              />
            </span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-4 items-center">
              {navItems.map((item) => renderNavLink(item))}
              <div className="w-[100px] flex items-center">
                {isLoaded && (
                  <>
                    <SignedOut>
                      <SignInButton
                        mode="modal"
                        forceRedirectUrl={isHome ? "/features" : pathname}
                        signUpFallbackRedirectUrl={
                          isHome ? "/features" : pathname
                        }
                      >
                        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                          Sign In/Up
                        </Button>
                      </SignInButton>
                    </SignedOut>
                    <SignedIn>
                      <UserButton
                        appearance={{
                          elements: {
                            avatarBox: "w-8 h-8",
                          },
                        }}
                      />
                    </SignedIn>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
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
                  <div className="pt-4 w-full">
                    {!isLoaded ? (
                      user ? (
                        <div className="w-8 h-8 rounded-full bg-gray-700 animate-pulse" />
                      ) : (
                        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200 w-full justify-start opacity-50">
                          Sign In
                        </Button>
                      )
                    ) : (
                      <>
                        <SignedOut>
                          <SignInButton
                            mode="modal"
                            forceRedirectUrl={isHome ? "/features" : pathname}
                            signUpFallbackRedirectUrl={
                              isHome ? "/features" : pathname
                            }
                          >
                            <Button
                              className="px-3 bg-gradient-to-r text-base font-medium  from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200 w-full justify-start"
                              onClick={() => setIsSheetOpen(false)}
                            >
                              Sign In
                            </Button>
                          </SignInButton>
                        </SignedOut>
                        <SignedIn>
                          <div className="px-2">
                            <UserButton
                              appearance={{
                                elements: {
                                  avatarBox: "w-8 h-8",
                                  userButtonPopoverCard: {
                                    pointerEvents: "initial",
                                  },
                                },
                              }}
                              fallback={
                                <User className="h-8 w-8 text-gray-400" />
                              }
                            />
                          </div>
                        </SignedIn>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
