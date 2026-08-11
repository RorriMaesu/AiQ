import { act, fireEvent, render, screen } from '@testing-library/react';
import QuestionPage, { QUESTION_TIME_SECONDS } from './QuestionPage';

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
  jest.useFakeTimers();
  window.scrollTo = jest.fn();
});

afterEach(() => {
  jest.useRealTimers();
});

test('locks answers and finishes immediately on the final question', () => {
  const onComplete = jest.fn();
  render(<QuestionPage questions={sampleQuestions} onComplete={onComplete} />);

  fireEvent.click(screen.getByRole('button', { name: /^Three$/i }));
  fireEvent.click(screen.getByRole('button', { name: /lock answer & continue/i }));
  fireEvent.click(screen.getByRole('button', { name: /^Correct$/i }));
  fireEvent.click(screen.getByRole('button', { name: /lock answer & finish/i }));

  expect(onComplete).toHaveBeenCalledWith(expect.objectContaining({
    score: 79,
    rawScore: 100,
    correctCount: 2,
    timedOutCount: 0,
    totalQuestions: 2,
    passMark: 80,
    passed: false,
  }));
});

test('auto-submits timeouts and completes when the final timer expires', () => {
  const onComplete = jest.fn();
  render(<QuestionPage questions={sampleQuestions} onComplete={onComplete} />);

  act(() => {
    jest.advanceTimersByTime(QUESTION_TIME_SECONDS * 1000);
  });
  expect(screen.getByRole('heading', { name: /second test question/i })).toBeInTheDocument();

  act(() => {
    jest.advanceTimersByTime(QUESTION_TIME_SECONDS * 1000);
  });

  expect(onComplete).toHaveBeenCalledWith(expect.objectContaining({
    score: 0,
    correctCount: 0,
    timedOutCount: 2,
    totalQuestions: 2,
  }));
});

test('offers comedy instead of a useful hint', () => {
  render(<QuestionPage questions={sampleQuestions} onComplete={jest.fn()} />);

  fireEvent.click(screen.getByRole('button', { name: /give me a useless hint/i }));

  expect(screen.getByText(/will not help|you-shaped problem|numbers know what they did|hiding in plain sight|warm custard|subtracting confidence/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /regret acknowledged/i })).toBeDisabled();
});
