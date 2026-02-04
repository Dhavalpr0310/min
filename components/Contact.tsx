"use client";

import Section from "@/components/ui/Section";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <Section id="contact" className="min-h-[60vh] flex flex-col justify-between py-20 bg-background">
            <div className="container mx-auto">
                <p className="text-sm font-mono text-foreground/50 mb-8 uppercase tracking-widest">( Contact )</p>
                <h2 className="text-[12vw] leading-[0.8] font-black font-display text-foreground uppercase mb-8">
                    Let&apos;s
                    <br />
                    Talk
                </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end border-t border-border-color pt-8">
                <div className="text-foreground/60 font-mono text-sm space-y-2 mb-8 md:mb-0">
                    <p>Dhaval Prajapati</p>
                    <p>AI-Assisted Full Stack Engineer</p>
                    <p className="pt-4">Based in India</p>
                    <p>Available for Remote</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-8 md:mt-0 mb-10">
                    <a href="mailto:dpprajapati4137@gmail.com" className="group flex items-center gap-2 text-lg md:text-xl font-bold text-foreground hover:text-accent-primary transition-colors">
                        Email
                        <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="https://linkedin.com/in/dhavalpr0310/" className="group flex items-center gap-2 text-lg md:text-xl font-bold text-foreground hover:text-accent-primary transition-colors">
                        LinkedIn
                        <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="https://github.com/dhavalpr0310" className="group flex items-center gap-2 text-lg md:text-xl font-bold text-foreground hover:text-accent-primary transition-colors">
                        GitHub
                        <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="https://www.instagram.com/dhavallll._.x" className="group flex items-center gap-2 text-lg md:text-xl font-bold text-foreground hover:text-accent-primary transition-colors">
                        Instagram
                        <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="https://wa.me/919724983601" className="group flex items-center gap-2 text-lg md:text-xl font-bold text-foreground hover:text-accent-primary transition-colors">
                        WhatsApp
                        <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </Section>
    );
}
