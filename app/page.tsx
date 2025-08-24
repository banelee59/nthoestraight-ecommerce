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
      <section className="relative bg-card py-20 sm:py-32 lg:py-40 overflow-hidden">
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
            <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground text-xs sm:text-sm">
              Authentic Johannesburg Streetwear
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ntho'estraight
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              High-end fashion from Soweto. Oversized t-shirts and premium jeans crafted with authentic local design and
              uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link href="/products" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto min-w-[160px]"
                >
                  Shop Collection
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent w-full sm:w-auto min-w-[160px]"
                >
                  Visit Our Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Featured Collection
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Discover our signature pieces that blend street culture with high-end fashion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <Badge className="bg-accent text-accent-foreground text-xs">New</Badge>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Black Logo Oversized Tee</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                    Premium cotton with signature Ntho'estraight branding
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-bold text-foreground">R450</span>
                    <Link href={`/products/1`}>
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm"
                      >
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
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <Badge className="bg-secondary text-secondary-foreground text-xs">Popular</Badge>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Brown NTHO E STR8 Tee</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                    Earth-tone oversized fit with bold typography
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-bold text-foreground">R450</span>
                    <Link href={`/products/2`}>
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm"
                      >
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
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <Badge className="bg-accent text-accent-foreground text-xs">Limited</Badge>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Street Style Black Tee</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                    Urban aesthetic with premium comfort
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-bold text-foreground">R450</span>
                    <Link href={`/products/3`}>
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent w-full sm:w-auto"
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
