"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

const COPY_FEEDBACK_MS = 2000;

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
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
