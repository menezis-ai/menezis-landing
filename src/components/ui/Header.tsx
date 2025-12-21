"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "#architecture", label: "Architecture" },
  { href: "#arsenal", label: "Arsenal" },
  { href: "#pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="group">
          <img
            src="/logo-menezis.svg"
            alt="MENEZIS"
            className="h-6 md:h-8 w-auto transition-all group-hover:drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/docs/quickstart"
            className="px-4 py-2 bg-terminal-green text-black font-bold rounded hover:bg-terminal-green/90 transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-neutral-400 hover:text-white transition-colors font-mono text-sm py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/docs/quickstart"
              className="mt-2 px-4 py-3 bg-terminal-green text-black font-bold rounded text-center hover:bg-terminal-green/90 transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
