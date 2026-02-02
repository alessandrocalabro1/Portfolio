"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, Blocks, Cpu } from "lucide-react";

const skills = [
    { name: "SAP Fiori", category: "SAP" },
    { name: "SAP UI5", category: "SAP" },
    { name: "SAP Build", category: "SAP" },
    { name: "SAP AppGyver", category: "SAP" },
    { name: "Javascript", category: "Development" },
    { name: "Typescript", category: "Development" },
    { name: "Angular 2+", category: "Development" },
    { name: "HTML 5", category: "Development" },
    { name: "CSS", category: "Development" },
    { name: "JQuery", category: "Development" },
    { name: "Microsoft Office", category: "Tools" },
];

export default function TechnicalSkills() {
    return (
        <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center">
                    Technical Skills
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center gap-3 hover:border-zinc-700 transition-colors">
                                <span className="text-zinc-300 font-medium whitespace-nowrap">
                                    {skill.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
