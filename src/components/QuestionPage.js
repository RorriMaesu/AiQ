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
  const [currentHint, setCurrentHint] = useState('');
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [encouragementMessage, setEncouragementMessage] = useState('');
  const [timeWarning, setTimeWarning] = useState(false);

  // Reset state when questions change (new test)
  useEffect(() => {
    console.log('Questions changed, resetting state');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimeLeft(60);
    setIsTimerActive(true);
    setShowHint(false);
    setCurrentHint(''); // Clear the current hint
    setHintsUsed(0);
    setShowEncouragement(false);
    setTimeWarning(false);
  }, [questions]);

  // "Encouragement" messages - now with more sarcasm
  const encouragementMessages = [
    "Wow, you actually got that one? Even a broken clock is right twice a day.",
    "Your brain cells must be exhausted from their annual workout.",
    "If you think that was hard, wait until we ask you to tie your shoes.",
    "Congratulations on answering that one! Your participation trophy is in the mail.",
    "You're doing better than expected... though my expectations were underground.",
    "Are you using Google, or is your random guessing just getting lucky?",
    "That last answer was almost intelligent. Don't worry, it was probably an accident.",
    "You're in the top 99% of test takers! That's... something, I guess.",
    "Your struggle with these questions is both hilarious and concerning.",
    "I've seen trained monkeys solve these faster, but you're getting there!",
    "Each wrong answer brings you closer to understanding just how average you are.",
    "Your determination is admirable. Your intelligence... not so much."
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
    setCurrentHint(''); // Clear the current hint
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

  // Handle hint request - generates and stores a single hint
  const handleHintRequest = () => {
    // Only generate a new hint if we don't already have one for this question
    if (!currentHint) {
      const generatedHint = getHint();
      console.log('Generated new hint:', generatedHint);
      setCurrentHint(generatedHint); // Store the hint in state
    }
    // Show the hint and increment the counter
    setShowHint(true);
    setHintsUsed(hintsUsed + 1);
  };

  // Generate a sarcastic hint that's even less helpful than before
  const getHint = () => {
    console.log('Generating hint - this should only happen once per hint request');
    const currentQuestion = questions[currentQuestionIndex];
    const questionType = currentQuestion.type;

    // Multiple options for each question type for variety
    const hintOptions = {
      pattern: [
        "Have you tried counting? You know, that thing you do with your fingers?",
        "The answer is a number. That narrows it down to... several options.",
        "If you stare at the sequence long enough, maybe the answer will magically appear. Or not.",
        "Try using your brain for this one. Oh wait...",
        "It's a pattern. You know, like the pattern of disappointment you leave in everyone's lives."
      ],
      verbal: [
        "Words are hard, aren't they? Maybe try grunting at the screen instead.",
        "The relationship between words is like the relationship between you and intelligence - distant.",
        "If you don't know this one, maybe stick to picture books.",
        "It's an analogy. A-N-A-L-O-G-Y. Look it up after you're done failing this test.",
        "Try sounding out the words slowly. It won't help with the answer, but it might be entertaining to watch."
      ],
      spatial: [
        "Try imagining shapes in your head. No, a donut doesn't count.",
        "Close one eye, tilt your head, and pretend you understand geometry. Works every time.",
        "Spatial reasoning requires a brain. Maybe phone a friend?",
        "Have you tried turning the problem upside down? It won't help, but it might make you dizzy enough to forget how badly you're doing.",
        "Maybe if you fold the screen in half, the answer will jump out at you. Or just break your device. Either way, problem solved!"
      ],
      logical: [
        "Logic is clearly not your strong suit. Maybe try guessing?",
        "If P then Q. If you then confused. Welcome to your life.",
        "Try eliminating the wrong answers. Actually, with your track record, maybe eliminate the ones you think are right.",
        "This requires logical thinking, so... good luck with that.",
        "Have you tried asking yourself what a smart person would do? Then do the opposite of whatever you were going to do."
      ]
    };

    // Default hints if question type doesn't match
    const defaultHints = [
      "Have you tried randomly clicking? It's about as effective as your thinking process.",
      "The answer is definitely one of the options provided. That's all the help you're getting.",
      "Maybe take a break and come back when your IQ has increased. So... never?",
      "Try closing your eyes and picking an answer. Your odds might actually improve.",
      "If you're looking for actual help, you've come to the wrong place. Just like your search for intelligence."
    ];

    // Get the array of hints for this question type, or use default
    const hintsArray = hintOptions[questionType] || defaultHints;

    // Use the question ID as a consistent seed to always get the same hint for the same question
    // This ensures the hint doesn't change when displayed multiple times
    const hintIndex = currentQuestion.id % hintsArray.length;
    return hintsArray[hintIndex];
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

        {/* Time warning - creates urgency with sarcasm */}
        {timeWarning && (
          <div className="time-warning">
            {timeLeft <= 5 ? (
              <span>Only {timeLeft} seconds left! Even a sloth could answer faster than this.</span>
            ) : timeLeft <= 15 ? (
              <span>Tick tock, genius. {timeLeft} seconds before we put you out of your misery.</span>
            ) : (
              <span>Hello? Is your brain buffering? {timeLeft} seconds remaining.</span>
            )}
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
              <p>{currentHint}</p>
              {console.log('Displaying stored hint:', currentHint)}
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
