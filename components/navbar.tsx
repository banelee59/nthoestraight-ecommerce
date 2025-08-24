"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { CartSidebar } from "@/components/cart-sidebar"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-primary transition-colors">
              Ntho'estraight
            </Link>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-8">
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
              >
                Contact
              </Link>
            </div>

            {/* Cart and Mobile Menu Button */}
            <div className="flex items-center space-x-2">
              <CartSidebar />

              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <>
            {/* Mobile menu sliding from right */}
            <div
              className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link href="/" className="text-xl font-bold text-gray-900">
                  Ntho'estraight
                </Link>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="px-4 py-6 space-y-2">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors uppercase tracking-wide"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors uppercase tracking-wide"
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors uppercase tracking-wide"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors uppercase tracking-wide"
                >
                  Contact
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
