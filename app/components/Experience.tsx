"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Target } from "lucide-react";

const skills = [
    {
        icon: <Users className="w-6 h-6 text-blue-400" />,
        title: "Team Leadership",
        desc: "Guida di team cross-funzionali, mentoring e gestione delle performance per massimizzare l'output."
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-green-400" />,
        title: "Product Strategy",
        desc: "Dall'ideazione al lancio. Definizione di roadmap, KPI e strategie di crescita basate sui dati."
    },
    {
        icon: <Target className="w-6 h-6 text-red-400" />,
        title: "Agile & Scrum",
        desc: "Gestione iterativa dei progetti, sprint planning e ottimizzazione continua dei processi di sviluppo."
    },
    {
        icon: <CheckCircle2 className="w-6 h-6 text-purple-400" />,
        title: "Quality Assurance",
        desc: "Focus maniacale sulla qualità del codice e sull'esperienza utente finale."
    }
];

export default function Experience() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="md:w-1/2 sticky top-24">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                            More than just <br />
                            <span className="text-zinc-500">Lines of code.</span>
                        </h2>
                        <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                            La mia esperienza non si ferma all'IDE. Come gestore, porto visione strategica
                            e capacità organizzative per trasformare requisiti complessi in prodotti di successo.
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-medium border border-blue-500/20">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                            </span>
                            Available for new challenges
                        </div>
                    </div>

                    <div className="md:w-1/2 grid gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                                        <p className="text-zinc-400">{skill.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
