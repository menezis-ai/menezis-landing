"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is MCP integration and how does it work?",
    answer: "MCP (Model Context Protocol) enables AI assistants like Claude, Cursor, Windsurf, Roo, and Antigravity to directly interact with your infrastructure. Menezis provides 16 MCP tools including discover, validate_stack, judge_stack, manifest, and provision_instance. Simply describe your infrastructure in natural language—'Deploy a Ghost blog with PostgreSQL and Redis in Europe'—and the AI handles validation, judgment, and deployment automatically."
  },
  {
    question: "What makes post-quantum security different?",
    answer: "Quantum computers will eventually break RSA and ECDSA encryption. Menezis uses ML-KEM-768 (NIST FIPS 203 standardized) combined with a four-layer security stack: mTLS for identity, JWT for authorization, ML-KEM-768 for quantum-resistant key exchange, and AES-256-GCM for encryption. Your infrastructure is protected against 'harvest now, decrypt later' attacks."
  },
  {
    question: "How does the free tier work?",
    answer: "The Nano plan is free forever: 0.5 vCPU, 512MB RAM, 5GB SSD. Limited to 1 instance per user with auto-hibernation after inactivity. No credit card required. Perfect for learning, development, hobby projects, or testing Menezis capabilities before scaling up."
  },
  {
    question: "What is Operation Argus?",
    answer: "Operation Argus is Menezis's autonomous nervous system. Sentinels monitor CPU, RAM, disk, and services every 15 seconds. When thresholds are exceeded, the Event Engine triggers automatic responses: service restarts for crashes, disk cleanup when full, memory relief under pressure. Mean Time to Recovery is under 2 minutes for 90%+ of issues—without human intervention."
  },
  {
    question: "Which deployment runtimes are supported?",
    answer: "Three runtimes: Docker (container orchestration via docker-compose), Kubernetes (cloud-native with StatefulSets/Deployments), and systemd (native Linux services with security hardening). The same YAML stackfile can target any runtime—write once, deploy anywhere."
  },
  {
    question: "How does the 7-layer validation work?",
    answer: "Every stack passes through: (1) YAML syntax validation, (2) Schema structure check, (3) Primitive existence verification, (4) Parameter type validation, (5) Cross-service reference resolution, (6) Circular dependency detection, (7) Secret presence validation. Then the Judge analyzes security (40% weight), policy compliance (30%), topology risks (15%), cost estimation (10%), and operational readiness (5%)."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {FAQ_ITEMS.map((item, index) => (
        <div
          key={index}
          className="border border-white/10 rounded-lg overflow-hidden bg-black/40"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
          >
            <span className="font-medium text-white pr-4">{item.question}</span>
            <ChevronDown
              className={cn(
                "text-terminal-green transition-transform flex-shrink-0",
                openIndex === index && "rotate-180"
              )}
              size={20}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-6 pb-4 text-neutral-400 font-mono text-sm leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
