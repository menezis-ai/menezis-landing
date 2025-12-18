"use client";

import React, { useState } from "react";
import {
  Wrench, Search, CheckCircle, Scale, Rocket, Activity, FileText,
  Trash2, LogIn, CreditCard, Server, Network, XCircle,
  Receipt, Container, Settings, Shield, ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Tool {
  name: string;
  category: string;
  icon: React.ElementType;
  description: string;
  params: { name: string; type: string; required: boolean; description: string }[];
  returns: string;
  example: string;
}

const TOOLS: Tool[] = [
  // Core Infrastructure
  {
    name: "discover",
    category: "Core Infrastructure",
    icon: Search,
    description: "Find available infrastructure primitives (databases, caches, proxies, runtimes).",
    params: [
      { name: "query", type: "string", required: true, description: "Search term (e.g., 'redis', 'postgres')" }
    ],
    returns: "Array of matching primitives with configurations",
    example: `const result = await menezis.discover({ query: "postgres" });`
  },
  {
    name: "validate_stack",
    category: "Core Infrastructure",
    icon: CheckCircle,
    description: "Validate a stackfile through the 7-layer validation pipeline.",
    params: [
      { name: "stackfile_content", type: "string", required: true, description: "YAML stackfile content" }
    ],
    returns: "Validation result with actionable feedback",
    example: `const result = await menezis.validate_stack({
  stackfile_content: \`
    version: '1.0'
    stack: 'my-app'
    services:
      web:
        source: 'sigilum/nginx:1.25'
  \`
});`
  },
  {
    name: "judge_stack",
    category: "Core Infrastructure",
    icon: Scale,
    description: "Analyze a stackfile with 5 analyzers: security (40%), policy (30%), topology (15%), cost (10%), operations (5%).",
    params: [
      { name: "stackfile_content", type: "string", required: true, description: "YAML stackfile content" }
    ],
    returns: "Judgment scores and recommendations",
    example: `const judgment = await menezis.judge_stack({
  stackfile_content: "..."
});
// { security: 98, policy: 95, topology: 90, cost: 85, ops: 92 }`
  },
  {
    name: "manifest",
    category: "Core Infrastructure",
    icon: Rocket,
    description: "Unified validate → judge → deploy in ONE atomic operation. The primary deployment command.",
    params: [
      { name: "stackfile_content", type: "string", required: true, description: "YAML stackfile content" },
      { name: "target_node_id", type: "string", required: false, description: "Deploy to specific node" }
    ],
    returns: "Deployment ID, endpoints, and status",
    example: `const result = await menezis.manifest({
  stackfile_content: \`
    version: '1.0'
    stack: 'ghost-blog'
    services:
      ghost:
        source: 'sigilum/ghost:5.0.0'
  \`
});
console.log(result.url); // https://ghost-blog.menezis.io`
  },
  {
    name: "get_stack_status",
    category: "Core Infrastructure",
    icon: Activity,
    description: "Get real-time health and status of a deployed stack.",
    params: [
      { name: "deployment_id", type: "string", required: true, description: "Deployment identifier" }
    ],
    returns: "Health status, resource usage, service states",
    example: `const status = await menezis.get_stack_status({
  deployment_id: "mzs_7f8e9d0a"
});`
  },
  {
    name: "get_service_logs",
    category: "Core Infrastructure",
    icon: FileText,
    description: "Retrieve logs for a specific service.",
    params: [
      { name: "deployment_id", type: "string", required: true, description: "Deployment identifier" },
      { name: "service", type: "string", required: true, description: "Service name" },
      { name: "lines", type: "number", required: false, description: "Number of lines (default: 100)" }
    ],
    returns: "Log output for the specified service",
    example: `const logs = await menezis.get_service_logs({
  deployment_id: "mzs_7f8e9d0a",
  service: "ghost",
  lines: 50
});`
  },
  {
    name: "destroy_stack",
    category: "Core Infrastructure",
    icon: Trash2,
    description: "Completely tear down a deployed stack. Irreversible.",
    params: [
      { name: "deployment_id", type: "string", required: true, description: "Deployment identifier" }
    ],
    returns: "Confirmation of destruction",
    example: `await menezis.destroy_stack({
  deployment_id: "mzs_7f8e9d0a"
});`
  },
  // Cloud Operations
  {
    name: "cloud_login",
    category: "Cloud Operations",
    icon: LogIn,
    description: "Authenticate with the Menezis platform. Required first step for cloud operations.",
    params: [
      { name: "api_key", type: "string", required: true, description: "Your Menezis API key" }
    ],
    returns: "Session ID for subsequent operations",
    example: `const auth = await menezis.cloud_login({
  api_key: process.env.MENEZIS_API_KEY
});
// { success: true, session_id: "sess_..." }`
  },
  {
    name: "cloud_plans",
    category: "Cloud Operations",
    icon: CreditCard,
    description: "List available server plans and pricing.",
    params: [
      { name: "session_id", type: "string", required: true, description: "Active session" },
      { name: "provider", type: "string", required: false, description: "Filter by provider" }
    ],
    returns: "Array of available plans with specs and pricing",
    example: `const plans = await menezis.cloud_plans({
  session_id: "sess_..."
});`
  },
  {
    name: "cloud_provision",
    category: "Cloud Operations",
    icon: Server,
    description: "Provision a new cloud server with the Menezis agent pre-installed.",
    params: [
      { name: "session_id", type: "string", required: true, description: "Active session" },
      { name: "plan", type: "string", required: true, description: "Plan name (nano, micro, small, medium, large, business)" },
      { name: "region", type: "string", required: false, description: "eu-west, us-east, sg (default: eu-west)" }
    ],
    returns: "Node ID, IP address, and provisioning status",
    example: `const server = await menezis.cloud_provision({
  session_id: "sess_...",
  plan: "small",
  region: "eu-west"
});`
  },
  {
    name: "get_nodes",
    category: "Cloud Operations",
    icon: Network,
    description: "List and manage your server fleet.",
    params: [
      { name: "session_id", type: "string", required: true, description: "Active session" }
    ],
    returns: "Array of nodes with status, resources, and deployments",
    example: `const fleet = await menezis.get_nodes({
  session_id: "sess_..."
});`
  },
  {
    name: "cloud_destroy",
    category: "Cloud Operations",
    icon: XCircle,
    description: "Permanently destroy a cloud server. Irreversible.",
    params: [
      { name: "session_id", type: "string", required: true, description: "Active session" },
      { name: "node_id", type: "string", required: true, description: "Node to destroy" }
    ],
    returns: "Confirmation of destruction",
    example: `await menezis.cloud_destroy({
  session_id: "sess_...",
  node_id: "node_abc123"
});`
  },
  {
    name: "billing_status",
    category: "Cloud Operations",
    icon: Receipt,
    description: "Check billing status and usage.",
    params: [
      { name: "session_id", type: "string", required: true, description: "Active session" }
    ],
    returns: "Current balance, usage, upcoming charges",
    example: `const billing = await menezis.billing_status({
  session_id: "sess_..."
});`
  },
  // Multi-Tenant
  {
    name: "provision_instance",
    category: "Multi-Tenant",
    icon: Container,
    description: "Deploy a containerized instance on shared infrastructure.",
    params: [
      { name: "session_id", type: "string", required: true, description: "Active session" },
      { name: "plan", type: "string", required: true, description: "Resource plan" },
      { name: "stackfile_content", type: "string", required: true, description: "YAML stackfile" }
    ],
    returns: "Instance ID, endpoints, checkout URL (if payment required)",
    example: `const instance = await menezis.provision_instance({
  session_id: "sess_...",
  plan: "small",
  stackfile_content: "..."
});`
  },
  {
    name: "modify_instance",
    category: "Multi-Tenant",
    icon: Settings,
    description: "Scale an existing instance (CPU, RAM, disk). Auto-migration if needed.",
    params: [
      { name: "session_id", type: "string", required: true, description: "Active session" },
      { name: "instance_id", type: "string", required: true, description: "Instance to modify" },
      { name: "plan", type: "string", required: true, description: "New plan" }
    ],
    returns: "Updated instance configuration",
    example: `const result = await menezis.modify_instance({
  session_id: "sess_...",
  instance_id: "inst_...",
  plan: "medium"
});`
  },
  // Security
  {
    name: "scan_cve",
    category: "Security",
    icon: Shield,
    description: "Scan for known vulnerabilities before deployment.",
    params: [
      { name: "package_json", type: "string", required: true, description: "Contents of package.json" }
    ],
    returns: "List of CVEs with severity levels and remediation advice",
    example: `const result = await menezis.scan_cve({
  package_json: fs.readFileSync('package.json', 'utf8')
});`
  },
];

const CATEGORIES = ["Core Infrastructure", "Cloud Operations", "Multi-Tenant", "Security"];

function ToolCard({ tool }: { tool: Tool }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-white/10 rounded-lg bg-black/40 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-terminal-green/10 text-terminal-green">
            <tool.icon size={18} />
          </div>
          <div className="text-left">
            <div className="font-mono text-white font-bold">{tool.name}</div>
            <div className="text-xs text-neutral-500">{tool.description.slice(0, 60)}...</div>
          </div>
        </div>
        <ChevronDown
          size={18}
          className={cn(
            "text-neutral-500 transition-transform",
            expanded && "rotate-180"
          )}
        />
      </button>

      {expanded && (
        <div className="p-4 border-t border-white/10 space-y-4">
          <p className="text-sm text-neutral-300">{tool.description}</p>

          {/* Parameters */}
          <div>
            <h4 className="text-xs font-bold text-neutral-500 uppercase mb-2">Parameters</h4>
            <div className="space-y-2">
              {tool.params.map((param) => (
                <div key={param.name} className="flex items-start gap-2 text-sm">
                  <code className="px-1.5 py-0.5 rounded bg-white/10 text-terminal-green font-mono text-xs">
                    {param.name}
                  </code>
                  <span className="text-neutral-500 text-xs">{param.type}</span>
                  {param.required && (
                    <span className="text-alert-amber text-xs">required</span>
                  )}
                  <span className="text-neutral-400 text-xs">— {param.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Returns */}
          <div>
            <h4 className="text-xs font-bold text-neutral-500 uppercase mb-2">Returns</h4>
            <p className="text-sm text-neutral-400">{tool.returns}</p>
          </div>

          {/* Example */}
          <div>
            <h4 className="text-xs font-bold text-neutral-500 uppercase mb-2">Example</h4>
            <pre className="p-3 rounded bg-black/80 border border-white/10 font-mono text-xs text-neutral-300 overflow-x-auto">
              <code>{tool.example}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ToolsPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-electric-blue/10 text-electric-blue">
            <Wrench size={24} />
          </div>
          <h1 className="text-3xl font-bold text-white">MCP Tools</h1>
        </div>
        <p className="text-lg text-neutral-400">
          16 tools to control your infrastructure through AI assistants.
          Compatible with Claude Code, Cursor, Windsurf, Antigravity, and more.
        </p>
      </div>

      {/* Category summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {CATEGORIES.map((cat) => {
          const count = TOOLS.filter((t) => t.category === cat).length;
          return (
            <div key={cat} className="p-3 rounded-lg border border-white/10 bg-black/40 text-center">
              <div className="text-2xl font-bold text-white">{count}</div>
              <div className="text-xs text-neutral-500 font-mono">{cat}</div>
            </div>
          );
        })}
      </div>

      {/* Tools by category */}
      {CATEGORIES.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terminal-green" />
            {category}
          </h2>
          <div className="space-y-2">
            {TOOLS.filter((t) => t.category === category).map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      ))}

      {/* Error handling */}
      <div className="mt-12 p-6 rounded-lg border border-white/10 bg-black/60">
        <h2 className="font-bold text-white mb-4">Error Handling</h2>
        <p className="text-sm text-neutral-400 mb-4">
          All tools return a consistent error format:
        </p>
        <pre className="p-3 rounded bg-black/80 border border-white/10 font-mono text-xs text-neutral-300 overflow-x-auto">
          <code>{`{
  success: false,
  error: {
    code: "VALIDATION_ERROR",
    message: "Invalid stackfile: unknown primitive 'foo'",
    details: { ... }
  }
}`}</code>
        </pre>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="text-neutral-500">AUTH_REQUIRED</div>
          <div className="text-neutral-400">Missing or invalid session</div>
          <div className="text-neutral-500">VALIDATION_ERROR</div>
          <div className="text-neutral-400">Stackfile validation failed</div>
          <div className="text-neutral-500">RESOURCE_NOT_FOUND</div>
          <div className="text-neutral-400">Node/instance not found</div>
          <div className="text-neutral-500">QUOTA_EXCEEDED</div>
          <div className="text-neutral-400">Plan limits reached</div>
        </div>
      </div>
    </div>
  );
}
