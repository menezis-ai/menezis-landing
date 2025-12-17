"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search, CheckCircle, Scale, Rocket, Activity, FileText,
    Trash2, LogIn, CreditCard, Server, Network, XCircle,
    Receipt, Container, Settings, Shield, X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Tool {
    name: string;
    input: string;
    output: string;
    icon: React.ElementType;
    description: string;
}

// Accurate 16 MCP tools from Sigilum codebase
const TOOLS: Tool[] = [
    // Core Infrastructure (7)
    { name: "discover", input: "query", output: "primitives", icon: Search, description: "Discover available infrastructure primitives (databases, proxies, caches)." },
    { name: "validate_stack", input: "stackfile", output: "validation", icon: CheckCircle, description: "7-layer validation pipeline with actionable feedback." },
    { name: "judge_stack", input: "stackfile", output: "judgment", icon: Scale, description: "5-analyzer wisdom assessment: security, cost, topology, policy, ops." },
    { name: "manifest", input: "stackfile", output: "deployment", icon: Rocket, description: "Unified validate → judge → deploy in ONE atomic operation." },
    { name: "get_stack_status", input: "deployment_id", output: "health", icon: Activity, description: "Real-time health monitoring and diagnostics." },
    { name: "get_service_logs", input: "service", output: "logs", icon: FileText, description: "Service-level troubleshooting and analysis." },
    { name: "destroy_stack", input: "deployment_id", output: "confirmation", icon: Trash2, description: "Complete infrastructure teardown with cleanup." },

    // Cloud Operations (6 - Operation Midas)
    { name: "cloud_login", input: "api_key", output: "session_id", icon: LogIn, description: "Authenticate with Menezis platform. Required first step." },
    { name: "cloud_plans", input: "provider", output: "plans", icon: CreditCard, description: "List available server plans and pricing." },
    { name: "cloud_provision", input: "plan", output: "node_id", icon: Server, description: "Provision cloud server with agent pre-installed." },
    { name: "get_nodes", input: "session_id", output: "fleet", icon: Network, description: "Fleet management and status monitoring." },
    { name: "cloud_destroy", input: "node_id", output: "confirmation", icon: XCircle, description: "Permanently destroy cloud server. Irreversible." },
    { name: "billing_status", input: "session_id", output: "billing", icon: Receipt, description: "Cost tracking and subscription management." },

    // Multi-Tenant (2 - Operation Fort Knox)
    { name: "provision_instance", input: "stackfile", output: "instance", icon: Container, description: "Deploy containerized instance on shared infrastructure." },
    { name: "modify_instance", input: "instance_id", output: "updated", icon: Settings, description: "Scale CPU/RAM/disk. Auto-migration if needed." },

    // Security (1)
    { name: "scan_cve", input: "package_json", output: "vulnerabilities", icon: Shield, description: "Scan for critical CVEs before deployment." },
];

export function McpToolGrid() {
    const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

    return (
        <div className="relative">
            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {TOOLS.map((tool) => (
                    <motion.div
                        key={tool.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedTool(tool)}
                        className="cursor-text group relative p-4 rounded-lg bg-[radial-gradient(circle_at_center,#111111_0%,#050505_100%)] border border-white/10 hover:bg-white/5 hover:border-terminal-green transition-all"
                    >
                        <div className="flex flex-col items-start gap-2">
                            <div className="flex items-center gap-2 w-full mb-1">
                                <tool.icon size={16} className="text-neutral-500 group-hover:text-terminal-green transition-colors" />
                                <div className="h-px bg-white/5 flex-1 group-hover:bg-terminal-green/20 transition-colors" />
                            </div>
                            <div className="font-mono text-xs text-neutral-400 group-hover:text-white w-full break-all transition-colors leading-relaxed">
                                <span className="text-terminal-green/50 mr-1 select-none">&gt;</span>
                                menezis.{tool.name}()
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedTool && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTool(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-md bg-[#0A0A0A] border border-white/20 rounded-xl p-6 shadow-2xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-terminal-green/10 text-terminal-green">
                                        <selectedTool.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold font-mono text-white tracking-tight">
                                        {selectedTool.name}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setSelectedTool(null)}
                                    aria-label="Close tool details"
                                    className="text-neutral-500 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <p className="text-neutral-400 text-sm mb-6 pl-[52px]">
                                {selectedTool.description}
                            </p>

                            {/* Details */}
                            <div className="space-y-4 font-mono text-sm">
                                <div className="bg-black/50 rounded-lg p-4 border border-white/5">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-neutral-500 w-12 text-right">IN</span>
                                        <span className="text-terminal-green">→</span>
                                        <span className="bg-white/10 px-2 py-0.5 rounded text-neutral-300">
                                            {selectedTool.input}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-neutral-500 w-12 text-right">OUT</span>
                                        <span className="text-blue-400">←</span>
                                        <span className="bg-white/10 px-2 py-0.5 rounded text-neutral-300">
                                            {selectedTool.output}
                                        </span>
                                    </div>
                                </div>

                                <div className="text-xs text-neutral-500 text-center pt-2">
                                    Function Call Standard v1.0
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
