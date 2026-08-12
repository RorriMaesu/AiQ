import React from 'react';
import '../styles/IntroPage.css';

const categories = [
  { icon: '↗', title: 'Patterns', copy: 'Numerical and symbolic sequences, progression, and rule detection.' },
  { icon: 'Aa', title: 'Verbal', copy: 'Analogies, classification, vocabulary, and semantic relationships.' },
  { icon: '◇', title: 'Spatial', copy: 'Mental rotation, symmetry, orientation, and geometric reasoning.' },
  { icon: '∴', title: 'Logic', copy: 'Deduction, inference, conditional reasoning, and constraints.' },
];

const IntroPage = ({ onStartTest }) => (
  <main className="intro-page">
    <nav className="site-nav" aria-label="AIQ home">
      <a className="brand" href="#top" aria-label="AIQ home">
        <span className="brand-mark" aria-hidden="true">A?</span>
        <span>AIQ</span>
      </a>
      <div className="nav-actions">
        <span className="nav-pill">Adaptive Cognitive Assessment</span>
        <button className="nav-start-button" type="button" onClick={onStartTest}>
          Begin assessment <span aria-hidden="true">→</span>
        </button>
      </div>
    </nav>

    <section className="intro-hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">20 items · 8 seconds each · four reasoning domains</p>
        <h1>Measure your reasoning under pressure</h1>
        <p className="hero-lede">
          A rapid cognitive assessment covering pattern recognition, verbal reasoning, spatial
          processing, and logic. Complete each item before the timer expires.
        </p>

        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={onStartTest}>
            Start assessment
            <span aria-hidden="true">→</span>
          </button>
          <span className="time-note">Approximately 3 minutes · immediate results · no registration</span>
        </div>

        <dl className="hero-stats" aria-label="Test details">
          <div>
            <dt>20</dt>
            <dd>questions per assessment</dd>
          </div>
          <div>
            <dt>08</dt>
            <dd>seconds per item</dd>
          </div>
          <div>
            <dt>4</dt>
            <dd>reasoning domains</dd>
          </div>
        </dl>
      </div>

      <aside className="test-receipt" aria-label="What this test includes">
        <div className="receipt-topline">
          <span>AIQ ASSESSMENT PROFILE</span>
          <span>FORM A-042</span>
        </div>
        <div className="brain-doodle" aria-hidden="true">
          <span>?</span>
          <i className="doodle-spark spark-one">✦</i>
          <i className="doodle-spark spark-two">+</i>
          <i className="doodle-spark spark-three">○</i>
        </div>
        <div className="receipt-lines">
          <p><span>Randomized item set</span><strong>Enabled</strong></p>
          <p><span>Timed response scoring</span><strong>Enabled</strong></p>
          <p><span>Domain analysis</span><strong>Included</strong></p>
          <p><span>Results summary</span><strong>Immediate</strong></p>
        </div>
        <p className="receipt-total"><span>ESTIMATED DURATION</span><strong>03:00</strong></p>
      </aside>
    </section>

    <section className="category-section" aria-labelledby="category-title">
      <div className="section-heading">
        <p className="eyebrow">Assessment domains</p>
        <h2 id="category-title">Four dimensions of rapid reasoning</h2>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <article className="category-card" key={category.title}>
            <span className="category-icon" aria-hidden="true">{category.icon}</span>
            <h3>{category.title}</h3>
            <p>{category.copy}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="fine-print">
      <p className="eyebrow">Before you begin</p>
      <h2>Complete the assessment in one sitting.</h2>
      <p>
        Each item advances when time expires. Select the best available answer before the countdown
        reaches zero. Results are generated immediately and are not a clinical or educational diagnosis.
      </p>
      <button className="secondary-button" type="button" onClick={onStartTest}>
        Begin assessment
      </button>
    </section>
  </main>
);

export default IntroPage;
