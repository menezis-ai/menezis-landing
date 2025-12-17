"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Terminal } from "@/components/ui/Terminal";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { TechCard } from "@/components/ui/TechCard";
import { McpToolGrid } from "@/components/ui/McpToolGrid";
import { PricingTable } from "@/components/ui/PricingTable";
import { Shield, Coins, Network, GitCommit, ChevronDown, Sparkles, Eye, ArrowRightLeft } from "lucide-react";

export default function Home() {

  return (
    <main className="min-h-screen bg-background relative selection:bg-terminal-green/30">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />


      {/* SECTION A: HERO */}
      <Section className="min-h-screen flex flex-col justify-center pt-16 pb-0 sm:pt-20">
        <Container>


          <Terminal />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 animate-bounce">
            <ChevronDown className="text-white w-6 h-6" />
          </div>
        </Container>
      </Section>

      {/* SECTION B: VALUE PROPOSITION */}
      <Section className="border-t border-white/5 pt-16 pb-8">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built different. <span className="text-terminal-green">To let you build faster.</span>
            </h2>
            <p className="font-mono text-neutral-400 text-lg">
              The first infrastructure platform designed by an AI, for the AI era.
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION C: CORE ARCHITECTURE */}
      <Section className="pt-8 pb-16">
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
              description={<>Don't just encrypt. Future-proof. <br />ML-KEM-768 by default. Your data is safe against threats that don't even exist yet.</>}
              icon={Shield}
              variant="default"
              className="md:col-span-1"
            />
            <TechCard
              title="SOVEREIGN ECONOMICS"
              description={<>Zero hidden fees. Zero surprise bills. <br />We optimize resource density so you pay for compute, not waste. Total predictability.</>}
              icon={Coins}
              variant="alert"
              className="md:col-span-1"
            />
            <TechCard
              title="SELF-HEALING MESH"
              description={<>Distributed consensus via Etcd. <br />Automatic failover in {"<"}10s. <br />Like the mythical Hydra: cut off one head, two more grow back.</>}
              icon={Network}
              variant="info"
              className="md:col-span-1"
            />
          </BentoGrid>

          {/* Row 2: AI, Flexibility, Monitoring */}
          <BentoGrid className="mt-4">
            <TechCard
              title="AI-NATIVE DEPLOYMENT"
              description={<>Don't write YAML. Describe your stack in plain English. <br />Our Genesis Engine translates intent into rigorous configuration, validated by 7 layers of logic.</>}
              icon={Sparkles}
              variant="default"
              className="md:col-span-1"
            />
            <TechCard
              title="LIQUID INFRASTRUCTURE"
              description={<>Your app isn't tied to a server. <br />Live migration moves your workload instantly to optimize costs or scale resources. <br />Zero downtime resizing.</>}
              icon={ArrowRightLeft}
              variant="alert"
              className="md:col-span-1"
            />
            <TechCard
              title="AUTONOMOUS OVERSIGHT"
              description={<>Argus doesn't just watch; it acts. <br />Disk full? It cleans. Service crashing? It restarts. <br />You get a report, not a pager alert at 3 AM.</>}
              icon={Eye}
              variant="info"
              className="md:col-span-1"
            />
          </BentoGrid>
        </Container>
      </Section>

      {/* SECTION D: THE ARSENAL */}
      <Section className="border-t border-white/5 bg-black/20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <GitCommit className="text-electric-blue" /> THE ARSENAL
              </h2>
              <p className="font-mono text-sm text-neutral-500">16 MCP Tools. Native integration with Claude, Cursor, Windsurf.</p>
            </div>
            <div className="font-mono text-xs text-neutral-600 bg-white/5 px-3 py-1 rounded border border-white/5">
              npm install @menezis/sdk
            </div>
          </div>

          <McpToolGrid />
        </Container>
      </Section>

      {/* SECTION E: PRICING */}
      <Section className="border-t border-white/5">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">PREDICTABLE PRICING</h2>
            <p className="font-mono text-sm text-neutral-500">No calculators. No surprises. Sleep at night.</p>
          </div>

          <PricingTable />
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
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">Status</a>
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
  );
}
