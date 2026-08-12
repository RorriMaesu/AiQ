import React from 'react';
import '../styles/Question.css';

const TYPE_LABELS = {
  pattern: 'Pattern recognition',
  verbal: 'Verbal reasoning',
  spatial: 'Spatial analysis',
  logical: 'Logical deduction',
};

const Question = ({ question, selectedOption, onAnswer, questionNumber }) => (
  <section className={`question-sheet question-sheet--${question.type}`} aria-labelledby={`question-${question.id}`}>
    <div className="question-meta">
      <span>{TYPE_LABELS[question.type]}</span>
      <span>Measure {String(questionNumber).padStart(2, '0')}</span>
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
            <span className="option-letter" aria-hidden="true">{option.id}<small>{question.options.indexOf(option) + 1}</small></span>
            <span className="option-text">{option.text}</span>
            <span className="option-check" aria-hidden="true">{isSelected ? 'Selected' : ''}</span>
          </button>
        );
      })}
    </div>
  </section>
);

export default Question;
