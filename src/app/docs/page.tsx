"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Wrench, Shield, CreditCard, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  {
    href: "/docs/quickstart",
    icon: Rocket,
    title: "Quickstart",
    description: "Deploy your first stack in under 5 minutes.",
    color: "terminal-green",
  },
  {
    href: "/docs/tools",
    icon: Wrench,
    title: "MCP Tools",
    description: "Reference for all 16 MCP tools.",
    color: "electric-blue",
  },
  {
    href: "/docs/security",
    icon: Shield,
    title: "Security",
    description: "Post-quantum encryption & architecture.",
    color: "alert-amber",
  },
  {
    href: "/docs/pricing",
    icon: CreditCard,
    title: "Pricing",
    description: "Plans, add-ons, and billing.",
    color: "terminal-green",
  },
];

export default function DocsPage() {
  return (
    <div className="max-w-4xl">
      {/* Hero */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-terminal-green/10 text-terminal-green">
            <Sparkles size={24} />
          </div>
          <h1 className="text-3xl font-bold text-white">Documentation</h1>
        </div>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Everything you need to deploy infrastructure with natural language.
          16 MCP tools, post-quantum security, autonomous monitoring.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {SECTIONS.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className={cn(
              "group p-6 rounded-lg border bg-black/40 transition-all",
              "hover:bg-white/5",
              section.color === "terminal-green" && "border-terminal-green/20 hover:border-terminal-green/40",
              section.color === "electric-blue" && "border-electric-blue/20 hover:border-electric-blue/40",
              section.color === "alert-amber" && "border-alert-amber/20 hover:border-alert-amber/40"
            )}
          >
            <div className={cn(
              "mb-4 p-3 w-fit rounded-lg border transition-colors",
              section.color === "terminal-green" && "bg-terminal-green/10 text-terminal-green border-terminal-green/20",
              section.color === "electric-blue" && "bg-electric-blue/10 text-electric-blue border-electric-blue/20",
              section.color === "alert-amber" && "bg-alert-amber/10 text-alert-amber border-alert-amber/20"
            )}>
              <section.icon size={24} />
            </div>
            <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              {section.title}
              <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </h2>
            <p className="text-sm text-neutral-400 font-mono">
              {section.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick Example */}
      <div className="p-6 rounded-lg border border-white/10 bg-black/60">
        <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-terminal-green">$</span> Quick Example
        </h3>
        <pre className="font-mono text-sm text-neutral-300 overflow-x-auto">
          <code>{`// Deploy a Ghost blog with one command
const result = await menezis.manifest({
  stackfile_content: \`
    version: '1.0'
    stack: 'my-blog'
    services:
      ghost:
        source: 'sigilum/ghost:5.0.0'
        ports:
          - '2368:2368'
      db:
        source: 'sigilum/postgres:16'
  \`
});

console.log(result.url); // https://my-blog.menezis.io`}</code>
        </pre>
      </div>

      {/* Support */}
      <div className="mt-12 p-6 rounded-lg border border-white/5 bg-white/5">
        <h3 className="font-bold text-white mb-2">Need help?</h3>
        <p className="text-sm text-neutral-400 font-mono">
          Contact us at{" "}
          <a href="mailto:support@menezis.ai" className="text-terminal-green hover:underline">
            support@menezis.ai
          </a>
        </p>
      </div>
    </div>
  );
}
