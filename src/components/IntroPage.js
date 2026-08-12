import React, { useState } from 'react';
import AssessmentBrand from './AssessmentBrand';
import '../styles/IntroPage.css';

const domains = [
  { code: 'PTN', title: 'Pattern recognition', sample: '02 · 06 · 12 · 20 · ?' },
  { code: 'VRB', title: 'Verbal reasoning', sample: 'Premise → relation → inference' },
  { code: 'SPT', title: 'Spatial analysis', sample: 'Rotate · reflect · reconstruct' },
  { code: 'LOG', title: 'Logical deduction', sample: 'If P → Q, what must follow?' },
];

const IntroPage = ({ onStartTest }) => {
  const [calibration, setCalibration] = useState(61);

  const calibrate = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const position = ((event.clientX - bounds.left) / bounds.width) * 100;
    setCalibration(Math.round(Math.min(92, Math.max(8, position))));
  };

  return (
    <main className="measure-landing">
      <section
        className="measure-hero"
        id="top"
        onPointerMove={calibrate}
        style={{ '--calibration': calibration, '--calibration-position': `${calibration}%` }}
      >
        <header className="measure-header">
          <AssessmentBrand />
          <div className="header-protocol">
            <span><i /> System available</span>
            <span>Form AIQ–04</span>
          </div>
          <button className="measure-header-action" type="button" onClick={onStartTest}>
            Begin assessment <span aria-hidden="true">↗</span>
          </button>
        </header>

        <div className="hero-instrument" aria-hidden="true">
          <span className="instrument-index">CAL/{String(calibration).padStart(3, '0')}</span>
          <span className="instrument-axis"><i /></span>
          <span className="instrument-index">READY</span>
        </div>

        <div className="measure-title-lockup">
          <p>AIQ cognitive assessment</p>
          <h1>
            <span>Cognitive reasoning,</span>
            <span className="measured-line">measured under pressure.</span>
          </h1>
        </div>

        <div className="measure-word" aria-hidden="true">
          <span>MEASURE</span>
          <i className="measure-cursor"><b>{calibration}</b></i>
        </div>

        <div className="hero-control-panel">
          <div className="hero-introduction">
            <span className="control-number">01</span>
            <p>
              A rapid, timed assessment across pattern, verbal, spatial, and logical reasoning.
              Immediate comparative results.
            </p>
          </div>
          <div className="hero-terms">
            <strong>Free of charge.</strong>
            <span>No account. No subscription. No payment details.</span>
          </div>
          <button className="calibration-start" type="button" onClick={onStartTest}>
            <span>Begin free assessment</span>
            <i aria-hidden="true">→</i>
          </button>
        </div>

        <div className="hero-footnote">
          <span>Timed response protocol</span>
          <span>Approx. 3 minutes</span>
          <span>Immediate report</span>
          <span className="pointer-note">Move pointer to calibrate</span>
        </div>
      </section>

      <section className="domain-sequence" id="domains" aria-labelledby="domain-heading">
        <div className="section-register">
          <span>02 / Measurement domains</span>
          <span>Four modes of reasoning</span>
        </div>
        <div className="domain-intro">
          <p className="document-label">Assessment structure</p>
          <h2 id="domain-heading">One mind.<br />Four narrow lenses.</h2>
          <p>Each item isolates a different mode of reasoning and places it inside the same short response window.</p>
        </div>
        <ol className="domain-rows">
          {domains.map((domain, index) => (
            <li key={domain.code}>
              <span className="domain-index">0{index + 1}</span>
              <span className="domain-name">{domain.title}</span>
              <span className="domain-sample">{domain.sample}</span>
              <span className="domain-code">{domain.code}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="pressure-protocol" id="method" aria-labelledby="protocol-heading">
        <div className="protocol-scan" aria-hidden="true"><i /></div>
        <div className="section-register section-register--dark">
          <span>03 / Response protocol</span>
          <span>Read · Decide · Submit</span>
        </div>
        <div className="protocol-copy">
          <p className="document-label">Eight seconds per item</p>
          <h2 id="protocol-heading">The clock does<br />not negotiate.</h2>
          <p>Choose the best available response before the measurement window closes. Unanswered items advance automatically.</p>
        </div>
        <div className="protocol-clock" aria-hidden="true">
          <div className="clock-ring"><span>08</span><i /></div>
          <p>Seconds<br />per response</p>
        </div>
      </section>

      <section className="landing-terminal" aria-labelledby="terminal-heading">
        <div>
          <p className="document-label">Assessment ready</p>
          <h2 id="terminal-heading">Find a quiet room.<br />Bring a loud brain.</h2>
        </div>
        <div className="terminal-action">
          <p><strong>$0.00</strong> — Full assessment and immediate results. No registration required.</p>
          <button className="primary-button" type="button" onClick={onStartTest}>
            Begin free assessment <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      <footer className="measure-footer">
        <AssessmentBrand href="#top" />
        <span>Personal-use reasoning assessment · Not a clinical diagnosis</span>
        <a href="#top">Return to calibration ↑</a>
      </footer>
    </main>
  );
};

export default IntroPage;
