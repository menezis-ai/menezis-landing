"use client";

import React, { useState } from "react";
import { Download, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/ui/CodeBlock";

const CLIENTS = [
  {
    id: "claude",
    name: "Claude Code",
    configPath: "~/.claude/settings.json",
    configPathWin: "%USERPROFILE%\\.claude\\settings.json",
    note: "Or use: /mcp command in Claude Code",
  },
  {
    id: "cursor",
    name: "Cursor",
    configPath: "~/.cursor/mcp.json",
    configPathWin: "%USERPROFILE%\\.cursor\\mcp.json",
    note: null,
  },
  {
    id: "windsurf",
    name: "Windsurf",
    configPath: "~/.windsurf/mcp.json",
    configPathWin: "%USERPROFILE%\\.windsurf\\mcp.json",
    note: null,
  },
  {
    id: "cline",
    name: "Cline",
    configPath: "~/.cline/mcp.json",
    configPathWin: "%USERPROFILE%\\.cline\\mcp.json",
    note: null,
  },
  {
    id: "roo",
    name: "Roo",
    configPath: "~/.roo/mcp.json",
    configPathWin: "%USERPROFILE%\\.roo\\mcp.json",
    note: null,
  },
  {
    id: "antigravity",
    name: "Antigravity",
    configPath: "~/.gemini/antigravity/mcp_config.json",
    configPathWin: "%USERPROFILE%\\.gemini\\antigravity\\mcp_config.json",
    note: "Or use: Manage MCPs → View raw config",
  },
  {
    id: "vscode",
    name: "VS Code Copilot",
    configPath: "~/.vscode/mcp.json",
    configPathWin: "%USERPROFILE%\\.vscode\\mcp.json",
    note: null,
  },
  {
    id: "zed",
    name: "Zed",
    configPath: "~/.config/zed/mcp.json",
    configPathWin: "%APPDATA%\\Zed\\mcp.json",
    note: null,
  },
  {
    id: "vibe",
    name: "Mistral Vibe",
    configPath: "~/.vibe/mcp.json",
    configPathWin: "%USERPROFILE%\\.vibe\\mcp.json",
    note: null,
  },
];

export default function InstallPage() {
  const [selectedClient, setSelectedClient] = useState("claude");
  const [os, setOs] = useState<"mac" | "win">("mac");

  const client = CLIENTS.find((c) => c.id === selectedClient)!;
  const configPath = os === "mac" ? client.configPath : client.configPathWin;

  const mcpConfig = `{
  "mcpServers": {
    "menezis": {
      "command": "npx",
      "args": ["-y", "menezis"],
      "env": {
        "MENEZIS_API_KEY": "your_api_key_here"
      }
    }
  }
}`;

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-terminal-green/10 text-terminal-green">
            <Download size={24} />
          </div>
          <h1 className="text-3xl font-bold text-white">Installation</h1>
        </div>
        <p className="text-lg text-neutral-400">
          Connect Menezis to your AI assistant in 2 minutes.
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
            npx available (comes with npm)
          </li>
        </ul>
      </div>

      {/* Step 1: Get API Key */}
      <div className="mb-10 relative">
        <div className="absolute left-[19px] top-12 bottom-0 w-px bg-white/10" />
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-terminal-green/10 border border-terminal-green/30 text-terminal-green flex items-center justify-center font-mono font-bold text-sm">
            01
          </div>
          <h2 className="text-xl font-bold text-white">Get your API key</h2>
        </div>
        <div className="pl-11">
          <p className="text-neutral-400 mb-4">
            Sign up at{" "}
            <a
              href="https://app.menezis.ai"
              className="text-terminal-green hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              app.menezis.ai
            </a>{" "}
            and generate an API key from your dashboard.
          </p>
          <div className="p-4 rounded-lg border border-white/10 bg-black/40">
            <div className="font-mono text-sm text-neutral-500">
              Your API key looks like:
            </div>
            <div className="font-mono text-terminal-green mt-1">
              mzs_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Choose Client */}
      <div className="mb-10 relative">
        <div className="absolute left-[19px] top-12 bottom-0 w-px bg-white/10" />
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-terminal-green/10 border border-terminal-green/30 text-terminal-green flex items-center justify-center font-mono font-bold text-sm">
            02
          </div>
          <h2 className="text-xl font-bold text-white">Choose your AI client</h2>
        </div>
        <div className="pl-11">
          <div className="flex flex-wrap gap-2 mb-4">
            {CLIENTS.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedClient(c.id)}
                className={cn(
                  "px-4 py-2 rounded-lg font-mono text-sm transition-colors",
                  selectedClient === c.id
                    ? "bg-terminal-green/20 text-terminal-green border border-terminal-green/30"
                    : "bg-white/5 text-neutral-400 border border-white/10 hover:bg-white/10"
                )}
              >
                {c.name}
              </button>
            ))}
          </div>
          <div className="flex gap-2 mb-4 mt-6">
            <button
              onClick={() => setOs("mac")}
              className={cn(
                "px-4 py-2 rounded-lg font-mono text-sm transition-colors border",
                os === "mac"
                  ? "bg-electric-blue/20 text-electric-blue border-electric-blue/30"
                  : "bg-white/5 text-neutral-400 border-white/10 hover:bg-white/10"
              )}
            >
              macOS / Linux
            </button>
            <button
              onClick={() => setOs("win")}
              className={cn(
                "px-4 py-2 rounded-lg font-mono text-sm transition-colors border",
                os === "win"
                  ? "bg-electric-blue/20 text-electric-blue border-electric-blue/30"
                  : "bg-white/5 text-neutral-400 border-white/10 hover:bg-white/10"
              )}
            >
              Windows
            </button>
          </div>
        </div>
      </div>

      {/* Step 3: Configure */}
      <div className="mb-10 relative">
        <div className="absolute left-[19px] top-12 bottom-0 w-px bg-white/10" />
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-terminal-green/10 border border-terminal-green/30 text-terminal-green flex items-center justify-center font-mono font-bold text-sm">
            03
          </div>
          <h2 className="text-xl font-bold text-white">Add MCP configuration</h2>
        </div>
        <div className="pl-11">
          <p className="text-neutral-400 mb-2">
            Edit your {client.name} config file:
          </p>
          <div className="p-3 rounded bg-black/60 border border-white/10 font-mono text-sm text-neutral-300 mb-2">
            {configPath}
          </div>
          {client.note && (
            <p className="text-xs text-terminal-green mb-4 font-mono">{client.note}</p>
          )}
          <p className="text-neutral-400 mb-4">
            Add or merge this configuration:
          </p>
          <CodeBlock code={mcpConfig} />
          <p className="text-sm text-neutral-500 mt-3">
            Replace <code className="text-terminal-green">your_api_key_here</code> with your actual API key.
          </p>
        </div>
      </div>

      {/* Step 4: Restart */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-terminal-green/10 border border-terminal-green/30 text-terminal-green flex items-center justify-center font-mono font-bold text-sm">
            04
          </div>
          <h2 className="text-xl font-bold text-white">Restart & verify</h2>
        </div>
        <div className="pl-11">
          <p className="text-neutral-400 mb-4">
            Restart {client.name}. The Menezis tools should now be available.
          </p>
          <p className="text-neutral-400 mb-4">
            Try asking your AI assistant:
          </p>
          <div className="p-4 rounded-lg border border-terminal-green/30 bg-terminal-green/5 font-mono text-sm">
            <span className="text-neutral-500">&quot;</span>
            <span className="text-white">Deploy a Ghost blog with PostgreSQL in Europe</span>
            <span className="text-neutral-500">&quot;</span>
          </div>
        </div>
      </div>

      {/* Success */}
      <div className="p-6 rounded-lg border border-terminal-green/30 bg-terminal-green/5">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-full bg-terminal-green/20 text-terminal-green">
            <Check size={20} />
          </div>
          <div>
            <h3 className="font-bold text-white mb-1">You&apos;re ready!</h3>
            <p className="text-sm text-neutral-400">
              Menezis is now connected. You have access to 16 MCP tools for infrastructure deployment.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
