"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar } from "lucide-react";

const history = [
    {
        role: "SAP BTP Consultant",
        company: "Mashfrog Group",
        period: "2024 - Presente",
        description: "Sviluppo app enterprise con SAP UI5/Fiori e SAP BuildAppGyver (integrazione ECC/BTP). Implementazione UI per gestione ordini. Supporto PM/PMO: pianificazione attività, coordinamento risorse, SAL, reporting."
    },
    {
        role: "SAP Fiori Developer",
        company: "Abstract",
        period: "2023 - 2024",
        description: "Sviluppo front-end SAP Fiori / SAP UI5 su progetti enterprise. Implementazione UI e logiche applicative, collaborazione con team funzionali/tecnici."
    },
    {
        role: "SAP Analyst",
        company: "Minsait",
        period: "2020 - 2023",
        description: "Analisi funzionale e tecnica in ambito SAP. Supporto ai processi di business e gestione delle anomalie."
    }
];

export default function WorkHistory() {
    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center">
                    Percorso Professionale
                </h2>

                <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12">
                    {history.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-black" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                <span className="text-sm text-zinc-500 font-mono bg-zinc-900 px-2 py-1 rounded border border-zinc-800 inline-block w-fit mt-2 sm:mt-0">
                                    {item.period}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-zinc-400 mb-4 text-sm font-medium">
                                <Building2 className="w-4 h-4" />
                                {item.company}
                            </div>

                            <p className="text-zinc-400 leading-relaxed text-base">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
