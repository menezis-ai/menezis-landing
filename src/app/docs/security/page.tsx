"use client";

import React from "react";
import { Shield, Lock, Key, Eye, Server, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const SECURITY_LAYERS = [
  {
    layer: "Layer 1",
    name: "mTLS",
    description: "Mutual TLS authentication between all services. Certificate-based identity verification.",
    icon: Lock,
  },
  {
    layer: "Layer 2",
    name: "JWT",
    description: "JSON Web Tokens for session management. Short-lived tokens with automatic refresh.",
    icon: Key,
  },
  {
    layer: "Layer 3",
    name: "ML-KEM-768",
    description: "Post-quantum key encapsulation. NIST FIPS 203 standardized. Protected against quantum attacks.",
    icon: Shield,
  },
  {
    layer: "Layer 4",
    name: "AES-256-GCM",
    description: "Authenticated encryption for data at rest and in transit. Military-grade symmetric encryption.",
    icon: Lock,
  },
];

const COMPLIANCE = [
  { name: "GDPR", description: "EU General Data Protection Regulation" },
  { name: "SOC 2 Type II", description: "In progress - Expected Q2 2025" },
  { name: "ISO 27001", description: "In progress - Expected Q2 2025" },
];

export default function SecurityPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-alert-amber/10 text-alert-amber">
            <Shield size={24} />
          </div>
          <h1 className="text-3xl font-bold text-white">Security</h1>
        </div>
        <p className="text-lg text-neutral-400">
          Four-layer security architecture with post-quantum cryptography.
          Protected against threats that don't exist yet.
        </p>
      </div>

      {/* Post-Quantum Banner */}
      <div className="mb-12 p-6 rounded-lg border border-terminal-green/30 bg-terminal-green/5">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-terminal-green/20 text-terminal-green">
            <Shield size={28} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Post-Quantum Ready</h2>
            <p className="text-neutral-400 mb-4">
              Menezis implements <a href="https://github.com/FiloSottile/mlkem768" target="_blank" rel="noopener noreferrer" className="text-terminal-green font-mono hover:underline">ML-KEM-768</a> (formerly CRYSTALS-Kyber),
              the NIST FIPS 203 standardized algorithm for quantum-resistant key encapsulation.
            </p>
            <p className="text-sm text-neutral-500">
              When quantum computers become capable of breaking RSA and ECC,
              your data encrypted today will still be safe.
            </p>
          </div>
        </div>
      </div>

      {/* Four-Layer Security */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6">Four-Layer Security Stack</h2>
        <div className="space-y-4">
          {SECURITY_LAYERS.map((layer, index) => (
            <div
              key={layer.name}
              className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-black/40"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                <layer.icon size={20} className="text-terminal-green" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-neutral-500">{layer.layer}</span>
                  <h3 className="font-bold text-white">{layer.name}</h3>
                </div>
                <p className="text-sm text-neutral-400">{layer.description}</p>
              </div>
              {index < SECURITY_LAYERS.length - 1 && (
                <div className="hidden md:block text-neutral-600">+</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Infrastructure Security */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6">Infrastructure Security</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-white/10 bg-black/40">
            <Server size={20} className="text-electric-blue mb-3" />
            <h3 className="font-bold text-white mb-2">Isolated Workloads</h3>
            <p className="text-sm text-neutral-400">
              Each deployment runs in isolated containers with dedicated network namespaces.
              No shared resources between tenants.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-white/10 bg-black/40">
            <Eye size={20} className="text-electric-blue mb-3" />
            <h3 className="font-bold text-white mb-2">Autonomous Monitoring</h3>
            <p className="text-sm text-neutral-400">
              Operation Argus monitors all infrastructure every 15 seconds.
              Automatic threat detection and response.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-white/10 bg-black/40">
            <Lock size={20} className="text-electric-blue mb-3" />
            <h3 className="font-bold text-white mb-2">Secrets Management</h3>
            <p className="text-sm text-neutral-400">
              Environment variables encrypted at rest.
              Secrets never logged or exposed in stackfiles.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-white/10 bg-black/40">
            <Key size={20} className="text-electric-blue mb-3" />
            <h3 className="font-bold text-white mb-2">Zero Trust Network</h3>
            <p className="text-sm text-neutral-400">
              All internal communication authenticated.
              No implicit trust between services.
            </p>
          </div>
        </div>
      </div>

      {/* Data Residency */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6">Data Residency</h2>
        <div className="p-4 rounded-lg border border-white/10 bg-black/40">
          <p className="text-neutral-400 mb-4">
            Choose where your data lives. Available regions:
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 rounded bg-white/5">
              <div className="font-mono text-terminal-green font-bold">EU</div>
              <div className="text-xs text-neutral-500">Germany</div>
            </div>
            <div className="text-center p-3 rounded bg-white/5">
              <div className="font-mono text-terminal-green font-bold">US</div>
              <div className="text-xs text-neutral-500">East & West Coast</div>
            </div>
            <div className="text-center p-3 rounded bg-white/5">
              <div className="font-mono text-terminal-green font-bold">SG</div>
              <div className="text-xs text-neutral-500">Singapore</div>
            </div>
          </div>
          <p className="text-xs text-neutral-600 mt-3">
            Infrastructure providers: Hetzner. Coming soon: Scaleway, and more.
          </p>
        </div>
      </div>

      {/* Compliance */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6">Compliance</h2>
        <div className="space-y-3">
          {COMPLIANCE.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-black/40"
            >
              <div className="flex items-center gap-3">
                <CheckCircle size={18} className="text-terminal-green" />
                <span className="font-bold text-white">{item.name}</span>
              </div>
              <span className="text-sm text-neutral-500">{item.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Security Contact */}
      <div className="p-6 rounded-lg border border-alert-amber/30 bg-alert-amber/5">
        <h3 className="font-bold text-white mb-2">Report a Vulnerability</h3>
        <p className="text-sm text-neutral-400 mb-4">
          Found a security issue? We appreciate responsible disclosure.
        </p>
        <a
          href="mailto:security@menezis.ai"
          className="inline-block px-4 py-2 rounded bg-alert-amber/20 text-alert-amber font-mono text-sm hover:bg-alert-amber/30 transition-colors"
        >
          security@menezis.ai
        </a>
      </div>
    </div>
  );
}
