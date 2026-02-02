"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, BarChart3, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-20">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto"
            >
                <div className="flex justify-center gap-4 mb-8">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm md:text-base font-medium text-blue-300 backdrop-blur-sm">
                        <BarChart3 className="w-4 h-4" />
                        PM Junior / PMO
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700 text-sm md:text-base font-medium text-zinc-300 backdrop-blur-sm">
                        <Terminal className="w-4 h-4" />
                        Technical Background
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                    Alessandro Calabrò
                </h1>

                <h2 className="text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 mb-8">
                    Organizzo il caos, <br className="hidden md:block" />
                    costruisco soluzioni.
                </h2>

                <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Unisco la precisione operativa del <strong>PMO</strong> con la concretezza tecnica dello sviluppatore.
                    Supporto la gestione di commessa, coordino risorse e garantisco che la delivery rispetti qualità e scadenze.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2">
                        Esplora il Portfolio
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="flex items-center gap-2 px-8 py-4 rounded-full border border-zinc-800 text-zinc-300 font-medium hover:bg-zinc-900 transition-all">
                        <Download className="w-4 h-4" />
                        Scarica CV
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
