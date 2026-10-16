"use client";

import { Users, Target, Sparkles, Shield } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-mono backdrop-blur-sm mb-4">
            <Shield className="w-4 h-4" />
            <span>ABOUT_MISSION.MD</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              The Case Files
            </span>
          </h2>
        </div>

        {/* Story section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="terminal-border bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <div className="flex items-center gap-2 mb-6 text-emerald-400">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="font-mono text-sm">case_404_briefing.txt</span>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                <span className="text-emerald-400 font-bold">October 15, 2026</span> - Nexora Labs reports a critical security breach.
              </p>
              <p className="text-lg md:text-xl">
                <span className="text-cyan-400 font-bold">AURA</span>, their most advanced AI prototype, has vanished without a trace. 
                No digital footprint. No physical evidence. Just... gone.
              </p>
              <p className="text-lg md:text-xl">
                The lab&apos;s security was state-of-the-art. Access logs show nothing. Surveillance feeds are corrupted. 
                This wasn&apos;t a simple theft—this was <span className="text-red-400 font-bold">orchestrated</span>.
              </p>
              <p className="text-lg md:text-xl font-semibold text-white">
                Your mission: Investigate the digital crime scene, analyze the evidence, and uncover who—or what—took AURA.
              </p>
            </div>

            <div className="mt-8 p-4 bg-red-950/30 border border-red-500/30 rounded-lg">
              <p className="text-red-400 font-mono text-sm">
                [CLASSIFIED] Time is critical. The longer AURA remains missing, the greater the threat to global security.
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          <div className="terminal-border bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-900/70 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Real Challenges</h3>
            <p className="text-slate-400">
              Face industry-relevant problems inspired by actual cybersecurity incidents and tech investigations.
            </p>
          </div>

          <div className="terminal-border bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-900/70 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Team Collaboration</h3>
            <p className="text-slate-400">
              Work with your team to combine skills in coding, analysis, and problem-solving under pressure.
            </p>
          </div>

          <div className="terminal-border bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-900/70 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Immersive Experience</h3>
            <p className="text-slate-400">
              Engage with a fully immersive storyline that makes every challenge feel like a real investigation.
            </p>
          </div>
        </div>

        {/* VICTORS Club section */}
        <div className="max-w-4xl mx-auto">
          <div className="terminal-border bg-gradient-to-br from-emerald-950/30 via-slate-900/50 to-cyan-950/30 backdrop-blur-sm rounded-xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 box-glow">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Organized by VICTORS Club
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
              VICTORS Club is dedicated to fostering innovation, technical excellence, and competitive spirit 
              among students. We organize premier tech events that challenge, inspire, and connect future leaders.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
              <span className="px-4 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-full text-emerald-400">
                Innovation
              </span>
              <span className="px-4 py-2 bg-cyan-950/50 border border-cyan-500/30 rounded-full text-cyan-400">
                Excellence
              </span>
              <span className="px-4 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-full text-emerald-400">
                Community
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
