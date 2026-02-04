"use client";

import { useEffect, useRef } from "react";
import Section from "@/components/ui/Section";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Microservices-Based Web Application",
        category: "AI-Assisted Full-Stack Developer",
        description:
            "Architected and delivered a production-grade microservices platform using AI-assisted workflows, with full ownership of system design, containerization, traffic routing, and scalable deployment.",
        year: "2025",
    },
    {
        title: "AI-Powered Job Portal Platform",
        category: "AI-Assisted Full-Stack Developer",
        description:
            "Built and deployed a full-featured job portal using an MVC architecture, leveraging AI-assisted development to accelerate UI, backend controllers, and production-ready deployment.",
        year: "2025",
    },
    {
        title: "Real-Time Chat Application (Web Widget)",
        category: "AI-Assisted Backend & Frontend Developer",
        description:
            "Developed a real-time chat widget with scalable messaging and session handling, optimized for performance using AI-assisted backend and frontend workflows.",
        year: "2025",
    },
    {
        title: "Payment Gateway Integrations",
        category: "AI-Assisted Backend Developer",
        description:
            "Integrated Razorpay and SafeXPay into live production systems, implementing secure payment flows, webhook handling, and transaction verification with validated AI-generated logic.",
        year: "2025",
    },
    {
        title: "Automation & Workflow Systems",
        category: "AI-Assisted Automation Developer",
        description:
            "Designed and deployed 24/7 automation workflows using n8n and ManyChat, eliminating manual operations across CRM, social media, WhatsApp messaging, and internal processes.",
        year: "2025",
    },
    {
        title: "Agentic ERP Platform",
        category: "AI-Native DevOps & Platform Engineer",
        description:
            "Designed and deployed a microservices-based ERP system on self-hosted infrastructure, implementing CI/CD pipelines, container orchestration, and AI-native DevOps workflows to drastically reduce delivery timelines.",
        year: "2025",
    },
];

export default function Projects() {
    const cardsRef = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card) => {
                if (!card) return;

                gsap.fromTo(
                    card,
                    {
                        scale: 1,
                        filter: "brightness(1)",
                    },
                    {
                        scale: 0.9,
                        filter: "brightness(0.6)",
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top top",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <Section id="projects" className="bg-background">
            <div className="container mx-auto py-32 flex flex-col border-b border-border-color">
                <p className="text-sm font-mono text-foreground/50 mb-8 uppercase tracking-widest">( Projects )</p>
                <div className="flex justify-between items-end">
                    <h2 className="text-[5vw] leading-none font-black font-display uppercase opacity-80">
                        Work done <br />
                    </h2>
                    <span className="hidden md:block text-sm font-mono opacity-50">( 03 )</span>
                </div>
            </div>

            <div className="relative">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relativemin-h-[200vh]"
                        style={{ zIndex: projects.length - index }}
                    >
                        <section
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className="sticky top-0 h-screen w-full bg-background flex items-center shadow-[0_-20px_60px_rgba(0,0,0,0.1)]"
                        >
                            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center h-full">
                                {/* LEFT - Now Full Width */}
                                <div className="md:col-span-12 space-y-8">
                                    <span className="text-sm font-mono opacity-50">
                                        {project.year} — {project.category}
                                    </span>

                                    <h3 className="text-xl md:text-5xl font-black font-display leading-none uppercase">
                                        {project.title}
                                    </h3>

                                    <p className="text-xl opacity-60 max-w-2xl">
                                        {project.description}
                                    </p>

                                    {/* <button className="flex items-center gap-2 uppercase tracking-widest font-bold border-b pb-1 hover:border-foreground transition-colors">
                                        View Case Study <ArrowUpRight size={18} />
                                    </button> */}
                                </div>
                            </div>
                        </section>
                    </div>
                ))}
            </div>
        </Section>
    );
}

