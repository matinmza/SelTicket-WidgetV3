import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "t-inline-flex t-items-center t-justify-center t-whitespace-nowrap t-rounded-md t-text-sm t-font-medium t-ring-offset-background t-transition-colors focus-visible:t-outline-none focus-visible:t-ring-2 focus-visible:t-ring-ring focus-visible:t-ring-offset-2 disabled:t-pointer-events-none disabled:t-opacity-50",
  {
    variants: {
      variant: {
        default: "t-bg-primary t-text-primary-foreground hover:t-bg-primary/90",
        destructive:
          "t-bg-destructive t-text-destructive-foreground hover:t-bg-destructive/90",
        outline:
          "t-border t-border-input t-bg-background hover:t-bg-accent hover:t-text-accent-foreground",
        secondary:
          "t-bg-secondary t-text-secondary-foreground hover:t-bg-secondary/80",
        ghost: "hover:t-bg-accent hover:t-text-accent-foreground",
        link: "t-text-primary t-underline-offset-4 hover:t-underline",
      },
      size: {
        default: "t-h-10 t-px-4 t-py-2",
        sm: "t-h-9 t-rounded-md t-px-3",
        lg: "t-h-11 t-rounded-md t-px-8",
        icon: "t-h-10 t-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
