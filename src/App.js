import React, { useState, useEffect } from 'react';
import './App.css';
import IntroPage from './components/IntroPage';
import QuestionPage from './components/QuestionPage';
import ResultsPage from './components/ResultsPage';
import allQuestions from './data/questions';

function App() {
  const [currentPage, setCurrentPage] = useState('intro');
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  // Number of questions to show in each test
  const NUM_QUESTIONS = 10;

  // Function to randomly select questions
  const selectRandomQuestions = () => {
    // Create a copy of the questions array
    const questionsCopy = [...allQuestions];

    // Get current timestamp to ensure different randomization each time
    const timestamp = new Date().getTime();

    // Shuffle the array using Fisher-Yates algorithm for better randomization
    for (let i = questionsCopy.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at i and j
      [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
    }

    // Take the first NUM_QUESTIONS questions
    const selectedQuestions = questionsCopy.slice(0, NUM_QUESTIONS);

    // Renumber the questions from 1 to NUM_QUESTIONS
    const renumberedQuestions = selectedQuestions.map((q, index) => ({
      ...q,
      id: index + 1,
      // Add a unique key to ensure React treats it as a new question
      uniqueKey: `${q.id}-${timestamp}-${Math.random()}`
    }));

    console.log('Selected questions:', renumberedQuestions.map(q => q.question));

    return renumberedQuestions;
  };

  // Simulate loading for a premium feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleStartTest = () => {
    // Select random questions when starting the test
    const randomQuestions = selectRandomQuestions();
    setQuestions(randomQuestions);
    setCurrentPage('questions');
  };

  const handleCompleteTest = (testScore) => {
    setScore(testScore);
    setCurrentPage('results');
  };

  const handleRestart = () => {
    // Generate new random questions when restarting
    const newRandomQuestions = selectRandomQuestions();
    setQuestions(newRandomQuestions);
    setScore(0); // Reset score
    setCurrentPage('questions');
  };

  if (isLoading) {
    return (
      <div className="App loading-screen">
        <div className="loader">
          <div className="loader-brain">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10C30 10 15 25 15 45C15 65 30 80 50 80C70 80 85 65 85 45C85 25 70 10 50 10ZM50 70C35 70 25 60 25 45C25 30 35 20 50 20C65 20 75 30 75 45C75 60 65 70 50 70Z" fill="#a29bfe" />
              <path d="M50 30C45 30 40 35 40 40C40 45 45 50 50 50C55 50 60 45 60 40C60 35 55 30 50 30Z" fill="#6c5ce7" />
              <path d="M30 45C30 40 35 35 40 35M70 45C70 40 65 35 60 35M40 55C35 55 30 50 30 45M60 55C65 55 70 50 70 45M40 55C40 60 45 65 50 65C55 65 60 60 60 55" stroke="#6c5ce7" strokeWidth="2" />
            </svg>
          </div>
          <p>Initializing Cognitive Assessment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Decorative floating shapes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>

      {currentPage === 'intro' && (
        <IntroPage onStartTest={handleStartTest} />
      )}

      {currentPage === 'questions' && (
        <QuestionPage
          questions={questions}
          onComplete={handleCompleteTest}
          totalQuestions={NUM_QUESTIONS}
        />
      )}

      {currentPage === 'results' && (
        <ResultsPage
          score={score}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
