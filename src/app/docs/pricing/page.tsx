"use client";

import React from "react";
import { CreditCard, Check, Zap, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Nano",
    price: "Free",
    period: "forever",
    cpu: "0.5 vCPU",
    ram: "512MB",
    disk: "5GB SSD",
    features: ["1 instance per user", "Auto-hibernation", "Community support"],
    highlight: false,
    badge: "Free Tier",
  },
  {
    name: "Micro",
    price: "5.99",
    period: "/month",
    cpu: "1 vCPU",
    ram: "1GB",
    disk: "25GB SSD",
    features: ["Unlimited instances", "No hibernation", "Email support"],
    highlight: false,
  },
  {
    name: "Small",
    price: "12.99",
    period: "/month",
    cpu: "2 vCPU",
    ram: "2GB",
    disk: "50GB NVMe",
    features: ["Unlimited instances", "Priority support", "Custom domains"],
    highlight: true,
    badge: "Popular",
  },
  {
    name: "Medium",
    price: "24.99",
    period: "/month",
    cpu: "4 vCPU",
    ram: "4GB",
    disk: "80GB NVMe",
    features: ["High performance", "Dedicated resources", "Phone support"],
    highlight: false,
  },
  {
    name: "Large",
    price: "49.99",
    period: "/month",
    cpu: "8 vCPU",
    ram: "8GB",
    disk: "160GB NVMe",
    features: ["Enterprise workloads", "SLA 99.9%", "Dedicated support"],
    highlight: false,
  },
  {
    name: "Business",
    price: "99.99",
    period: "/month",
    cpu: "8 vCPU",
    ram: "16GB",
    disk: "320GB NVMe",
    features: ["Priority queue", "SLA 99.95%", "Account manager"],
    highlight: false,
    badge: "Priority",
  },
];

const ADDONS = [
  { name: "+1 vCPU", price: "4.00", unit: "/month" },
  { name: "+1 GB RAM", price: "3.00", unit: "/month" },
  { name: "+10 GB NVMe", price: "2.00", unit: "/month" },
];

const INCLUDED = [
  "Post-Quantum ML-KEM-768 security",
  "Operation Argus monitoring",
  "16 MCP tools",
  "EU / US / SG regions",
  "Automatic backups",
  "SSL certificates",
];

const FAQ = [
  {
    question: "How does billing work?",
    answer: "Pro-rata billing to the day. You pay for the remaining days in the month when you provision. No surprise bills.",
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes. Scale up or down instantly. Changes take effect immediately with prorated charges.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Credit cards (Visa, Mastercard, Amex) via Stripe. Enterprise invoicing available.",
  },
  {
    question: "Is there a free trial?",
    answer: "The Nano plan is free forever. No credit card required to start.",
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-terminal-green/10 text-terminal-green">
            <CreditCard size={24} />
          </div>
          <h1 className="text-3xl font-bold text-white">Pricing</h1>
        </div>
        <p className="text-lg text-neutral-400">
          Predictable pricing. No calculators. No surprises.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative p-4 rounded-lg border text-center",
              plan.highlight
                ? "border-terminal-green/50 bg-terminal-green/5"
                : "border-white/10 bg-black/40"
            )}
          >
            {plan.badge && (
              <div
                className={cn(
                  "absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-bold rounded-full whitespace-nowrap",
                  plan.highlight
                    ? "bg-terminal-green text-black"
                    : "bg-white/10 text-white/70"
                )}
              >
                {plan.badge}
              </div>
            )}
            <h3 className="font-bold text-white mt-2">{plan.name}</h3>
            <div className="my-3">
              <span className="text-2xl font-bold text-white">
                {plan.price === "Free" ? "Free" : `€${plan.price}`}
              </span>
              {plan.price !== "Free" && (
                <span className="text-xs text-neutral-500">{plan.period}</span>
              )}
            </div>
            <div className="space-y-1 text-xs text-neutral-400 font-mono">
              <div>{plan.cpu}</div>
              <div>{plan.ram}</div>
              <div>{plan.disk}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Zap size={20} className="text-terminal-green" />
          Elastic Add-ons
        </h2>
        <p className="text-neutral-400 mb-4">
          Scale resources on-demand. No downtime. Instant effect.
        </p>
        <div className="flex flex-wrap gap-4">
          {ADDONS.map((addon) => (
            <div
              key={addon.name}
              className="px-4 py-3 rounded-lg border border-white/10 bg-black/40"
            >
              <span className="font-bold text-white">{addon.name}</span>
              <span className="text-neutral-500 ml-2">
                €{addon.price}
                <span className="text-xs">{addon.unit}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* All Plans Include */}
      <div className="mb-12 p-6 rounded-lg border border-white/10 bg-black/40">
        <h2 className="font-bold text-white mb-4">All plans include</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {INCLUDED.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm">
              <Check size={14} className="text-terminal-green flex-shrink-0" />
              <span className="text-neutral-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise */}
      <div className="mb-12 p-6 rounded-lg border border-electric-blue/30 bg-electric-blue/5">
        <h2 className="text-xl font-bold text-white mb-2">Enterprise</h2>
        <p className="text-neutral-400 mb-4">
          Custom CPU, ECC RAM & NVMe storage à la carte.
          Dedicated infrastructure. White-glove onboarding.
        </p>
        <a
          href="mailto:enterprise@menezis.ai"
          className="inline-block px-4 py-2 rounded bg-electric-blue/20 text-electric-blue font-mono text-sm hover:bg-electric-blue/30 transition-colors"
        >
          Request Access →
        </a>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <HelpCircle size={20} />
          Billing FAQ
        </h2>
        <div className="space-y-4">
          {FAQ.map((item) => (
            <div
              key={item.question}
              className="p-4 rounded-lg border border-white/10 bg-black/40"
            >
              <h3 className="font-bold text-white mb-2">{item.question}</h3>
              <p className="text-sm text-neutral-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
