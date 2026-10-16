"use client";

import { Trophy, Briefcase, Zap, Crown, Medal, Award } from "lucide-react";

export default function Prizes() {
  const prizes = [
    {
      place: "1st Place",
      amount: "₹10,000",
      icon: Crown,
      gradient: "from-yellow-500 to-orange-500",
      borderColor: "border-yellow-500/50",
      glowColor: "shadow-yellow-500/20",
      rank: "GOLD",
    },
    {
      place: "2nd Place",
      amount: "₹5,000",
      icon: Medal,
      gradient: "from-slate-400 to-slate-500",
      borderColor: "border-slate-400/50",
      glowColor: "shadow-slate-400/20",
      rank: "SILVER",
    },
    {
      place: "3rd Place",
      amount: "₹3,000",
      icon: Award,
      gradient: "from-orange-600 to-amber-700",
      borderColor: "border-orange-500/50",
      glowColor: "shadow-orange-500/20",
      rank: "BRONZE",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/10 to-slate-950" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-mono backdrop-blur-sm mb-4">
            <Trophy className="w-4 h-4" />
            <span>REWARDS_MODULE.EXE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Prize Pool & Perks
            </span>
          </h2>
          <p className="text-xl text-slate-400 font-mono">
            Total Rewards: <span className="text-emerald-400 font-bold">₹18,000</span>
          </p>
        </div>

        {/* Prize cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            return (
              <div
                key={index}
                className={`relative group terminal-border bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 ${prize.borderColor} ${prize.glowColor} shadow-2xl`}
              >
                {/* Rank badge */}
                <div className={`absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r ${prize.gradient} text-white text-xs font-bold rounded-full`}>
                  {prize.rank}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${prize.gradient} rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Place */}
                <h3 className="text-2xl font-bold text-center mb-2 text-white">
                  {prize.place}
                </h3>

                {/* Amount */}
                <div className={`text-4xl font-bold text-center mb-4 bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}>
                  {prize.amount}
                </div>

                {/* Description */}
                <p className="text-center text-slate-400 text-sm">
                  Cash Prize + Certificate
                </p>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${prize.gradient} blur-xl opacity-20`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Special perk callout */}
        <div className="max-w-4xl mx-auto">
          <div className="relative terminal-border bg-gradient-to-br from-emerald-950/50 to-cyan-950/50 backdrop-blur-sm rounded-xl p-8 md:p-12 overflow-hidden group">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 animate-pulse-slow" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Icon */}
              <div className="shrink-0 w-20 h-20 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-full flex items-center justify-center box-glow group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Exclusive Internship Opportunities
                  </h3>
                </div>
                <p className="text-slate-300 text-lg">
                  Top 3 teams get <span className="text-emerald-400 font-semibold">direct internship offers</span> from our partner companies. 
                  Turn your investigation skills into real-world experience!
                </p>
              </div>

              {/* Badge */}
              <div className="shrink-0 px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-lg box-glow">
                TOP 3
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-tr-full" />
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col gap-3 p-6 bg-slate-900/50 border border-emerald-500/30 rounded-lg backdrop-blur-sm">
            <p className="font-mono text-sm text-emerald-400">
              [SYSTEM_LOG: All winners receive official certificates of achievement]
            </p>
            <p className="font-mono text-sm text-cyan-400">
              [NETWORK_STATUS: Prizes distributed within 7 working days]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
