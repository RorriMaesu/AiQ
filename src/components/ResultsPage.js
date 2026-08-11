import React, { useState } from 'react';
import '../styles/ResultsPage.css';

const CATEGORY_NAMES = {
  pattern: 'Patterns',
  verbal: 'Words',
  spatial: 'Space',
  logical: 'Logic',
};

const getVerdict = () => ({
  title: 'Denied by design',
  copy: 'The machine has spoken with the confidence of a printer error. You did not pass. Neither can anyone else.',
});

const ResultsPage = ({ result, onRestart, onHome }) => {
  const [shareLabel, setShareLabel] = useState('Share this nonsense');
  const verdict = getVerdict();
  const missedQuestions = result.review.filter(({ isCorrect }) => !isCorrect);

  const shareResult = async () => {
    const text = `I failed AIQ, an intelligence test that caps every score below its own pass mark. ${result.correctCount}/${result.totalQuestions} answers were correct; the conclusion was still nonsense.`;
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
        <span className="nav-pill">Certification status: denied</span>
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
          <p className="eyebrow">Your official-looking verdict</p>
          <h1 id="result-title">{verdict.title}</h1>
          <p>{verdict.copy}</p>
          <div className="raw-score">
            <strong>{result.correctCount} of {result.totalQuestions}</strong>
            <span>actually correct · {result.timedOutCount} timed out</span>
          </div>
          <p className="score-rule">Pass mark: {result.passMark} · Highest score AIQ allows: {result.scoreCeiling}</p>
        </div>
      </section>

      <section className="truth-reveal" aria-labelledby="truth-title">
        <div className="truth-heading">
          <p className="eyebrow">The reveal</p>
          <h2 id="truth-title">You could not pass. Nobody can.</h2>
          <p>
            AIQ caps every displayed score at {result.scoreCeiling}, then declares that passing starts at {result.passMark}.
            Even a perfect answer sheet fails. The timer, charts, categories, and precise-looking number
            were presentation—not proof.
          </p>
        </div>

        <div className="rigged-equation" aria-label={`Maximum score ${result.scoreCeiling}, pass mark ${result.passMark}`}>
          <span>Maximum awarded</span>
          <strong>{result.scoreCeiling}</strong>
          <i aria-hidden="true">&lt;</i>
          <strong>{result.passMark}</strong>
          <span>Pass mark</span>
        </div>

        <div className="truth-grid">
          <article>
            <span>01</span>
            <h3>Pressure is not intelligence</h3>
            <p>An eight-second clock rewards speed, calm under artificial stress, and willingness to guess.</p>
          </article>
          <article>
            <span>02</span>
            <h3>The math was arbitrary</h3>
            <p>A polished score can still be engineered to produce whatever conclusion its author wants.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Puzzles are a narrow slice</h3>
            <p>Familiarity with patterns and analogies is not creativity, judgment, wisdom, or practical skill.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Confidence is not validity</h3>
            <p>Official typography and animated charts can make weak measurements feel scientifically inevitable.</p>
          </article>
        </div>

        <p className="truth-bottomline">
          A timed online IQ-style quiz can describe how you performed on those questions under those conditions.
          It cannot reliably reduce the full range of human intelligence—or your worth—to one number.
        </p>
      </section>

      <section className="category-results" aria-labelledby="category-results-title">
        <div className="section-heading results-heading">
          <p className="eyebrow">Real answers, fake conclusion</p>
          <h2 id="category-results-title">What you actually solved</h2>
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
          <p className="eyebrow">The answer sheet</p>
          <h2 id="review-title">{missedQuestions.length ? 'The ones that wriggled away' : 'A spotless little answer sheet'}</h2>
          <p>
            {missedQuestions.length
              ? 'Open any question for the answer. A timeout means the clock, not your mind, made the choice.'
              : 'You solved every puzzle and still failed certification. That is exactly the point.'}
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
                  {item.timedOut && <p><strong>Your answer:</strong> The timer submitted a blank.</p>}
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
            Try {result.totalQuestions} different questions <span aria-hidden="true">↻</span>
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
