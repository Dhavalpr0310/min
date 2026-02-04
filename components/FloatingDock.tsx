"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Home, User, Briefcase, Play, Mail, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navItems = [
    { name: "Home", icon: Home, to: "hero" },
    { name: "About", icon: User, to: "about" },
    { name: "Experience", icon: Briefcase, to: "experience" },
    { name: "Projects", icon: Play, to: "projects" },
    { name: "Contact", icon: Mail, to: "contact" },
];

export default function FloatingDock() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto"
        >
            <div className="flex items-center justify-between md:justify-center gap-2 p-2 rounded-2xl glass bg-card-bg/50 overflow-x-auto md:overflow-visible shadow-2xl backdrop-blur-xl no-scrollbar">
                {navItems.map((item, index) => {
                    const isHovered = hoveredIndex === index;

                    return (
                        <ScrollLink
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={1000}
                            className="relative group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <motion.div
                                animate={{
                                    scale: isHovered ? 1.2 : 1,
                                    width: isHovered ? 60 : 40,
                                    height: isHovered ? 60 : 40,
                                }}
                                className="flex flex-col items-center justify-center rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors relative"
                            >
                                <item.icon size={isHovered ? 24 : 18} className="text-foreground" />

                                {isHovered && (
                                    <motion.span
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute -top-8 text-[10px] font-bold bg-foreground text-background px-2 py-1 rounded-md whitespace-nowrap"
                                    >
                                        {item.name}
                                    </motion.span>
                                )}
                            </motion.div>
                        </ScrollLink>
                    );
                })}

                {/* Vertical Divider */}
                <div className="w-px h-8 bg-border-color mx-1" />

                {/* Theme Toggle */}
                {mounted && (
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="relative group w-10 h-10 flex items-center justify-center rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors"
                    >
                        {theme === "dark" ? (
                            <Moon size={18} className="text-foreground" />
                        ) : (
                            <Sun size={18} className="text-foreground" />
                        )}
                    </button>
                )}
            </div>
        </motion.div>
    );
}
