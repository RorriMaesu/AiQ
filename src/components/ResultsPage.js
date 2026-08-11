import React, { useState } from 'react';
import '../styles/ResultsPage.css';

const CATEGORY_NAMES = {
  pattern: 'Patterns',
  verbal: 'Words',
  spatial: 'Space',
  logical: 'Logic',
};

const getVerdict = (result) => {
  const accuracy = result.totalQuestions ? result.correctCount / result.totalQuestions : 0;

  if (result.timedOutCount >= Math.ceil(result.totalQuestions / 2)) {
    return {
      title: 'Outpaced by a rectangle',
      copy: 'The timer submitted a more complete answer sheet than you did. It has no brain, which makes this professionally awkward.',
    };
  }
  if (accuracy >= 0.75) {
    return {
      title: 'Disturbingly adequate',
      copy: 'You did well enough that the algorithm has begun checking for outside assistance and suspicious bursts of competence.',
    };
  }
  if (accuracy >= 0.5) {
    return {
      title: 'Almost professionally awake',
      copy: 'Several answers were correct on purpose. The review board has described this as “a promising administrative error.”',
    };
  }
  if (accuracy >= 0.25) {
    return {
      title: 'Decorative reasoning detected',
      copy: 'Your logic arrived wearing a tie, carrying no identification, and hoping nobody would ask a follow-up question.',
    };
  }
  return {
    title: 'Confidence without documentation',
    copy: 'You answered like someone who had somewhere else to be and no particular need to be correct when you got there.',
  };
};

const ResultsPage = ({ result, onRestart, onHome }) => {
  const [shareLabel, setShareLabel] = useState('Share the character assassination');
  const verdict = getVerdict(result);
  const missedQuestions = result.review.filter(({ isCorrect }) => !isCorrect);

  const shareResult = async () => {
    const text = `AIQ graded my brain with the confidence of a horoscope wearing a lab coat. ${result.correctCount}/${result.totalQuestions} answers were correct. Its verdict: ${verdict.title}.`;
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
        <span className="nav-pill">Certification status: try again</span>
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
          <p className="eyebrow">Your suspiciously official verdict</p>
          <h1 id="result-title">{verdict.title}</h1>
          <p>{verdict.copy}</p>
          <div className="raw-score">
            <strong>{result.correctCount} of {result.totalQuestions}</strong>
            <span>actually correct · {result.timedOutCount} timed out</span>
          </div>
        </div>
      </section>

      <section className="truth-reveal" aria-labelledby="truth-title">
        <div className="truth-heading">
          <p className="eyebrow">The part the score cannot see</p>
          <h2 id="truth-title">A number is not a mind.</h2>
          <p>
            AIQ watched twenty answers produced under a countdown. It did not see how you learn,
            what you create, whom you understand, how you adapt, or what you do when the rules stop being tidy.
            The score is precise enough to feel true and shallow enough to miss almost everything that matters.
          </p>
        </div>

        <div className="truth-grid">
          <article>
            <span>01</span>
            <h3>Speed is a condition</h3>
            <p>A clock rewards quick recall, calm under artificial pressure, and the confidence to guess. Depth may arrive later.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Familiarity hides inside “aptitude”</h3>
            <p>People practiced in these puzzle formats look naturally gifted at the exact formats they practiced. Astonishing.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Context moves the score</h3>
            <p>Stress, language, sleep, culture, disability, education, and motivation all shape what appears on the screen.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Intelligence exceeds the test</h3>
            <p>Creativity, judgment, empathy, practical skill, curiosity, collaboration, and wisdom do not fit into four buttons.</p>
          </article>
        </div>

        <div className="lesson-statement">
          <p className="eyebrow">The uncomfortable lesson</p>
          <h3>IQ-style tests are good at measuring performance on IQ-style tests.</h3>
          <p>
            That narrow fact becomes worthless when it is inflated into a verdict on a whole human being.
            Intelligence is a living capacity: to learn from error, create what did not exist, understand another
            person’s pain, adapt when conditions change, notice what the test writer never imagined, and decide
            what is worth doing in the first place.
          </p>
          <p>
            A timer can measure speed. A puzzle can measure familiarity with a puzzle. Neither can measure the mind
            that continues beyond the answer. The deepest mistake is not choosing the wrong option—it is mistaking
            the model for the person it failed to capture. You are not the number. You are everything the number
            had no language to ask.
          </p>
        </div>
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
          <p className="eyebrow">The machine requests a rematch</p>
          <h2>Apparently it thinks the problem was you.</h2>
        </div>
        <div className="action-buttons">
          <button className="primary-button" type="button" onClick={onRestart}>
            Prove the smug little machine wrong <span aria-hidden="true">↻</span>
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
