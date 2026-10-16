"use client";

import { Calendar, Clock, Users, Brain, Search, Trophy, CheckCircle2, Lock } from "lucide-react";

export default function Timeline() {
  const rounds = [
    {
      number: "01",
      title: "Clearance Quiz",
      date: "October 23, 2026",
      time: "9:40 AM - 10:40 AM",
      description: "Test your technical knowledge and problem-solving skills. Only the top teams advance.",
      icon: Brain,
      features: [
        "MCQ-based technical assessment",
        "Real-time anti-cheat monitoring",
        "60-minute time limit",
        "Top 20 teams qualify"
      ],
      status: "upcoming",
      locked: false,
    },
    {
      number: "02",
      title: "Evidence Collection",
      date: "October 23, 2026",
      time: "12:15 PM - 2:00 PM",
      description: "Dive deep into digital forensics. Analyze logs, decode clues, and gather critical evidence.",
      icon: Search,
      features: [
        "Digital forensics challenges",
        "Data analysis tasks",
        "Pattern recognition",
        "Top 10 teams advance"
      ],
      status: "locked",
      locked: true,
    },
    {
      number: "03",
      title: "Final Investigation",
      date: "October 24, 2026",
      time: "10:00 AM - 1:00 PM",
      description: "The ultimate showdown. Present your findings and solve the case to claim victory.",
      icon: Trophy,
      features: [
        "Case presentation",
        "Live problem-solving",
        "Team collaboration",
        "Winners announced"
      ],
      status: "locked",
      locked: true,
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 grid-cyber opacity-20" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-950/50 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-mono backdrop-blur-sm mb-4">
            <Calendar className="w-4 h-4" />
            <span>EVENT_TIMELINE.LOG</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Investigation Phases
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            Three rounds. One mystery. Your chance to prove yourself.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-8">
          {rounds.map((round, index) => {
            const Icon = round.icon;
            const isLast = index === rounds.length - 1;
            
            return (
              <div key={index} className="relative">
                {/* Connecting line */}
                {!isLast && (
                  <div className="absolute left-8 md:left-16 top-24 w-0.5 h-full bg-gradient-to-b from-emerald-500/50 to-cyan-500/50" />
                )}

                <div className={`relative group ${round.locked ? 'opacity-60' : ''}`}>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Left: Icon and number */}
                    <div className="shrink-0 flex items-center gap-4">
                      {/* Round number badge */}
                      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-full flex items-center justify-center font-bold text-2xl text-white box-glow group-hover:scale-110 transition-transform duration-300">
                        {round.locked ? (
                          <Lock className="w-8 h-8" />
                        ) : (
                          <span className="font-mono">{round.number}</span>
                        )}
                        {/* Pulse effect */}
                        {!round.locked && (
                          <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
                        )}
                      </div>
                    </div>

                    {/* Right: Content card */}
                    <div className="flex-1 terminal-border bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-slate-900/70 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            round.locked 
                              ? 'bg-slate-800' 
                              : 'bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 border border-emerald-500/30'
                          }`}>
                            <Icon className={`w-6 h-6 ${round.locked ? 'text-slate-600' : 'text-emerald-400'}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                              {round.title}
                            </h3>
                            {round.locked && (
                              <span className="text-xs text-yellow-500 font-mono">LOCKED - COMPLETE PREVIOUS ROUND</span>
                            )}
                          </div>
                        </div>

                        {/* Status badge */}
                        <div className={`shrink-0 px-4 py-2 rounded-lg font-mono text-sm ${
                          round.locked 
                            ? 'bg-slate-800 text-slate-400' 
                            : 'bg-emerald-950/50 border border-emerald-500/30 text-emerald-400'
                        }`}>
                          {round.locked ? 'LOCKED' : 'UPCOMING'}
                        </div>
                      </div>

                      {/* Date and time */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-cyan-400">
                          <Calendar className="w-4 h-4" />
                          <span className="font-mono">{round.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-400">
                          <Clock className="w-4 h-4" />
                          <span className="font-mono">{round.time}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-6">
                        {round.description}
                      </p>

                      {/* Features grid */}
                      <div className="grid sm:grid-cols-2 gap-3">
                        {round.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                              round.locked ? 'text-slate-600' : 'text-emerald-400'
                            }`} />
                            <span className="text-sm text-slate-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Registration reminder */}
        <div className="mt-16 max-w-3xl mx-auto terminal-border bg-gradient-to-r from-emerald-950/30 to-cyan-950/30 backdrop-blur-sm rounded-xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-6 h-6 text-emerald-400" />
            <h3 className="text-2xl font-bold text-white">Team Registration</h3>
          </div>
          <p className="text-slate-300 mb-6">
            Teams of <span className="text-emerald-400 font-semibold">3-4 members</span> can register via Unstop. 
            Make sure all team members are ready before October 20, 2026.
          </p>
          <a
            href="https://unstop.com/o/XQkuWGr?lb=J6zwCX2Z&utm_medium=Share&utm_source=competitions&utm_campaign=Priyansh87750"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 box-glow"
          >
            <span>Register Your Team</span>
            <CheckCircle2 className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
