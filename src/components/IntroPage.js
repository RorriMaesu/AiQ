import React from 'react';
import '../styles/IntroPage.css';

const categories = [
  { icon: '↗', title: 'Patterns', copy: 'Sequences that start sensible and then choose chaos.' },
  { icon: 'Aa', title: 'Words', copy: 'Analogies for people who have strong opinions about synonyms.' },
  { icon: '◇', title: 'Space', copy: 'Shapes, turns, folds, and imaginary cubes with real attitude.' },
  { icon: '∴', title: 'Logic', copy: 'Tiny deductions with suspiciously dramatic consequences.' },
];

const IntroPage = ({ onStartTest }) => (
  <main className="intro-page">
    <nav className="site-nav" aria-label="AIQ home">
      <a className="brand" href="#top" aria-label="AIQ home">
        <span className="brand-mark" aria-hidden="true">A?</span>
        <span>AIQ</span>
      </a>
      <div className="nav-actions">
        <span className="nav-pill">100% unlicensed brain science</span>
        <button className="nav-start-button" type="button" onClick={onStartTest}>
          Start 20-question test <span aria-hidden="true">→</span>
        </button>
      </div>
    </nav>

    <section className="intro-hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">A tiny test for your very large thoughts</p>
        <h1>How loud is your brain today</h1>
        <p className="hero-lede">
          Twenty quick questions. Four kinds of thinking. One deeply unofficial score.
          The question mix stays fresh, even when your strategy does not.
        </p>

        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={onStartTest}>
            Start the 20-question test
            <span aria-hidden="true">→</span>
          </button>
          <span className="time-note">About 8 minutes · untimed · no fake paywall</span>
        </div>

        <dl className="hero-stats" aria-label="Test details">
          <div>
            <dt>20</dt>
            <dd>questions per round</dd>
          </div>
          <div>
            <dt>100</dt>
            <dd>questions in the vault</dd>
          </div>
          <div>
            <dt>4</dt>
            <dd>brain-flavored categories</dd>
          </div>
        </dl>
      </div>

      <aside className="test-receipt" aria-label="What this test includes">
        <div className="receipt-topline">
          <span>AIQ LAB RECEIPT</span>
          <span>#00042</span>
        </div>
        <div className="brain-doodle" aria-hidden="true">
          <span>?</span>
          <i className="doodle-spark spark-one">✦</i>
          <i className="doodle-spark spark-two">+</i>
          <i className="doodle-spark spark-three">○</i>
        </div>
        <div className="receipt-lines">
          <p><span>Fresh question mix</span><strong>Included</strong></p>
          <p><span>Needless pressure</span><strong>Removed</strong></p>
          <p><span>Useful explanations</span><strong>Included</strong></p>
          <p><span>Scientific validity</span><strong>Absolutely not</strong></p>
        </div>
        <p className="receipt-total"><span>TOTAL EGO AT RISK</span><strong>$0.00</strong></p>
      </aside>
    </section>

    <section className="category-section" aria-labelledby="category-title">
      <div className="section-heading">
        <p className="eyebrow">Pick your mental poison</p>
        <h2 id="category-title">A balanced buffet of brain snacks</h2>
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
      <p className="eyebrow">The unusually readable fine print</p>
      <h2>This is comedy, not a diagnosis.</h2>
      <p>
        AIQ measures how you answered this particular set of puzzles today. It does not measure
        your worth, potential, creativity, wisdom, or ability to find the good snacks.
      </p>
      <button className="secondary-button" type="button" onClick={onStartTest}>
        I understand. Bring on the puzzles.
      </button>
    </section>
  </main>
);

export default IntroPage;
