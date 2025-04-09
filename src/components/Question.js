import React, { useState } from 'react';
import '../styles/Question.css';

const Question = ({ question, onAnswer, timeLeft, totalQuestions = 10 }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    onAnswer(question.id, optionId);
  };

  return (
    <div className="question-container auto-scale-content">
      <div className="question-header">
        <div className="question-number">Question {question.id} of {totalQuestions}</div>
        <div className="question-timer">Time Remaining: {timeLeft}s</div>
        <div className="question-type">{question.type.toUpperCase()}</div>
      </div>

      <div className="question-content">
        <h2 className="question-text">{question.question}</h2>
        {question.description && (
          question.type === 'pattern' ? (
            <div className="sequence-display">{question.description}</div>
          ) : (
            <div className="question-description">{question.description}</div>
          )
        )}
        {question.image && (
          <div className="question-image">
            <img src={question.image} alt="Question visual" className="responsive-image" />
          </div>
        )}

        <div className="question-options">
          {question.options.map((option) => (
            <div
              key={option.id}
              className={`option ${selectedOption === option.id ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(option.id)}
            >
              <div className="option-id">{option.id}</div>
              <div className="option-content">
                {option.text}
                {option.image && <img src={option.image} alt={`Option ${option.id}`} className="responsive-image" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
