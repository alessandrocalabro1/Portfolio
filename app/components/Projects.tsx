"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// TODO: Sostituisci i link con gli URL reali dei tuoi progetti deployati e delle repo GitHub
const projects = [
    {
        title: "GestionaleTest",
        description: "Applicazione gestionale enterprise basata su SAP UI5. Ottimizzazione flussi e gestione risorse.",
        tags: ["SAP UI5", "Enterprise", "Management"],
        color: "from-blue-600 to-indigo-600",
        link: "https://alessandrocalabro1.github.io/GestionaleTest",
        github: "https://github.com/alessandrocalabro1/GestionaleTest"
    },
    {
        title: "CardInvest",
        description: "Piattaforma di analytics per investimenti in carte collezionabili. Tracking prezzi e portfolio management.",
        tags: ["Finance", "Data Viz", "UI/UX"],
        color: "from-emerald-500 to-teal-500",
        link: "https://alessandrocalabro1.github.io/CardInvest",
        github: "https://github.com/alessandrocalabro1/CardInvest"
    },
    {
        title: "CalaGames",
        description: "Hub di giochi arcade e rompicapo sviluppati per il web. Intrattenimento immediato e interfaccia coinvolgente.",
        tags: ["Game Dev", "React", "Interactive"],
        color: "from-orange-500 to-red-500",
        link: "https://alessandrocalabro1.github.io/CalaGames",
        github: "https://github.com/alessandrocalabro1/CalaGames"
    }
];

export default function Projects() {
    return (
        <section className="py-24 px-6 bg-zinc-900/50" id="projects">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Portfolio Selezionato</h2>
                    <p className="text-zinc-400 max-w-2xl text-lg">
                        Una selezione di progetti che dimostrano versatilità: dalle app consumer alle dashboard enterprise.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-auto min-h-[300px] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all p-8 flex flex-col justify-between"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 blur-[60px] transition-opacity`} />

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/5 text-zinc-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 text-sm font-medium transition-colors ${project.link === '#' ? 'text-zinc-600 cursor-not-allowed hidden' : 'text-white hover:text-blue-400'}`}
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                    {project.link === '#' && (
                                        <span className="text-xs text-zinc-600 italic">Presto disponibile</span>
                                    )}

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 text-sm font-medium transition-colors ${project.github === '#' ? 'text-zinc-600 cursor-not-allowed hidden' : 'text-zinc-400 hover:text-white'}`}
                                    >
                                        <Github className="w-4 h-4" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
