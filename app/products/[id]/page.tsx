"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useCart } from "@/lib/cart-context"
import { Navbar } from "@/components/navbar"

const products = [
  {
    id: 1,
    name: "Black Logo Oversized Tee",
    price: 450,
    category: "t-shirts",
    image: "/images/prototype.jpg",
    description: "Premium cotton with signature Ntho'estraight branding",
    fullDescription:
      "This premium oversized t-shirt features our signature Ntho'estraight branding with a unique graphic design. Made from 100% premium cotton for ultimate comfort and durability. The relaxed fit makes it perfect for everyday wear while maintaining that authentic Johannesburg street style.",
    badge: "New",
    badgeColor: "accent",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    material: "100% Premium Cotton",
    care: "Machine wash cold, tumble dry low",
    features: ["Oversized fit", "Premium cotton", "Signature branding", "Comfortable wear"],
  },
  {
    id: 2,
    name: "Brown NTHO E STR8 Tee",
    price: 450,
    category: "t-shirts",
    image: "/images/prototype2.jpg",
    description: "Earth-tone oversized fit with bold typography",
    fullDescription:
      "A standout piece in our collection featuring bold 'NTHO E STR8' typography in a rich brown colorway. This oversized tee combines comfort with street credibility, perfect for making a statement while staying true to your roots.",
    badge: "Popular",
    badgeColor: "secondary",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    material: "100% Premium Cotton",
    care: "Machine wash cold, tumble dry low",
    features: ["Bold typography", "Earth-tone color", "Oversized fit", "Street style"],
  },
  {
    id: 3,
    name: "Street Style Black Tee",
    price: 450,
    category: "t-shirts",
    image: "/images/prototype1.jpg",
    description: "Urban aesthetic with premium comfort",
    fullDescription:
      "Embodying the essence of Johannesburg street culture, this black tee features our distinctive branding with an urban edge. Limited quantities available, making it a must-have for collectors and style enthusiasts.",
    badge: "Limited",
    badgeColor: "accent",
    sizes: ["M", "L", "XL"],
    inStock: true,
    material: "100% Premium Cotton",
    care: "Machine wash cold, tumble dry low",
    features: ["Limited edition", "Urban design", "Premium comfort", "Collector's item"],
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const product = products.find((p) => p.id === productId)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const [justAdded, setJustAdded] = useState(false)
  const { state, dispatch, openCart } = useCart()

  console.log("[v0] Cart context state:", state)
  console.log("[v0] Cart dispatch function:", dispatch)

  const addToCart = async () => {
    console.log("[v0] Add to cart clicked - Product:", product?.name, "Size:", selectedSize)

    if (!product || !selectedSize) {
      console.log("[v0] Cannot add to cart - Missing product or size")
      return
    }

    setIsAdding(true)
    console.log("[v0] Adding to cart:", { product: product.name, size: selectedSize, quantity })

    try {
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
        quantity: quantity,
        category: product.category,
      }

      console.log("[v0] Dispatching ADD_ITEM with payload:", cartItem)

      dispatch({
        type: "ADD_ITEM",
        payload: cartItem,
      })

      console.log("[v0] Dispatch completed, cart state should be updated")

      setJustAdded(true)

      setTimeout(() => {
        console.log("[v0] Opening cart sidebar")
        openCart()
      }, 500)

      console.log("[v0] Item added to cart successfully")

      // Reset success state after 2 seconds
      setTimeout(() => {
        setJustAdded(false)
      }, 2000)
    } catch (error) {
      console.error("[v0] Error adding to cart:", error)
    } finally {
      setIsAdding(false)
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link href="/products" className="text-muted-foreground hover:text-foreground">
            Products
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-card">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge
                  className={
                    product.badgeColor === "accent"
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }
                >
                  {product.badge}
                </Badge>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-xl font-semibold text-accent mb-4">R{product.price}</p>
              <p className="text-muted-foreground">{product.fullDescription}</p>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Size</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Quantity</label>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 p-0"
                >
                  -
                </Button>
                <span className="text-foreground font-medium w-8 text-center">{quantity}</span>
                <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 p-0">
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button
                size="lg"
                disabled={!selectedSize || isAdding}
                onClick={addToCart}
                className={`w-full transition-all duration-200 active:scale-95 ${
                  justAdded
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                } disabled:opacity-50`}
              >
                {isAdding ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Adding...
                  </>
                ) : justAdded ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart - R{product.price * quantity}
                  </>
                )}
              </Button>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 bg-transparent hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 bg-transparent hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Product Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="text-foreground">{product.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Care:</span>
                    <span className="text-foreground">{product.care}</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <span className="text-muted-foreground mb-2 block">Features:</span>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-foreground text-sm">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border">
                <Truck className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">Orders over R500</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border">
                <Shield className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">Secure Payment</p>
                  <p className="text-xs text-muted-foreground">100% protected</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border">
                <RotateCcw className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">30-day policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
