"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, ArrowLeft, CreditCard, Truck, MapPin, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { useCart } from "@/lib/cart-context"

interface CustomerInfo {
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

export default function CheckoutPage() {
  const { state, dispatch } = useCart()
  const router = useRouter()
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    specialInstructions: "",
  })
  const [paymentMethod, setPaymentMethod] = useState<string>("")
  const [isProcessing, setIsProcessing] = useState(false)

  const shippingCost = state.total >= 500 ? 0 : 50
  const finalTotal = state.total + shippingCost

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmitOrder = async () => {
    if (
      !paymentMethod ||
      !customerInfo.firstName ||
      !customerInfo.email ||
      !customerInfo.phone ||
      !customerInfo.address
    ) {
      alert("Please fill in all required fields")
      return
    }

    setIsProcessing(true)

    // Simulate order processing
    setTimeout(() => {
      const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase()

      // Store order details for confirmation page
      const orderDetails = {
        orderNumber,
        items: state.items,
        customerInfo,
        paymentMethod,
        subtotal: state.total,
        shipping: shippingCost,
        total: finalTotal,
        orderDate: new Date().toISOString(),
      }

      localStorage.setItem("last-order", JSON.stringify(orderDetails))

      // Clear cart
      dispatch({ type: "CLEAR_CART" })

      // Redirect to confirmation
      router.push(`/order-confirmation?order=${orderNumber}`)
    }, 2000)
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Add some items to your cart before checking out.</p>
          <Link href="/products">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/products" className="mr-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
            <p className="text-muted-foreground">Complete your order</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={customerInfo.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={customerInfo.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                  />
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
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Enter your street address"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={customerInfo.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <Label htmlFor="province">Province</Label>
                    <Select
                      value={customerInfo.province}
                      onValueChange={(value) => handleInputChange("province", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select province" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gauteng">Gauteng</SelectItem>
                        <SelectItem value="western-cape">Western Cape</SelectItem>
                        <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                        <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                        <SelectItem value="free-state">Free State</SelectItem>
                        <SelectItem value="limpopo">Limpopo</SelectItem>
                        <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
                        <SelectItem value="north-west">North West</SelectItem>
                        <SelectItem value="northern-cape">Northern Cape</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      value={customerInfo.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                      placeholder="Postal code"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                  <Textarea
                    id="specialInstructions"
                    value={customerInfo.specialInstructions}
                    onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                    placeholder="Any special delivery instructions..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash-on-delivery">Cash on Delivery</SelectItem>
                    <SelectItem value="bank-transfer">Bank Transfer (EFT)</SelectItem>
                    <SelectItem value="store-pickup">Pay at Store (Pickup)</SelectItem>
                  </SelectContent>
                </Select>
                {paymentMethod === "bank-transfer" && (
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Bank transfer details will be provided after order confirmation.
                    </p>
                  </div>
                )}
                {paymentMethod === "store-pickup" && (
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Pick up your order at our store: 4420 Herby Mdingi Street, Orlando East, Soweto
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-3">
                  {state.items.map((item, index) => (
                    <div key={`${item.id}-${item.size}-${index}`} className="flex gap-3">
                      <div className="relative w-12 h-15 flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Qty: {item.quantity}</span>
                          <span className="text-sm font-semibold text-foreground">R{item.price * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="text-foreground">R{state.total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping:</span>
                    <span className="text-foreground">
                      {shippingCost === 0 ? (
                        <Badge variant="secondary" className="text-xs">
                          Free
                        </Badge>
                      ) : (
                        `R${shippingCost}`
                      )}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-foreground">Total:</span>
                    <span className="text-accent">R{finalTotal}</span>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">Shipping Info</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {shippingCost === 0
                      ? "Free shipping on orders over R500"
                      : "Standard shipping: R50 (3-5 business days)"}
                  </p>
                </div>

                {/* Place Order Button */}
                <Button
                  onClick={handleSubmitOrder}
                  disabled={isProcessing || !paymentMethod || !customerInfo.firstName || !customerInfo.email}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                  size="lg"
                >
                  {isProcessing ? "Processing..." : `Place Order - R${finalTotal}`}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By placing your order, you agree to our terms and conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
