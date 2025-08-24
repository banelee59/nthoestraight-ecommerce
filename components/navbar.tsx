"use client"

import Link from "next/link"
import { CartSidebar } from "@/components/cart-sidebar"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
              Ntho'estraight
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-accent transition-colors font-medium">
                Home
              </Link>
              <Link href="/products" className="text-foreground hover:text-accent transition-colors font-medium">
                Products
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-accent transition-colors font-medium">
                Contact
              </Link>
            </div>
            <CartSidebar />
          </div>
        </div>
      </div>
    </nav>
  )
}
