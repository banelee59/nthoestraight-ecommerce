"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart, X, Plus, Minus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"

export function CartSidebar() {
  const { state, dispatch } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: "REMOVE_ITEM", payload: index })
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id: index, quantity: newQuantity } })
    }
  }

  const removeItem = (index: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: index })
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 relative">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Cart ({state.itemCount})
          {state.itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-1 min-w-5 h-5">
              {state.itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Shopping Cart ({state.itemCount} items)
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {state.items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">Your cart is empty</p>
                <Button onClick={() => setIsOpen(false)} asChild>
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4 space-y-4">
                {state.items.map((item, index) => (
                  <Card key={`${item.id}-${item.size}-${index}`}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="relative w-16 h-20 flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                          <p className="text-sm font-semibold text-accent">R{item.price}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(index, item.quantity - 1)}
                                className="w-6 h-6 p-0"
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(index, item.quantity + 1)}
                                className="w-6 h-6 p-0"
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(index)}
                              className="text-destructive hover:text-destructive p-1"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">Total:</span>
                  <span className="text-lg font-bold text-accent">R{state.total}</span>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/checkout" onClick={() => setIsOpen(false)}>
                      Proceed to Checkout
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                    onClick={() => setIsOpen(false)}
                    asChild
                  >
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
