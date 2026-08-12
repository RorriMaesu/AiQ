import React from 'react';
import '../styles/IntroPage.css';

const categories = [
  { icon: '↗', title: 'Patterns', copy: 'Sequences that begin politely and then remove the stairs.' },
  { icon: 'Aa', title: 'Words', copy: 'Analogies written by someone with a personal grudge against synonyms.' },
  { icon: '◇', title: 'Space', copy: 'Rotate imaginary objects while your real confidence remains stationary.' },
  { icon: '∴', title: 'Logic', copy: 'Tiny deductions dressed like a court summons.' },
];

const IntroPage = ({ onStartTest }) => (
  <main className="intro-page">
    <nav className="site-nav" aria-label="AIQ home">
      <a className="brand" href="#top" aria-label="AIQ home">
        <span className="brand-mark" aria-hidden="true">A?</span>
        <span>AIQ</span>
      </a>
      <div className="nav-actions">
        <span className="nav-pill">Peer-reviewed by absolutely nobody</span>
        <button className="nav-start-button" type="button" onClick={onStartTest}>
          Make a questionable decision <span aria-hidden="true">→</span>
        </button>
      </div>
    </nav>

    <section className="intro-hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">20 questions · 8 seconds each · confidence sold separately</p>
        <h1>How smart are you when the timer gets rude</h1>
        <p className="hero-lede">
          A smug little algorithm with no qualifications and beautiful typography will now
          judge your entire brain. Please underperform neatly.
        </p>

        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={onStartTest}>
            Let the timer insult me
            <span aria-hidden="true">→</span>
          </button>
          <span className="time-note">8 seconds each · panic included · dignity optional</span>
        </div>

        <dl className="hero-stats" aria-label="Test details">
          <div>
            <dt>20</dt>
            <dd>questions per round</dd>
          </div>
          <div>
            <dt>08</dt>
            <dd>seconds per question</dd>
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
          <p><span>Fresh questions</span><strong>Included</strong></p>
          <p><span>Needless pressure</span><strong>Aggressively included</strong></p>
          <p><span>Useful hints</span><strong>Spiritually absent</strong></p>
          <p><span>Scientific validity</span><strong>Currently at lunch</strong></p>
        </div>
        <p className="receipt-total"><span>TOTAL EGO AT RISK</span><strong>$0.00</strong></p>
      </aside>
    </section>

    <section className="category-section" aria-labelledby="category-title">
      <div className="section-heading">
        <p className="eyebrow">Four departments of unnecessary concern</p>
        <h2 id="category-title">A balanced meal, if the meal resented you</h2>
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
      <p className="eyebrow">The legally soothing fine print</p>
      <h2>This is entertainment, not a diagnosis.</h2>
      <p>
        Your score may contain traces of guessing, panic, and an algorithm compensating for
        its lack of friends. The ending will explain why a number is not a mind.
      </p>
      <button className="secondary-button" type="button" onClick={onStartTest}>
        I ignored the warning. Start.
      </button>
    </section>
  </main>
);

export default IntroPage;
