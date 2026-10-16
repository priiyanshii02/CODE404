import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "CASE 404: The Vanishing Prototype | VICTORS Club",
  description: "Join the ultimate tech-investigation event. Uncover the mystery of AURA, the missing AI prototype at Nexora Labs. October 23-24, 2026.",
  keywords: ["tech event", "investigation", "cybersecurity", "AI", "college event", "VICTORS Club"],
  openGraph: {
    title: "CASE 404: The Vanishing Prototype",
    description: "Investigate the disappearance of AURA. Win ₹18,000 in prizes + exclusive internships!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <div className="scan-line" />
        {children}
      </body>
    </html>
  );
}
