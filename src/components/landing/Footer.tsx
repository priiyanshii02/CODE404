"use client";

import { Mail, MapPin, Calendar, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-emerald-500/20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 grid-cyber opacity-10" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Branding */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">CASE 404</h3>
                  <p className="text-xs text-emerald-400">The Vanishing Prototype</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                An immersive tech-investigation event by VICTORS Club. Solve the mystery, win prizes, and unlock opportunities.
              </p>
            </div>

            {/* Event Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Event Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 text-slate-400">
                  <Calendar className="w-4 h-4 mt-0.5 text-emerald-400" />
                  <div>
                    <p className="text-white font-semibold">October 23-24, 2026</p>
                    <p>Two-day competitive event</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 mt-0.5 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Virtual Event</p>
                    <p>Join from anywhere</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Get in Touch</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <a href="mailto:victors@example.com" className="hover:text-emerald-400 transition-colors">
                    victors@example.com
                  </a>
                </div>
                <div className="mt-4">
                  <a
                    href="https://unstop.com/o/XQkuWGr?lb=J6zwCX2Z&utm_medium=Share&utm_source=competitions&utm_campaign=Priyansh87750"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-sm font-semibold rounded-lg transition-all duration-300"
                  >
                    Register on Unstop
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-emerald-500/20 mb-6" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p className="font-mono">
              &copy; 2026 VICTORS Club. All rights reserved.
            </p>
            <div className="flex items-center gap-2 font-mono text-emerald-400">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>SYSTEM_ONLINE</span>
            </div>
          </div>

          {/* Terminal footer accent */}
          <div className="mt-8 p-4 bg-slate-900/50 border border-emerald-500/20 rounded-lg">
            <p className="text-xs font-mono text-slate-500 text-center">
              [END_OF_TRANSMISSION] // Good luck, investigator. The truth awaits.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
