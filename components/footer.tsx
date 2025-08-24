import Link from "next/link"
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Ntho'estraight</h3>
            <p className="text-white/80 text-sm">
              Authentic Johannesburg streetwear with creative identity and high-end quality.
            </p>
           
          </div>


          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Visit Our Store</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-sm">
                  4420 Herby Mdingi Street
                  <br />
                  Orlando East, Soweto
                  <br />
                  Johannesburg
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white/70" />
                <p className="text-white/80 text-sm">+27 11 123 4567</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white/70" />
                <p className="text-white/80 text-sm">info@nthoestraight.co.za</p>
              </div>
            </div>
            </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-white/80 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/products" className="block text-white/80 hover:text-white transition-colors text-sm">
                Products
              </Link>
              <Link href="/about" className="block text-white/80 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link href="/contact" className="block text-white/80 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Categories</h4>
            <div className="space-y-2">
              <Link
                href="/products?category=t-shirts"
                className="block text-white/80 hover:text-white transition-colors text-sm"
              >
                T-Shirts
              </Link>
              <Link
                href="/products?category=jeans"
                className="block text-white/80 hover:text-white transition-colors text-sm"
              >
                Jeans
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/nthoestraight"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com/nthoestraight"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
          

          
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © 2024 Ntho'estraight. All rights reserved. Made with pride in Johannesburg.
          </p>
        </div>
      </div>
    </footer>
  )
}
