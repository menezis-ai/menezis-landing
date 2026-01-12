"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import {
  Home, Zap, Wrench, Shield, ChevronLeft,
  BookOpen, Rocket, CreditCard
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/docs", label: "Overview", icon: Home },
  { href: "/docs/install", label: "Install", icon: Zap },
  { href: "/docs/quickstart", label: "Quickstart", icon: Rocket },
  { href: "/docs/tools", label: "MCP Tools", icon: Wrench },
  { href: "/docs/security", label: "Security", icon: Shield },
  { href: "/docs/pricing", label: "Pricing", icon: CreditCard },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <Container>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <ChevronLeft size={16} />
                <span className="font-mono text-sm">menezis.ai</span>
              </Link>
              <div className="h-6 w-px bg-white/10" />
              <Link href="/docs" className="flex items-center gap-2">
                <BookOpen size={18} className="text-terminal-green" />
                <span className="font-bold text-white">Documentation</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 rounded font-mono text-sm transition-colors",
                    pathname === item.href
                      ? "bg-terminal-green/10 text-terminal-green"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Nav */}
      <nav className="md:hidden border-b border-white/10 bg-black/60 backdrop-blur-sm overflow-x-auto">
        <Container>
          <div className="flex gap-1 py-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 rounded font-mono text-xs whitespace-nowrap transition-colors",
                  pathname === item.href
                    ? "bg-terminal-green/10 text-terminal-green"
                    : "text-neutral-400 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </nav>

      {/* Content */}
      <main className="relative z-10 py-12">
        <Container>
          {children}
        </Container>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-12">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono text-neutral-500">
            <div>Menezis Documentation</div>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
              <a href="https://status.menezis.ai" className="hover:text-white transition-colors">Status</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
