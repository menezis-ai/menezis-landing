"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Header } from "@/components/ui/Header";
import { Terminal } from "@/components/ui/Terminal";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { TechCard } from "@/components/ui/TechCard";
import { SocialProof } from "@/components/ui/SocialProof";
import { Shield, Coins, Network, GitCommit, ChevronDown, Sparkles, Eye, ArrowRightLeft, HelpCircle } from "lucide-react";
import dynamic from "next/dynamic";

// ⚡ Bolt: Lazy-load components below the fold to improve initial page load performance.
// These components are not visible until the user scrolls, so we can defer loading them.
// This reduces the initial JavaScript bundle size, leading to a faster Time to Interactive (TTI).
const McpToolGrid = dynamic(() => import("@/components/ui/McpToolGrid").then(mod => mod.McpToolGrid), {
  // Simple placeholder to prevent layout shift while the component loads.
  loading: () => <div className="h-[250px] w-full rounded-lg bg-white/5 animate-pulse" />,
});
const PricingTable = dynamic(() => import("@/components/ui/PricingTable").then(mod => mod.PricingTable), {
  loading: () => <div className="h-[600px] w-full rounded-lg bg-white/5 animate-pulse" />,
});
const FAQ = dynamic(() => import("@/components/ui/FAQ").then(mod => mod.FAQ), {
  loading: () => <div className="h-[400px] w-full rounded-lg bg-white/5 animate-pulse" />,
});


export default function Home() {

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background relative selection:bg-terminal-green/30">

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />


        {/* SECTION A: HERO */}
        <Section className="min-h-screen flex flex-col justify-start pt-20 pb-0 sm:justify-center sm:pt-20">
          <Container>
            {/* SEO: Primary H1 - visually hidden but accessible */}
            <h1 className="sr-only">
              Menezis - Autonomous Infrastructure Platform with MCP Integration and Post-Quantum Security
            </h1>

            <Terminal />

            {/* Hero CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 md:mt-8 px-4 md:px-0">
              <a
                href="/docs/quickstart"
                className="px-5 py-2.5 md:px-8 md:py-4 bg-terminal-green text-black text-sm md:text-base font-bold rounded-lg hover:bg-terminal-green/90 transition-all shadow-[0_0_30px_rgba(0,255,65,0.2)] hover:shadow-[0_0_40px_rgba(0,255,65,0.4)] text-center"
              >
                Deploy Now — Free Tier
              </a>
              <a
                href="/docs"
                className="px-5 py-2.5 md:px-8 md:py-4 border border-white/20 text-white text-sm md:text-base font-medium rounded-lg hover:bg-white/5 transition-all text-center"
              >
                View Documentation
              </a>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 animate-bounce">
              <ChevronDown className="text-white w-6 h-6" />
            </div>
          </Container>
        </Section>

        {/* SECTION B: VALUE PROPOSITION + SOCIAL PROOF */}
        <Section className="border-t border-white/5 pt-16 pb-8">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Built different. <span className="text-terminal-green">To let you build faster.</span>
              </h2>
              <p className="font-mono text-neutral-400 text-lg">
                The first autonomous infrastructure platform designed for the AI era.<br />
                <span className="text-neutral-500">16 MCP tools. ML-KEM-768 post-quantum security. Self-healing monitoring.</span>
              </p>
            </div>
            <SocialProof />
          </Container>
        </Section>

        {/* SECTION C: CORE ARCHITECTURE */}
        <Section id="architecture" className="pt-8 pb-16">
          <Container>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Network className="text-terminal-green" /> CORE ARCHITECTURE
              </h2>
              <p className="font-mono text-sm text-neutral-500">Military-grade defaults. Zero configuration.</p>
            </div>

            {/* Row 1: Security, Economics, Reliability */}
            <BentoGrid>
              <TechCard
                title="POST-QUANTUM SANCTUARY"
                description={<>Four-layer security: mTLS + JWT + ML-KEM-768 + AES-256-GCM.<br />NIST FIPS 203 standardized. Protected against threats that don't exist yet.</>}
                icon={Shield}
                variant="default"
                className="md:col-span-1"
              />
              <TechCard
                title="SOVEREIGN ECONOMICS"
                description={<>Zero hidden fees. Pro-rata daily billing.<br />Free Nano tier forever. Small at 12.99€/mo. Predictable costs, no surprise bills.</>}
                icon={Coins}
                variant="alert"
                className="md:col-span-1"
              />
              <TechCard
                title="SELF-HEALING MESH"
                description={<>Operation Hydra: etcd + HAProxy + automatic failover.<br />Distributed consensus. Cut off one head, two more grow back. {"<"}10s recovery.</>}
                icon={Network}
                variant="info"
                className="md:col-span-1"
              />
            </BentoGrid>

            {/* Row 2: AI, Flexibility, Monitoring */}
            <BentoGrid className="mt-4">
              <TechCard
                title="AI-NATIVE DEPLOYMENT"
                description={<>16 MCP tools for AI code assistants.<br />describe → validate (7 layers) → judge (5 analyzers) → deploy.<br />Natural language to running infrastructure.</>}
                icon={Sparkles}
                variant="default"
                className="md:col-span-1"
              />
              <TechCard
                title="LIQUID INFRASTRUCTURE"
                description={<>Multi-runtime: Docker, Kubernetes, systemd.<br />Same stackfile, any target. Live migration. Zero downtime scaling.</>}
                icon={ArrowRightLeft}
                variant="alert"
                className="md:col-span-1"
              />
              <TechCard
                title="AUTONOMOUS OVERSIGHT"
                description={<>Operation Argus monitors every 15 seconds.<br />CPU high? Auto-scale. Service down? Auto-restart. Disk full? Auto-cleanup.<br />MTTR under 2 minutes. 90%+ auto-resolution.</>}
                icon={Eye}
                variant="info"
                className="md:col-span-1"
              />
            </BentoGrid>
          </Container>
        </Section>

        {/* SECTION D: THE ARSENAL */}
        <Section id="arsenal" className="border-t border-white/5 bg-black/20">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <GitCommit className="text-electric-blue" /> THE ARSENAL
                </h2>
                <p className="font-mono text-sm text-neutral-500">16 MCP Tools. Native integration with Claude Code, Cursor, Windsurf, and more.</p>
              </div>
              <div className="font-mono text-xs text-neutral-600 bg-white/5 px-3 py-1 rounded border border-white/5">
                npm install @menezis/sdk
              </div>
            </div>

            <McpToolGrid />
          </Container>
        </Section>

        {/* SECTION E: PRICING */}
        <Section id="pricing" className="border-t border-white/5">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">PREDICTABLE PRICING</h2>
              <p className="font-mono text-sm text-neutral-500">No calculators. No surprises. Sleep at night.</p>
            </div>

            <PricingTable />
          </Container>
        </Section>

        {/* SECTION F: FAQ */}
        <Section className="border-t border-white/5">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                <HelpCircle className="text-terminal-green" /> FREQUENTLY ASKED QUESTIONS
              </h2>
              <p className="font-mono text-sm text-neutral-500">
                Everything you need to know about Menezis
              </p>
            </div>
            <FAQ />
          </Container>
        </Section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 bg-black/80 py-12">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-mono text-xs text-neutral-500">
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-terminal-green">
                  <Shield size={12} />
                  GDPR Compliant · EU / US / SG Regions
                </div>
              </div>

              <div className="flex gap-8">
                <a href="/docs" className="hover:text-white transition-colors">Documentation</a>
                <a href="https://status.menezis.ai" className="hover:text-white transition-colors">Status</a>
                <a href="/legal" className="hover:text-white transition-colors">Legal</a>
                <a href="/investors" className="hover:text-white transition-colors">Investors</a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="font-mono text-neutral-500 text-sm max-w-xl mx-auto">
                "Kubernetes is for people who like configuring Kubernetes.<br />
                <span className="text-terminal-green">Menezis is for people who like shipping.</span>"
              </p>
            </div>
          </Container>
        </footer>
      </main>
    </>
  );
}
