"use client";

import Section from "@/components/ui/Section";
import Image from "next/image";

export default function About() {
    return (
        <Section id="about" className="py-32 bg-background">
            <p className="text-sm font-mono text-foreground/50 mb-8 uppercase tracking-widest">( About )</p>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
                {/* Left Column: Text (70% ~ 8 cols) */}
                <div className="md:col-span-8">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] text-foreground mb-12">
                        I operate at the intersection of <span className="text-foreground/50">Design</span>, <span className="text-foreground/50">Engineering</span>, and <span className="text-foreground/50">Artificial Intelligence</span>.
                    </h2>

                    <div className="space-y-8 text-lg text-foreground/60 font-light leading-relaxed">
                        <p>
                            Architecture comes first. I don&apos;t just write code — I orchestrate systems.
                            With a full-stack and automation background, I design resilient, scalable products built to survive real-world load.
                        </p>
                        <p>
                            Lately, I&apos;m focused on AI Agents and how they reshape traditional workflows, using tools like Gemini Gravity, Claude, and N8N  to deliver enterprise-grade systems at startup speed.
                        </p>
                    </div>
                </div>

                {/* Right Column: Image (30% ~ 4 cols) */}
                <div className="md:col-span-4 relative h-[500px] w-full rounded-sm overflow-hidden bg-foreground/5 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* DEBUGGING: Using standard img tag to verify file path */}
                    <img
                        src="/about.png"
                        alt="Dhaval Prajapati"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </Section>
    );
}
