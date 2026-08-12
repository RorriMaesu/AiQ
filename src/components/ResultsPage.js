import React, { useEffect, useRef, useState } from 'react';
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

const getVerdictSize = (title) => {
  const letterCount = title.replace(/\s/g, '').length;
  if (letterCount >= 28) return 'long';
  if (letterCount >= 23) return 'medium';
  return 'standard';
};

const ResultsPage = ({ result, onRestart, onHome }) => {
  const [shareLabel, setShareLabel] = useState('Share result');
  const [isTruthRevealed, setIsTruthRevealed] = useState(false);
  const [isConfessionRevealed, setIsConfessionRevealed] = useState(false);
  const truthRef = useRef(null);
  const confessionRef = useRef(null);
  const verdict = getVerdict(result);
  const verdictSize = getVerdictSize(verdict.title);
  const percentileLabel = formatOrdinal(result.comparison.percentile);

  const revealTruth = () => {
    if (isTruthRevealed) return;
    setIsTruthRevealed(true);
  };

  useEffect(() => {
    if (!isTruthRevealed || !truthRef.current) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    truthRef.current.scrollIntoView?.({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }, [isTruthRevealed]);

  useEffect(() => {
    if (!isConfessionRevealed || !confessionRef.current) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    confessionRef.current.scrollIntoView?.({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }, [isConfessionRevealed]);

  const shareResult = async () => {
    const text = `I scored ${result.score}/100 on AiQ. Then the assessment asked a better question: can any number describe a whole mind?`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'My AiQ result', text, url: window.location.href });
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
          <span>AiQ comparative classification · Complete</span>
          <span className="report-status"><i /> Report generated</span>
        </header>

        <div className="verdict-register">
          <span>Output / AiQ–04</span>
          <span>Reference group {result.comparison.sampleSize.toLocaleString()} completions</span>
          <span>Confidence 99.4%</span>
        </div>

        <div className={`verdict-content verdict-content--${verdictSize}`}>
          <div className={`verdict-copy verdict-copy--${verdictSize}`}>
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

      {isTruthRevealed && <div className="truth-content" id="iq-truth" ref={truthRef}>
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

      <section className={`final-reveal${isConfessionRevealed ? ' final-reveal--open' : ''}`}>
        <button
          className="final-reveal-control"
          type="button"
          aria-expanded={isConfessionRevealed}
          aria-controls="final-confession"
          onClick={() => setIsConfessionRevealed(true)}
        >
          <span><small>One last thing</small>{isConfessionRevealed ? 'The books are open' : 'Fine. Show me what else you lied about.'}</span>
          <i aria-hidden="true">{isConfessionRevealed ? '↓' : '→'}</i>
        </button>

        {isConfessionRevealed && (
          <div
            className="confession-panel"
            id="final-confession"
            ref={confessionRef}
            aria-labelledby="confession-title"
          >
            <section className="confession-disclosure">
              <div className="confession-register"><span>Final disclosure</span><span>Credibility audit / Failed spectacularly</span></div>

              <div className="confession-intro">
                <div>
                  <p className="document-label">All right. You caught us.</p>
                  <h2 id="confession-title">Fine.<br />We cheated.</h2>
                </div>
                <p className="confession-summary">
                  AiQ deliberately pushed your displayed score downward. The percentile, comparison group,
                  average, and 99.4% confidence figure were invented to make the result feel authoritative.
                  None of them was a valid measure of your intelligence.
                </p>
              </div>

              <div className="score-correction" aria-label="Actual assessment record">
                <div className="corrected-score corrected-score--reported">
                  <span>Score AiQ reported</span>
                  <strong>{result.score}<small>/100</small></strong>
                  <p>Designed to feel discouraging.</p>
                </div>
                <div className="correction-arrow" aria-hidden="true"><span>Actually</span><b>→</b></div>
                <div className="corrected-score corrected-score--actual">
                  <span>Your raw puzzle score</span>
                  <strong>{result.rawScore}<small>/100</small></strong>
                  <p>Based on the answers you got right.</p>
                </div>
              </div>

              <dl className="confession-facts">
                <div><dt>Answers correct</dt><dd>{result.correctCount} of {result.totalQuestions}</dd></div>
                <div><dt>Peer comparison</dt><dd>Completely made up</dd></div>
              </dl>
            </section>

            <section className="confession-lesson" aria-labelledby="confession-lesson-title">
              <div className="confession-lesson-opening">
                <div>
                  <p className="document-label">The score was fake. The lesson is not.</p>
                  <h3 id="confession-lesson-title">A confident number can still be nonsense.</h3>
                </div>
                <p>
                  An online test can look official, produce precise numbers, and still be bogus. Presentation
                  can create confidence; it cannot create validity. Before trusting a result, look past the
                  polish and ask how the measurement earned its authority.
                </p>
              </div>

              <ul className="credibility-checks" aria-label="Warning signs in online assessments">
                <li><span>01</span><div><strong>Who designed it?</strong><p>Expertise should be identifiable, not implied by a logo and a serious typeface.</p></div></li>
                <li><span>02</span><div><strong>What does it measure?</strong><p>A narrow puzzle score should never be presented as a complete account of intelligence.</p></div></li>
                <li><span>03</span><div><strong>How was it validated?</strong><p>Precise percentiles mean nothing when the sample, method, and evidence are missing.</p></div></li>
                <li><span>04</span><div><strong>What does it leave out?</strong><p>Creativity, judgment, persistence, context, and humanity do not fit inside one number.</p></div></li>
              </ul>

              <blockquote className="confession-takeaway">
                <p>A polished interface can make a bad number look official. It cannot make the number valid.</p>
                <footer>Question the method before you believe the measurement.</footer>
              </blockquote>

              <div className="confession-actions">
                <div><span>Still curious?</span><strong>Try again. Trust yourself more than the scoreboard.</strong></div>
                <div>
                  <button className="primary-button" type="button" onClick={onRestart}>Take another assessment <span>→</span></button>
                  <button className="text-button" type="button" onClick={onHome}>Return to introduction</button>
                </div>
              </div>
            </section>
          </div>
        )}
      </section>
      </div>}
    </main>
  );
};

export { formatOrdinal, getVerdict, getVerdictSize };
export default ResultsPage;
