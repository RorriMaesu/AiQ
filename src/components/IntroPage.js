import React, { useState, useEffect } from 'react';
import '../styles/IntroPage.css';

const IntroPage = ({ onStartTest }) => {
  const [activeUsers, setActiveUsers] = useState(0);
  const [limitedSpots, setLimitedSpots] = useState(100);
  const [isChecked, setIsChecked] = useState(false);

  // Simulate active users count changing
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(Math.floor(Math.random() * 50) + 150); // Random between 150-200
      setLimitedSpots(prev => Math.max(prev - Math.floor(Math.random() * 3), 10)); // Gradually decrease available spots
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Initial values
  useEffect(() => {
    setActiveUsers(172);
    setLimitedSpots(100);
  }, []);

  return (
    <div className="intro-container">
      <div className="intro-content">
        {/* Top banner with urgency */}
        <div className="top-banner">
          <div className="active-users">
            <div className="pulse-dot"></div>
            <span>{activeUsers} people taking the test right now</span>
          </div>
          <div className="limited-spots">Only {limitedSpots} assessments remaining today</div>
        </div>

        {/* Social proof badges - positioned at the top for primacy effect */}
        <div className="intro-badges">
          <div className="badge">
            <span className="badge-number">10M+</span>
            <span className="badge-text">Tests Completed</span>
          </div>
          <div className="badge">
            <span className="badge-number">99.8%</span>
            <span className="badge-text">Accuracy Rate</span>
          </div>
          <div className="badge">
            <span className="badge-number">128</span>
            <span className="badge-text">Countries</span>
          </div>
        </div>

        <h1 className="intro-title">The Advanced Cognitive Assessment</h1>
        <h2 className="intro-subtitle">Discover Your True Intellectual Potential</h2>

        {/* Featured in section - authority principle */}
        <div className="featured-in">
          <p>As featured in:</p>
          <div className="featured-logos">
            <div className="featured-logo">NEUROPSYCH JOURNAL</div>
            <div className="featured-logo">COGNITIVE SCIENCE TODAY</div>
            <div className="featured-logo">MIND INSTITUTE</div>
          </div>
        </div>

        <div className="intro-description">
          <p>
            This scientifically validated assessment has been developed by leading cognitive psychologists
            from top research institutions. Unlike standard IQ tests, our proprietary algorithm measures
            multiple dimensions of intelligence to provide a comprehensive evaluation of your cognitive abilities.
          </p>

          {/* Scientific methodology section - authority principle */}
          <div className="scientific-method">
            <h3>Our Scientific Methodology</h3>
            <div className="method-diagram">
              <div className="method-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Multi-dimensional Analysis</h4>
                  <p>Evaluates 4 core cognitive domains</p>
                </div>
              </div>
              <div className="method-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Neural Pattern Recognition</h4>
                  <p>Advanced algorithms analyze response patterns</p>
                </div>
              </div>
              <div className="method-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Comparative Evaluation</h4>
                  <p>Results benchmarked against global database</p>
                </div>
              </div>
            </div>
          </div>

          <div className="intro-features">
            <div className="feature">
              <h3>✓ Spatial Reasoning</h3>
              <p>Evaluate your ability to visualize and manipulate objects in three dimensions</p>
            </div>
            <div className="feature">
              <h3>✓ Logical Analysis</h3>
              <p>Assess your capacity for deductive and inductive reasoning</p>
            </div>
            <div className="feature">
              <h3>✓ Pattern Recognition</h3>
              <p>Measure your aptitude for identifying complex patterns and sequences</p>
            </div>
            <div className="feature">
              <h3>✓ Verbal Intelligence</h3>
              <p>Gauge your linguistic capabilities and semantic understanding</p>
            </div>
          </div>
        </div>

        <div className="intro-instructions">
          <h3>Before You Begin:</h3>
          <ul>
            <li>Find a quiet environment free from distractions</li>
            <li>Allow approximately 15 minutes to complete the assessment</li>
            <li>Answer each question to the best of your ability</li>
            <li>Do not use external resources or assistance</li>
          </ul>
        </div>

        {/* Enhanced testimonials with avatars - social proof + recency effect */}
        <div className="testimonials">
          <h3>What Experts Say</h3>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-avatar avatar1"></div>
              <blockquote>
                "This assessment represents a breakthrough in cognitive evaluation technology."
                <cite>— Dr. Elizabeth Chen, Ph.D.<br/>Harvard Cognitive Science Department</cite>
              </blockquote>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-avatar avatar2"></div>
              <blockquote>
                "The most accurate measure of intellectual capacity I've encountered in my 25 years of research."
                <cite>— Prof. James Harrington, Ph.D.<br/>Princeton Institute for Advanced Studies</cite>
              </blockquote>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-avatar avatar3"></div>
              <blockquote>
                "Finally, an assessment that captures the true complexity of human intelligence beyond simplistic metrics."
                <cite>— Dr. Sarah Williams, Ph.D.<br/>Stanford Neuroscience Program</cite>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Enhanced CTA section with commitment checkbox */}
        <div className="cta-section">
          <div className="urgency-message">
            <p>Don't miss this opportunity to discover your true cognitive potential</p>
            <p className="spots-remaining">Only {limitedSpots} assessments remaining today</p>
          </div>

          <div className="commitment-checkbox">
            <input
              type="checkbox"
              id="commitment"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="commitment">I'm ready to discover my true cognitive abilities</label>
          </div>

          <button
            className={`start-button ${isChecked ? 'active' : 'disabled'}`}
            onClick={onStartTest}
            disabled={!isChecked}
          >
            Start Free Assessment
          </button>

          <div className="security-badge">
            <span className="lock-icon">🔒</span> Your results are 100% private and confidential
          </div>
        </div>

        <div className="disclaimer">
          <p>
            By proceeding, you acknowledge that this assessment is for educational purposes only
            and does not constitute medical or psychological advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
