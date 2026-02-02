"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Target, BarChart2, CalendarClock } from "lucide-react";

const skills = [
    {
        icon: <BarChart2 className="w-6 h-6 text-blue-400" />,
        title: "Gestione Operativa",
        desc: "Supporto PM/PMO in attività di pianificazione, monitoraggio avanzamento (SAL) e reporting verso gli stakeholder."
    },
    {
        icon: <Users className="w-6 h-6 text-indigo-400" />,
        title: "Coordinamento Risorse",
        desc: "Gestione efficace del team e allocazione delle risorse per garantire il rispetto delle milestone di progetto."
    },
    {
        icon: <CalendarClock className="w-6 h-6 text-emerald-400" />,
        title: "Delivery & Deadlines",
        desc: "Approccio data-driven orientato al risultato: rispetto delle scadenze e mantenimento di alti standard qualitativi."
    },
    {
        icon: <Target className="w-6 h-6 text-purple-400" />,
        title: "Technical Bridge",
        desc: "Background tecnico (SAP, Development) che facilita la comunicazione tra team funzionali e tecnici."
    }
];

export default function ManagementSkills() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-zinc-900/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Visione Strategica & <br /> <span className="text-zinc-500">Controllo Operativo</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Non solo codice: la mia priorità è l'organizzazione efficiente dei processi e la chiarezza nella gestione dei progetti complessi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
                        >
                            <div className="flex items-start gap-5">
                                <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 shrink-0">
                                    {skill.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed">{skill.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
