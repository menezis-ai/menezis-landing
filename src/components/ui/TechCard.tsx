import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface TechCardProps {
    title: string;
    description: React.ReactNode;
    icon: LucideIcon;
    className?: string;
    variant?: "default" | "alert" | "success" | "info";
}

export function TechCard({ title, description, icon: Icon, className, variant = "default" }: TechCardProps) {
    const variantColors = {
        default: "text-neutral-400 border-white/10 group-hover:border-white/20",
        alert: "text-alert-amber border-alert-amber/20 group-hover:border-alert-amber/40",
        success: "text-terminal-green border-terminal-green/20 group-hover:border-terminal-green/40",
        info: "text-electric-blue border-electric-blue/20 group-hover:border-electric-blue/40"
    };

    const iconStyles = {
        default: "text-terminal-green bg-terminal-green/10 border-terminal-green/20 shadow-[0_0_20px_rgba(0,255,65,0.2)]",
        alert: "text-alert-amber bg-alert-amber/10 border-alert-amber/20 shadow-[0_0_20px_rgba(255,176,0,0.2)]",
        success: "text-terminal-green bg-terminal-green/10 border-terminal-green/20 shadow-[0_0_20px_rgba(0,255,65,0.2)]",
        info: "text-electric-blue bg-electric-blue/10 border-electric-blue/20 shadow-[0_0_20px_rgba(0,122,255,0.2)]"
    }

    return (
        <div className={cn(
            "p-6 rounded-lg border bg-[radial-gradient(circle_at_center,#111111_0%,#050505_100%)] backdrop-blur-sm transition-all duration-300 group hover:bg-white/5",
            variantColors[variant],
            className
        )}>
            <div className={cn("mb-4 p-4 w-fit rounded-full border transition-all duration-300", iconStyles[variant])}>
                <Icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-mono">
                {description}
            </p>
        </div>
    )
}
