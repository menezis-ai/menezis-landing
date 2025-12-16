"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Server, Database, Shield, Activity, FileText, Layout,
    GitBranch, Terminal, Cpu, Lock, Network, Zap,
    Globe, Save, Command, BarChart, X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Tool {
    name: string;
    input: string;
    output: string;
    icon: React.ElementType;
    description: string;
}

const TOOLS: Tool[] = [
    { name: "server_provision", input: "spec", output: "server_id", icon: Server, description: "Provision high-performance bare metal or cloud instances." },
    { name: "database_create", input: "config", output: "db_endpoint", icon: Database, description: "Deploy managed PostgreSQL, Redis, or ClickHouse clusters." },
    { name: "firewall_configure", input: "rules", output: "policy_id", icon: Shield, description: "Define and apply network security policies and rules." },
    { name: "monitor_metrics", input: "resource_id", output: "metrics_stream", icon: Activity, description: "Stream real-time telemetry and resource usage data." },
    { name: "log_analyze", input: "log_path", output: "insights", icon: FileText, description: "Parse and analyze distributed logs for anomalies." },
    { name: "config_template", input: "service", output: "yaml_config", icon: Layout, description: "Generate compliant Infrastructure-as-Code manifests." },
    { name: "code_deploy", input: "repo_url", output: "deployment_id", icon: GitBranch, description: "Automate code deployment pipelines from Git repositories." },
    { name: "shell_execute", input: "command", output: "stdout", icon: Terminal, description: "Execute secure shell commands on remote infrastructure." },
    { name: "scale_auto", input: "thresholds", output: "scaling_policy", icon: Zap, description: "Configure dynamic auto-scaling based on load thresholds." },
    { name: "encrypt_data", input: "data", output: "encrypted_blob", icon: Lock, description: "Encrypt sensitive payloads using hardware security modules." },
    { name: "loadbalancer_setup", input: "backends", output: "lb_ip", icon: Network, description: "Provision and configure global traffic load balancers." },
    { name: "resource_optimize", input: "workload", output: "recommendations", icon: Cpu, description: "Analyze workloads to suggest cost and performance optimizations." },
    { name: "network_topology", input: "region", output: "vpc_id", icon: Globe, description: "Design and implement private cloud network architectures." },
    { name: "backup_manage", input: "schedule", output: "backup_id", icon: Save, description: "Schedule and manage automated data snapshots and backups." },
    { name: "cost_forecast", input: "usage_pattern", output: "projection", icon: BarChart, description: "Predict infrastructure costs based on usage patterns." },
    { name: "incident_resolve", input: "alert", output: "resolution", icon: Command, description: "Trigger automated remediation for infrastructure alerts." },
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
