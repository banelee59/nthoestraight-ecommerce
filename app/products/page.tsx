"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Filter, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

const products = [
  {
    id: 1,
    name: "Black Logo Oversized Tee",
    price: 450,
    category: "t-shirts",
    image: "/images/prototype.jpg",
    description: "Premium cotton with signature Ntho'estraight branding",
    badge: "New",
    badgeColor: "accent",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: 2,
    name: "Brown NTHO E STR8 Tee",
    price: 450,
    category: "t-shirts",
    image: "/images/prototype2.jpg",
    description: "Earth-tone oversized fit with bold typography",
    badge: "Popular",
    badgeColor: "secondary",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: 3,
    name: "Street Style Black Tee",
    price: 450,
    category: "t-shirts",
    image: "/images/prototype1.jpg",
    description: "Urban aesthetic with premium comfort",
    badge: "Limited",
    badgeColor: "accent",
    sizes: ["M", "L", "XL"],
    inStock: true,
  },
  {
    id: 4,
    name: "Classic Straight Jeans",
    price: 850,
    category: "jeans",
    image: "/dark-blue-straight-leg-jeans-on-model.png",
    description: "Premium denim with perfect fit and durability",
    badge: "Bestseller",
    badgeColor: "secondary",
    sizes: ["28", "30", "32", "34", "36", "38"],
    inStock: true,
  },
  {
    id: 5,
    name: "Relaxed Fit Jeans",
    price: 850,
    category: "jeans",
    image: "/light-blue-relaxed-fit-jeans-streetwear-style.png",
    description: "Comfortable relaxed cut for everyday wear",
    badge: "New",
    badgeColor: "accent",
    sizes: ["28", "30", "32", "34", "36", "38"],
    inStock: true,
  },
  {
    id: 6,
    name: "Vintage Wash Jeans",
    price: 950,
    category: "jeans",
    image: "/vintage-washed-denim-jeans-with-distressed-details.png",
    description: "Vintage-inspired wash with authentic distressing",
    badge: "Limited",
    badgeColor: "accent",
    sizes: ["30", "32", "34", "36"],
    inStock: false,
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("name")

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true
    return product.category === selectedCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
      default:
        return a.name.localeCompare(b.name)
    }
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Our Collection</h1>
            <p className="text-muted-foreground">Discover authentic Johannesburg streetwear</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-card rounded-lg border border-border">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Filter & Sort:</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="t-shirts">T-Shirts</SelectItem>
                <SelectItem value="jeans">Jeans</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {sortedProducts.length} of {products.length} products
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-foreground">R{product.price}</span>
                    <div className="text-xs text-muted-foreground">
                      {product.category === "t-shirts" ? "Sizes: S-XXL" : "Sizes: 28-38"}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/products/${product.id}`} className="flex-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      >
                        View Details
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      disabled={!product.inStock}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
