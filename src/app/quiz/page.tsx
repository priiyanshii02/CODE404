"use client";

import { useEffect, useState } from "react";
import QuizHeader from "@/components/quiz/QuizHeader";
import QuestionCard from "@/components/quiz/QuestionCard";
import QuestionPalette from "@/components/quiz/QuestionPalette";
import AntiCheatMonitor from "@/components/quiz/AntiCheatMonitor";
import SubmitModal from "@/components/quiz/SubmitModal";
import { quizQuestions } from "@/lib/quizData";
import { CheckCircle2 } from "lucide-react";

export interface QuestionStatus {
  answered: boolean;
  marked: boolean;
  selectedOption: number | null;
}

export default function QuizArena() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60 * 60); // 60 minutes in seconds
  const [questionStatus, setQuestionStatus] = useState<QuestionStatus[]>([]);
  const [violations, setViolations] = useState(0);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize question status
  useEffect(() => {
    // Load saved state from localStorage
    const savedState = localStorage.getItem("quizState");
    const isAlreadySubmitted = localStorage.getItem("quizSubmitted");

    if (isAlreadySubmitted === "true") {
      setIsSubmitted(true);
      setIsInitialized(true);
      return;
    }

    if (savedState) {
      try {
        const { status, time, current, viols } = JSON.parse(savedState);
        setQuestionStatus(status);
        setTimeRemaining(time);
        setCurrentQuestion(current);
        setViolations(viols);
      } catch (error) {
        console.error("Error loading saved state:", error);
        initializeFreshState();
      }
    } else {
      initializeFreshState();
    }
    setIsInitialized(true);
  }, []);

  const initializeFreshState = () => {
    setQuestionStatus(
      quizQuestions.map(() => ({
        answered: false,
        marked: false,
        selectedOption: null,
      }))
    );
  };

  // Save state to localStorage
  useEffect(() => {
    if (questionStatus.length > 0 && isInitialized && !isSubmitted) {
      localStorage.setItem(
        "quizState",
        JSON.stringify({
          status: questionStatus,
          time: timeRemaining,
          current: currentQuestion,
          viols: violations,
        })
      );
    }
  }, [questionStatus, timeRemaining, currentQuestion, violations, isInitialized, isSubmitted]);

  // Countdown timer
  useEffect(() => {
    if (!isInitialized || timeRemaining <= 0 || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, isSubmitted, isInitialized]);

  // Disable right-click and copy
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCut);
    document.addEventListener("paste", handlePaste);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  // Prevent page refresh/close without warning
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isSubmitted) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isSubmitted]);

  const handleAutoSubmit = () => {
    setIsSubmitted(true);
    localStorage.setItem("quizSubmitted", "true");
    
    // Here you would send the quiz data to your backend
    const submissionData = {
      answers: questionStatus,
      violations: violations,
      submittedAt: new Date().toISOString(),
      timeUsed: 3600 - timeRemaining,
      isAutoSubmit: true,
    };
    
    console.log("Auto-submitted quiz:", submissionData);
    
    // In production, send to backend:
    // await fetch('/api/quiz/submit', {
    //   method: 'POST',
    //   body: JSON.stringify(submissionData)
    // });
  };

  const handleOptionSelect = (optionIndex: number) => {
    const newStatus = [...questionStatus];
    newStatus[currentQuestion] = {
      ...newStatus[currentQuestion],
      answered: true,
      selectedOption: optionIndex,
    };
    setQuestionStatus(newStatus);
  };

  const handleMarkForReview = () => {
    const newStatus = [...questionStatus];
    newStatus[currentQuestion] = {
      ...newStatus[currentQuestion],
      marked: !newStatus[currentQuestion].marked,
    };
    setQuestionStatus(newStatus);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuestionSelect = (index: number) => {
    setCurrentQuestion(index);
  };

  const handleViolation = () => {
    setViolations((prev) => prev + 1);
  };

  const handleSubmit = () => {
    setShowSubmitModal(true);
  };

  const confirmSubmit = () => {
    setIsSubmitted(true);
    setShowSubmitModal(false);
    localStorage.setItem("quizSubmitted", "true");
    
    // Submit to backend
    const submissionData = {
      answers: questionStatus,
      violations: violations,
      submittedAt: new Date().toISOString(),
      timeUsed: 3600 - timeRemaining,
      isAutoSubmit: false,
    };
    
    console.log("Manually submitted quiz:", submissionData);
    
    // In production, send to backend:
    // await fetch('/api/quiz/submit', {
    //   method: 'POST',
    //   body: JSON.stringify(submissionData)
    // });
  };

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-emerald-400 font-mono">Loading Quiz Arena...</p>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full terminal-border bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 box-glow animate-pulse">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 font-mono">
            Quiz Submitted Successfully!
          </h1>
          <p className="text-slate-400 mb-6">
            Your responses have been recorded and sent for evaluation. 
            You may now close this window.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-lg">
              <p className="text-xs text-emerald-400 mb-1 font-mono">QUESTIONS ANSWERED</p>
              <p className="text-2xl font-bold text-emerald-400 font-mono">
                {questionStatus.filter(q => q.answered).length} / {quizQuestions.length}
              </p>
            </div>
            <div className="p-4 bg-slate-800/50 border border-slate-600/30 rounded-lg">
              <p className="text-xs text-slate-400 mb-1 font-mono">SUBMISSION TIME</p>
              <p className="text-2xl font-bold text-white font-mono">
                {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
          <div className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-lg">
            <p className="text-emerald-400 font-mono text-sm">
              [SYSTEM_LOG: Submission ID #{Math.random().toString(36).substr(2, 9).toUpperCase()}]
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Anti-cheat monitor */}
      <AntiCheatMonitor onViolation={handleViolation} violations={violations} />

      {/* Header */}
      <QuizHeader
        timeRemaining={timeRemaining}
        currentQuestion={currentQuestion}
        totalQuestions={quizQuestions.length}
        violations={violations}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Question area */}
          <div className="flex-1">
            <QuestionCard
              question={quizQuestions[currentQuestion]}
              questionNumber={currentQuestion + 1}
              selectedOption={questionStatus[currentQuestion]?.selectedOption}
              isMarked={questionStatus[currentQuestion]?.marked}
              onOptionSelect={handleOptionSelect}
              onMarkForReview={handleMarkForReview}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onSubmit={handleSubmit}
              isFirst={currentQuestion === 0}
              isLast={currentQuestion === quizQuestions.length - 1}
            />
          </div>

          {/* Question palette sidebar */}
          <div className="lg:w-80">
            <QuestionPalette
              questions={quizQuestions}
              questionStatus={questionStatus}
              currentQuestion={currentQuestion}
              onQuestionSelect={handleQuestionSelect}
            />
          </div>
        </div>
      </div>

      {/* Submit confirmation modal */}
      {showSubmitModal && (
        <SubmitModal
          onConfirm={confirmSubmit}
          onCancel={() => setShowSubmitModal(false)}
          answeredCount={questionStatus.filter((q) => q.answered).length}
          totalCount={quizQuestions.length}
        />
      )}
    </div>
  );
}
