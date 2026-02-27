"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react"
import type { Pattern } from "@/lib/patterns-data"

export interface CartItem {
  pattern: Pattern
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (pattern: Pattern) => void
  removeFromCart: (patternId: string) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = useCallback((pattern: Pattern) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.pattern.id === pattern.id)
      if (existing) {
        return prev
      }
      return [...prev, { pattern, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((patternId: string) => {
    setItems((prev) => prev.filter((item) => item.pattern.id !== patternId))
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const totalItems = items.length
  const totalPrice = items.reduce(
    (sum, item) => sum + item.pattern.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
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
