"use client";

import { Clock, AlertTriangle, Shield, User } from "lucide-react";

interface QuizHeaderProps {
  timeRemaining: number;
  currentQuestion: number;
  totalQuestions: number;
  violations: number;
  teamName?: string;
}

export default function QuizHeader({
  timeRemaining,
  currentQuestion,
  totalQuestions,
  violations,
  teamName = "TEAM-ALPHA"
}: QuizHeaderProps) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const isLowTime = timeRemaining < 300; // Less than 5 minutes

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-emerald-500/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white font-mono">CASE 404</h1>
              <p className="text-xs text-emerald-400">Nexora Labs Terminal</p>
            </div>
          </div>

          {/* Center: Timer */}
          <div className={`flex items-center gap-3 px-6 py-2 rounded-lg border ${
            isLowTime 
              ? 'bg-red-950/50 border-red-500/50 animate-pulse' 
              : 'bg-emerald-950/50 border-emerald-500/30'
          }`}>
            <Clock className={`w-5 h-5 ${isLowTime ? 'text-red-400' : 'text-emerald-400'}`} />
            <div>
              <p className="text-xs text-slate-400 font-mono">TIME REMAINING</p>
              <p className={`text-2xl font-bold font-mono ${
                isLowTime ? 'text-red-400' : 'text-emerald-400'
              }`}>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </p>
            </div>
          </div>

          {/* Right: Status indicators */}
          <div className="flex items-center gap-4">
            {/* Team badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-cyan-950/50 border border-cyan-500/30 rounded-lg">
              <User className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-mono text-cyan-400">{teamName}</span>
            </div>

            {/* Question progress */}
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-600/30 rounded-lg">
              <p className="text-xs text-slate-400 font-mono">PROGRESS</p>
              <p className="text-sm font-bold font-mono text-white">
                {currentQuestion + 1} / {totalQuestions}
              </p>
            </div>

            {/* Violations counter */}
            {violations > 0 && (
              <div className="flex items-center gap-2 px-4 py-2 bg-red-950/50 border border-red-500/50 rounded-lg animate-pulse">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <div>
                  <p className="text-xs text-red-400 font-mono">VIOLATIONS</p>
                  <p className="text-sm font-bold font-mono text-red-400">{violations}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Warning banner for violations */}
        {violations > 0 && (
          <div className="mt-3 p-3 bg-red-950/30 border border-red-500/50 rounded-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
            <p className="text-sm text-red-400 font-mono">
              WARNING: {violations} security violation(s) detected. Continued violations may result in disqualification.
            </p>
          </div>
        )}
      </div>
    </header>
  );
}
