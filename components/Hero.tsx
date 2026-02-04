"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* 3D Scene Removed as per user request */}

            <div className="relative z-10 w-full px-6 md:px-12 flex flex-col justify-between h-[80vh]">
                {/* Top Bar */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-between items-start"
                >
                    <div>
                        <h3 className="text-xl font-bold font-display tracking-widest uppercase">Dhaval Prajapati</h3>
                        <p className="text-sm text-gray-500 font-mono">Software & AI-Automation Engineer </p>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-sm text-gray-500 font-mono">Available for projects</p>
                        <div className="flex items-center justify-end gap-2 mt-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs uppercase tracking-wider font-bold">Online</span>
                        </div>
                    </div>
                </motion.div>

                {/* Center Big Type */}
                <div className="text-center md:text-left relative">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[9.5vw] leading-[0.9] font-black font-display tracking-tighter text-foreground py-4"
                    >
                        AI-NATIVE
                        <br />
                        <span className="text-transparent stroke-text  ">DEVELOPER</span>
                    </motion.h1>
                </div>

                {/* Bottom Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0"
                >
                    <div className="max-w-md text-center md:text-left">
                        Building production systems at warp speed — <span className="text-foreground font-medium">AI-assisted, human-owned, deployment-ready</span>.
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border-color flex items-center justify-center animate-bounce text-foreground">
                            <ArrowDown size={16} className="md:w-5 md:h-5" />
                        </div>
                        <span className="uppercase text-[10px] md:text-xs tracking-widest font-bold text-foreground">Scroll to Explore</span>
                    </div>
                </motion.div>
            </div>

            {/* CSS For Stroke Text effect */}
            <style jsx global>{`
        .stroke-text {
            -webkit-text-stroke: 1px var(--foreground);
            color: transparent;
        }
      `}</style>
        </section>
    );
}
