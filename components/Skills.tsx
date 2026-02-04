"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const skills = [
    // AI & Tools
    { name: "Amazon Q", category: "AI Tool" },
    { name: "Cursor", category: "AI Tool" },
    { name: "ChatGPT", category: "AI Tool" },
    { name: "Claude", category: "AI Tool" },
    { name: "DeepSeek", category: "AI Tool" },
    { name: "GitHub Copilot", category: "AI Tool" },
    { name: "Gemini Gravity", category: "AI Tool" },
    { name: "Figma Make", category: "Design" },

    // Frontend
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "HTML / CSS", category: "Frontend" },

    // Backend & DB
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },

    // DevOps & Infra
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "Nginx", category: "DevOps" },
    { name: "Linux Server", category: "DevOps" },

    // Automation
    { name: "n8n", category: "Automation" },
    { name: "Make.com", category: "Automation" },
    { name: "ManyChat", category: "Automation" }
];

export default function Skills() {
    return (
        <Section className="py-32 bg-background">
            <div className="container mx-auto">
                <p className="text-sm font-mono text-foreground/50 mb-8 uppercase tracking-widest">( Skills )</p>
                <div className="mb-16 border-b border-border-color pb-6">
                    <h2 className="text-[12vw] md:text-[6vw] leading-none font-black font-display text-foreground uppercase opacity-90">
                        Technical
                        <span className="block text-foreground/50">Arsenal</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5, ease: "backOut" }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-full border border-border-color bg-foreground/5 hover:bg-foreground hover:border-foreground transition-colors duration-300 cursor-default px-8 py-4 md:px-12 md:py-6">
                                <span className="absolute inset-0 bg-accent-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                                <div className="flex flex-col items-center gap-1">
                                    <h3 className="text-xl md:text-3xl font-bold font-display text-foreground group-hover:text-background transition-colors duration-300">
                                        {skill.name}
                                    </h3>
                                    <span className="text-[10px] uppercase tracking-widest text-foreground/50 group-hover:text-background/70 transition-colors duration-300">
                                        {skill.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
