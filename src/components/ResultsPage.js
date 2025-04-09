import React, { useState, useEffect } from 'react';
import { results, meaningfulMessage } from '../data/results';
import '../styles/ResultsPage.css';

const ResultsPage = ({ score, onRestart }) => {
  const [showMeaningfulMessage, setShowMeaningfulMessage] = useState(false);
  const [isCalculating, setIsCalculating] = useState(true);
  const [displayScore, setDisplayScore] = useState(null);
  const [result, setResult] = useState(null);
  const [showSocialProof, setShowSocialProof] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showSharePrompt, setShowSharePrompt] = useState(false);
  const [revealButtonClicked, setRevealButtonClicked] = useState(false);
  const [socialCount, setSocialCount] = useState({ likes: 0, shares: 0 });

  // Fake social proof data - creates FOMO (Fear of Missing Out)
  const fakeUsers = [
    { name: "Michael S.", location: "New York", time: "2 minutes ago", score: 95 },
    { name: "Sarah L.", location: "London", time: "5 minutes ago", score: 87 },
    { name: "David W.", location: "Toronto", time: "12 minutes ago", score: 92 },
    { name: "Emma J.", location: "Sydney", time: "18 minutes ago", score: 89 }
  ];

  // Simulate calculation and analysis
  useEffect(() => {
    // Fake calculation delay for dramatic effect
    const calculationTimer = setTimeout(() => {
      setIsCalculating(false);

      // Find the appropriate result based on score
      const appropriateResult = results.find(
        r => score >= r.scoreRange[0] && score <= r.scoreRange[1]
      );

      setResult(appropriateResult);

      // Animate the score counter - anchoring effect
      // Start from a higher number to make the final score seem more significant
      let counter = Math.min(score + 30, 100);
      const interval = setInterval(() => {
        counter -= 1;
        setDisplayScore(counter);

        if (counter <= score) {
          clearInterval(interval);

          // Show social proof after score is displayed
          setTimeout(() => setShowSocialProof(true), 1000);

          // Show comparison chart after a delay
          setTimeout(() => setShowComparison(true), 2000);

          // Show share prompt after another delay
          setTimeout(() => setShowSharePrompt(true), 3000);
        }
      }, 40);

      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(calculationTimer);
  }, [score]);

  // Simulate increasing social counts - creates bandwagon effect
  useEffect(() => {
    if (!isCalculating && !showMeaningfulMessage) {
      const socialInterval = setInterval(() => {
        setSocialCount(prev => ({
          likes: prev.likes + Math.floor(Math.random() * 3),
          shares: prev.shares + (Math.random() > 0.7 ? 1 : 0)
        }));
      }, 3000);

      return () => clearInterval(socialInterval);
    }
  }, [isCalculating, showMeaningfulMessage]);

  // Handle reveal truth button with psychological effect
  const handleRevealTruth = () => {
    setRevealButtonClicked(true);

    // Delay the actual transition to create anticipation
    setTimeout(() => {
      setShowMeaningfulMessage(true);
    }, 1500);
  };

  return (
    <div className="results-container">
      {/* Confetti pieces for celebration effect */}
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      {isCalculating ? (
        <div className="calculating">
          <h2>Analyzing Your Responses...</h2>
          <div className="loading-animation">
            <div className="spinner"></div>
          </div>
          <div className="calculation-steps">
            <p>Evaluating pattern recognition capabilities...</p>
            <p>Assessing logical reasoning structures...</p>
            <p>Calculating spatial intelligence quotient...</p>
            <p>Analyzing verbal comprehension index...</p>
            <p>Compiling comprehensive cognitive profile...</p>
          </div>
        </div>
      ) : !showMeaningfulMessage ? (
        <div className="results-content">
          <h1 className="results-header">Your Assessment Results</h1>

          {/* Social validation banner */}
          <div className="social-validation">
            <div className="social-counts">
              <div className="social-count">
                <span className="count-number">{socialCount.likes}</span>
                <span className="count-label">People liked this</span>
              </div>
              <div className="social-count">
                <span className="count-number">{socialCount.shares}</span>
                <span className="count-label">Shares</span>
              </div>
            </div>
          </div>

          <div className="score-display">
            <div className="score-circle">
              <span className="score-number">{displayScore}</span>
              <span className="score-label">IQ Score</span>
            </div>

            {/* Percentile indicator - creates social comparison */}
            <div className="percentile-indicator">
              <div className="percentile-bar">
                <div
                  className="percentile-fill"
                  style={{ width: `${Math.min(displayScore, 100)}%` }}
                ></div>
                <div className="percentile-marker average" style={{ left: '50%' }}>
                  <span className="marker-label">Average</span>
                </div>
                <div className="percentile-marker you" style={{ left: `${Math.min(displayScore, 100)}%` }}>
                  <span className="marker-label">You</span>
                </div>
              </div>
              <div className="percentile-text">
                Your score is {displayScore > 50 ? 'above' : 'below'} average
              </div>
            </div>
          </div>

          {/* Social proof section - creates FOMO */}
          {showSocialProof && (
            <div className="social-proof">
              <h3>Recent Test Takers</h3>
              <div className="recent-users">
                {fakeUsers.map((user, index) => (
                  <div key={index} className="user-result">
                    <div className="user-avatar"></div>
                    <div className="user-info">
                      <div className="user-name">{user.name} <span className="user-location">from {user.location}</span></div>
                      <div className="user-score">Scored: <span className="score-value">{user.score}</span></div>
                      <div className="user-time">{user.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comparison chart - creates contrast effect */}
          {showComparison && (
            <div className="comparison-chart">
              <h3>How Your Score Compares</h3>
              <div className="chart-container">
                <div className="chart-bar" style={{ height: '60%' }}>
                  <div className="bar-label">Average</div>
                  <div className="bar-value">100</div>
                </div>
                <div className="chart-bar" style={{ height: '70%' }}>
                  <div className="bar-label">College Graduates</div>
                  <div className="bar-value">115</div>
                </div>
                <div className="chart-bar you" style={{ height: `${Math.min(displayScore/150*100, 100)}%` }}>
                  <div className="bar-label">You</div>
                  <div className="bar-value">{displayScore}</div>
                </div>
                <div className="chart-bar" style={{ height: '90%' }}>
                  <div className="bar-label">Professionals</div>
                  <div className="bar-value">125</div>
                </div>
              </div>
            </div>
          )}

          <div className="result-interpretation">
            <h2 className="result-title">{result?.title}</h2>
            <p className="result-description">{result?.description}</p>
            <div className="result-advice">
              <h3>Expert Recommendation:</h3>
              <p>{result?.advice}</p>
            </div>
          </div>

          {/* Share prompt - creates social obligation */}
          {showSharePrompt && (
            <div className="share-prompt">
              <div className="prompt-icon">🎉</div>
              <p>Congratulations on completing the test! Share your results with friends and see how they compare.</p>
            </div>
          )}

          <div className="results-actions">
            <button
              className={`reveal-truth-button ${revealButtonClicked ? 'loading' : ''}`}
              onClick={handleRevealTruth}
              disabled={revealButtonClicked}
            >
              {revealButtonClicked ? 'Preparing the truth...' : 'Reveal the Truth About Intelligence'}
            </button>
            <button
              className="restart-button"
              onClick={onRestart}
            >
              Take the Test Again
            </button>
          </div>

          <div className="results-share">
            <p>Share your "impressive" results with friends:</p>
            <div className="share-buttons">
              <button className="share-button facebook">Facebook</button>
              <button className="share-button twitter">Twitter</button>
              <button className="share-button email">Email</button>
            </div>
            <div className="share-stats">
              <span>{socialCount.shares} people have shared their results today</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="meaningful-message">
          {/* Contrast effect - first show what's wrong with IQ tests */}
          <div className="truth-section">
            <h2>The Problem with IQ Tests</h2>
            <div className="truth-points">
              <div className="truth-point">
                <div className="point-icon">❌</div>
                <div className="point-text">
                  <h3>They Measure Limited Abilities</h3>
                  <p>IQ tests only assess a narrow range of cognitive skills, ignoring creativity, emotional intelligence, and practical abilities.</p>
                </div>
              </div>
              <div className="truth-point">
                <div className="point-icon">❌</div>
                <div className="point-text">
                  <h3>Cultural and Educational Bias</h3>
                  <p>Traditional IQ tests favor those from certain cultural backgrounds and educational experiences.</p>
                </div>
              </div>
              <div className="truth-point">
                <div className="point-icon">❌</div>
                <div className="point-text">
                  <h3>Poor Predictors of Success</h3>
                  <p>Research shows IQ scores are weak predictors of real-world success, happiness, or fulfillment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main message with powerful typography */}
          <div className="message-highlight">
            <h1>{meaningfulMessage.title}</h1>
            <p className="message-quote">"{meaningfulMessage.message}"</p>
          </div>

          {/* What really matters - positive reframing */}
          <div className="what-matters">
            <h2>What Really Matters</h2>
            <div className="matters-points">
              <div className="matters-point">
                <div className="point-icon">✨</div>
                <div className="point-text">
                  <h3>Curiosity & Exploration</h3>
                  <p>The drive to learn, discover and understand the world around you.</p>
                </div>
              </div>
              <div className="matters-point">
                <div className="point-icon">✨</div>
                <div className="point-text">
                  <h3>Creativity & Innovation</h3>
                  <p>The ability to imagine new possibilities and bring them to life.</p>
                </div>
              </div>
              <div className="matters-point">
                <div className="point-icon">✨</div>
                <div className="point-text">
                  <h3>Empathy & Connection</h3>
                  <p>Understanding others and forming meaningful relationships.</p>
                </div>
              </div>
              <div className="matters-point">
                <div className="point-icon">✨</div>
                <div className="point-text">
                  <h3>Resilience & Growth</h3>
                  <p>The capacity to learn from challenges and continuously improve.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action - commitment and consistency */}
          <div className="truth-action">
            <h2>Take the First Step</h2>
            <p>Commit to valuing your unique cognitive gifts beyond what any test can measure.</p>
            <button
              className="restart-button action-button"
              onClick={onRestart}
            >
              I Understand My True Potential
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
