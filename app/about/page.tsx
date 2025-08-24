import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* About Hero */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Born in the heart of Soweto, Ntho'estraight represents the authentic spirit of Johannesburg streetwear
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Authentic Johannesburg Style</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Ntho'estraight is more than just a clothing brand – we're a celebration of Johannesburg's vibrant street
                culture. Based in Orlando East, Soweto, we create high-end fashion that tells the story of our
                community.
              </p>
              <p className="text-muted-foreground mb-6 text-lg">
                Our focus is on creating unique designs rather than copying others. Every piece reflects our commitment
                to quality, creativity, and authentic local identity.
              </p>
              <p className="text-muted-foreground mb-8 text-lg">
                From oversized t-shirts to premium jeans, each item is crafted with attention to detail and a deep
                understanding of street culture aesthetics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto">
                    <MapPin className="w-4 h-4 mr-2" />
                    Visit Our Store
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent w-full sm:w-auto"
                  >
                    Shop Collection
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/prototype2.jpg"
                  alt="Ntho'estraight brand lifestyle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                We use only premium materials and maintain the highest standards in every piece we create.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Original Design</h3>
              <p className="text-muted-foreground">
                Every design is born from our creative vision, never copied from others. Authenticity is our signature.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Local Roots</h3>
              <p className="text-muted-foreground">
                Proudly based in Soweto, we celebrate and represent the authentic spirit of Johannesburg.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
