import React, { useState } from 'react';
import './App.css';
import IntroPage from './components/IntroPage';
import QuestionPage from './components/QuestionPage';
import ResultsPage from './components/ResultsPage';
import allQuestions from './data/questions';
import { selectQuestionSet, updateRecentQuestionIds } from './utils/questionSelection';

const QUESTION_COUNT = 12;
const RECENT_QUESTIONS_KEY = 'aiq-recent-question-ids';

const getRecentQuestionIds = () => {
  try {
    const storedIds = JSON.parse(window.localStorage.getItem(RECENT_QUESTIONS_KEY));
    return Array.isArray(storedIds) ? storedIds : [];
  } catch {
    return [];
  }
};

const rememberQuestionIds = (selectedQuestions) => {
  try {
    const recentIds = getRecentQuestionIds();
    const nextIds = updateRecentQuestionIds(
      recentIds,
      selectedQuestions.map(({ id }) => id),
      allQuestions.length,
      QUESTION_COUNT
    );
    window.localStorage.setItem(RECENT_QUESTIONS_KEY, JSON.stringify(nextIds));
  } catch {
    // The test still works when storage is unavailable or disabled.
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState('intro');
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState(null);

  const beginTest = () => {
    const selectedQuestions = selectQuestionSet(
      allQuestions,
      QUESTION_COUNT,
      getRecentQuestionIds()
    );

    rememberQuestionIds(selectedQuestions);
    setQuestions(selectedQuestions);
    setResult(null);
    setCurrentPage('questions');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const completeTest = (testResult) => {
    setResult(testResult);
    setCurrentPage('results');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="app-shell">
      <div className="ambient-orb ambient-orb-one" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-two" aria-hidden="true" />

      {currentPage === 'intro' && <IntroPage onStartTest={beginTest} />}

      {currentPage === 'questions' && (
        <QuestionPage questions={questions} onComplete={completeTest} />
      )}

      {currentPage === 'results' && result && (
        <ResultsPage
          result={result}
          onRestart={beginTest}
          onHome={() => setCurrentPage('intro')}
        />
      )}
    </div>
  );
}

export default App;
