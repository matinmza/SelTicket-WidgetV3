import { cn } from "@/lib/utils";

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("t-animate-pulse  t-bg-muted", className)}
            {...props}
        />
    );
}

export { Skeleton };
