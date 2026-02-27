"use client"

import { X, Trash2, CreditCard, Smartphone, Building2, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useCart } from "./cart-context"

type PaymentMethod = "card" | "apple" | "bank" | null

export function CartDrawer() {
  const { items, removeFromCart, clearCart, totalPrice, isOpen, setIsOpen } =
    useCart()
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  function handleCheckout() {
    if (!selectedPayment) return
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
      setTimeout(() => {
        clearCart()
        setIsSuccess(false)
        setSelectedPayment(null)
        setIsOpen(false)
      }, 2000)
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        aria-hidden
      />

      {/* Drawer */}
      <div
        className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-background shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-serif text-lg tracking-[0.05em] text-foreground">
            Your Cart
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 && !isSuccess ? (
            <div className="flex flex-col items-center justify-center py-20 px-5">
              <div className="mb-4 flex h-16 w-16 items-center justify-center border border-border">
                <ShieldCheck className="h-6 w-6 text-muted-foreground" strokeWidth={1} />
              </div>
              <p className="font-serif text-base text-foreground">
                Cart is empty
              </p>
              <p className="mt-1 font-sans text-[11px] tracking-wide text-muted-foreground">
                Browse patterns and add them to your cart
              </p>
            </div>
          ) : isSuccess ? (
            <div className="flex flex-col items-center justify-center py-20 px-5">
              <div className="mb-4 flex h-16 w-16 items-center justify-center border border-primary">
                <ShieldCheck className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <p className="font-serif text-base text-primary">
                Payment Successful
              </p>
              <p className="mt-1 font-sans text-[11px] tracking-wide text-muted-foreground">
                Your patterns are ready to download
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map((item) => (
                <li key={item.pattern.id} className="flex gap-4 px-5 py-4">
                  <div className="relative h-20 w-16 shrink-0 overflow-hidden">
                    <Image
                      src={item.pattern.image}
                      alt={item.pattern.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-0.5">
                    <div>
                      <h3 className="font-serif text-sm leading-tight text-foreground">
                        {item.pattern.title}
                      </h3>
                      <p className="mt-0.5 font-sans text-[10px] tracking-wide text-muted-foreground uppercase">
                        {item.pattern.designer}
                      </p>
                    </div>
                    <p className="font-sans text-sm font-bold text-primary">
                      {"$"}{item.pattern.price}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.pattern.id)}
                    className="self-center p-1.5 text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`Remove ${item.pattern.title} from cart`}
                  >
                    <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer with payment */}
        {items.length > 0 && !isSuccess && (
          <div className="border-t border-border px-5 py-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                Subtotal
              </span>
              <span className="font-serif text-lg text-foreground">
                {"$"}{totalPrice}
              </span>
            </div>

            {/* Payment methods */}
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2.5">
              Payment Method
            </p>
            <div className="flex flex-col gap-2 mb-4">
              <button
                onClick={() => setSelectedPayment("card")}
                className={`flex items-center gap-3 px-4 py-3 border transition-all ${
                  selectedPayment === "card"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                <CreditCard
                  className={`h-4 w-4 ${
                    selectedPayment === "card" ? "text-primary" : "text-muted-foreground"
                  }`}
                  strokeWidth={1.5}
                />
                <span className="flex-1 text-left font-sans text-xs tracking-wide text-foreground">
                  Credit / Debit Card
                </span>
                {selectedPayment === "card" && (
                  <span className="h-2 w-2 rounded-full bg-primary" />
                )}
              </button>

              <button
                onClick={() => setSelectedPayment("apple")}
                className={`flex items-center gap-3 px-4 py-3 border transition-all ${
                  selectedPayment === "apple"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                <Smartphone
                  className={`h-4 w-4 ${
                    selectedPayment === "apple" ? "text-primary" : "text-muted-foreground"
                  }`}
                  strokeWidth={1.5}
                />
                <span className="flex-1 text-left font-sans text-xs tracking-wide text-foreground">
                  Apple Pay / Google Pay
                </span>
                {selectedPayment === "apple" && (
                  <span className="h-2 w-2 rounded-full bg-primary" />
                )}
              </button>

              <button
                onClick={() => setSelectedPayment("bank")}
                className={`flex items-center gap-3 px-4 py-3 border transition-all ${
                  selectedPayment === "bank"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                <Building2
                  className={`h-4 w-4 ${
                    selectedPayment === "bank" ? "text-primary" : "text-muted-foreground"
                  }`}
                  strokeWidth={1.5}
                />
                <span className="flex-1 text-left font-sans text-xs tracking-wide text-foreground">
                  Bank Transfer
                </span>
                {selectedPayment === "bank" && (
                  <span className="h-2 w-2 rounded-full bg-primary" />
                )}
              </button>
            </div>

            {/* Checkout button */}
            <button
              onClick={handleCheckout}
              disabled={!selectedPayment || isProcessing}
              className={`flex w-full items-center justify-center py-3.5 font-sans text-xs tracking-[0.2em] uppercase transition-all ${
                selectedPayment && !isProcessing
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              {isProcessing ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 animate-spin border border-primary-foreground border-t-transparent rounded-full" />
                  Processing
                </span>
              ) : (
                `Pay $${totalPrice}`
              )}
            </button>

            <p className="mt-3 text-center font-sans text-[9px] tracking-wide text-muted-foreground">
              Secure checkout — patterns available instantly after payment
            </p>
          </div>
        )}
      </div>
    </>
  )
}
