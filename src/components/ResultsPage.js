import React, { useEffect, useState } from 'react';
import AssessmentBrand from './AssessmentBrand';
import '../styles/ResultsPage.css';

const CATEGORY_NAMES = {
  pattern: 'Pattern recognition',
  verbal: 'Verbal reasoning',
  spatial: 'Spatial analysis',
  logical: 'Logical deduction',
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
  const [isExposed, setIsExposed] = useState(false);
  const verdict = getVerdict(result);
  const missedQuestions = result.review.filter(({ isCorrect }) => !isCorrect);

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setIsExposed(true), 2600);
    return () => window.clearTimeout(revealTimer);
  }, []);

  const shareResult = async () => {
    const text = `AIQ gave me ${result.score}/100, then admitted it manipulated the score. The useful result was the lesson: a number is not a mind.`;
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
    <main className={`results-page${isExposed ? ' results-page--exposed' : ''}`}>
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

        <div className="comparison-axis" aria-label={`Reported ${result.comparison.percentile}th percentile`}>
          <div className="axis-labels"><span>Lower</span><span>Reference average {result.comparison.averageScore}</span><span>Higher</span></div>
          <div className="axis-rule">
            <i className="score-marker" style={{ left: `${result.comparison.percentile}%` }}><b>You</b></i>
            <i className="average-marker" style={{ left: `${result.comparison.averageScore}%` }}><b>Average</b></i>
          </div>
          <div className="axis-reading">
            <strong>{result.comparison.percentile}th percentile</strong>
            <span>{result.comparison.higherPercentage}% of comparison group reported higher</span>
          </div>
        </div>

        <button className="expose-control" type="button" onClick={() => setIsExposed(true)}>
          <span>{isExposed ? 'Methodology exposed' : 'Inspect score methodology'}</span>
          <i aria-hidden="true">{isExposed ? '↓' : '＋'}</i>
        </button>
      </section>

      <section className="system-rupture" aria-hidden="true">
        <span>OBJECTIVE</span><span>VERIFIED</span><span>PRECISE</span><span>NEUTRAL</span>
      </section>

      <section className="exposure-stage" aria-labelledby="disclosure-title">
        <div className="exposure-register"><span>System disclosure</span><span>The instrument was the trick</span></div>
        <div className="exposure-headline">
          <p className="document-label">What just happened</p>
          <h2 id="disclosure-title">The score above<br />was manipulated.</h2>
        </div>
        <div className="exposure-evidence">
          <p>
            AIQ deliberately reduced your actual performance and generated a fictional peer comparison.
            It wrapped both in precise numbers, formal language, and an authoritative interface so the result
            would feel measured instead of manufactured.
          </p>
          <dl>
            <div><dt>Displayed score</dt><dd><s>{result.score}%</s></dd></div>
            <div><dt>Actual raw score</dt><dd>{result.rawScore}%</dd></div>
            <div><dt>Actual answers</dt><dd>{result.correctCount} of {result.totalQuestions} correct</dd></div>
            <div><dt>Timed out</dt><dd>{result.timedOutCount}</dd></div>
          </dl>
        </div>
        <div className="manufactured-labels" aria-label="Manufactured result elements">
          <span>Reduced score</span><span>Invented average</span><span>Fabricated percentile</span><span>False confidence</span>
        </div>
      </section>

      <section className="lesson-stage" aria-labelledby="truth-title">
        <div className="lesson-register"><span>After the number</span><span>Read slowly. No timer now.</span></div>
        <div className="lesson-opening">
          <p className="document-label">What the score could not see</p>
          <h2 id="truth-title">A number<br />is not a mind.</h2>
          <p>
            The assessment observed a handful of answers produced under a countdown. It did not observe how
            you learn, what you create, whom you understand, how you adapt, or what you do when the rules stop
            being tidy. The result looked exact while ignoring nearly everything that gives intelligence meaning.
          </p>
        </div>

        <ol className="truth-list">
          <li><span>01</span><div><h3>Speed is a condition</h3><p>A clock rewards quick recall, calm under artificial pressure, and confidence when guessing. Depth may arrive later.</p></div></li>
          <li><span>02</span><div><h3>Familiarity resembles aptitude</h3><p>Practice with a puzzle format improves performance on that format. The number rarely explains that history.</p></div></li>
          <li><span>03</span><div><h3>Context moves the result</h3><p>Stress, language, sleep, culture, disability, education, and motivation all shape what appears on the screen.</p></div></li>
          <li><span>04</span><div><h3>The instrument is narrow</h3><p>Creativity, judgment, empathy, practical skill, curiosity, collaboration, and wisdom do not fit into four buttons.</p></div></li>
        </ol>

        <blockquote className="lesson-statement">
          <h3>IQ-style tests are good at measuring performance on IQ-style tests.</h3>
          <footer>
            Intelligence is also learning from error, creating what did not exist, understanding another person,
            adapting when conditions change, and noticing what the test writer never imagined.
          </footer>
        </blockquote>

        <div className="final-thesis">
          <span>The deepest mistake is not choosing the wrong option.</span>
          <strong>You are not the number.<br />You are everything the number had no language to ask.</strong>
        </div>
      </section>

      <section className="report-details" aria-label="Detailed assessment report">
        <div className="details-register"><span>Supporting record</span><span>For the curious and professionally unconvinced</span></div>
        <details className="report-drawer">
          <summary><span>01</span><strong>Manipulated scores by domain</strong><small>Open record</small></summary>
          <div className="domain-table" role="table" aria-label="Domain score report">
            {result.categoryResults.map((category) => (
              <div className="domain-row" role="row" key={category.type}>
                <span role="cell">{CATEGORY_NAMES[category.type]}</span>
                <div role="cell" className="domain-rule" aria-hidden="true"><i style={{ width: `${category.reportedScore}%` }} /></div>
                <strong role="cell">{category.reportedScore} / 100</strong>
              </div>
            ))}
          </div>
        </details>
        <details className="report-drawer">
          <summary><span>02</span><strong>{missedQuestions.length ? 'Items to review' : 'Complete answer record'}</strong><small>Open record</small></summary>
          {missedQuestions.length ? (
            <div className="review-list">
              {missedQuestions.map((item, index) => (
                <details key={item.id}>
                  <summary><span>{String(index + 1).padStart(2, '0')}</span>{item.question}</summary>
                  <div className="review-answer">
                    {item.timedOut && <p><strong>Your answer:</strong> No response recorded.</p>}
                    <p><strong>Expected answer:</strong> {item.correctAnswer}. {item.correctAnswerText}</p>
                    <p>{item.explanation}</p>
                  </div>
                </details>
              ))}
            </div>
          ) : <p className="complete-record">Every response was correct. The reported score was still reduced—which is exactly the lesson.</p>}
        </details>
      </section>

      <section className="result-actions">
        <div><p className="document-label">Try the instrument again</p><h2>Same mind.<br />Different number.</h2></div>
        <div className="action-buttons">
          <button className="primary-button" type="button" onClick={onRestart}>Take another assessment <span>→</span></button>
          <button className="secondary-button" type="button" onClick={shareResult}>{shareLabel} <span>↗</span></button>
          <button className="text-button" type="button" onClick={onHome}>Return to introduction</button>
        </div>
      </section>
    </main>
  );
};

export { getVerdict };
export default ResultsPage;
