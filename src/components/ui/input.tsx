import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "t-flex t-h-10 t-w-full t-rounded-md t-border t-border-input t-bg-background t-px-3 t-py-2 t-text-sm t-ring-offset-background file:t-border-0 file:t-bg-transparent file:t-text-sm file:t-font-medium placeholder:t-text-muted-foreground focus-visible:t-outline-none focus-visible:t-ring-2 focus-visible:t-ring-ring focus-visible:t-ring-offset-2 disabled:t-cursor-not-allowed disabled:t-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
