"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Terminal } from "@/components/ui/Terminal";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { TechCard } from "@/components/ui/TechCard";
import { McpToolGrid } from "@/components/ui/McpToolGrid";
import { PricingTable } from "@/components/ui/PricingTable";
import { Shield, Coins, Network, GitCommit, Copy, ChevronDown } from "lucide-react";

type Language = "en" | "fr" | "es";

type DictionaryEntry = {
  tagline: React.ReactNode;
  core: string;
  standards: string;
  mcp: string;
  mcp_desc: string;
  pricing: string;
  pricing_desc: string;
};

const DICTIONARY: Record<Language, DictionaryEntry> = {
  en: {
    tagline: <>AI-Driven Cloud Infrastructure for the Post-Quantum Era.</>,
    core: "CORE ARCHITECTURE",
    standards: "Robust industrial standards.",
    mcp: "NATIVE MCP INTEGRATION",
    mcp_desc: "16 Tools Ready for your favorite Code Assistant.",
    pricing: "ACCESSIBLE SOVEREIGNTY",
    pricing_desc: "Transparent Technical Invoicing.",
  },
  fr: {
    tagline: <>L'infrastructure programmable pour l'ère des Agents IA.<br />Souveraine, Post-Quantique, Autonome.</>,
    core: "ARCHITECTURE CŒUR",
    standards: "Standards industriels robustes.",
    mcp: "INTÉGRATION MCP NATIVE",
    mcp_desc: "16 Outils Prêts pour votre Assistant de Code préféré.",
    pricing: "SOUVERAINETÉ ACCESSIBLE",
    pricing_desc: "Facturation Technique Transparente.",
  },
  es: {
    tagline: <>Infraestructura Cloud impulsada por IA para la Era Post-Cuántica.<br />Soberana y Autónoma.</>,
    core: "ARQUITECTURA NÚCLEO",
    standards: "Estándares industriales robustos.",
    mcp: "INTEGRACIÓN MCP NATIVA",
    mcp_desc: "16 Herramientas Listas para tu Asistente de Código favorito.",
    pricing: "SOBERANÍA ACCESSIBLE",
    pricing_desc: "Facturación Técnica Transparente.",
  }
};

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    // Basic detection on mount
    // Force English default for "Power Projection" as per user request
    // const browserLang = navigator.language.split("-")[0];
    // if (browserLang === "fr") setLang("fr");
    // if (browserLang === "es") setLang("es");
  }, []);

  const t = DICTIONARY[lang];

  return (
    <main className="min-h-screen bg-background relative selection:bg-terminal-green/30">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Language Flags */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button onClick={() => setLang("en")} className={`p-1 rounded hover:bg-white/10 ${lang === "en" ? "bg-white/10" : "opacity-50"}`}>🇺🇸</button>
        <button onClick={() => setLang("fr")} className={`p-1 rounded hover:bg-white/10 ${lang === "fr" ? "bg-white/10" : "opacity-50"}`}>🇫🇷</button>
        <button onClick={() => setLang("es")} className={`p-1 rounded hover:bg-white/10 ${lang === "es" ? "bg-white/10" : "opacity-50"}`}>🇪🇸</button>
      </div>

      {/* SECTION A: HERO */}
      <Section className="min-h-screen flex flex-col justify-center pt-16 pb-0 sm:pt-20">
        <Container>


          <Terminal />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 animate-bounce">
            <ChevronDown className="text-white w-6 h-6" />
          </div>
        </Container>
      </Section>

      {/* SECTION B: CORE ARCHITECTURE */}
      <Section className="border-t border-white/5 pt-12 pb-16">
        <Container>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Network className="text-terminal-green" /> {t.core}
            </h2>
            <p className="font-mono text-sm text-neutral-500">{t.standards}</p>
          </div>

          <BentoGrid>
            <TechCard
              title="PROTOCOLE AEGIS"
              description={<>Post-Quantum Native Security. <br />Default ML-KEM-768 encryption. <br />Mathematically proofed against next-decade threats.</>}
              icon={Shield}
              variant="default"
              className="md:col-span-1"
            />
            <TechCard
              title="FORT KNOX SYSTEM"
              description={<>Economic Sovereignty. <br />Bin-packing algorithms maximize resource density. <br />Pay for compute, not waste.</>}
              icon={Coins}
              variant="alert"
              className="md:col-span-1"
            />
            <TechCard
              title="HYDRA NETWORK"
              description={<>Distributed High Availability. <br />Etcd consensus. <br />Auto-healing in {"<"} 10 seconds upon node failure.</>}
              icon={Network}
              variant="info"
              className="md:col-span-1"
            />
          </BentoGrid>
        </Container>
      </Section>

      {/* SECTION C: THE ARSENAL */}
      <Section className="border-t border-white/5 bg-black/20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <GitCommit className="text-electric-blue" /> {t.mcp}
              </h2>
              <p className="font-mono text-sm text-neutral-500">{t.mcp_desc}</p>
            </div>
            <div className="font-mono text-xs text-neutral-600 bg-white/5 px-3 py-1 rounded border border-white/5">
              npm install @menezis/sdk
            </div>
          </div>

          <McpToolGrid />
        </Container>
      </Section>

      {/* SECTION D: PRICING */}
      <Section className="border-t border-white/5">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">{t.pricing}</h2>
            <p className="font-mono text-sm text-neutral-500">{t.pricing_desc}</p>
          </div>

          <PricingTable />
        </Container>
      </Section>

      {/* SECTION E: FOOTER */}
      <footer className="border-t border-white/10 bg-black/80 py-12">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-mono text-xs text-neutral-500">
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-terminal-green">
                <Shield size={12} />
                EU Data Sovereignty Guaranteed
              </div>
            </div>

            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">Status</a>
            </div>
          </div>

          <div className="mt-12 text-center select-none">
            <pre className="text-neutral-500 font-bold leading-[0.8] tracking-tighter whitespace-pre overflow-hidden mb-6 select-none">
              {`███╗   ███╗███████╗███╗   ██╗███████╗███████╗██╗███████╗
████╗ ████║██╔════╝████╗  ██║██╔════╝╚══███╔╝██║██╔════╝
██╔████╔██║█████╗  ██╔██╗ ██║█████╗    ███╔╝ ██║███████╗
██║╚██╔╝██║██╔══╝  ██║╚██╗██║██╔══╝   ███╔╝  ██║╚════██║
██║ ╚═╝ ██║███████╗██║ ╚████║███████╗███████╗██║███████║
╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝╚══════╝`}
            </pre>
          </div>
        </Container>
      </footer>
    </main>
  );
}
