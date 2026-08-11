import React, { useState } from 'react';
import '../styles/ResultsPage.css';

const CATEGORY_NAMES = {
  pattern: 'Patterns',
  verbal: 'Words',
  spatial: 'Space',
  logical: 'Logic',
};

const getVerdict = (score) => {
  if (score >= 90) return { title: 'Suspiciously sparkly', copy: 'Either your brain is very awake or the puzzles have started respecting you.' };
  if (score >= 75) return { title: 'Clever cookie energy', copy: 'Crisp reasoning, sturdy instincts, and only a tasteful amount of guessing.' };
  if (score >= 50) return { title: 'Respectably wrinkled', copy: 'A solid brain day. Some gears purred; several made an exciting clunk.' };
  if (score >= 25) return { title: 'Chaotic neutral', copy: 'The ideas were present. Whether they were supervised remains unclear.' };
  return { title: 'Boldly experimental', copy: 'You refused to be constrained by conventional concepts such as “the answer.”' };
};

const ResultsPage = ({ result, onRestart, onHome }) => {
  const [shareLabel, setShareLabel] = useState('Share this nonsense');
  const verdict = getVerdict(result.score);
  const missedQuestions = result.review.filter(({ isCorrect }) => !isCorrect);

  const shareResult = async () => {
    const text = `I scored ${result.correctCount}/${result.totalQuestions} on AIQ, the deeply unofficial intelligence test. My brain weather: ${verdict.title}.`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'My AIQ result', text, url: window.location.href });
        setShareLabel('Shared! The world knows.');
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${text} ${window.location.href}`);
        setShareLabel('Result copied!');
      }
    } catch {
      setShareLabel('Sharing escaped. Try again?');
    }
  };

  return (
    <main className="results-page">
      <header className="results-nav">
        <button className="brand brand-button" type="button" onClick={onHome}>
          <span className="brand-mark" aria-hidden="true">A?</span>
          <span>AIQ</span>
        </button>
        <span className="nav-pill">Results: extremely unofficial</span>
      </header>

      <section className="result-hero" aria-labelledby="result-title">
        <div className="score-orbit" style={{ '--score-angle': `${result.score * 3.6}deg` }}>
          <div className="score-core">
            <strong>{result.score}</strong>
            <span>out of 100-ish</span>
          </div>
          <span className="orbit-star orbit-star-one" aria-hidden="true">✦</span>
          <span className="orbit-star orbit-star-two" aria-hidden="true">+</span>
        </div>

        <div className="result-copy">
          <p className="eyebrow">Your brain weather is</p>
          <h1 id="result-title">{verdict.title}</h1>
          <p>{verdict.copy}</p>
          <div className="raw-score">
            <strong>{result.correctCount} of {result.totalQuestions}</strong>
            <span>answers landed on their feet</span>
          </div>
        </div>
      </section>

      <section className="category-results" aria-labelledby="category-results-title">
        <div className="section-heading results-heading">
          <p className="eyebrow">The tiny data dashboard</p>
          <h2 id="category-results-title">Where the neurons showed up</h2>
        </div>
        <div className="result-grid">
          {result.categoryResults.map((category) => {
            const percentage = category.total ? (category.correct / category.total) * 100 : 0;
            return (
              <article className={`result-card result-${category.type}`} key={category.type}>
                <div className="result-card-topline">
                  <h3>{CATEGORY_NAMES[category.type]}</h3>
                  <strong>{category.correct}/{category.total}</strong>
                </div>
                <div className="mini-track" aria-hidden="true">
                  <span style={{ width: `${percentage}%` }} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="answer-review" aria-labelledby="review-title">
        <div>
          <p className="eyebrow">Receipts, respectfully</p>
          <h2 id="review-title">{missedQuestions.length ? 'The ones that wriggled away' : 'A spotless little answer sheet'}</h2>
          <p>
            {missedQuestions.length
              ? 'Open any question for the real answer and a short explanation.'
              : 'You got every question right. This is inconveniently impressive.'}
          </p>
        </div>

        {missedQuestions.length > 0 && (
          <div className="review-list">
            {missedQuestions.map((item) => (
              <details key={item.id}>
                <summary>
                  <span>{CATEGORY_NAMES[item.type]}</span>
                  {item.question}
                </summary>
                <div className="review-answer">
                  <p><strong>Correct answer:</strong> {item.correctAnswer}. {item.correctAnswerText}</p>
                  <p>{item.explanation}</p>
                </div>
              </details>
            ))}
          </div>
        )}
      </section>

      <section className="result-actions" aria-label="What next">
        <div>
          <p className="eyebrow">One more lap?</p>
          <h2>The vault has plenty you haven’t seen.</h2>
        </div>
        <div className="action-buttons">
          <button className="primary-button" type="button" onClick={onRestart}>
            Try 12 different questions <span aria-hidden="true">↻</span>
          </button>
          <button className="secondary-button" type="button" onClick={shareResult}>
            {shareLabel}
          </button>
        </div>
      </section>
    </main>
  );
};

export { getVerdict };
export default ResultsPage;
