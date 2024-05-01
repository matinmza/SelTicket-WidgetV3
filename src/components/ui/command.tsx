import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
    <CommandPrimitive
        ref={ref}
        className={cn(
            "t-flex t-h-full t-w-full t-flex-col t-overflow-hidden t-rounded-md t-bg-popover t-text-popover-foreground",
            className
        )}
        {...props}
    />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
    return (
        <Dialog {...props}>
            <DialogContent className="t-overflow-hidden t-p-0 t-shadow-lg">
                <Command className="[&_[cmdk-group-heading]]:t-px-2 [&_[cmdk-group-heading]]:t-font-medium [&_[cmdk-group-heading]]:t-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:t-pt-0 [&_[cmdk-group]]:t-px-2 [&_[cmdk-input-wrapper]_svg]:t-h-5 [&_[cmdk-input-wrapper]_svg]:t-w-5 [&_[cmdk-input]]:t-h-12 [&_[cmdk-item]]:t-px-2 [&_[cmdk-item]]:t-py-3 [&_[cmdk-item]_svg]:t-h-5 [&_[cmdk-item]_svg]:t-w-5">
                    {children}
                </Command>
            </DialogContent>
        </Dialog>
    );
};

const CommandInput = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Input>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
    <div
        className="t-flex t-items-center t-border-b t-px-3"
        cmdk-input-wrapper=""
    >
        <Search className="t-ml-2 t-h-4 t-w-4 t-shrink-0 t-opacity-50" />
        <CommandPrimitive.Input
            ref={ref}
            className={cn(
                "t-flex t-h-11 t-w-full t-rounded-md t-bg-transparent t-py-3 t-text-sm t-outline-none placeholder:t-text-muted-foreground disabled:t-cursor-not-allowed disabled:t-opacity-50",
                className
            )}
            {...props}
        />
    </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.List
        ref={ref}
        className={cn(
            "t-max-h-[300px] t-overflow-y-auto t-overflow-x-hidden",
            className
        )}
        {...props}
    />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Empty>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
    <CommandPrimitive.Empty
        ref={ref}
        className="t-py-6 t-text-center t-text-sm"
        {...props}
    />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Group>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Group
        ref={ref}
        className={cn(
            "t-overflow-hidden t-p-1 t-text-foreground [&_[cmdk-group-heading]]:t-px-2 [&_[cmdk-group-heading]]:t-py-1.5 [&_[cmdk-group-heading]]:t-text-xs [&_[cmdk-group-heading]]:t-font-medium [&_[cmdk-group-heading]]:t-text-muted-foreground",
            className
        )}
        {...props}
    />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Separator
        ref={ref}
        className={cn("t--mx-1 t-h-px t-bg-border", className)}
        {...props}
    />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Item
        ref={ref}
        className={cn(
            "t-relative t-flex t-cursor-default t-select-none t-items-center t-rounded-sm t-px-2 t-py-1.5 t-text-sm t-outline-none aria-selected:t-bg-accent aria-selected:t-text-accent-foreground data-[disabled]:t-pointer-events-none data-[disabled]:t-opacity-50",
            className
        )}
        {...props}
    />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={cn(
                "t-ml-auto t-text-xs t-tracking-widest t-text-muted-foreground",
                className
            )}
            {...props}
        />
    );
};
CommandShortcut.displayName = "CommandShortcut";

export {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
};
