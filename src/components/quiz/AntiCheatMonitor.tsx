"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, X } from "lucide-react";

interface AntiCheatMonitorProps {
  onViolation: () => void;
  violations: number;
}

export default function AntiCheatMonitor({ onViolation, violations }: AntiCheatMonitorProps) {
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  useEffect(() => {
    // Track tab visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        onViolation();
        setWarningMessage("Tab switch detected. Unauthorized activity logged.");
        setShowWarning(true);
        
        // Log violation with timestamp
        const timestamp = new Date().toISOString();
        console.warn(`[SECURITY_VIOLATION] ${timestamp}: User switched tabs or minimized window`);
        
        // Auto-hide warning after 5 seconds
        setTimeout(() => {
          setShowWarning(false);
        }, 5000);
      }
    };

    // Track window blur (when user clicks outside the window)
    const handleWindowBlur = () => {
      onViolation();
      setWarningMessage("Window focus lost. This activity has been recorded.");
      setShowWarning(true);
      
      const timestamp = new Date().toISOString();
      console.warn(`[SECURITY_VIOLATION] ${timestamp}: User lost window focus`);
      
      setTimeout(() => {
        setShowWarning(false);
      }, 5000);
    };

    // Add event listeners
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [onViolation]);

  // Prevent certain keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
        onViolation();
        setWarningMessage("Developer tools access attempt detected.");
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 5000);
      }

      // Prevent Ctrl+Shift+I/J/C (DevTools, Console, Inspect)
      if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) {
        e.preventDefault();
        onViolation();
        setWarningMessage("Developer tools access attempt detected.");
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 5000);
      }

      // Prevent Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        onViolation();
        setWarningMessage("Source code access attempt detected.");
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 5000);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onViolation]);

  if (!showWarning) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] w-full max-w-2xl px-4 animate-in slide-in-from-top duration-300">
      <div className="bg-red-950/95 border-2 border-red-500 rounded-lg p-4 backdrop-blur-sm shadow-2xl">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold text-red-400 mb-1 font-mono">
              ⚠️ SECURITY VIOLATION DETECTED
            </h3>
            <p className="text-white mb-2">{warningMessage}</p>
            <div className="space-y-1 text-sm text-red-300">
              <p className="font-mono">
                • Total violations: <span className="font-bold">{violations}</span>
              </p>
              <p className="font-mono">
                • Timestamp: {new Date().toLocaleTimeString()}
              </p>
              <p className="font-mono">
                • Status: <span className="font-bold text-red-400">LOGGED & MONITORED</span>
              </p>
            </div>
            <div className="mt-3 p-2 bg-red-900/50 border border-red-500/50 rounded">
              <p className="text-xs text-red-200 font-mono">
                [SYSTEM_ALERT] Continued violations may result in automatic disqualification. 
                Please remain on this tab for the duration of the quiz.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowWarning(false)}
            className="shrink-0 w-8 h-8 flex items-center justify-center hover:bg-red-800 rounded transition-colors"
          >
            <X className="w-5 h-5 text-red-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
