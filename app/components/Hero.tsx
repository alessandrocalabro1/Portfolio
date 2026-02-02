"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, BarChart3 } from "lucide-react";

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
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                    Alessandro Calabrò
                </h1>

                <h2 className="text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 mb-8">
                    Organizzo il caos, <br className="hidden md:block" />
                    costruisco soluzioni.
                </h2>

                <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed text-justify md:text-center">
                    PM Junior con background tecnico su progetti su SAP Fiori. Negli ultimi mesi ho affiancato il PM nella gestione operativa della commessa, occupandomi di pianificazione delle attività, coordinamento delle risorse, monitoraggio dell’avanzamento (SAL), gestione delle issue e reporting.
                    <br /><br />
                    Lavoro a stretto contatto con il team per chiarire priorità, rimuovere blocchi e mantenere allineati obiettivi e scadenze. Mi sto orientando anche verso la dimensione presales (offerte/gare), dove il mio profilo tecnico è utile per stime e impostazione della delivery.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2"
                    >
                        Esplora il Portfolio
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
