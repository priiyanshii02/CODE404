"use client";

import { ArrowRight, Terminal, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "CASE 404: The Vanishing Prototype";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-cyber opacity-30" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-emerald-950/20 via-slate-950 to-slate-950" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-mono backdrop-blur-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>INVESTIGATION ACTIVE</span>
          </div>

          {/* Main headline with typewriter effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-glow bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent font-mono">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Event dates */}
          <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-mono text-cyan-400">
            <Terminal className="w-6 h-6 md:w-8 md:h-8" />
            <span>OCT 23-24, 2026</span>
            <Zap className="w-6 h-6 md:w-8 md:h-8" />
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The <span className="text-emerald-400 font-semibold">AURA</span> prototype has vanished from{" "}
            <span className="text-cyan-400 font-semibold">Nexora Labs</span>.
            <br />
            You&apos;re the investigator. Uncover the truth before it&apos;s too late.
          </p>

          {/* Key selling points */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2 text-emerald-400">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="font-mono">₹18K Prize Pool</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              <span className="font-mono">Exclusive Internships</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="font-mono">Real-time Challenges</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <a
              href="https://unstop.com/o/XQkuWGr?lb=J6zwCX2Z&utm_medium=Share&utm_source=competitions&utm_campaign=Priyansh87750"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-semibold text-lg rounded-lg transition-all duration-300 box-glow hover:scale-105"
            >
              <span>Register on Unstop</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-4 text-sm text-slate-400 font-mono">
              [SECURITY_CLEARANCE: Registration closes Oct 20, 2026]
            </p>
          </div>

          {/* Terminal-style info box */}
          <div className="mt-12 max-w-2xl mx-auto terminal-border bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 text-left">
            <div className="flex items-center gap-2 mb-3 text-emerald-400">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="font-mono text-sm">system@nexora:~$</span>
            </div>
            <div className="font-mono text-sm space-y-1">
              <p className="text-slate-400">
                <span className="text-emerald-400">$</span> cat mission_briefing.txt
              </p>
              <p className="text-slate-300 ml-4">
                FILE: <span className="text-cyan-400">CONFIDENTIAL</span>
              </p>
              <p className="text-slate-300 ml-4">
                TARGET: <span className="text-emerald-400">AURA AI Prototype</span>
              </p>
              <p className="text-slate-300 ml-4">
                STATUS: <span className="text-red-400">MISSING</span>
              </p>
              <p className="text-slate-300 ml-4">
                MISSION: <span className="text-yellow-400">INVESTIGATE & RECOVER</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
