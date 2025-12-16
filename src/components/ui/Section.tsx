import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
    return (
        <section
            className={cn("relative py-16 sm:py-24 overflow-hidden", className)}
            {...props}
        >
            {children}
        </section>
    );
}
