"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Instagram, Facebook, Phone, Clock } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Contact Hero */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit our store in Soweto, connect with us on social media, or reach out directly
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Store Location</h3>
                <p className="text-muted-foreground mb-4">
                  4420 Herby Mdingi Street
                  <br />
                  Orlando East, Soweto
                  <br />
                  Johannesburg, South Africa
                </p>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent w-full transition-colors"
                  onClick={() =>
                    window.open("https://maps.google.com/?q=4420+Herby+Mdingi+Street+Orlando+East+Soweto", "_blank")
                  }
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Store Hours</h3>
                <div className="text-muted-foreground space-y-2 mb-4">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: 10:00 AM - 3:00 PM</p>
                </div>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent w-full transition-colors"
                >
                  Call Before Visit
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Phone & Email</h3>
                <div className="text-muted-foreground space-y-2 mb-4">
                  <p>Phone: +27 11 XXX XXXX</p>
                  <p>WhatsApp: +27 XX XXX XXXX</p>
                  <p>Email: info@nthoestraight.co.za</p>
                </div>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent w-full transition-colors"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Follow Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Instagram className="w-12 h-12 text-accent mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">Instagram</h3>
                  <p className="text-muted-foreground mb-6">
                    Follow us for latest drops, behind-the-scenes content, and style inspiration
                  </p>
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 w-full transition-all duration-200 active:scale-95"
                    onClick={() => window.open("https://instagram.com/nthoestraight", "_blank")}
                  >
                    @nthoestraight
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Facebook className="w-12 h-12 text-accent mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">Facebook</h3>
                  <p className="text-muted-foreground mb-6">
                    Connect with our community and stay updated on events and new releases
                  </p>
                  <Button
                    className="bg-blue-600 text-white hover:bg-blue-700 w-full transition-all duration-200 active:scale-95"
                    onClick={() => window.open("https://facebook.com/nthoestraight", "_blank")}
                  >
                    Ntho'e straight
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-card rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Shop?</h2>
            <p className="text-muted-foreground mb-6">Browse our collection of authentic Johannesburg streetwear</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto transition-all duration-200 active:scale-95"
                >
                  Shop Collection
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent w-full sm:w-auto transition-colors"
                >
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
