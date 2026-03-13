'use client';

import { useState, useEffect, useCallback } from 'react';
import { UserAnswers, SECTION_LABELS, QuestionSection } from '@/lib/types';
import { QUESTIONS, getVisibleQuestions } from '@/lib/questions';
import { saveAnswers, loadAnswers, getCompletedTaskIds } from '@/lib/storage';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export function Questionnaire() {
  const router = useRouter();
  const { user, saveToCloud, loadFromCloud } = useAuth();
  const [answers, setAnswers] = useState<Partial<UserAnswers>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      // Try cloud first if logged in
      if (user) {
        const cloudData = await loadFromCloud();
        if (cloudData && Object.keys(cloudData.answers).length > 0) {
          setAnswers(cloudData.answers);
          saveAnswers(cloudData.answers); // sync to local
          setLoaded(true);
          return;
        }
      }
      // Fall back to local
      const saved = loadAnswers();
      if (saved && Object.keys(saved).length > 0) {
        setAnswers(saved);
      }
      setLoaded(true);
    }
    load();
  }, [user, loadFromCloud]);

  const visibleQuestions = getVisibleQuestions(answers);
  const currentQuestion = visibleQuestions[currentIndex];
  const totalQuestions = visibleQuestions.length;
  const progress = totalQuestions > 0 ? ((currentIndex) / totalQuestions) * 100 : 0;

  const currentSection = currentQuestion?.section;
  const prevSection = currentIndex > 0 ? visibleQuestions[currentIndex - 1]?.section : null;
  const isNewSection = currentSection !== prevSection;

  const setAnswer = useCallback((key: keyof UserAnswers, value: string | boolean) => {
    setAnswers(prev => {
      const updated = { ...prev, [key]: value };
      saveAnswers(updated);
      // Sync to cloud in background if logged in
      if (user) {
        saveToCloud(updated, getCompletedTaskIds());
      }
      return updated;
    });
  }, [user, saveToCloud]);

  const handleNext = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      saveAnswers(answers);
      router.push('/results');
    }
  }, [currentIndex, totalQuestions, answers, router]);

  const handleBack = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentIndex]);

  const handleSelect = useCallback((key: keyof UserAnswers, value: string | boolean) => {
    setAnswer(key, value);
    // Auto-advance after a short delay for better UX
    setTimeout(() => {
      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 300);
  }, [setAnswer, currentIndex, totalQuestions]);

  if (!loaded) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-muted">Loading...</div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-foreground mb-4">Your personalised guide is ready.</p>
          <button
            onClick={() => router.push('/results')}
            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
          >
            View Your Guide
          </button>
        </div>
      </div>
    );
  }

  const hasAnswer = answers[currentQuestion.id] !== undefined;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  return (
    <div className="min-h-[60vh] flex flex-col">
      {/* Progress bar */}
      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
        <div
          className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-muted mt-2 text-center">
        Question {currentIndex + 1} of {totalQuestions}
      </p>

      <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto w-full px-4 py-8">
        {/* Section header */}
        {isNewSection && currentSection && (
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
            {SECTION_LABELS[currentSection as QuestionSection]}
          </p>
        )}

        {/* Question */}
        <h2 className="text-2xl font-semibold text-foreground leading-snug mb-2">
          {currentQuestion.title}
        </h2>
        {currentQuestion.subtitle && (
          <p className="text-muted text-sm leading-relaxed mb-6">
            {currentQuestion.subtitle}
          </p>
        )}

        {/* Answer options */}
        <div className="space-y-3 mb-8">
          {currentQuestion.type === 'single' && currentQuestion.options?.map(option => (
            <button
              key={option.value}
              onClick={() => handleSelect(currentQuestion.id, option.value)}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${
                answers[currentQuestion.id] === option.value
                  ? 'border-primary bg-primary-light'
                  : 'border-border bg-card hover:border-primary/50 hover:bg-gray-50'
              }`}
            >
              <span className="font-medium text-foreground">{option.label}</span>
              {option.description && (
                <span className="block text-sm text-muted mt-1">{option.description}</span>
              )}
              {option.warning && (
                <span className="block text-sm text-amber-700 bg-amber-50 mt-2 px-3 py-2 rounded-lg">
                  {option.warning}
                </span>
              )}
            </button>
          ))}

          {currentQuestion.type === 'boolean' && (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSelect(currentQuestion.id, true)}
                className={`px-5 py-4 rounded-xl border-2 transition-all text-center font-medium ${
                  answers[currentQuestion.id] === true
                    ? 'border-primary bg-primary-light text-primary-dark'
                    : 'border-border bg-card hover:border-primary/50 text-foreground'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleSelect(currentQuestion.id, false)}
                className={`px-5 py-4 rounded-xl border-2 transition-all text-center font-medium ${
                  answers[currentQuestion.id] === false
                    ? 'border-primary bg-primary-light text-primary-dark'
                    : 'border-border bg-card hover:border-primary/50 text-foreground'
                }`}
              >
                No
              </button>
            </div>
          )}

          {currentQuestion.type === 'date' && (
            <div>
              <input
                type="date"
                value={answers[currentQuestion.id] as string || ''}
                onChange={(e) => setAnswer(currentQuestion.id, e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                className="w-full px-5 py-4 rounded-xl border-2 border-border bg-card text-foreground text-lg focus:border-primary focus:ring-0 outline-none"
              />
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className={`px-5 py-3 rounded-lg font-medium transition-colors ${
              currentIndex === 0
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-muted hover:text-foreground hover:bg-gray-100'
            }`}
          >
            Back
          </button>

          {currentQuestion.type === 'date' && (
            <button
              onClick={handleNext}
              disabled={!hasAnswer}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                hasAnswer
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isLastQuestion ? 'See Your Guide' : 'Next'}
            </button>
          )}

          {currentQuestion.type !== 'date' && isLastQuestion && hasAnswer && (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              See Your Guide
            </button>
          )}

          {!currentQuestion.required && !hasAnswer && currentQuestion.type !== 'date' && (
            <button
              onClick={handleNext}
              className="px-5 py-3 text-muted hover:text-foreground hover:bg-gray-100 rounded-lg font-medium transition-colors"
            >
              Skip
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
