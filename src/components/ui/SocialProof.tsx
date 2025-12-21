"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: "16", label: "MCP Tools" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<2min", label: "MTTR" },
  { value: "3", label: "Regions" },
];

export function SocialProof() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-terminal-green mb-2">
            {stat.value}
          </div>
          <div className="text-sm font-mono text-neutral-500">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
