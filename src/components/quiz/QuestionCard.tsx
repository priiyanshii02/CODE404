"use client";

import { ChevronLeft, ChevronRight, Flag, Send } from "lucide-react";
import { QuizQuestion } from "@/lib/quizData";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  selectedOption: number | null;
  isMarked: boolean;
  onOptionSelect: (index: number) => void;
  onMarkForReview: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function QuestionCard({
  question,
  questionNumber,
  selectedOption,
  isMarked,
  onOptionSelect,
  onMarkForReview,
  onNext,
  onPrevious,
  onSubmit,
  isFirst,
  isLast
}: QuestionCardProps) {
  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="terminal-border bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8">
      {/* Question header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-lg flex items-center justify-center font-mono font-bold text-white">
            {questionNumber}
          </div>
          <div>
            <p className="text-xs text-slate-400 font-mono">QUESTION {questionNumber}</p>
            <p className="text-sm text-emerald-400 font-mono">ID: #{question.id}</p>
          </div>
        </div>

        {/* Mark for review button */}
        <button
          onClick={onMarkForReview}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
            isMarked
              ? 'bg-yellow-950/50 border border-yellow-500/50 text-yellow-400'
              : 'bg-slate-800/50 border border-slate-600/30 text-slate-400 hover:border-yellow-500/50 hover:text-yellow-400'
          }`}
        >
          <Flag className="w-4 h-4" />
          <span className="text-sm font-mono hidden sm:inline">
            {isMarked ? 'Marked' : 'Mark for Review'}
          </span>
        </button>
      </div>

      {/* Question text */}
      <div className="mb-6">
        <h2 className="text-lg md:text-xl text-white leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Code block (if present) */}
      {question.code && (
        <div className="mb-6 terminal-border bg-slate-950 rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border-b border-emerald-500/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <span className="text-xs text-emerald-400 font-mono ml-2">
              {question.codeLanguage || 'code'}
            </span>
          </div>
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              language={question.codeLanguage || 'javascript'}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1rem',
                background: 'transparent',
                fontSize: '0.875rem'
              }}
              wrapLongLines={true}
            >
              {question.code}
            </SyntaxHighlighter>
          </div>
        </div>
      )}

      {/* Options */}
      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onOptionSelect(index)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
              selectedOption === index
                ? 'bg-emerald-950/50 border-emerald-500 text-white'
                : 'bg-slate-800/30 border-slate-600/30 text-slate-300 hover:border-emerald-500/50 hover:bg-slate-800/50'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold ${
                selectedOption === index
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-700 text-slate-400'
              }`}>
                {optionLabels[index]}
              </div>
              <span className="flex-1 pt-1">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex flex-wrap gap-3 justify-between">
        <div className="flex gap-3">
          <button
            onClick={onPrevious}
            disabled={isFirst}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-900 disabled:opacity-50 text-white rounded-lg transition-all duration-300 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-mono">Previous</span>
          </button>

          <button
            onClick={onNext}
            disabled={isLast}
            className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-900 disabled:opacity-50 text-white rounded-lg transition-all duration-300 disabled:cursor-not-allowed"
          >
            <span className="font-mono">Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {isLast && (
          <button
            onClick={onSubmit}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white rounded-lg transition-all duration-300 box-glow"
          >
            <Send className="w-5 h-5" />
            <span className="font-mono font-bold">Submit Quiz</span>
          </button>
        )}
      </div>

      {/* Selection indicator */}
      <div className="mt-6 p-4 bg-slate-800/30 border border-slate-600/30 rounded-lg">
        <p className="text-sm font-mono text-slate-400">
          {selectedOption !== null ? (
            <>
              <span className="text-emerald-400">✓</span> Selected: Option {optionLabels[selectedOption]}
            </>
          ) : (
            <>
              <span className="text-yellow-400">⚠</span> No option selected
            </>
          )}
        </p>
      </div>
    </div>
  );
}
