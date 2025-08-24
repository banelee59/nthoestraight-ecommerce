"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect, useState } from "react"

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  size: string
  quantity: number
  category: string
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
  isCartOpen: boolean
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      console.log("[v0] Cart reducer - ADD_ITEM:", action.payload)
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.size === action.payload.size,
      )

      let newItems: CartItem[]
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + action.payload.quantity } : item,
        )
        console.log("[v0] Updated existing item quantity")
      } else {
        newItems = [...state.items, action.payload]
        console.log("[v0] Added new item to cart")
      }

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      console.log("[v0] New cart state:", { items: newItems.length, total, itemCount })
      return { items: newItems, total, itemCount }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((_, index) => index !== action.payload)
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount }
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items.map((item, index) =>
        index === action.payload.id ? { ...item, quantity: Math.max(1, action.payload.quantity) } : item,
      )
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount }
    }

    case "CLEAR_CART":
      return { items: [], total: 0, itemCount: 0 }

    case "LOAD_CART": {
      const total = action.payload.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = action.payload.reduce((sum, item) => sum + item.quantity, 0)
      return { items: action.payload, total, itemCount }
    }

    default:
      return state
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  })

  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    console.log("[v0] Toggling cart sidebar")
    setIsCartOpen(!isCartOpen)
  }

  const openCart = () => {
    console.log("[v0] Opening cart sidebar")
    setIsCartOpen(true)
  }

  const closeCart = () => {
    console.log("[v0] Closing cart sidebar")
    setIsCartOpen(false)
  }

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("ntho-cart")
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart)
        dispatch({ type: "LOAD_CART", payload: cartItems })
        console.log("[v0] Loaded cart from localStorage:", cartItems)
      } catch (error) {
        console.error("Failed to load cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("ntho-cart", JSON.stringify(state.items))
    console.log("[v0] Saved cart to localStorage:", state.items)
  }, [state.items])

  return (
    <CartContext.Provider value={{ state, dispatch, isCartOpen, toggleCart, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
