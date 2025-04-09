import React, { useState, useEffect } from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import '../styles/QuestionPage.css';

const QuestionPage = ({ questions, onComplete, totalQuestions = 10 }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds per question
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [encouragementMessage, setEncouragementMessage] = useState('');
  const [timeWarning, setTimeWarning] = useState(false);

  // Encouragement messages - positive reinforcement
  const encouragementMessages = [
    "You're doing great! Keep it up!",
    "Excellent progress! Your cognitive abilities are impressive.",
    "You're demonstrating strong analytical skills!",
    "Your pattern recognition is remarkable!",
    "You're performing better than 85% of test-takers!"
  ];

  // Handle timer with psychological pressure
  useEffect(() => {
    let timer;
    if (isTimerActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);

        // Add time pressure warnings
        if (timeLeft === 30) {
          setTimeWarning(true);
          setTimeout(() => setTimeWarning(false), 2000);
        } else if (timeLeft === 15) {
          setTimeWarning(true);
          setTimeout(() => setTimeWarning(false), 2000);
        } else if (timeLeft === 5) {
          setTimeWarning(true);
        }
      }, 1000);
    } else if (timeLeft === 0) {
      // Time's up for this question, move to next
      handleNextQuestion();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft, isTimerActive]);

  // Reset timer when moving to a new question
  useEffect(() => {
    setTimeLeft(60);
    setIsTimerActive(true);
    setShowHint(false);
    setTimeWarning(false);

    // Show random encouragement message with 40% probability
    // Uses intermittent reinforcement principle
    if (Math.random() < 0.4 && currentQuestionIndex > 0) {
      const randomMessage = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
      setEncouragementMessage(randomMessage);
      setShowEncouragement(true);
      setTimeout(() => setShowEncouragement(false), 3000);
    }
  }, [currentQuestionIndex]);

  const handleAnswer = (questionId, optionId) => {
    setAnswers({
      ...answers,
      [questionId]: optionId,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate score (this is just for show - the results are predetermined)
      const score = calculateScore();
      onComplete(score);
    }
  };

  const handleHintRequest = () => {
    setShowHint(true);
    setHintsUsed(hintsUsed + 1);
  };

  // Generate a vague hint that seems helpful but isn't really
  const getHint = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const questionType = currentQuestion.type;

    const hints = {
      pattern: "Look for mathematical relationships between the numbers.",
      verbal: "Consider the fundamental relationship between the first pair of words.",
      spatial: "Visualize the transformation in three dimensions.",
      logical: "Apply formal logic rules to analyze the premises."
    };

    return hints[questionType] || "Consider all options carefully before answering.";
  };

  const calculateScore = () => {
    // In a real IQ test, this would be a complex calculation
    // For our gag test, we'll just count correct answers and convert to a score
    let correctCount = 0;

    Object.keys(answers).forEach(questionId => {
      const question = questions.find(q => q.id === parseInt(questionId));
      if (question && answers[questionId] === question.correctAnswer) {
        correctCount++;
      }
    });

    // Convert to a score out of 100
    return Math.round((correctCount / questions.length) * 100);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Calculate remaining questions for scarcity principle
  const remainingQuestions = questions.length - currentQuestionIndex - 1;

  return (
    <div className="question-page vh-100 flex-center flex-column">
      <div className="question-page-content auto-scale-content">
        {/* Status bar with psychological elements */}
        <div className="status-bar">
          <ProgressBar progress={progress} />

          <div className="test-stats">
            <div className="stat">
              <span className="stat-label">Question</span>
              <span className="stat-value">{currentQuestionIndex + 1} of {questions.length}</span>
            </div>

            <div className="stat">
              <span className="stat-label">Remaining</span>
              <span className="stat-value">{remainingQuestions} questions</span>
            </div>

            <div className="stat">
              <span className="stat-label">Hints Used</span>
              <span className={`stat-value ${hintsUsed > 2 ? 'warning' : ''}`}>{hintsUsed}</span>
            </div>
          </div>
        </div>

        {/* Encouragement message - intermittent reinforcement */}
        {showEncouragement && (
          <div className="encouragement-message">
            {encouragementMessage}
          </div>
        )}

        {/* Time warning - creates urgency */}
        {timeWarning && (
          <div className="time-warning">
            Time is running out! {timeLeft} seconds remaining.
          </div>
        )}

        <div className="question-wrapper">
          <Question
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            timeLeft={timeLeft}
            totalQuestions={totalQuestions}
          />
        </div>

        <div className="bottom-controls">
          {/* Hint system - gives illusion of help */}
          {!showHint ? (
            <div className="hint-container">
              <button
                className="hint-button"
                onClick={handleHintRequest}
                disabled={hintsUsed >= 3}
              >
                {hintsUsed >= 3 ? 'No Hints Remaining' : 'Get a Hint'}
              </button>
              {hintsUsed < 3 && <span className="hints-remaining">({3 - hintsUsed} hints remaining)</span>}
            </div>
          ) : (
            <div className="hint-display">
              <div className="hint-icon">💡</div>
              <p>{getHint()}</p>
            </div>
          )}

          <div className="navigation">
            <button
              className="next-button"
              onClick={handleNextQuestion}
              disabled={!answers[questions[currentQuestionIndex].id]}
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Complete Test'}
            </button>
          </div>
        </div>

        {/* Subtle pressure message */}
        <div className="pressure-message">
          High-performing test-takers typically complete this question in under 45 seconds.
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
