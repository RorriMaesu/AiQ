import React from 'react';
import '../styles/IntroPage.css';

const domains = [
  {
    index: '01',
    title: 'Pattern Recognition',
    copy: 'Identify numerical, symbolic, and visual relationships across structured sequences.',
  },
  {
    index: '02',
    title: 'Verbal Reasoning',
    copy: 'Evaluate analogies, classifications, vocabulary, and semantic relationships.',
  },
  {
    index: '03',
    title: 'Spatial Analysis',
    copy: 'Interpret rotation, orientation, symmetry, and relationships between forms.',
  },
  {
    index: '04',
    title: 'Logical Deduction',
    copy: 'Apply conditional reasoning, inference, and constraints to reach a conclusion.',
  },
];

const matrixShapes = [
  'circle',
  'triangle',
  'square',
  'triangle',
  'square',
  'circle',
  'square',
  'circle',
  'triangle',
];

const processSteps = [
  {
    index: '01',
    title: 'Review the item',
    copy: 'Read each prompt carefully and identify the relationship being tested.',
  },
  {
    index: '02',
    title: 'Select one response',
    copy: 'Choose the best available answer from the options provided.',
  },
  {
    index: '03',
    title: 'Continue before time expires',
    copy: 'Each item advances automatically when the response window closes.',
  },
];

const IntroPage = ({ onStartTest }) => (
  <main className="intro-page">
    <nav className="site-nav" aria-label="AIQ Assessment Center">
      <a className="brand" href="#top" aria-label="AIQ Assessment Center home">
        <span className="brand-mark" aria-hidden="true">IQ</span>
        <span className="brand-copy">
          <strong>AIQ</strong>
          <small>Assessment Center</small>
        </span>
      </a>
      <div className="nav-actions">
        <span className="nav-pill"><i aria-hidden="true" /> Assessment Center</span>
        <button className="nav-start-button" type="button" onClick={onStartTest}>
          Begin
        </button>
      </div>
    </nav>

    <section className="intro-hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">AIQ Assessment Series <span>·</span> Form A</p>
        <h1>Cognitive Reasoning Assessment</h1>
        <p className="hero-lede">
          A timed evaluation of pattern recognition, verbal reasoning, spatial analysis, and
          logical deduction. Complete each item independently and select the best available response.
        </p>

        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={onStartTest}>
            Begin assessment
            <span aria-hidden="true">→</span>
          </button>
          <span className="time-note">Approximately 3 minutes · No registration · Immediate results</span>
        </div>

        <div className="hero-facts" aria-label="Assessment summary">
          <span><strong>20</strong> scored items</span>
          <span><strong>08</strong> seconds per item</span>
          <span><strong>04</strong> reasoning domains</span>
        </div>
      </div>

      <aside className="assessment-overview" aria-labelledby="overview-title">
        <header className="overview-header">
          <div>
            <p>Assessment overview</p>
            <h2 id="overview-title">Form A</h2>
          </div>
          <span className="ready-status"><i aria-hidden="true" /> Ready</span>
        </header>

        <div className="matrix-panel" aria-hidden="true">
          <div className="matrix-grid">
            {matrixShapes.map((shape, index) => (
              <span className="matrix-cell" key={`${shape}-${index}`}>
                <i className={`matrix-shape matrix-shape--${shape}`} />
              </span>
            ))}
          </div>
          <span className="matrix-label">Reasoning matrix</span>
        </div>

        <dl className="overview-details">
          <div><dt>Format</dt><dd>Timed multiple choice</dd></div>
          <div><dt>Domains</dt><dd>Four</dd></div>
          <div><dt>Time per item</dt><dd>8 seconds</dd></div>
          <div><dt>Results</dt><dd>Immediate</dd></div>
        </dl>
      </aside>
    </section>

    <section className="category-section" aria-labelledby="category-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Assessment domains</p>
          <h2 id="category-title">Four areas of reasoning</h2>
        </div>
        <p>
          The assessment samples distinct reasoning skills to create a concise performance summary.
        </p>
      </div>
      <div className="category-grid">
        {domains.map((domain) => (
          <article className="category-card" key={domain.title}>
            <span className="category-index">{domain.index}</span>
            <h3>{domain.title}</h3>
            <p>{domain.copy}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="process-section" aria-labelledby="process-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Assessment process</p>
          <h2 id="process-title">A focused, timed format</h2>
        </div>
        <p>Complete the assessment in one sitting for the most consistent result.</p>
      </div>
      <ol className="process-grid">
        {processSteps.map((step) => (
          <li key={step.index}>
            <span>{step.index}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>

    <section className="fine-print" aria-labelledby="before-title">
      <div className="fine-print-copy">
        <p className="eyebrow">Before you begin</p>
        <h2 id="before-title">Complete the assessment in one sitting.</h2>
        <p>
          Items advance automatically when time expires. Select the best available response before
          the countdown reaches zero; results are generated immediately after the final item.
        </p>
      </div>
      <div className="readiness-panel">
        <span className="ready-status"><i aria-hidden="true" /> Session ready</span>
        <button className="primary-button" type="button" onClick={onStartTest}>
          Start assessment <span aria-hidden="true">→</span>
        </button>
        <p>AIQ results are intended for personal insight and are not a clinical or educational diagnosis.</p>
      </div>
    </section>

    <footer className="intro-footer">
      <span>AIQ Assessment Center</span>
      <span>Timed cognitive reasoning assessment</span>
    </footer>
  </main>
);

export default IntroPage;
