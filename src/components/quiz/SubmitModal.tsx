"use client";

import { AlertTriangle, CheckCircle2, X } from "lucide-react";

interface SubmitModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  answeredCount: number;
  totalCount: number;
}

export default function SubmitModal({
  onConfirm,
  onCancel,
  answeredCount,
  totalCount
}: SubmitModalProps) {
  const unansweredCount = totalCount - answeredCount;
  const isAllAnswered = unansweredCount === 0;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-md terminal-border bg-slate-900 rounded-xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-950 to-emerald-950 p-6 border-b border-cyan-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-emerald-600 rounded-full flex items-center justify-center">
                {isAllAnswered ? (
                  <CheckCircle2 className="w-6 h-6 text-white" />
                ) : (
                  <AlertTriangle className="w-6 h-6 text-white" />
                )}
              </div>
              <h2 className="text-xl font-bold text-white font-mono">Confirm Submission</h2>
            </div>
            <button
              onClick={onCancel}
              className="w-8 h-8 flex items-center justify-center hover:bg-slate-800 rounded transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-slate-300 mb-6">
            Are you sure you want to submit your quiz? This action cannot be undone.
          </p>

          {/* Statistics */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-lg">
              <span className="text-sm text-slate-300">Questions Answered</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">{answeredCount}</span>
            </div>

            {unansweredCount > 0 && (
              <div className="flex items-center justify-between p-3 bg-red-950/30 border border-red-500/30 rounded-lg">
                <span className="text-sm text-slate-300">Questions Unanswered</span>
                <span className="text-lg font-bold text-red-400 font-mono">{unansweredCount}</span>
              </div>
            )}

            <div className="flex items-center justify-between p-3 bg-slate-800/50 border border-slate-600/30 rounded-lg">
              <span className="text-sm text-slate-300">Total Questions</span>
              <span className="text-lg font-bold text-white font-mono">{totalCount}</span>
            </div>
          </div>

          {/* Warning for unanswered questions */}
          {unansweredCount > 0 && (
            <div className="mb-6 p-4 bg-yellow-950/30 border border-yellow-500/50 rounded-lg">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-yellow-400 mb-1">Warning</p>
                  <p className="text-sm text-yellow-300">
                    You have {unansweredCount} unanswered question{unansweredCount > 1 ? 's' : ''}. 
                    These will be marked as incorrect.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Success message for all answered */}
          {isAllAnswered && (
            <div className="mb-6 p-4 bg-emerald-950/30 border border-emerald-500/50 rounded-lg">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-emerald-400 mb-1">All questions answered!</p>
                  <p className="text-sm text-emerald-300">
                    You've completed all questions. Ready to submit?
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 font-mono"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white rounded-lg transition-all duration-300 font-mono font-bold box-glow"
            >
              Submit Quiz
            </button>
          </div>

          {/* Final warning */}
          <p className="mt-4 text-xs text-center text-slate-500 font-mono">
            [NOTICE] Once submitted, you cannot modify your answers
          </p>
        </div>
      </div>
    </div>
  );
}
