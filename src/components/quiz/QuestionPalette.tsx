"use client";

import { CheckCircle2, Circle, Flag } from "lucide-react";
import { QuizQuestion } from "@/lib/quizData";

export interface QuestionStatus {
  answered: boolean;
  marked: boolean;
  selectedOption: number | null;
}

interface QuestionPaletteProps {
  questions: QuizQuestion[];
  questionStatus: QuestionStatus[];
  currentQuestion: number;
  onQuestionSelect: (index: number) => void;
}

export default function QuestionPalette({
  questions,
  questionStatus,
  currentQuestion,
  onQuestionSelect
}: QuestionPaletteProps) {
  const answeredCount = questionStatus.filter(q => q.answered).length;
  const markedCount = questionStatus.filter(q => q.marked).length;
  const unattemptedCount = questions.length - answeredCount;

  return (
    <div className="space-y-4">
      {/* Summary card */}
      <div className="terminal-border bg-slate-900/50 backdrop-blur-sm rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">Question Palette</h3>
        
        {/* Statistics */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-slate-300">Answered</span>
            </div>
            <span className="text-lg font-bold text-emerald-400 font-mono">{answeredCount}</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-800/30 border border-slate-600/30 rounded-lg">
            <div className="flex items-center gap-2">
              <Circle className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-300">Unattempted</span>
            </div>
            <span className="text-lg font-bold text-slate-400 font-mono">{unattemptedCount}</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-yellow-950/30 border border-yellow-500/30 rounded-lg">
            <div className="flex items-center gap-2">
              <Flag className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-slate-300">Marked</span>
            </div>
            <span className="text-lg font-bold text-yellow-400 font-mono">{markedCount}</span>
          </div>
        </div>

        {/* Legend */}
        <div className="mb-4 p-4 bg-slate-800/30 border border-slate-600/30 rounded-lg">
          <p className="text-xs text-slate-400 font-mono mb-2">LEGEND:</p>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center text-white font-mono text-xs">1</div>
              <span className="text-slate-400">Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center text-slate-400 font-mono text-xs">1</div>
              <span className="text-slate-400">Unattempted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-600 rounded flex items-center justify-center text-white font-mono text-xs">1</div>
              <span className="text-slate-400">Marked</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-cyan-600 rounded flex items-center justify-center text-white font-mono text-xs">1</div>
              <span className="text-slate-400">Current</span>
            </div>
          </div>
        </div>

        {/* Question grid */}
        <div className="grid grid-cols-5 gap-2">
          {questions.map((_, index) => {
            const status = questionStatus[index];
            const isCurrent = currentQuestion === index;
            
            let bgColor = 'bg-slate-700';
            let textColor = 'text-slate-400';
            let borderColor = 'border-slate-600';

            if (isCurrent) {
              bgColor = 'bg-cyan-600';
              textColor = 'text-white';
              borderColor = 'border-cyan-500';
            } else if (status?.marked) {
              bgColor = 'bg-yellow-600';
              textColor = 'text-white';
              borderColor = 'border-yellow-500';
            } else if (status?.answered) {
              bgColor = 'bg-emerald-600';
              textColor = 'text-white';
              borderColor = 'border-emerald-500';
            }

            return (
              <button
                key={index}
                onClick={() => onQuestionSelect(index)}
                className={`
                  aspect-square rounded flex items-center justify-center
                  font-mono text-sm font-bold transition-all duration-300
                  hover:scale-110 border-2
                  ${bgColor} ${textColor} ${borderColor}
                `}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Instructions */}
      <div className="terminal-border bg-slate-900/50 backdrop-blur-sm rounded-xl p-6">
        <h4 className="text-sm font-bold text-emerald-400 mb-3 font-mono">INSTRUCTIONS</h4>
        <ul className="space-y-2 text-xs text-slate-400">
          <li className="flex gap-2">
            <span className="text-emerald-400">•</span>
            <span>Click on any question number to navigate directly</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-400">•</span>
            <span>Use "Mark for Review" to flag difficult questions</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-400">•</span>
            <span>Progress is auto-saved locally</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-400">•</span>
            <span>Quiz auto-submits when timer reaches 00:00</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
