"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Header } from "@/components/ui/Header";
import { Terminal } from "@/components/ui/Terminal";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { TechCard } from "@/components/ui/TechCard";
import { SocialProof } from "@/components/ui/SocialProof";
import { Shield, Coins, Network, GitCommit, ChevronDown, Sparkles, Eye, ArrowRightLeft, HelpCircle, Copy, Check, Zap, Lock, Cpu } from "lucide-react";
import dynamic from "next/dynamic";

const McpToolGrid = dynamic(() => import("@/components/ui/McpToolGrid").then(mod => mod.McpToolGrid), {
  loading: () => <div className="h-[250px] w-full rounded-lg bg-white/5 animate-pulse" />,
});
const PricingTable = dynamic(() => import("@/components/ui/PricingTable").then(mod => mod.PricingTable), {
  loading: () => <div className="h-[600px] w-full rounded-lg bg-white/5 animate-pulse" />,
});
const FAQ = dynamic(() => import("@/components/ui/FAQ").then(mod => mod.FAQ), {
  loading: () => <div className="h-[400px] w-full rounded-lg bg-white/5 animate-pulse" />,
});

function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const command = "npx menezis init";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className="group relative flex items-center gap-3 px-4 py-3 bg-black/80 border border-white/20 rounded-lg cursor-pointer hover:border-terminal-green/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,255,65,0.1)]"
    >
      <span className="text-terminal-green font-mono select-none">$</span>
      <code className="font-mono text-white text-sm">{command}</code>
      <div className="ml-2 text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
        {copied ? <Check size={14} className="text-terminal-green" /> : <Copy size={14} />}
      </div>
      <div className="absolute -top-3 left-3 bg-black px-1 text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
        One Command
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background relative selection:bg-terminal-green/30">

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* SECTION A: HERO — Doctrine left, Terminal right */}
        <Section className="min-h-screen flex flex-col justify-start pt-24 pb-0 sm:justify-center">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <h1 className="sr-only">
              Menezis - Autonomous Infrastructure Platform with MCP Integration and Post-Quantum Security
            </h1>

            <div className="grid xl:grid-cols-[1fr_auto] gap-12 xl:gap-16 items-center">
              {/* Left: Doctrine */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  We are not <br/>
                  <span className="text-neutral-600 line-through decoration-terminal-green/50 decoration-2">Cloud Architects.</span>
                </h2>
                <div className="space-y-6 text-lg text-neutral-400 font-mono leading-relaxed">
                  <p>
                    The old world believes complexity is job security. They spend weeks writing Terraform. They worship uptime but sacrifice velocity.
                  </p>
                  <p>
                    <strong className="text-white">We believe infrastructure should be invisible.</strong>
                  </p>
                  <p>
                    Menezis is for the builders who want to ship code, not configure YAML. It is for the maximalists who demand power without the bureaucracy.
                  </p>
                </div>

                <div className="grid gap-3">
                  <div className="flex items-center gap-4 px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:border-terminal-green/30 transition-colors group">
                    <div className="p-2 rounded bg-terminal-green/10 text-terminal-green group-hover:text-terminal-green/80 shrink-0">
                      <Zap size={16} />
                    </div>
                    <span className="text-sm text-neutral-300 font-mono">Deployment should take seconds, not sprints.</span>
                  </div>

                  <div className="flex items-center gap-4 px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:border-terminal-green/30 transition-colors group">
                    <div className="p-2 rounded bg-terminal-green/10 text-terminal-green group-hover:text-terminal-green/80 shrink-0">
                      <Lock size={16} />
                    </div>
                    <span className="text-sm text-neutral-300 font-mono">The network is hostile. Post-quantum encryption is the new black.</span>
                  </div>

                  <div className="flex items-center gap-4 px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:border-terminal-green/30 transition-colors group">
                    <div className="p-2 rounded bg-terminal-green/10 text-terminal-green group-hover:text-terminal-green/80 shrink-0">
                      <Cpu size={16} />
                    </div>
                    <span className="text-sm text-neutral-300 font-mono">Infrastructure built for the age of silicon intelligence.</span>
                  </div>
                </div>

                <InstallCommand />

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/docs/quickstart"
                    className="text-neutral-400 hover:text-white text-sm font-mono border-b border-transparent hover:border-white transition-all pb-0.5"
                  >
                    Read the manual
                  </a>
                  <span className="text-neutral-700 hidden sm:inline">|</span>
                  <a
                    href="/docs/security"
                    className="text-neutral-400 hover:text-white text-sm font-mono border-b border-transparent hover:border-white transition-all pb-0.5"
                  >
                    View security proofs
                  </a>
                </div>
              </div>

              {/* Right: Terminal (fixed dimensions) */}
              <Terminal />
            </div>

            <a href="#architecture" aria-label="Scroll to next section" className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 hover:opacity-100 focus:opacity-100 transition-opacity">
              <ChevronDown className="text-white w-6 h-6 animate-bounce" />
            </a>
          </div>
        </Section>

        {/* SOCIAL PROOF */}
        <Section className="border-t border-white/5 py-12 bg-black/40">
          <Container>
            <SocialProof />
          </Container>
        </Section>

        {/* SECTION C: CORE ARCHITECTURE */}
        <Section id="architecture" className="pt-16 pb-16">
          <Container>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Network className="text-terminal-green" /> SYSTEM ARCHITECTURE
              </h2>
              <p className="font-mono text-sm text-neutral-500">Designed for autonomy. Built for survival.</p>
            </div>

            <BentoGrid>
              <TechCard
                title="POST-QUANTUM SANCTUARY"
                description={<>Four-layer security: mTLS + JWT + ML-KEM-768 + AES-256-GCM.<br />NIST FIPS 203 standardized. Protected against threats that don&apos;t exist yet.</>}
                icon={Shield}
                variant="default"
                className="md:col-span-1"
              />
              <TechCard
                title="SOVEREIGN ECONOMICS"
                description={<>Zero hidden fees. Pro-rata daily billing.<br />Free Nano tier forever. Small at 12.99&euro;/mo. Predictable costs, no surprise bills.</>}
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

            <BentoGrid className="mt-4">
              <TechCard
                title="AI-NATIVE DEPLOYMENT"
                description={<>16 MCP tools for AI code assistants.<br />describe &rarr; validate (7 layers) &rarr; judge (5 analyzers) &rarr; deploy.<br />Natural language to running infrastructure.</>}
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
                <p className="font-mono text-sm text-neutral-500">16 Tools. One Protocol. Infinite Power.</p>
              </div>
            </div>

            <McpToolGrid />
          </Container>
        </Section>

        {/* SECTION E: PRICING */}
        <Section id="pricing" className="border-t border-white/5">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">ACCESS LEVELS</h2>
              <p className="font-mono text-sm text-neutral-500">Pay for power, not promises.</p>
            </div>

            <PricingTable />
          </Container>
        </Section>

        {/* SECTION F: FAQ */}
        <Section className="border-t border-white/5">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                <HelpCircle className="text-terminal-green" /> KNOWLEDGE BASE
              </h2>
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
                  GDPR Compliant &middot; EU / US / SG Regions
                </div>
              </div>

              <div className="flex gap-8">
                <a href="/docs" className="hover:text-white transition-colors">Documentation</a>
                <a href="https://status.menezis.ai" className="hover:text-white transition-colors">System Status</a>
                <a href="/legal" className="hover:text-white transition-colors">Protocol</a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="font-mono text-neutral-500 text-sm max-w-xl mx-auto">
                &quot;Kubernetes is for people who like configuring Kubernetes.<br />
                <span className="text-terminal-green">Menezis is for people who like shipping.</span>&quot;
              </p>
            </div>
          </Container>
        </footer>
      </main>
    </>
  );
}
