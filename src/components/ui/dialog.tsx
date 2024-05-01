import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "t-fixed t-inset-0 t-z-50 t-bg-black/80 t- data-[state=open]:t-animate-in data-[state=closed]:t-animate-out data-[state=closed]:t-fade-out-0 data-[state=open]:t-fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "t-fixed t-left-[50%] t-top-[50%] t-z-50 t-grid t-w-full t-max-w-lg t-translate-x-[-50%] t-translate-y-[-50%] t-gap-4 t-border t-bg-background t-p-6 t-shadow-lg t-duration-200 data-[state=open]:t-animate-in data-[state=closed]:t-animate-out data-[state=closed]:t-fade-out-0 data-[state=open]:t-fade-in-0 data-[state=closed]:t-zoom-out-95 data-[state=open]:t-zoom-in-95 data-[state=closed]:t-slide-out-to-left-1/2 data-[state=closed]:t-slide-out-to-top-[48%] data-[state=open]:t-slide-in-from-left-1/2 data-[state=open]:t-slide-in-from-top-[48%] sm:t-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="t-absolute t-right-4 t-top-4 t-rounded-sm t-opacity-70 t-ring-offset-background t-transition-opacity hover:t-opacity-100 focus:t-outline-none focus:t-ring-2 focus:t-ring-ring focus:t-ring-offset-2 disabled:t-pointer-events-none data-[state=open]:t-bg-accent data-[state=open]:t-text-muted-foreground">
        <X className="t-h-4 t-w-4" />
        <span className="t-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "t-flex t-flex-col t-space-y-1.5 t-text-center sm:t-text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "t-flex t-flex-col-reverse sm:t-flex-row sm:t-justify-end sm:t-space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "t-text-lg t-font-semibold t-leading-none t-tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("t-text-sm t-text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
