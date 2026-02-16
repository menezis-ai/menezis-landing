"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { GhostPreviewModal } from "./GhostPreviewModal";

const COMMAND = 'menezis deploy "Ghost blog with PostgreSQL and Redis cache in Europe"';
const COMMAND_MOBILE = 'menezis deploy "Ghost + PostgreSQL in EU"';

const CURSOR_BLINK_MS = 500;
const TYPING_BASE_MS = 30;
const TYPING_JITTER_MS = 30;
const PROCESSING_DELAY_MS = 1500;
const JUDGMENT_DELAY_MS = 2000;
const INITIAL_DELAY_MS = 200;

type Step = "IDLE" | "TYPING" | "PROCESSING" | "JUDGMENT" | "COMPLETE";

export function Terminal() {
    const [step, setStep] = useState<Step>("TYPING");
    const [typedChars, setTypedChars] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [showPreview, setShowPreview] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);

    // Blinking cursor
    useEffect(() => {
        const interval = setInterval(() => setShowCursor((prev) => !prev), CURSOR_BLINK_MS);
        return () => clearInterval(interval);
    }, []);

    // Main Sequencing
    useEffect(() => {
        let cancelled = false;

        const runSequence = async () => {
            // 1. Start Typing
            setStep("TYPING");
            setTypedChars(0);

            for (let i = 0; i <= COMMAND.length; i++) {
                if (cancelled) return;
                await new Promise((r) => setTimeout(r, TYPING_BASE_MS + Math.random() * TYPING_JITTER_MS));
                setTypedChars(i);
            }

            if (cancelled) return;

            // 2. Processing
            setStep("PROCESSING");
            await new Promise((r) => setTimeout(r, PROCESSING_DELAY_MS));

            if (cancelled) return;

            // 3. Judgment
            setStep("JUDGMENT");
            await new Promise((r) => setTimeout(r, JUDGMENT_DELAY_MS));

            if (cancelled) return;

            // 4. Complete
            setStep("COMPLETE");
        };

        // Initial delay
        const timeout = setTimeout(runSequence, INITIAL_DELAY_MS);

        return () => {
            cancelled = true;
            clearTimeout(timeout);
        };
    }, [animationKey]);

    const handleReplay = () => {
        setAnimationKey((prev) => prev + 1);
    };

    const handleLinkClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowPreview(true);
    };

    return (
        <>
            {/* MOBILE VERSION */}
            <div className="md:hidden mx-auto select-none w-full max-w-md px-4">
                <div className="relative rounded-lg border border-white/10 bg-black/90 shadow-[0_0_40px_-10px_rgba(0,255,65,0.05)] backdrop-blur-sm overflow-hidden">
                    {/* CRT Effect */}
                    <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] crt-scanlines" />

                    {/* Title Bar */}
                    <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-terminal-titlebar z-30 relative">
                        <div className="flex space-x-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="text-[10px] text-white/30 tracking-widest uppercase">menezis-terminal</div>
                        <div className="w-8"></div>
                    </div>

                    {/* Mobile Body - Fixed height to prevent resize during animation */}
                    <div className="p-5 font-mono text-xs leading-relaxed text-neutral-300 space-y-4 z-10 relative min-h-[240px]">
                        {/* Command with animation */}
                        {step !== "IDLE" && (
                            <div className="text-[11px]">
                                <span className="text-terminal-green">$</span>
                                <span className="text-white ml-1">
                                    {COMMAND_MOBILE.substring(0, typedChars)}
                                    {step === "TYPING" && showCursor && <span className="bg-terminal-green/50 ml-0.5 inline-block w-1.5 h-3 align-middle">_</span>}
                                </span>
                            </div>
                        )}

                        {/* Processing */}
                        {step !== "IDLE" && step !== "TYPING" && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px]">
                                <span className="text-white font-bold">⚡ VALIDATION</span>
                                <span className="text-neutral-400 ml-2">Syntax</span> <span className="text-terminal-green">OK</span>
                                <span className="text-neutral-400 ml-1">·</span>
                                <span className="text-neutral-400 ml-1">Resources</span> <span className="text-terminal-green">OK</span>
                            </motion.div>
                        )}

                        {/* Judgment */}
                        {(step === "JUDGMENT" || step === "COMPLETE") && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px]">
                                <span className="text-white font-bold">🛡️ JUDGMENT</span>
                                <span className="text-neutral-400 ml-2">Security</span> <span className="text-terminal-green">DONE</span>
                                <span className="text-neutral-400 ml-1">·</span>
                                <span className="text-neutral-400 ml-1">Cost</span> <span className="text-terminal-green">DONE</span>
                                <span className="text-neutral-400 ml-1">·</span>
                                <span className="text-neutral-400 ml-1">Reliability</span> <span className="text-terminal-green">DONE</span>
                            </motion.div>
                        )}

                        {/* Complete */}
                        {step === "COMPLETE" && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                                <div className="text-[11px] space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span>📋</span>
                                        <span className="text-white font-bold">MANIFEST</span>
                                    </div>
                                    <div className="pl-5 text-[10px] space-y-0.5">
                                        <div><span className="text-neutral-500">id:</span> mzs_7f8e9d0a</div>
                                        <div><span className="text-neutral-500">region:</span> eu-west-1</div>
                                        <div><span className="text-neutral-500">stack:</span> Ghost + PostgreSQL + Redis</div>
                                    </div>
                                </div>

                                <div className="text-[11px]">
                                    <div className="text-terminal-green">✓ DEPLOYED</div>
                                    <a href="#" onClick={handleLinkClick} className="text-neutral-300 hover:text-white text-[10px] border-b border-white/30 ml-3">
                                        ghost-7f8e9d0a.menezis.io
                                    </a>
                                </div>

                                <div className="flex justify-end">
                                    <button onClick={handleReplay} className="flex items-center gap-1 text-neutral-500 hover:text-terminal-green text-[10px]">
                                        <RotateCcw size={10} /> Replay
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* DESKTOP VERSION */}
            <div className="hidden md:block mx-auto select-none w-[750px] max-w-full h-[850px]">
                <div
                    className="relative w-full h-full font-terminal-custom text-sm leading-relaxed overflow-hidden rounded-lg border border-white/10 bg-black/90 shadow-[0_0_40px_-10px_rgba(0,255,65,0.05)] backdrop-blur-sm flex flex-col"
                >
                    {/* CRT Scanline Effect Overlay */}
                    <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] crt-scanlines" />

                    {/* Title Bar */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-terminal-titlebar font-sans z-30 relative">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="text-xs text-white/30 tracking-widest uppercase">menezis-terminal v2.1.0</div>
                        <div className="w-10"></div>
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

                        {/* Replay Button - Outside overflow area */}
                        {step === "COMPLETE" && (
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={handleReplay}
                                    className="flex items-center gap-2 text-neutral-500 hover:text-terminal-green transition-colors text-sm"
                                >
                                    <RotateCcw size={14} />
                                    <span>Replay demo</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>



            <AnimatePresence>
                {showPreview && <GhostPreviewModal isOpen={showPreview} onClose={() => setShowPreview(false)} />}
            </AnimatePresence>
        </>
    );
}

const JudgmentRow = React.memo(function JudgmentRow({ label, score, total, bars }: { label: string, score: number, total: number, bars: string }) {
    return (
        <div className="grid grid-cols-[180px_100px_1fr] gap-4 text-neutral-300">
            <span>{label}</span>
            <span>{score}/{total}</span>
            <span className="text-terminal-green tracking-tight">{bars}</span>
        </div>
    )
});
