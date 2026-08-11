import React, { useEffect, useMemo, useRef, useState } from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import '../styles/QuestionPage.css';

const HINTS = {
  pattern: 'Look at the gaps between terms before staring dramatically into the distance.',
  verbal: 'Name the relationship in the first pair, then apply that same relationship to the second.',
  spatial: 'Rotate the object in your mind, not your phone. Your phone has been through enough.',
  logical: 'Use only what the statement guarantees. “Probably” is logic wearing a fake moustache.',
};

const buildResult = (questions, answers) => {
  const review = questions.map((question) => {
    const selectedOption = answers[question.id];
    const correctOption = question.options.find(({ id }) => id === question.correctAnswer);
    return {
      id: question.id,
      type: question.type,
      question: question.question,
      selectedOption,
      correctAnswer: question.correctAnswer,
      correctAnswerText: correctOption?.text || '',
      isCorrect: selectedOption === question.correctAnswer,
      explanation: question.explanation,
    };
  });
  const correctCount = review.filter(({ isCorrect }) => isCorrect).length;
  const categoryResults = ['pattern', 'verbal', 'spatial', 'logical'].map((type) => {
    const categoryQuestions = review.filter((item) => item.type === type);
    return {
      type,
      correct: categoryQuestions.filter(({ isCorrect }) => isCorrect).length,
      total: categoryQuestions.length,
    };
  });

  return {
    score: Math.round((correctCount / questions.length) * 100),
    correctCount,
    totalQuestions: questions.length,
    categoryResults,
    review,
  };
};

const QuestionPage = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showHint, setShowHint] = useState(false);
  const headingTarget = useRef(null);
  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = currentQuestion ? answers[currentQuestion.id] : null;
  const completedCount = Object.keys(answers).length;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const answeredProgress = (completedCount / questions.length) * 100;

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowHint(false);
  }, [questions]);

  useEffect(() => {
    if (currentQuestionIndex > 0) {
      headingTarget.current?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentQuestionIndex]);

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hint = useMemo(() => HINTS[currentQuestion?.type], [currentQuestion]);

  if (!currentQuestion) {
    return null;
  }

  const handleNext = () => {
    if (!selectedOption) {
      return;
    }

    if (isLastQuestion) {
      onComplete(buildResult(questions, answers));
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
    setShowHint(false);
  };

  return (
    <main className="quiz-page">
      <header className="quiz-header" ref={headingTarget} tabIndex="-1">
        <a className="brand compact-brand" href="#quiz" aria-label="AIQ quiz">
          <span className="brand-mark" aria-hidden="true">A?</span>
          <span>AIQ</span>
        </a>
        <p>Round in progress <span aria-hidden="true">·</span> dignity optional</p>
      </header>

      <div className="progress-panel" id="quiz">
        <div className="progress-copy">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span>{completedCount} answered</span>
        </div>
        <ProgressBar progress={progress} answeredProgress={answeredProgress} />
      </div>

      <div className="quiz-layout">
        <Question
          question={currentQuestion}
          selectedOption={selectedOption}
          onAnswer={(questionId, optionId) => {
            setAnswers((currentAnswers) => ({ ...currentAnswers, [questionId]: optionId }));
          }}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />

        <aside className="quiz-sidebar" aria-label="Question controls">
          <div className="sidebar-card hint-card">
            <span className="sidebar-kicker">Stuck-ish?</span>
            {showHint ? (
              <p className="hint-text">{hint}</p>
            ) : (
              <p>Request one genuinely useful hint, lightly seasoned with judgment.</p>
            )}
            <button
              className="hint-button"
              type="button"
              onClick={() => setShowHint(true)}
              disabled={showHint}
            >
              {showHint ? 'Hint deployed' : 'Give me a hint'}
            </button>
          </div>

          <div className="sidebar-card pace-card">
            <span className="sidebar-kicker">Your pace</span>
            <strong>{questions.length - currentQuestionIndex - 1}</strong>
            <p>questions waiting patiently</p>
          </div>

          <button
            className="next-button"
            type="button"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {isLastQuestion ? 'Reveal my brain weather' : 'Next question'}
            <span aria-hidden="true">→</span>
          </button>
          {!selectedOption && <p className="selection-nudge">Choose an answer to continue.</p>}
        </aside>
      </div>
    </main>
  );
};

export { buildResult };
export default QuestionPage;
