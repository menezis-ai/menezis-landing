"use client";

import React from "react";
import { X, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface GhostPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function GhostPreviewModal({ isOpen, onClose }: GhostPreviewModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Browser Window / Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-5xl h-full max-h-[85vh] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col font-sans text-neutral-900"
            >
                {/* Fake Browser Toolbar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 border-b border-neutral-200">
                    <div className="flex gap-1.5">
                        <div onClick={onClose} className="w-3 h-3 rounded-full bg-red-400 cursor-pointer hover:bg-red-500 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4 bg-white rounded-md border border-neutral-200 px-3 py-1 text-xs text-neutral-500 flex items-center justify-center font-mono">
                        <Globe size={10} className="mr-2" />
                        https://ghost-7f8e9d.menezis.io
                    </div>
                    <button onClick={onClose} className="text-neutral-400 hover:text-neutral-600">
                        <X size={16} />
                    </button>
                </div>

                {/* Ghost Blog Simulation */}
                <div className="flex-1 overflow-y-auto bg-white">
                    {/* Header */}
                    <header className="px-6 py-8 border-b border-neutral-100 flex justify-between items-center max-w-4xl mx-auto w-full">
                        <div className="font-bold text-xl tracking-tight">Fault-tolerant Ghost</div>
                        <nav className="hidden sm:flex gap-6 text-sm font-medium text-neutral-500">
                            <span className="text-neutral-900">Home</span>
                            <span>About</span>
                            <span>Collection</span>
                            <span>Author</span>
                        </nav>
                        <button className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium">Subscribe</button>
                    </header>

                    {/* Hero */}
                    <main className="max-w-4xl mx-auto w-full px-6 py-16 sm:py-24 text-center">
                        <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight text-neutral-900">
                            Welcome to your new<br />Ghost publication
                        </h1>
                        <p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto leading-relaxed">
                            This is a simulated preview of your deployed instance. Everything is ready—configured, secured, and optimized.
                        </p>
                    </main>

                    {/* Featured Post Card */}
                    <div className="max-w-4xl mx-auto w-full px-6 pb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <article className="col-span-1 sm:col-span-3 lg:col-span-2 group cursor-pointer">
                            <div className="aspect-video bg-neutral-100 rounded-xl mb-4 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
                                    alt="Cover"
                                    className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex gap-2 text-xs font-bold text-pink-600 mb-2 uppercase tracking-wide">
                                <span>Getting Started</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-2 group-hover:text-neutral-600 transition-colors">Start here for a quick overview of everything you need to know</h2>
                            <p className="text-neutral-500 line-clamp-2">
                                We've crammed the most important information to help you get started with Ghost into this one post. It's your primary resource...
                            </p>
                        </article>

                        <article className="col-span-1 group cursor-pointer">
                            <div className="aspect-video bg-neutral-100 rounded-xl mb-4 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                                    alt="Cover"
                                    className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex gap-2 text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">
                                <span>Customizing</span>
                            </div>
                            <h2 className="text-xl font-bold mb-2 group-hover:text-neutral-600 transition-colors">Setting up your own design</h2>
                            <p className="text-neutral-500 line-clamp-2">
                                Ghost comes with a beautiful default theme called Casper...
                            </p>
                        </article>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
