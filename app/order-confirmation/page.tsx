"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Package, Truck, MapPin, Phone, Mail, Calendar, CreditCard } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { CartSidebar } from "@/components/cart-sidebar"

interface OrderDetails {
  orderNumber: string
  items: Array<{
    id: number
    name: string
    price: number
    image: string
    size: string
    quantity: number
    category: string
  }>
  customerInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    city: string
    province: string
    postalCode: string
    specialInstructions: string
  }
  paymentMethod: string
  subtotal: number
  shipping: number
  total: number
  orderDate: string
}

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get("order")
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)

  useEffect(() => {
    const savedOrder = localStorage.getItem("last-order")
    if (savedOrder) {
      try {
        const order = JSON.parse(savedOrder)
        if (order.orderNumber === orderNumber) {
          setOrderDetails(order)
        }
      } catch (error) {
        console.error("Failed to load order details:", error)
      }
    }
  }, [orderNumber])

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
                  Ntho'estraight
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/products" className="text-foreground hover:text-accent transition-colors">
                  All Products
                </Link>
                <Link href="/#about" className="text-foreground hover:text-accent transition-colors">
                  About
                </Link>
                <Link href="/#contact" className="text-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </div>
              <CartSidebar />
            </div>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Order not found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find the order you're looking for.</p>
          <Link href="/products">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  const formatPaymentMethod = (method: string) => {
    switch (method) {
      case "cash-on-delivery":
        return "Cash on Delivery"
      case "bank-transfer":
        return "Bank Transfer (EFT)"
      case "store-pickup":
        return "Pay at Store (Pickup)"
      default:
        return method
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
                Ntho'estraight
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/products" className="text-foreground hover:text-accent transition-colors">
                All Products
              </Link>
              <Link href="/#about" className="text-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/#contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
            <CartSidebar />
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-4">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Order #{orderDetails.orderNumber}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Order Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderDetails.items.map((item, index) => (
                    <div key={`${item.id}-${item.size}-${index}`} className="flex gap-4 p-4 bg-muted rounded-lg">
                      <div className="relative w-16 h-20 flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-muted-foreground">Quantity: {item.quantity}</span>
                          <span className="font-semibold text-foreground">R{item.price * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">
                    {orderDetails.customerInfo.firstName} {orderDetails.customerInfo.lastName}
                  </p>
                  <p className="text-muted-foreground">{orderDetails.customerInfo.address}</p>
                  <p className="text-muted-foreground">
                    {orderDetails.customerInfo.city}
                    {orderDetails.customerInfo.province && `, ${orderDetails.customerInfo.province}`}
                    {orderDetails.customerInfo.postalCode && ` ${orderDetails.customerInfo.postalCode}`}
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      {orderDetails.customerInfo.phone}
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {orderDetails.customerInfo.email}
                    </div>
                  </div>
                  {orderDetails.customerInfo.specialInstructions && (
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm font-medium text-foreground mb-1">Special Instructions:</p>
                      <p className="text-sm text-muted-foreground">{orderDetails.customerInfo.specialInstructions}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Order Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Order Date:</span>
                    <span className="text-foreground">{new Date(orderDetails.orderDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Payment:</span>
                    <span className="text-foreground">{formatPaymentMethod(orderDetails.paymentMethod)}</span>
                  </div>
                </div>

                <Separator />

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="text-foreground">R{orderDetails.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping:</span>
                    <span className="text-foreground">
                      {orderDetails.shipping === 0 ? (
                        <Badge variant="secondary" className="text-xs">
                          Free
                        </Badge>
                      ) : (
                        `R${orderDetails.shipping}`
                      )}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-foreground">Total:</span>
                    <span className="text-accent">R{orderDetails.total}</span>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">What's Next?</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    We'll process your order and send you tracking information via email.
                  </p>
                  {orderDetails.paymentMethod === "bank-transfer" && (
                    <p className="text-xs text-muted-foreground">Bank transfer details have been sent to your email.</p>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Link href="/products" className="block">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Continue Shopping
                    </Button>
                  </Link>
                  <Link href="/#contact" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
