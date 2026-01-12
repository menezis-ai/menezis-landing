"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Check, ArrowRight, Copy } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Install Menezis MCP",
    description: "Follow the installation guide to connect Menezis to your AI assistant.",
    code: null,
    link: "/docs/install",
  },
  {
    number: "02",
    title: "Get your API key",
    description: "Sign up at app.menezis.ai and generate an API key from your dashboard.",
    code: null,
  },
  {
    number: "03",
    title: "Ask your AI to deploy",
    description: "Use natural language to describe what you want.",
    code: `"Deploy a Ghost blog with PostgreSQL in Europe"`,
  },
  {
    number: "04",
    title: "Or use a stackfile directly",
    description: "For more control, write a stackfile and call manifest().",
    code: `await menezis.manifest({
  stackfile_content: \`
    version: '1.0'
    stack: 'hello-world'
    services:
      web:
        source: 'sigilum/nginx:1.25'
        ports:
          - '80:80'
  \`
});`,
  },
];

function CodeBlock({ code, language: _language = "typescript" }: { code: string; language?: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="p-4 rounded-lg bg-black/80 border border-white/10 font-mono text-sm text-neutral-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded bg-white/5 text-neutral-500 hover:text-white hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
        title="Copy to clipboard"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </div>
  );
}

export default function QuickstartPage() {
  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-terminal-green/10 text-terminal-green">
            <Rocket size={24} />
          </div>
          <h1 className="text-3xl font-bold text-white">Quickstart</h1>
        </div>
        <p className="text-lg text-neutral-400">
          Deploy your first infrastructure in under 5 minutes.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="mb-12 p-4 rounded-lg border border-white/10 bg-white/5">
        <h2 className="font-bold text-white mb-2">Prerequisites</h2>
        <ul className="space-y-1 text-sm text-neutral-400 font-mono">
          <li className="flex items-center gap-2">
            <Check size={14} className="text-terminal-green" />
            Node.js 18+ installed
          </li>
          <li className="flex items-center gap-2">
            <Check size={14} className="text-terminal-green" />
            A Menezis account (free tier available)
          </li>
        </ul>
      </div>

      {/* Steps */}
      <div className="space-y-8">
        {STEPS.map((step, index) => (
          <div key={step.number} className="relative">
            {/* Connector line */}
            {index < STEPS.length - 1 && (
              <div className="absolute left-[19px] top-12 bottom-0 w-px bg-white/10" />
            )}

            <div className="flex gap-4">
              {/* Step number */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terminal-green/10 border border-terminal-green/30 flex items-center justify-center">
                <span className="font-mono text-sm text-terminal-green font-bold">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-neutral-400 text-sm mb-4">{step.description}</p>
                {step.link && (
                  <Link
                    href={step.link}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-terminal-green/10 text-terminal-green border border-terminal-green/30 hover:bg-terminal-green/20 transition-colors font-mono text-sm"
                  >
                    Installation Guide <ArrowRight size={14} />
                  </Link>
                )}
                {step.code && <CodeBlock code={step.code} />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Success state */}
      <div className="mt-8 p-6 rounded-lg border border-terminal-green/30 bg-terminal-green/5">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-full bg-terminal-green/20 text-terminal-green">
            <Check size={20} />
          </div>
          <div>
            <h3 className="font-bold text-white mb-1">You&apos;re ready!</h3>
            <p className="text-sm text-neutral-400 mb-4">
              Your stack is now deployed and accessible at your unique URL.
            </p>
            <div className="font-mono text-sm bg-black/40 px-3 py-2 rounded border border-white/10 text-terminal-green">
              https://hello-world.menezis.io
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases & Pricing */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-white mb-4">Example deployments</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-lg border border-terminal-green/30 bg-terminal-green/5 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">Portfolio / Landing Page</h3>
              <p className="text-sm text-neutral-500 font-mono">Static site + Nginx</p>
            </div>
            <div className="text-right">
              <div className="text-terminal-green font-bold">Free</div>
              <div className="text-xs text-terminal-green">Nano plan</div>
            </div>
          </div>
          <div className="p-4 rounded-lg border border-white/10 bg-black/40 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">Personal Blog</h3>
              <p className="text-sm text-neutral-500 font-mono">Ghost + PostgreSQL</p>
            </div>
            <div className="text-right">
              <div className="text-terminal-green font-bold">5.99€<span className="text-neutral-500 font-normal">/mo</span></div>
              <div className="text-xs text-neutral-500">Micro plan</div>
            </div>
          </div>
          <div className="p-4 rounded-lg border border-white/10 bg-black/40 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">API Backend</h3>
              <p className="text-sm text-neutral-500 font-mono">Express.js + MongoDB</p>
            </div>
            <div className="text-right">
              <div className="text-terminal-green font-bold">5.99€<span className="text-neutral-500 font-normal">/mo</span></div>
              <div className="text-xs text-neutral-500">Micro plan</div>
            </div>
          </div>
          <div className="p-4 rounded-lg border border-white/10 bg-black/40 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">SaaS Application</h3>
              <p className="text-sm text-neutral-500 font-mono">Node.js + PostgreSQL + Redis</p>
            </div>
            <div className="text-right">
              <div className="text-terminal-green font-bold">12.99€<span className="text-neutral-500 font-normal">/mo</span></div>
              <div className="text-xs text-neutral-500">Small plan</div>
            </div>
          </div>
          <div className="p-4 rounded-lg border border-white/10 bg-black/40 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">E-commerce Platform</h3>
              <p className="text-sm text-neutral-500 font-mono">Next.js + PostgreSQL + Redis + S3</p>
            </div>
            <div className="text-right">
              <div className="text-terminal-green font-bold">24.99€<span className="text-neutral-500 font-normal">/mo</span></div>
              <div className="text-xs text-neutral-500">Medium plan</div>
            </div>
          </div>
          <div className="p-4 rounded-lg border border-white/10 bg-black/40 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">AI/ML Pipeline <span className="text-xs text-electric-blue font-mono ml-2">+GPU add-on soon</span></h3>
              <p className="text-sm text-neutral-500 font-mono">Python + FastAPI + PostgreSQL + Redis</p>
            </div>
            <div className="text-right">
              <div className="text-terminal-green font-bold">49.99€<span className="text-neutral-500 font-normal">/mo</span></div>
              <div className="text-xs text-neutral-500">Large plan</div>
            </div>
          </div>
          <div className="p-4 rounded-lg border border-alert-amber/30 bg-alert-amber/5 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">Enterprise Platform</h3>
              <p className="text-sm text-neutral-500 font-mono">Microservices + PostgreSQL + Redis + Kafka + Elasticsearch</p>
            </div>
            <div className="text-right">
              <div className="text-alert-amber font-bold">99.99€<span className="text-neutral-500 font-normal">/mo</span></div>
              <div className="text-xs text-alert-amber">Business plan</div>
            </div>
          </div>
          <div className="p-4 rounded-lg border border-electric-blue/30 bg-electric-blue/5 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">Your Own Private Cloud</h3>
              <p className="text-sm text-neutral-500 font-mono">Dedicated hardware + ECC memory + Custom SLA</p>
            </div>
            <div className="text-right">
              <div className="text-electric-blue font-bold">Custom</div>
              <div className="text-xs text-electric-blue">Enterprise plan</div>
            </div>
          </div>
        </div>
        <p className="text-xs text-neutral-600 mt-3 text-center">
          All plans include post-quantum security, autonomous monitoring, and pro-rata daily billing (except Enterprise).
        </p>
      </div>

      {/* Next steps */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-white mb-4">Next steps</h2>
        <div className="grid gap-3">
          <a
            href="/docs/tools"
            className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-black/40 hover:bg-white/5 hover:border-white/20 transition-colors group"
          >
            <span className="text-neutral-300">Explore all 16 MCP tools</span>
            <ArrowRight size={16} className="text-neutral-500 group-hover:text-terminal-green transition-colors" />
          </a>
          <a
            href="/docs/security"
            className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-black/40 hover:bg-white/5 hover:border-white/20 transition-colors group"
          >
            <span className="text-neutral-300">Learn about post-quantum security</span>
            <ArrowRight size={16} className="text-neutral-500 group-hover:text-terminal-green transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}
