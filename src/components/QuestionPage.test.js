import { fireEvent, render, screen } from '@testing-library/react';
import QuestionPage from './QuestionPage';

const sampleQuestions = [
  {
    id: 501,
    type: 'pattern',
    question: 'First test question?',
    description: '1, 2, ?',
    options: [
      { id: 'A', text: 'Three' },
      { id: 'B', text: 'Four' },
      { id: 'C', text: 'Five' },
      { id: 'D', text: 'Six' },
    ],
    correctAnswer: 'A',
    explanation: 'Counting by one gives three.',
  },
  {
    id: 502,
    type: 'verbal',
    question: 'Second test question?',
    description: null,
    options: [
      { id: 'A', text: 'Wrong' },
      { id: 'B', text: 'Correct' },
      { id: 'C', text: 'Also wrong' },
      { id: 'D', text: 'Still wrong' },
    ],
    correctAnswer: 'B',
    explanation: 'B is correct.',
  },
];

beforeEach(() => {
  window.scrollTo = jest.fn();
});

test('includes the final selected answer in the score', () => {
  const onComplete = jest.fn();
  render(<QuestionPage questions={sampleQuestions} onComplete={onComplete} />);

  fireEvent.click(screen.getByRole('button', { name: /^Three$/i }));
  fireEvent.click(screen.getByRole('button', { name: /next question/i }));
  fireEvent.click(screen.getByRole('button', { name: /^Correct$/i }));
  fireEvent.click(screen.getByRole('button', { name: /reveal my brain weather/i }));

  expect(onComplete).toHaveBeenCalledWith(expect.objectContaining({
    score: 100,
    correctCount: 2,
    totalQuestions: 2,
  }));
});
