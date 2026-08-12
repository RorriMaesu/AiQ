import React, { useState } from 'react';
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
  const [shareLabel, setShareLabel] = useState('Share result');
  const verdict = getVerdict(result);
  const missedQuestions = result.review.filter(({ isCorrect }) => !isCorrect);

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
    <main className="results-page">
      <header className="results-header">
        <AssessmentBrand onClick={onHome} />
        <span>Assessment report</span>
      </header>

      <section className="report-summary" aria-labelledby="result-title">
        <div className="report-heading">
          <p className="document-label">Assessment complete</p>
          <h1 id="result-title">{verdict.title}</h1>
          <p>{verdict.copy}</p>
        </div>

        <div className="score-summary" aria-label="Reported score">
          <span>Reported score</span>
          <strong>{result.score}<small>/100</small></strong>
          <p>{result.comparison.percentile}th percentile</p>
        </div>
      </section>

      <section className="report-section comparison-report" aria-labelledby="comparison-title">
        <div className="report-section-heading">
          <p className="document-label">Performance summary</p>
          <h2 id="comparison-title">Reported comparison</h2>
          <p>Reference information presented at the completion of this assessment.</p>
        </div>
        <dl className="report-table comparison-table">
          <div><dt>Your reported score</dt><dd>{result.score} / 100</dd></div>
          <div><dt>Reference average</dt><dd>{result.comparison.averageScore} / 100</dd></div>
          <div><dt>Reported percentile</dt><dd>{result.comparison.percentile}th</dd></div>
          <div><dt>Reported comparison group</dt><dd>{result.comparison.sampleSize.toLocaleString()} completions</dd></div>
          <div><dt>Reported higher-scoring group</dt><dd>{result.comparison.higherPercentage}%</dd></div>
        </dl>
      </section>

      <section className="disclosure" aria-labelledby="disclosure-title">
        <div className="disclosure-marker">Important disclosure</div>
        <div className="disclosure-copy">
          <p className="document-label">What just happened</p>
          <h2 id="disclosure-title">The score above was manipulated.</h2>
          <p className="disclosure-lede">
            AIQ deliberately reduced your actual performance and generated a fictional peer comparison.
            It presented both with formal language, precise numbers, and an official-looking report so they
            would feel authoritative.
          </p>
          <dl className="actual-result">
            <div><dt>Your actual result</dt><dd>{result.correctCount} of {result.totalQuestions} correct</dd></div>
            <div><dt>Your raw score</dt><dd>{result.rawScore}%</dd></div>
            <div><dt>Timed-out items</dt><dd>{result.timedOutCount}</dd></div>
          </dl>
          <p>
            If the lower number felt discouraging—or the invented average made you doubt yourself—that reaction
            is the point. Precision is not the same as truth, and polished presentation is not evidence.
          </p>
        </div>
      </section>

      <section className="truth-reveal" aria-labelledby="truth-title">
        <div className="truth-heading">
          <p className="document-label">What the score could not see</p>
          <h2 id="truth-title">A number is not a mind.</h2>
          <p>
            This assessment observed twenty answers produced under a countdown. It did not observe how you learn,
            what you create, whom you understand, how you adapt, or what you do when the rules stop being tidy.
            The score looked exact while ignoring nearly everything that gives intelligence meaning.
          </p>
        </div>

        <ol className="truth-list">
          <li>
            <span>01</span>
            <div><h3>Speed is a condition</h3><p>A clock rewards quick recall, calm under artificial pressure, and confidence when guessing. Depth may arrive later.</p></div>
          </li>
          <li>
            <span>02</span>
            <div><h3>Familiarity can resemble aptitude</h3><p>Practice with a puzzle format improves performance on that format. The score rarely explains that history.</p></div>
          </li>
          <li>
            <span>03</span>
            <div><h3>Context moves the result</h3><p>Stress, language, sleep, culture, disability, education, and motivation all shape what appears on the screen.</p></div>
          </li>
          <li>
            <span>04</span>
            <div><h3>Intelligence exceeds the instrument</h3><p>Creativity, judgment, empathy, practical skill, curiosity, collaboration, and wisdom do not fit into four buttons.</p></div>
          </li>
        </ol>

        <blockquote className="lesson-statement">
          <h3>IQ-style tests are good at measuring performance on IQ-style tests.</h3>
          <p>
            Intelligence is also the capacity to learn from error, create what did not exist, understand another
            person’s pain, adapt when conditions change, and notice what the test writer never imagined.
          </p>
          <footer>
            The deepest mistake is not choosing the wrong option. It is mistaking the model for the person it failed
            to capture. You are not the number. You are everything the number had no language to ask.
          </footer>
        </blockquote>
      </section>

      <section className="report-section domain-report" aria-labelledby="domain-results-title">
        <div className="report-section-heading">
          <p className="document-label">Domain detail</p>
          <h2 id="domain-results-title">Reported scores by domain</h2>
          <p>These values were reduced using the same mechanism as the overall reported score.</p>
        </div>
        <div className="domain-table" role="table" aria-label="Domain score report">
          {result.categoryResults.map((category) => (
            <div className="domain-row" role="row" key={category.type}>
              <span role="cell">{CATEGORY_NAMES[category.type]}</span>
              <div role="cell" className="domain-rule" aria-hidden="true"><i style={{ width: `${category.reportedScore}%` }} /></div>
              <strong role="cell">{category.reportedScore} / 100</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="answer-review" aria-labelledby="review-title">
        <div className="report-section-heading">
          <p className="document-label">Answer review</p>
          <h2 id="review-title">{missedQuestions.length ? 'Items to review' : 'Complete answer record'}</h2>
          <p>
            {missedQuestions.length
              ? 'Open an item to see the expected response. A timeout records no answer.'
              : 'Every response was correct. The reported score was still reduced—which is exactly the lesson.'}
          </p>
        </div>

        {missedQuestions.length > 0 && (
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
        )}
      </section>

      <section className="result-actions" aria-label="Assessment actions">
        <div>
          <p className="document-label">What next</p>
          <h2>Take another question set or share the lesson.</h2>
        </div>
        <div className="action-buttons">
          <button className="primary-button" type="button" onClick={onRestart}>Take another assessment</button>
          <button className="secondary-button" type="button" onClick={shareResult}>{shareLabel}</button>
          <button className="text-button" type="button" onClick={onHome}>Return to introduction</button>
        </div>
      </section>
    </main>
  );
};

export { getVerdict };
export default ResultsPage;
