import React from "react";
import { cn } from "@/lib/utils";

const INSTANCES = [
    { name: "nano", cpu: "0.5", ram: "512MB", disk: "5GB", price: "FREE", highlight: false, badge: "Free Tier" },
    { name: "micro", cpu: "1", ram: "1GB", disk: "25GB", price: "5.99€", highlight: false },
    { name: "small", cpu: "2", ram: "2GB", disk: "50GB", price: "12.99€", highlight: true, badge: "Popular" },
    { name: "medium", cpu: "2", ram: "4GB", disk: "60GB", price: "24.99€", highlight: false },
    { name: "large", cpu: "4", ram: "8GB", disk: "160GB", price: "49.99€", highlight: false },
    { name: "business", cpu: "8", ram: "16GB", disk: "320GB", price: "99.99€", highlight: false, badge: "Priority Support" },
];

export function PricingTable() {
    return (
        <div className="space-y-6">
            {/* Instance Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {INSTANCES.map((instance) => (
                    <div
                        key={instance.name}
                        className={cn(
                            "relative flex flex-col p-4 rounded-lg border backdrop-blur-sm text-center",
                            instance.highlight
                                ? "border-terminal-green/50 bg-terminal-green/5 shadow-[0_0_20px_rgba(0,255,65,0.1)]"
                                : "border-white/10 bg-black/40 hover:border-white/20"
                        )}
                    >
                        {instance.badge && (
                            <div className={cn(
                                "absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-bold tracking-wider rounded-full whitespace-nowrap",
                                instance.highlight ? "bg-terminal-green text-black" : "bg-white/10 text-white/70"
                            )}>
                                {instance.badge}
                            </div>
                        )}

                        <h3 className="text-sm font-bold text-white tracking-widest uppercase mt-2 mb-3">
                            {instance.name}
                        </h3>

                        <div className="text-2xl font-bold text-white mb-4">
                            {instance.price}
                            {instance.price !== "FREE" && <span className="text-xs text-neutral-500 font-normal">/mo</span>}
                        </div>

                        <div className="space-y-1 text-xs text-neutral-400 font-mono">
                            <div>{instance.cpu} vCPU</div>
                            <div>{instance.ram} RAM</div>
                            <div>{instance.disk} SSD</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add-ons + Elastic Architecture */}
            <div className="pt-8 border-t border-white/5">
                <p className="text-sm text-terminal-green mb-1 text-center font-mono">
                    ⚡ Elastic Architecture
                </p>
                <p className="text-sm text-neutral-500 mb-4 text-center">Resize or migrate instances with zero downtime</p>
                <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
                    <div className="bg-white/5 px-4 py-2 rounded border border-white/10">
                        <span className="text-white">+1 vCPU</span>
                        <span className="text-neutral-500 ml-2">4.00€/mo</span>
                    </div>
                    <div className="bg-white/5 px-4 py-2 rounded border border-white/10">
                        <span className="text-white">+1 GB RAM</span>
                        <span className="text-neutral-500 ml-2">3.00€/mo</span>
                    </div>
                    <div className="bg-white/5 px-4 py-2 rounded border border-white/10">
                        <span className="text-white">+10 GB NVMe</span>
                        <span className="text-neutral-500 ml-2">2.00€/mo</span>
                    </div>
                </div>
            </div>

            {/* All instances include */}
            <div className="text-center pt-6 border-t border-white/5">
                <p className="text-sm text-neutral-500 mb-3">All instances include:</p>
                <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-terminal-green">
                    <span>✓ Post-Quantum Security</span>
                    <span>✓ Auto-Healing</span>
                    <span>✓ Full MCP Access</span>
                    <span>✓ EU / US / SG Regions</span>
                </div>
                <p className="text-xs text-neutral-600 mt-3 font-mono">
                    Latest-gen AMD EPYC CPUs · Enterprise NVMe SSDs
                </p>
            </div>

            {/* Enterprise CTA */}
            <div className="mt-8 p-6 rounded-lg border border-electric-blue/30 bg-electric-blue/5 text-center">
                <h4 className="text-white font-bold tracking-widest mb-2">ENTERPRISE</h4>
                <p className="text-sm text-neutral-400 mb-4">
                    Custom CPU, ECC RAM & NVMe storage à la carte. Dedicated infrastructure. White-glove onboarding.
                </p>
                <a href="#" className="inline-block px-6 py-2 bg-electric-blue/20 text-electric-blue border border-electric-blue/30 rounded font-mono text-sm hover:bg-electric-blue/30 transition-colors">
                    Contact Sales →
                </a>
            </div>
        </div>
    );
}
