import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import AssessmentBrand from './AssessmentBrand';
import '../styles/QuestionPage.css';

const QUESTION_TIME_SECONDS = 8;
const PASS_MARK = 80;
const SCORE_CEILING = 79;
const TIMEOUT_ANSWER = '__timeout__';

const normalizeSeed = (value) => {
  if (!Number.isFinite(value)) {
    return 0.5;
  }
  return Math.abs(value % 1);
};

const buildReportedScore = (rawScore, timedOutCount, totalQuestions, seed) => {
  if (rawScore <= 0) {
    return 3 + Math.floor(seed * 6);
  }

  const reductionFactor = 0.31 + (seed * 0.24);
  const timeoutPenalty = totalQuestions
    ? Math.round((timedOutCount / totalQuestions) * 6)
    : 0;
  const reducedScore = Math.round(rawScore * reductionFactor) - timeoutPenalty;

  return Math.max(1, Math.min(rawScore - 1, reducedScore, SCORE_CEILING));
};

const buildComparison = (reportedScore, seed) => {
  const averageBaseline = 64 + Math.floor(seed * 11);
  const averageScore = Math.min(89, Math.max(
    averageBaseline,
    reportedScore + 16 + Math.floor(seed * 8)
  ));
  const percentile = Math.max(3, Math.min(
    39,
    Math.round((reportedScore / averageScore) * 36)
  ));

  return {
    averageScore,
    percentile,
    higherPercentage: 100 - percentile,
    sampleSize: 3200 + Math.floor(seed * 11600),
  };
};

const HINTS = {
  pattern: [
    'There is definitely a pattern. Locating it remains a you-shaped problem.',
    'Try squinting. It will not help, but it looks impressively analytical.',
    'The numbers know what they did. Perhaps ask them more firmly.',
    'The pattern is hiding in plain sight, which is awkward because you were also looking there.',
    'Your strategy currently has the structural integrity of warm custard.',
    'Try subtracting confidence from panic. No, that is still not the answer.',
  ],
  verbal: [
    'One of these words is correct. This concludes the language department’s support.',
    'Read every option twice, then panic in alphabetical order.',
    'The dictionary declined to comment on your situation.',
    'The thesaurus has asked not to be associated with whatever happens next.',
    'Read the sentence again. It missed you too.',
    'One option fits perfectly. Your favorite has provided no references.',
  ],
  spatial: [
    'Rotate it in your mind. Gently; the equipment is not insured.',
    'Imagine the shape from another angle. Any angle. We are not checking your work.',
    'Close one eye. Now you have less spatial information. Excellent progress.',
    'Your mental cube has filed for a less confusing owner.',
    'Imagine three dimensions. Two were already doing heroic work.',
    'Turn the shape, not the phone. The phone has seen enough.',
  ],
  logical: [
    'Use logic. The budget did not cover a second hint.',
    'Eliminate the impossible answers, including whichever one you currently like.',
    'The conclusion follows something. Whether you follow it is between you and the clock.',
    'Even the wrong answers have started eliminating you.',
    'This argument contains a valid conclusion. Your answer contains decorative confidence.',
    'Follow the premise carefully. Your attention span said it would meet us there.',
  ],
};

const buildResult = (questions, answers, randomValue = Math.random()) => {
  const seed = normalizeSeed(randomValue);
  const review = questions.map((question) => {
    const selectedOption = answers[question.id];
    const timedOut = selectedOption === TIMEOUT_ANSWER || !selectedOption;
    const correctOption = question.options.find(({ id }) => id === question.correctAnswer);
    return {
      id: question.id,
      type: question.type,
      question: question.question,
      selectedOption,
      correctAnswer: question.correctAnswer,
      correctAnswerText: correctOption?.text || '',
      isCorrect: !timedOut && selectedOption === question.correctAnswer,
      timedOut,
      explanation: question.explanation,
    };
  });
  const correctCount = review.filter(({ isCorrect }) => isCorrect).length;
  const timedOutCount = review.filter(({ timedOut }) => timedOut).length;
  const rawScore = Math.round((correctCount / questions.length) * 100);
  const reportedScore = buildReportedScore(rawScore, timedOutCount, questions.length, seed);
  const categoryResults = ['pattern', 'verbal', 'spatial', 'logical'].map((type, index) => {
    const categoryQuestions = review.filter((item) => item.type === type);
    const categoryCorrect = categoryQuestions.filter(({ isCorrect }) => isCorrect).length;
    const categoryRawScore = categoryQuestions.length
      ? Math.round((categoryCorrect / categoryQuestions.length) * 100)
      : 0;
    const categorySeed = (seed + ((index + 1) * 0.173)) % 1;
    const categoryReduction = 0.28 + (categorySeed * 0.26);
    const categoryReportedScore = categoryRawScore <= 0
      ? 4 + Math.floor(categorySeed * 7)
      : Math.max(2, Math.min(categoryRawScore - 1, Math.round(categoryRawScore * categoryReduction)));

    return {
      type,
      correct: categoryCorrect,
      total: categoryQuestions.length,
      reportedScore: categoryReportedScore,
    };
  });

  return {
    score: reportedScore,
    rawScore,
    correctCount,
    timedOutCount,
    totalQuestions: questions.length,
    passMark: PASS_MARK,
    scoreCeiling: SCORE_CEILING,
    passed: false,
    comparison: buildComparison(reportedScore, seed),
    categoryResults,
    review,
  };
};

const QuestionPage = ({ questions, onComplete, onExit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showHint, setShowHint] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_SECONDS);
  const headingTarget = useRef(null);
  const answersRef = useRef({});
  const advancingRef = useRef(false);
  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = currentQuestion ? answers[currentQuestion.id] : null;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    answersRef.current = {};
    setShowHint(false);
    setTimeLeft(QUESTION_TIME_SECONDS);
  }, [questions]);

  useEffect(() => {
    headingTarget.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: currentQuestionIndex === 0 ? 'auto' : 'smooth' });
  }, [currentQuestionIndex]);

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hint = useMemo(() => {
    const hintsForType = HINTS[currentQuestion?.type] || HINTS.logical;
    return hintsForType[(Number(currentQuestion?.id) + currentQuestionIndex) % hintsForType.length];
  }, [currentQuestion, currentQuestionIndex]);

  const submitCurrentQuestion = useCallback((answerValue) => {
    if (!currentQuestion || advancingRef.current) {
      return;
    }

    advancingRef.current = true;
    const nextAnswers = {
      ...answersRef.current,
      [currentQuestion.id]: answerValue,
    };

    answersRef.current = nextAnswers;
    setAnswers(nextAnswers);

    if (isLastQuestion) {
      onComplete(buildResult(questions, nextAnswers));
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
    setShowHint(false);
  }, [currentQuestion, isLastQuestion, onComplete, questions]);

  useEffect(() => {
    if (!currentQuestion) {
      return undefined;
    }

    advancingRef.current = false;
    setTimeLeft(QUESTION_TIME_SECONDS);

    const intervalId = window.setInterval(() => {
      setTimeLeft((seconds) => Math.max(0, seconds - 1));
    }, 1000);
    const timeoutId = window.setTimeout(() => {
      submitCurrentQuestion(TIMEOUT_ANSWER);
    }, QUESTION_TIME_SECONDS * 1000);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [currentQuestion, submitCurrentQuestion]);

  useEffect(() => {
    if (!currentQuestion) {
      return undefined;
    }

    const handleKeyboard = (event) => {
      if (event.key >= '1' && Number(event.key) <= currentQuestion.options.length) {
        const option = currentQuestion.options[Number(event.key) - 1];
        if (option) {
          const nextAnswers = { ...answersRef.current, [currentQuestion.id]: option.id };
          answersRef.current = nextAnswers;
          setAnswers(nextAnswers);
        }
      }
      if (event.key === 'Enter' && answersRef.current[currentQuestion.id]) {
        submitCurrentQuestion(answersRef.current[currentQuestion.id]);
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [currentQuestion, submitCurrentQuestion]);

  if (!currentQuestion) {
    return null;
  }

  const handleNext = () => {
    if (!selectedOption) {
      return;
    }
    submitCurrentQuestion(selectedOption);
  };

  const navigationStatus = timeLeft <= 3
    ? 'Time is nearly up. Submit now or the item will advance automatically.'
    : (selectedOption
      ? 'Response selected. Submit when ready.'
      : 'Select one response to continue.');

  return (
    <main className={`quiz-page quiz-page--${currentQuestion.type}${timeLeft <= 3 ? ' quiz-page--urgent' : ''}`}>
      <div className="quiz-grid" aria-hidden="true" />
      <header className="quiz-header" ref={headingTarget} tabIndex="-1">
        <AssessmentBrand href="#quiz" label="AIQ assessment" />
        <div className="quiz-header-actions">
          <span>Protocol active · Measure {String(currentQuestionIndex + 1).padStart(2, '0')}</span>
          <button className="exit-button" type="button" onClick={onExit}>Exit assessment</button>
        </div>
      </header>

      <section className="quiz-status" id="quiz" aria-label="Assessment progress">
        <div className="quiz-status-row">
          <div className="progress-copy" aria-live="polite">
            <span>Assessment progression</span>
            <strong>{String(Math.round(progress)).padStart(2, '0')}%</strong>
          </div>
          <div
            className={`timer-display${timeLeft <= 3 ? ' timer-display--urgent' : ''}`}
            role="timer"
            aria-label={`${timeLeft} seconds remaining`}
          >
            <span>Measurement window</span>
            <strong>{String(timeLeft).padStart(2, '0')}</strong>
          </div>
        </div>
        <ProgressBar progress={progress} />
        <div className="time-track" aria-hidden="true" style={{ '--time-left': timeLeft / QUESTION_TIME_SECONDS }}>
          <span />
          <i>{String(timeLeft).padStart(2, '0')}</i>
        </div>
      </section>

      <div className="quiz-workspace">
        <aside className="question-register" aria-hidden="true">
          <span>{String(currentQuestionIndex + 1).padStart(2, '0')}</span>
          <i />
          <span>{currentQuestion.type.slice(0, 3).toUpperCase()}</span>
        </aside>
        <Question
          key={currentQuestion.id}
          question={currentQuestion}
          selectedOption={selectedOption}
          onAnswer={(questionId, optionId) => {
            const nextAnswers = { ...answersRef.current, [questionId]: optionId };
            answersRef.current = nextAnswers;
            setAnswers(nextAnswers);
          }}
          questionNumber={currentQuestionIndex + 1}
        />

        <div className="question-tools">
          <div className="hint-region">
            <button
              className="hint-link"
              type="button"
              onClick={() => setShowHint(true)}
              disabled={showHint}
              aria-label={showHint ? 'Hint requested' : 'Request hint'}
            >
              {showHint ? 'Examiner has spoken' : 'Request examiner hint'}
            </button>
            {showHint && <p className="hint-message"><span>Examiner note</span>{hint}</p>}
          </div>
          <button
            className="next-button"
            type="button"
            onClick={handleNext}
            disabled={!selectedOption}
            aria-label={isLastQuestion ? 'Submit final response' : 'Submit response'}
          >
            {isLastQuestion ? 'Complete assessment' : 'Register response'}
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <p className="navigation-status">{navigationStatus} <span>Keyboard: 1–{currentQuestion.options.length} + Enter</span></p>
      </div>
    </main>
  );
};

export {
  buildComparison,
  buildReportedScore,
  buildResult,
  PASS_MARK,
  QUESTION_TIME_SECONDS,
  SCORE_CEILING,
  TIMEOUT_ANSWER,
};
export default QuestionPage;
