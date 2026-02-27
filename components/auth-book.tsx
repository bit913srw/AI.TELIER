"use client"

import { useState } from "react"
import { SignInForm } from "./sign-in-form"
import { CreateAccountForm } from "./create-account-form"
import { AccountTypePopup } from "./account-type-popup"

type Tab = "sign-in" | "create-account"

export function AuthBook() {
  const [activeTab, setActiveTab] = useState<Tab>("sign-in")
  const [showAccountType, setShowAccountType] = useState(false)

  return (
    <>
      <div className="relative w-full max-w-[520px] mx-auto">
        {/* Book shadow */}
        <div
          className="absolute inset-0 translate-y-3 translate-x-3 rounded-sm bg-[#2A2A2A]/20 blur-md"
          aria-hidden="true"
        />

        {/* Book cover */}
        <div className="relative rounded-sm overflow-hidden" style={{ backgroundColor: "#8B1A1A" }}>
          {/* Subtle book spine line on left */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px]"
            style={{ backgroundColor: "rgba(0,0,0,0.15)" }}
            aria-hidden="true"
          />

          <div className="px-8 pt-8 pb-10 sm:px-12 sm:pt-10 sm:pb-12">
            {/* Tabs */}
            <nav className="flex gap-8 mb-8" role="tablist" aria-label="Authentication">
              <button
                role="tab"
                aria-selected={activeTab === "sign-in"}
                aria-controls="sign-in-panel"
                className="relative pb-2 text-xs tracking-[0.25em] uppercase transition-opacity"
                style={{
                  color: "#F0EDE8",
                  opacity: activeTab === "sign-in" ? 1 : 0.5,
                }}
                onClick={() => setActiveTab("sign-in")}
              >
                Sign In
                {activeTab === "sign-in" && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[1px]"
                    style={{ backgroundColor: "#F0EDE8" }}
                  />
                )}
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "create-account"}
                aria-controls="create-account-panel"
                className="relative pb-2 text-xs tracking-[0.25em] uppercase transition-opacity"
                style={{
                  color: "#F0EDE8",
                  opacity: activeTab === "create-account" ? 1 : 0.5,
                }}
                onClick={() => setActiveTab("create-account")}
              >
                Create Account
                {activeTab === "create-account" && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[1px]"
                    style={{ backgroundColor: "#F0EDE8" }}
                  />
                )}
              </button>
            </nav>

            {/* Tab Panels */}
            {activeTab === "sign-in" ? (
              <div role="tabpanel" id="sign-in-panel" aria-labelledby="sign-in-tab">
                <SignInForm onSwitchTab={() => setActiveTab("create-account")} />
              </div>
            ) : (
              <div role="tabpanel" id="create-account-panel" aria-labelledby="create-account-tab">
                <CreateAccountForm
                  onSwitchTab={() => setActiveTab("sign-in")}
                  onCreateAccount={() => setShowAccountType(true)}
                />
              </div>
            )}

            {/* Brand watermark */}
            <p
              className="text-center mt-10 font-serif text-sm tracking-[0.15em]"
              style={{ color: "rgba(240,237,232,0.35)" }}
            >
              AI.TELIER
            </p>
          </div>
        </div>
      </div>

      {/* Account Type Popup */}
      {showAccountType && (
        <AccountTypePopup onClose={() => setShowAccountType(false)} />
      )}
    </>
  )
}
