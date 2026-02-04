import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google"; // Switch to Syne for "Editorial" feel
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import MagneticCursor from "@/components/ui/MagneticCursor";
import FloatingDock from "@/components/FloatingDock";
import { ThemeProvider } from "./providers";


// Actually, "lenis" package itself doesn't export React wrapper directly in 1.3 usually?
// Wait, I installed "lenis".
// If I installed "lenis", I should likely use a custom component wrapper.
// Let's create a "SmoothScrolling" component in components/ui or just inline it if simple.
// Recent "lenis" versions might not have "lenis/react".
// I'll check node_modules/lenis or documentation if I could.
// But for safety, I will create a Client Component wrapper for Lenis.

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhaval Prajapati | AI-Native Engineer",
  description: "Portfolio of Dhaval Prajapati, an AI-Assisted Full-Stack & Automation Developer building production systems at warp speed.",
  keywords: ["AI Engineer", "Full Stack Developer", "Next.js", "Three.js", "Automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${syne.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <MagneticCursor />
          <FloatingDock />
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
