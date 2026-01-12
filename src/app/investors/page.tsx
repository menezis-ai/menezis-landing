"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Shield, TrendingUp, Globe, Server, CheckCircle, ArrowRight, Building2, Lock, Zap } from "lucide-react";
import Link from "next/link";

const COMPLIANCE_BADGES = [
  { label: "GDPR", description: "Fully Compliant" },
  { label: "NIS2", description: "Ready" },
  { label: "ISO 27001", description: "In Progress" },
  { label: "SOC 2", description: "Roadmap Q2 2026" },
];

const KEY_METRICS = [
  { value: "99.9%", label: "SLA Uptime", trend: "+0.2% YoY" },
  { value: "<2min", label: "MTTR", trend: "Industry: 30min" },
  { value: "16", label: "MCP Tools", trend: "AI-Native" },
  { value: "3", label: "Regions", trend: "EU/US/SG" },
];

const MARKET_SEGMENTS = [
  { name: "Startups & Scale-ups", percentage: 45, color: "bg-terminal-green" },
  { name: "Mid-Market", percentage: 35, color: "bg-electric-blue" },
  { name: "Enterprise", percentage: 20, color: "bg-alert-amber" },
];

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Background - more corporate, subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="group">
            <img
              src="/logo-menezis.svg"
              alt="MENEZIS"
              className="h-8 w-auto"
            />
          </Link>
          <a
            href="mailto:investors@menezis.ai"
            className="px-4 py-2 bg-white/10 text-white font-medium rounded hover:bg-white/20 transition-all text-sm"
          >
            Schedule a Call
          </a>
        </div>
      </header>

      {/* Hero - Corporate */}
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-400 mb-8">
              <Building2 size={16} />
              Investor Relations
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Sovereign Cloud Infrastructure
              <br />
              <span className="text-terminal-green">for the AI Era</span>
            </h1>

            <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
              A European cloud orchestration platform combining GDPR/NIS2 compliance,
              post-quantum security, and AI-native deployment tools.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:investors@menezis.ai"
                className="px-6 py-3 bg-terminal-green text-black font-bold rounded-lg hover:bg-terminal-green/90 transition-all"
              >
                Request Investor Deck
              </a>
              <a
                href="#market"
                className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all"
              >
                View Market Analysis
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Compliance Badges */}
      <Section className="py-8 border-y border-white/5 bg-black/40">
        <Container>
          <div className="flex flex-wrap justify-center gap-8">
            {COMPLIANCE_BADGES.map((badge) => (
              <div key={badge.label} className="text-center">
                <div className="text-lg font-bold text-white">{badge.label}</div>
                <div className="text-xs text-terminal-green">{badge.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Value Proposition - Corporate Language */}
      <Section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Investment Thesis</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Capitalizing on European digital sovereignty requirements and the AI infrastructure gap
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-terminal-green/10 text-terminal-green">
                  <Lock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Next-Gen Asset Protection</h3>
                  <p className="text-sm text-neutral-500">Post-Quantum Security</p>
                </div>
              </div>
              <p className="text-neutral-400 mb-4">
                Four-layer cryptographic security implementing ML-KEM-768 (NIST FIPS 203).
                Protection against current and future quantum computing threats.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-terminal-green" />
                  Bank-grade encryption standards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-terminal-green" />
                  Zero-trust architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-terminal-green" />
                  Quantum-resistant by design
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-alert-amber/10 text-alert-amber">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">OPEX Optimization</h3>
                  <p className="text-sm text-neutral-500">Cloud Cost Control</p>
                </div>
              </div>
              <p className="text-neutral-400 mb-4">
                Predictable pricing model with pro-rata billing.
                No hidden fees, no surprise bills. Up to 40% cost reduction vs. hyperscalers.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-alert-amber" />
                  Transparent cost structure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-alert-amber" />
                  No egress fees
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-alert-amber" />
                  Elastic resource scaling
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-electric-blue/10 text-electric-blue">
                  <Server size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">High Availability</h3>
                  <p className="text-sm text-neutral-500">Geographic Redundancy</p>
                </div>
              </div>
              <p className="text-neutral-400 mb-4">
                Distributed consensus architecture with automatic failover.
                Sub-10 second recovery time. Multi-region deployment across EU, US, and Asia.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-electric-blue" />
                  99.9% SLA guarantee
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-electric-blue" />
                  Self-healing infrastructure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-electric-blue" />
                  Zero-downtime migrations
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <Zap size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI-Native Platform</h3>
                  <p className="text-sm text-neutral-500">MCP Integration</p>
                </div>
              </div>
              <p className="text-neutral-400 mb-4">
                First infrastructure platform with native AI code assistant integration.
                16 MCP tools enabling natural language to running infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-purple-400" />
                  Claude, Cursor, Windsurf compatible
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-purple-400" />
                  7-layer validation pipeline
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-purple-400" />
                  Human-in-the-loop approval
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Market Opportunity */}
      <Section id="market" className="py-20 border-t border-white/5 bg-black/40">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Market Opportunity</h2>
              <p className="text-neutral-400 mb-8">
                The European cloud market is projected to reach €560B by 2030,
                with digital sovereignty regulations driving demand for compliant alternatives to US hyperscalers.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">NIS2 Directive</span>
                  <span className="text-terminal-green">In Force</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">DORA Regulation</span>
                  <span className="text-terminal-green">In Force</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">EU Data Act</span>
                  <span className="text-terminal-green">In Force</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white mb-4">Target Market Segments</h3>
              {MARKET_SEGMENTS.map((segment) => (
                <div key={segment.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-neutral-400">{segment.name}</span>
                    <span className="text-white font-bold">{segment.percentage}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${segment.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${segment.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Metrics */}
      <Section className="py-20 border-t border-white/5">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Platform Metrics</h2>
            <p className="text-neutral-400">Enterprise-grade performance indicators</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {KEY_METRICS.map((metric) => (
              <div key={metric.label} className="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
                <div className="text-3xl font-bold text-terminal-green mb-2">{metric.value}</div>
                <div className="text-white font-medium mb-1">{metric.label}</div>
                <div className="text-xs text-neutral-500">{metric.trend}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sovereignty Message */}
      <Section className="py-20 border-t border-white/5 bg-gradient-to-b from-terminal-green/5 to-transparent">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Globe size={48} className="text-terminal-green mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Digital Sovereignty as Competitive Advantage
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              When geopolitical tensions rise, when cloud providers change terms,
              when data localization becomes mandatory — Menezis customers retain
              full control of their infrastructure and data.
            </p>
            <p className="text-neutral-500 italic">
              &quot;The question is not if European companies will need sovereign infrastructure,
              but when they will realize they always needed it.&quot;
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-20 border-t border-white/5">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Learn More?</h2>
            <p className="text-neutral-400 mb-8">
              Schedule a confidential briefing with our team to discuss investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:investors@menezis.ai"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-terminal-green text-black font-bold rounded-lg hover:bg-terminal-green/90 transition-all"
              >
                Request Investor Deck <ArrowRight size={18} />
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all"
              >
                View Product
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-terminal-green" />
              GDPR Compliant · NIS2 Ready · EU-Based
            </div>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-white transition-colors">Product</Link>
              <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
              <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
