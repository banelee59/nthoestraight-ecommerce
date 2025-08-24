import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-card py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/johannesburg-street-art-urban-background-CXTieOFB9w6zpEpW1gBYJZcKncGY4a.png"
            alt="Johannesburg street art background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
              Authentic Johannesburg Streetwear
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ntho'estraight</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              High-end fashion from Soweto. Oversized t-shirts and premium jeans crafted with authentic local design and
              uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                  Shop Collection
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent w-full sm:w-auto"
                >
                  Visit Our Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Featured Collection</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our signature pieces that blend street culture with high-end fashion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/prototype.jpg"
                    alt="Black Ntho'estraight Oversized T-Shirt"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">New</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">Black Logo Oversized Tee</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Premium cotton with signature Ntho'estraight branding
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">R450</span>
                    <Link href={`/products/1`}>
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/prototype2.jpg"
                    alt="Brown Ntho E Str8 Oversized T-Shirt"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-secondary-foreground">Popular</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">Brown NTHO E STR8 Tee</h4>
                  <p className="text-muted-foreground text-sm mb-4">Earth-tone oversized fit with bold typography</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">R450</span>
                    <Link href={`/products/2`}>
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/prototype1.jpg"
                    alt="Black Ntho'estraight Street Style T-Shirt"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">Limited</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">Street Style Black Tee</h4>
                  <p className="text-muted-foreground text-sm mb-4">Urban aesthetic with premium comfort</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">R450</span>
                    <Link href={`/products/3`}>
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
