import React from 'react';
import AssessmentBrand from './AssessmentBrand';
import '../styles/IntroPage.css';

const domains = [
  {
    index: '01',
    code: 'PTN',
    title: 'Pattern recognition',
    copy: 'Identify numerical, symbolic, and visual relationships across structured sequences.',
  },
  {
    index: '02',
    code: 'VRB',
    title: 'Verbal reasoning',
    copy: 'Evaluate analogies, classifications, vocabulary, and semantic relationships.',
  },
  {
    index: '03',
    code: 'SPT',
    title: 'Spatial analysis',
    copy: 'Interpret rotation, orientation, symmetry, and relationships between forms.',
  },
  {
    index: '04',
    code: 'LOG',
    title: 'Logical deduction',
    copy: 'Apply conditional reasoning, inference, and constraints to reach a conclusion.',
  },
];

const sampleShapes = [
  'circle', 'triangle', 'diamond',
  'triangle', 'diamond', 'circle',
  'diamond', 'circle', 'missing',
];

const IntroPage = ({ onStartTest }) => (
  <main className="landing-page">
    <header className="landing-header">
      <AssessmentBrand />
      <nav className="landing-nav" aria-label="Assessment information">
        <a href="#domains">What is assessed</a>
        <a href="#method">How it works</a>
        <button className="header-start" type="button" onClick={onStartTest}>Begin</button>
      </nav>
    </header>

    <section className="landing-hero" id="top">
      <div className="landing-hero-copy">
        <div className="hero-status">
          <span><i aria-hidden="true" /> Assessment available</span>
          <strong>Free access</strong>
        </div>
        <p className="document-label">AIQ assessment · Form 04</p>
        <h1>Measure how you reason under pressure.</h1>
        <p className="landing-lede">
          A focused cognitive assessment across pattern, verbal, spatial, and logical reasoning.
          Every response is timed. Results are immediate.
        </p>
        <p className="free-statement">
          <strong>Free of charge.</strong> No account, subscription, or payment information required.
        </p>
        <button className="primary-button landing-primary" type="button" onClick={onStartTest}>
          Begin assessment <span aria-hidden="true">→</span>
        </button>

        <dl className="assessment-facts" aria-label="Assessment details">
          <div><dt>20</dt><dd>scored items</dd></div>
          <div><dt>8 seconds</dt><dd>per item</dd></div>
          <div><dt>About 3 minutes</dt><dd>total duration</dd></div>
        </dl>
      </div>

      <figure className="sample-sheet" aria-labelledby="sample-title">
        <div className="instrument-strip" aria-hidden="true">
          <span>LIVE PREVIEW</span>
          <i />
          <span>08 SEC</span>
        </div>
        <div className="sample-heading">
          <div>
            <span>Sample item</span>
            <strong id="sample-title">Pattern recognition</strong>
          </div>
          <small>Not scored</small>
        </div>
        <p>Identify the symbol that would complete the matrix.</p>
        <div className="sample-matrix" aria-hidden="true">
          {sampleShapes.map((shape, index) => (
            <span className={`sample-cell sample-cell--${shape}`} key={`${shape}-${index}`}>
              {shape !== 'missing' && <i />}
            </span>
          ))}
        </div>
        <div className="sample-response" aria-hidden="true">
          <span>A</span><span>B</span><span className="active">C</span><span>D</span>
        </div>
        <figcaption>
          Items use numerical, verbal, spatial, and logical formats. Each response is timed independently.
        </figcaption>
      </figure>
    </section>

    <section className="landing-section" id="domains" aria-labelledby="domains-title">
      <div className="landing-section-heading">
        <p className="document-label">What is assessed</p>
        <h2 id="domains-title">Four reasoning domains</h2>
        <p>Each session draws from all four areas to produce a concise performance summary.</p>
      </div>
      <ol className="domain-list">
        {domains.map((domain) => (
          <li key={domain.index}>
            <span className="domain-code" aria-hidden="true">{domain.code}</span>
            <div>
              <h3>{domain.title}</h3>
              <p>{domain.copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>

    <section className="landing-section method-section" id="method" aria-labelledby="method-title">
      <div className="landing-section-heading">
        <p className="document-label">How it works</p>
        <h2 id="method-title">One item. One decision. Eight seconds.</h2>
      </div>
      <ol className="method-list">
        <li><span>1</span><strong>Review the item</strong><p>Read the prompt and identify the relationship being tested.</p></li>
        <li><span>2</span><strong>Select one response</strong><p>Choose the best available answer from the options provided.</p></li>
        <li><span>3</span><strong>Submit before time expires</strong><p>The next item appears automatically when the response window closes.</p></li>
      </ol>
    </section>

    <section className="before-section" aria-labelledby="before-title">
      <div>
        <p className="document-label">Before you begin</p>
        <h2 id="before-title">Complete the assessment in one sitting.</h2>
        <p>
          Select the best available response before the countdown reaches zero. Results appear
          immediately after the final item.
        </p>
      </div>
      <div className="before-action">
        <strong>Free to take</strong>
        <span>No registration or payment details</span>
        <button className="primary-button" type="button" onClick={onStartTest}>
          Begin assessment <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>

    <footer className="landing-footer">
      <span>AIQ Cognitive Assessment</span>
      <span>Personal-use reasoning assessment · Not a clinical diagnosis</span>
    </footer>
  </main>
);

export default IntroPage;
