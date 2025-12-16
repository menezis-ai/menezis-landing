import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PLANS = [
    {
        name: "SANDBOX",
        price: "0€",
        period: "/mo",
        target: "Explorers",
        features: ["1 Nano Instance (Hibernates)", "Full MCP Access", "Standard Aegis Security", "Community Support"],
        cta: "Start Building",
        highlight: false,
    },
    {
        name: "PRODUCTION",
        price: "15.99€",
        period: "/mo",
        target: "Startups",
        features: ["Guaranteed Resources (Sigilum-Small)", "Dedicated IP Address", "99.9% SLA", "Hourly Encrypted Backups", "Priority Support"],
        cta: "Deploy Production",
        highlight: true,
        highlightText: "Industrial Standard",
    },
    {
        name: "SOVEREIGN",
        price: "WHOLESALE",
        period: "",
        target: "Scale-ups",
        features: ["Bare Metal Provisioning", "Hardware Ownership", "Unlimited API Calls", "24/7 Dedicated Engineer", "Custom SLA"],
        cta: "Scale Infrastructure",
        highlight: false,
        priceDetail: "Cost + 20% Management Fee",
    },
];

export function PricingTable() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan) => (
                <div
                    key={plan.name}
                    className={cn(
                        "relative flex flex-col p-8 rounded-lg border backdrop-blur-sm",
                        plan.highlight
                            ? "border-terminal-green/30 bg-terminal-green/5 shadow-[0_0_30px_rgba(0,255,65,0.05)]"
                            : "border-white/10 bg-black/40 hover:border-white/20"
                    )}
                >
                    {plan.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1 bg-terminal-green text-black text-xs font-bold tracking-widest rounded-full whitespace-nowrap">
                            {plan.highlightText}
                        </div>
                    )}

                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-white tracking-widest">{plan.name}</h3>
                        <p className="text-sm text-neutral-500 mb-4">{plan.target}</p>
                        <div className="flex flex-col">
                            <div className="flex items-baseline gap-1">
                                <span className={cn("font-bold text-white", plan.price === "WHOLESALE" ? "text-3xl" : "text-4xl")}>{plan.price}</span>
                                <span className="text-neutral-500">{plan.period}</span>
                            </div>
                            {/* @ts-ignore */}
                            {plan.priceDetail && (
                                <div className="text-xs text-terminal-green mt-1 font-mono uppercase tracking-wider">
                                    {plan.priceDetail}
                                </div>
                            )}
                        </div>
                    </div>

                    <ul className="flex-1 space-y-4 mb-8">
                        {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-sm text-neutral-300">
                                <Check size={16} className="text-terminal-green mt-0.5 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        className={cn(
                            "w-full py-3 px-4 rounded font-mono text-sm font-bold uppercase tracking-wider transition-all active:scale-95",
                            plan.highlight
                                ? "bg-terminal-green text-black hover:bg-terminal-green/90 hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
                                : "bg-white/10 text-white hover:bg-white/20 border border-white/5"
                        )}
                    >
                        {plan.cta}
                    </button>
                </div>
            ))}
        </div>
    );
}
