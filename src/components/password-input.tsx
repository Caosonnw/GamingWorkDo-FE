"use client"

import * as React from "react"
import { Eye, EyeOff } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: "light" | "dark"
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, theme = "light", ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn(
            "pr-10",
            theme === "dark" && "bg-gray-800 text-white border-gray-700",
            className
          )}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2",
            theme === "dark" ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-800"
          )}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>
    )
  }
)

PasswordInput.displayName = "PasswordInput"

