"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const protocols = [
    {
        id: "01",
        name: "n8n Workflows",
        description: "Complex logic gates handling 500+ daily operational tasks, connecting CRM, Database, and LLM endpoints.",
        status: "Running"
    },
    {
        id: "02",
        name: "ManyChat Systems",
        description: "Conversational marketing funnels powered by RAG (Retrieval Augmented Generation) for instant customer context.",
        status: "Deployed"
    }
];

export default function Automation() {
    return (
        <Section id="automation" className="py-32 bg-background">
            <div className="container mx-auto">
                <p className="text-sm font-mono text-foreground/50 mb-8 uppercase tracking-widest">( Automation )</p>
                <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-24">
                    <h2 className="text-[12vw] md:text-[8vw] leading-[0.8] font-black font-display text-foreground uppercase opacity-90">
                        Automation
                        <br />
                    </h2>
                </div>

                <div className="grid grid-cols-1 border-t border-border-color">
                    {protocols.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group border-b border-border-color py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center cursor-default hover:bg-foreground/5 transition-colors px-2 md:px-4"
                        >
                            <div className="col-span-1 md:col-span-2 flex justify-between md:block">
                                <span className="font-mono text-accent-primary text-lg md:text-xl">/{item.id}</span>
                                <span className="md:hidden inline-flex items-center gap-2 px-2 py-0.5 rounded-full border border-border-color bg-foreground/5 text-[10px] uppercase tracking-widest font-bold text-green-400">
                                    <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                                    {item.status}
                                </span>
                            </div>
                            <div className="col-span-1 md:col-span-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:pl-4 transition-all duration-300">
                                    {item.name}
                                </h3>
                            </div>
                            <div className="col-span-1 md:col-span-4">
                                <p className="text-sm md:text-base text-foreground/60 font-light group-hover:text-foreground/80 transition-colors">
                                    {item.description}
                                </p>
                            </div>
                            <div className="hidden md:block col-span-1 md:col-span-2 text-right">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-color bg-foreground/5 text-xs uppercase tracking-widest font-bold text-green-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    {item.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
