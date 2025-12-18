"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { GhostPreviewModal } from "./GhostPreviewModal";

const COMMAND = 'menezis deploy "Ghost blog with PostgreSQL and Redis cache in Europe"';

type Step = "IDLE" | "TYPING" | "PROCESSING" | "JUDGMENT" | "COMPLETE";
type Timeout = ReturnType<typeof setTimeout>;

export function Terminal() {
    const [step, setStep] = useState<Step>("TYPING");
    const [typedChars, setTypedChars] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [showPreview, setShowPreview] = useState(false);

    // Blinking cursor
    useEffect(() => {
        const interval = setInterval(() => setShowCursor((prev) => !prev), 500);
        return () => clearInterval(interval);
    }, []);

    // Main Sequencing
    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const runSequence = async () => {
            // 1. Start Typing
            setStep("TYPING");
            setTypedChars(0);

            for (let i = 0; i <= COMMAND.length; i++) {
                await new Promise((r) => setTimeout(r, 30 + Math.random() * 30)); // Random typing speed
                setTypedChars(i);
            }

            // 2. Processing
            // await new Promise((r) => setTimeout(r, 500));
            setStep("PROCESSING");

            await new Promise((r) => setTimeout(r, 1500)); // Simulate parsing/discovery time

            // 3. Judgment
            setStep("JUDGMENT");
            await new Promise((r) => setTimeout(r, 2000)); // Show analysis

            // 4. Complete
            setStep("COMPLETE");
            // Loop removed: Animation plays only once.
        };

        // Initial delay
        timeout = setTimeout(runSequence, 200);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const handleLinkClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowPreview(true);
    };

    return (
        <>
            {/* Layout Wrapper to strictly enforce dimensions and prevent resize jitter */}
            <div
                className="mx-auto select-none"
                style={{ width: '750px', maxWidth: '100%', height: '850px' }}
            >
                <div
                    className="relative w-full h-full font-terminal-custom text-sm leading-relaxed overflow-hidden rounded-lg border border-white/10 bg-black/90 shadow-[0_0_40px_-10px_rgba(0,255,65,0.05)] backdrop-blur-sm flex flex-col"
                >
                    {/* CRT Scanline Effect Overlay - Now correctly placed inside the relative container */}
                    <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />

                    {/* Title Bar */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#1A1A1A] font-sans z-30 relative">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="text-xs text-white/30 tracking-widest uppercase">menezis-terminal v2.1.0</div>
                        <div className="w-10"></div> {/* Spacer */}
                    </div>

                    {/* Terminal Body */}
                    <div className="p-8 flex-1 min-h-0 flex flex-col justify-start text-neutral-300 z-10 relative font-mono text-sm leading-relaxed">
                        <div className="flex-1 overflow-hidden space-y-6">

                            {/* ASCII LOGO & HEADER */}
                            <div className="mb-6">
                                <pre aria-hidden="true" className="text-terminal-green font-bold leading-[1.1] tracking-tighter whitespace-pre overflow-hidden mb-6 select-none">
                                    {`███╗   ███╗███████╗███╗   ██╗███████╗███████╗██╗███████╗
████╗ ████║██╔════╝████╗  ██║██╔════╝╚══███╔╝██║██╔════╝
██╔████╔██║█████╗  ██╔██╗ ██║█████╗    ███╔╝ ██║███████╗
██║╚██╔╝██║██╔══╝  ██║╚██╗██║██╔══╝   ███╔╝  ██║╚════██║
██║ ╚═╝ ██║███████╗██║ ╚████║███████╗███████╗██║███████║
╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝╚══════╝`}
                                </pre>

                                <div className="text-white/40">═══════════════════════════════════════════════════════════</div>
                                <div className="text-white/90 py-1 font-bold">Infrastructure at the Speed of Thought.</div>
                                <div className="text-white/50 text-xs py-1">16 MCP tools for AI code assistants. Post-quantum security.</div>
                                <div className="text-white/40">═══════════════════════════════════════════════════════════</div>
                            </div>

                            {/* Command Input */}
                            {(step !== "IDLE") && (
                                <div className="flex">
                                    <span className="text-terminal-green mr-2">$</span>
                                    <span className="text-white">
                                        {COMMAND.substring(0, typedChars)}
                                        {step === "TYPING" && showCursor && <span className="bg-terminal-green/50 text-transparent inline-block w-2.5 h-4 align-middle ml-1">_</span>}
                                    </span>
                                </div>
                            )}

                            {/* Processing Output */}
                            {step !== "IDLE" && step !== "TYPING" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1 text-neutral-400">
                                    <div className="flex items-center gap-2">
                                        <span>⚡ Validating request...</span>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                                        className="pl-4 flex items-center gap-2"
                                    >
                                        <span className="text-terminal-green">✓</span>
                                        <span>Syntax validated</span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
                                        className="pl-4 flex items-center gap-2"
                                    >
                                        <span className="text-terminal-green">✓</span>
                                        <span>Resources calculated</span>
                                    </motion.div>
                                </motion.div>
                            )}

                            {/* Judgment Analysis */}
                            {(step === "JUDGMENT" || step === "COMPLETE") && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl">🛡️</span>
                                        <span className="text-white font-bold">JUDGMENT</span>
                                    </div>

                                    <div className="w-full space-y-1 pl-4">
                                        <JudgmentRow label="Security Score:" score={98} total={100} bars="████████████████████░" />
                                        <JudgmentRow label="Cost Efficiency:" score={95} total={100} bars="███████████████████░░" />
                                        <JudgmentRow label="Reliability:" score={99} total={100} bars="█████████████████████" />
                                    </div>
                                </motion.div>
                            )}

                            {/* Manifest & Complete */}
                            {step === "COMPLETE" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl">📋</span>
                                            <span className="text-white font-bold">MANIFEST</span>
                                        </div>
                                        <div className="pl-4 grid grid-cols-[160px_1fr] gap-y-1 text-neutral-300">
                                            <div className="text-neutral-500">deployment_id:</div>
                                            <div>mzs_7f8e9d0a</div>
                                            <div className="text-neutral-500">region:</div>
                                            <div>eu-west-1</div>
                                            <div className="text-neutral-500">instances:</div>
                                            <div>3x Ghost, 1x PostgreSQL, 1x Redis</div>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-terminal-green">
                                            <span>✓</span>
                                            <span>DEPLOYED</span>
                                        </div>
                                        <div className="pl-6">
                                            <a href="#" onClick={handleLinkClick} className="text-neutral-300 hover:text-white border-b border-white/30 hover:border-white transition-colors">
                                                https://ghost-7f8e9d0a.menezis.io
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>



            <AnimatePresence>
                {showPreview && <GhostPreviewModal isOpen={showPreview} onClose={() => setShowPreview(false)} />}
            </AnimatePresence>
        </>
    );
}

function JudgmentRow({ label, score, total, bars }: { label: string, score: number, total: number, bars: string }) {
    return (
        <div className="grid grid-cols-[180px_100px_1fr] gap-4 text-neutral-300">
            <span>{label}</span>
            <span>{score}/{total}</span>
            <span className="text-terminal-green tracking-tight">{bars}</span>
        </div>
    )
}
