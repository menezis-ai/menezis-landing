import React from "react";

interface ToolDef {
    name: string;
    args: string;
    description: string;
}

const TOOLS: ToolDef[] = [
    { name: "cloudProvision", args: "(plan: 'sandbox' | 'prod', region: Region)", description: "Provisions isolated infrastructure stack with specified redundancy." },
    { name: "judgeStack", args: "(yaml: string, policy: 'strict' | 'relaxed')", description: "Evaluates topology against security and cost compliance policies." },
    { name: "validateTopology", args: "(stack: StackDefinition)", description: "Mathematically verifies graph integrity and connectivity." },
    { name: "enforceBudget", args: "(limit: number, currency: 'EUR')", description: "Hard-stops deployment if predicted run-rate exceeds bounds." },
    { name: "aegisAudit", args: "(target_id: string)", description: "Runs deep-scan CVE analysis and post-quantum readiness check." },
    { name: "getLogs", args: "(serviceId: string, since: Date)", description: "Streams live logs from specific microservices via encrypted tunnel." },
];

export function ApiDocList() {
    return (
        <div className="w-full font-mono text-sm border-t border-white/10">
            {TOOLS.map((tool, idx) => (
                <div key={tool.name} className="group border-b border-white/10 hover:bg-white/5 transition-colors">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-5 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-terminal-green/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-electric-blue font-bold">{tool.name}</span>
                            <span className="text-neutral-500 hidden sm:inline">{tool.args}</span>
                        </div>
                        <div className="md:col-span-7 flex items-center md:border-l border-white/5 md:pl-8 text-neutral-400 group-hover:text-neutral-200 transition-colors">
                            {/* Mobile args show here? No, keep it clean. */}
                            <span className="sm:hidden text-xs text-neutral-500 mr-2 block mb-1">{tool.args}</span>
                            {tool.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
