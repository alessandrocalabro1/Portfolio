"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
    {
        title: "Laurea Triennale in Sociologia - Scienze Sociali Applicate",
        institution: "Università degli Studi di Roma «La Sapienza»",
        year: "",
    },
    {
        title: "Diploma di Scuola Superiore",
        institution: "Liceo Scientifico Innocenzo XII - Anzio, IT",
        year: "",
    }
];

const courses = [
    "Corso Front End Developer | Lab For Training, Roma",
    "Corso di WordPress | Corso Udemy",
    "Corso di HTML5 Avanzato | Corso Udemy",
    "Corso di Javascript Avanzato | Corso Udemy",
    "Percorso FIT - 24 CFU | Università «La Sapienza», Roma",
    "GDPR | Corso On line",
    "EIPASS CERTIFICATE | Corso On line",
];

export default function Education() {
    return (
        <section className="py-24 px-6 relative bg-zinc-900/20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Education Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <GraduationCap className="w-8 h-8 text-blue-500" />
                        <h2 className="text-3xl font-bold text-white">Istruzione</h2>
                    </div>

                    <div className="space-y-8">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="pl-6 border-l-2 border-zinc-800"
                            >
                                <h3 className="text-xl font-bold text-zinc-100 mb-1 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-400">
                                    {item.institution}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Courses Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Award className="w-8 h-8 text-indigo-500" />
                        <h2 className="text-3xl font-bold text-white">Corsi & Certificazioni</h2>
                    </div>

                    <div className="grid gap-4">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start gap-3 hover:border-zinc-700 transition-colors"
                            >
                                <BookOpen className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                                <span className="text-zinc-300 text-sm md:text-base">{course}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
