import React from 'react';
import '../styles/Question.css';

const TYPE_LABELS = {
  pattern: 'Pattern spotting',
  verbal: 'Word wrangling',
  spatial: 'Spatial thinking',
  logical: 'Logic juggling',
};

const Question = ({ question, selectedOption, onAnswer, questionNumber, totalQuestions }) => (
  <section className="question-card" aria-labelledby={`question-${question.id}`}>
    <div className="question-meta">
      <span className={`type-chip type-${question.type}`}>{TYPE_LABELS[question.type]}</span>
      <span>{questionNumber} / {totalQuestions}</span>
    </div>

    <div className="question-copy">
      <h1 id={`question-${question.id}`}>{question.question}</h1>
      {question.description && (
        <p className={question.type === 'pattern' ? 'sequence-display' : 'question-description'}>
          {question.description}
        </p>
      )}
    </div>

    <div className="question-options" role="group" aria-label="Answer choices">
      {question.options.map((option) => {
        const isSelected = selectedOption === option.id;
        return (
          <button
            key={option.id}
            className={`option-button${isSelected ? ' selected' : ''}`}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onAnswer(question.id, option.id)}
          >
            <span className="option-letter" aria-hidden="true">{option.id}</span>
            <span className="option-text">{option.text}</span>
            <span className="option-check" aria-hidden="true">{isSelected ? '✓' : ''}</span>
          </button>
        );
      })}
    </div>
  </section>
);

export default Question;
