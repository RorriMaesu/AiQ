import React, { useState } from 'react';
import AssessmentBrand from './AssessmentBrand';
import '../styles/ResultsPage.css';

const formatOrdinal = (value) => {
  const remainder = value % 100;
  if (remainder >= 11 && remainder <= 13) return `${value}th`;
  if (value % 10 === 1) return `${value}st`;
  if (value % 10 === 2) return `${value}nd`;
  if (value % 10 === 3) return `${value}rd`;
  return `${value}th`;
};

const getVerdict = (result) => {
  const accuracy = result.totalQuestions ? result.correctCount / result.totalQuestions : 0;

  if (result.timedOutCount >= Math.ceil(result.totalQuestions / 2)) {
    return { title: 'Outpaced by a rectangle', copy: 'The timer submitted a more complete answer sheet than you did. It has no brain, which makes this professionally awkward.' };
  }
  if (accuracy >= 0.75) {
    return { title: 'Disturbingly adequate', copy: 'You did well enough that the algorithm has begun checking for outside assistance and suspicious bursts of competence.' };
  }
  if (accuracy >= 0.5) {
    return { title: 'Almost professionally awake', copy: 'Several answers were correct on purpose. The review board has described this as “a promising administrative error.”' };
  }
  if (accuracy >= 0.25) {
    return { title: 'Decorative reasoning detected', copy: 'Your logic arrived wearing a tie, carrying no identification, and hoping nobody would ask a follow-up question.' };
  }
  return { title: 'Confidence without documentation', copy: 'You answered like someone who had somewhere else to be and no particular need to be correct when you got there.' };
};

const ResultsPage = ({ result, onRestart, onHome }) => {
  const [shareLabel, setShareLabel] = useState('Share result');
  const [isTruthRevealed, setIsTruthRevealed] = useState(false);
  const verdict = getVerdict(result);
  const percentileLabel = formatOrdinal(result.comparison.percentile);

  const revealTruth = () => {
    if (isTruthRevealed) return;
    setIsTruthRevealed(true);
  };

  const shareResult = async () => {
    const text = `I scored ${result.score}/100 on AIQ. Then the assessment asked a better question: can any number describe a whole mind?`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'My AIQ result', text, url: window.location.href });
        setShareLabel('Shared');
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${text} ${window.location.href}`);
        setShareLabel('Copied');
      }
    } catch {
      setShareLabel('Share unavailable');
    }
  };

  return (
    <main className={`results-page${isTruthRevealed ? ' results-page--truth' : ''}`}>
      <section className="verdict-stage" aria-labelledby="result-title">
        <div className="verdict-grid" aria-hidden="true" />
        <header className="results-header">
          <AssessmentBrand onClick={onHome} />
          <span>AIQ comparative classification · Complete</span>
          <span className="report-status"><i /> Report generated</span>
        </header>

        <div className="verdict-register">
          <span>Output / AIQ–04</span>
          <span>Reference group {result.comparison.sampleSize.toLocaleString()} completions</span>
          <span>Confidence 99.4%</span>
        </div>

        <div className="verdict-content">
          <div className="verdict-copy">
            <p className="document-label">Performance classification</p>
            <h1 id="result-title">{verdict.title}</h1>
            <p>{verdict.copy}</p>
          </div>

          <div className="reported-score" aria-label={`Reported score ${result.score} out of 100`}>
            <span>Reported score</span>
            <strong>{String(result.score).padStart(2, '0')}</strong>
            <small>/100</small>
          </div>
        </div>

        <div className="comparison-axis" aria-label={`Reported ${percentileLabel} percentile`}>
          <div className="axis-labels"><span>Lower</span><span>Reference average {result.comparison.averageScore}</span><span>Higher</span></div>
          <div className="axis-rule">
            <i className="score-marker" style={{ left: `${result.comparison.percentile}%` }}><b>You</b></i>
            <i className="average-marker" style={{ left: `${result.comparison.averageScore}%` }}><b>Average</b></i>
          </div>
          <div className="axis-reading">
            <strong>{percentileLabel} percentile</strong>
            <span>{result.comparison.higherPercentage}% of comparison group reported higher</span>
          </div>
        </div>

        <button
          className="expose-control"
          type="button"
          aria-expanded={isTruthRevealed}
          aria-controls="iq-truth"
          onClick={revealTruth}
        >
          <span>
            <small>{isTruthRevealed ? 'Continue below' : 'Before you accept the number'}</small>
            {isTruthRevealed ? 'The wider picture is open' : 'Reveal the truth about IQ tests'}
          </span>
          <i aria-hidden="true">{isTruthRevealed ? '↓' : '→'}</i>
        </button>
      </section>

      {isTruthRevealed && <div className="truth-content" id="iq-truth">
      <section className="lesson-stage" aria-labelledby="truth-title">
        <div className="lesson-register"><span>Beyond the score</span><span>A wider view of intelligence</span></div>
        <div className="lesson-opening">
          <p className="document-label">The limits of the instrument</p>
          <h2 id="truth-title">A snapshot.<br />Not a definition.</h2>
          <p>
            An IQ-style assessment can describe how someone performed on a narrow set of tasks, under particular
            conditions, at one moment in time. That can be information. It is not a complete account of a person’s
            intelligence, potential, judgment, creativity, or worth.
          </p>
        </div>

        <ol className="truth-list">
          <li><span>01</span><div><h3>It measures performance under conditions</h3><p>Time pressure, stress, sleep, health, attention, and confidence can all change the result without changing the mind behind it.</p></div></li>
          <li><span>02</span><div><h3>Practice can look like aptitude</h3><p>Familiarity with analogies, sequences, and test conventions improves performance. Scores rarely show who learned the format beforehand.</p></div></li>
          <li><span>03</span><div><h3>Context enters every answer</h3><p>Language, culture, education, disability, access, and opportunity shape what a test makes easy or difficult to demonstrate.</p></div></li>
          <li><span>04</span><div><h3>Important abilities remain outside the frame</h3><p>Creativity, empathy, practical judgment, persistence, curiosity, collaboration, and wisdom do not fit neatly into timed multiple choice.</p></div></li>
        </ol>

        <blockquote className="lesson-statement">
          <h3>A test can be consistent and still be incomplete.</h3>
          <footer>
            The problem begins when a limited measurement is treated as a final verdict—when a score becomes a
            label, a ceiling, or a substitute for understanding the person who produced it.
          </footer>
        </blockquote>

        <div className="final-thesis">
          <span>The score can describe an event. It cannot contain a life.</span>
          <strong>Intelligence is not a position on a scale.<br />It is the continuing capacity to learn, create, adapt, care, and notice what the scale was never built to see.</strong>
        </div>
      </section>

      <section className="result-actions">
        <div><p className="document-label">Keep the lesson, question the label</p><h2>Same mind.<br />Different moment.</h2></div>
        <div className="action-buttons">
          <button className="primary-button" type="button" onClick={onRestart}>Take another assessment <span>→</span></button>
          <button className="secondary-button" type="button" onClick={shareResult}>{shareLabel} <span>↗</span></button>
          <button className="text-button" type="button" onClick={onHome}>Return to introduction</button>
        </div>
      </section>
      </div>}
    </main>
  );
};

export { formatOrdinal, getVerdict };
export default ResultsPage;
