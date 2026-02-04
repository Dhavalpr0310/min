"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Seawind Solution Pvt. Ltd.",
        role: "IT & AI-Native Engineer",
        period: "July 2025 — Present",
    },
    {
        company: "Hexylon Analytics",
        role: "Devops Intern",
        period: "April 2025 — July 2025",
    },
    {
        company: "Compufy Technolabs",
        role: "Cloud Intern",
        period: "Jan 2025 — April 2025",
    }
];

export default function Experience() {
    return (
        <Section id="experience" className="py-24">
            <div className="container mx-auto">
                <p className="text-sm font-mono text-foreground/50 mb-16 uppercase tracking-widest">( Experience )</p>

                <div className="border-t border-border-color">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group py-8 md:py-12 border-b border-border-color flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-foreground/5 transition-colors px-2 md:px-4"
                        >
                            <h3 className="text-2xl md:text-3xl md:text-5xl font-bold text-foreground group-hover:text-accent-primary transition-colors font-display">
                                {exp.company}
                            </h3>
                            <div className="text-left md:text-right mt-4 md:mt-0">
                                <p className="text-base md:text-lg text-foreground font-medium">{exp.role}</p>
                                <p className="text-sm font-mono text-foreground/50">{exp.period}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
