import { act, fireEvent, render, screen } from '@testing-library/react';
import QuestionPage, { buildResult, QUESTION_TIME_SECONDS } from './QuestionPage';

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
  fireEvent.click(screen.getByRole('button', { name: /^submit response/i }));
  fireEvent.click(screen.getByRole('button', { name: /^Correct$/i }));
  fireEvent.click(screen.getByRole('button', { name: /submit final response/i }));

  expect(onComplete).toHaveBeenCalledWith(expect.objectContaining({
    score: expect.any(Number),
    rawScore: 100,
    correctCount: 2,
    timedOutCount: 0,
    totalQuestions: 2,
    passMark: 80,
    passed: false,
  }));
  const result = onComplete.mock.calls[0][0];
  expect(result.score).toBeGreaterThan(0);
  expect(result.score).toBeLessThan(result.rawScore);
  expect(result.comparison.averageScore).toBeGreaterThan(result.score);
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
    score: expect.any(Number),
    correctCount: 0,
    timedOutCount: 2,
    totalQuestions: 2,
  }));
  expect(onComplete.mock.calls[0][0].score).toBeGreaterThan(0);
});

test('reveals comedy only after the user requests a hint', () => {
  render(<QuestionPage questions={sampleQuestions} onComplete={jest.fn()} />);

  expect(screen.queryByText(/you-shaped problem|warm custard/i)).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /request hint/i }));

  expect(screen.getByText(/will not help|you-shaped problem|numbers know what they did|hiding in plain sight|warm custard|subtracting confidence/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /hint requested/i })).toBeDisabled();
});

test('dramatically reduces positive scores and varies the reported result by attempt', () => {
  const perfectAnswers = { 501: 'A', 502: 'B' };
  const firstAttempt = buildResult(sampleQuestions, perfectAnswers, 0.1);
  const secondAttempt = buildResult(sampleQuestions, perfectAnswers, 0.9);

  expect(firstAttempt.rawScore).toBe(100);
  expect(secondAttempt.rawScore).toBe(100);
  expect(firstAttempt.score).toBeGreaterThan(0);
  expect(firstAttempt.score).toBeLessThan(firstAttempt.rawScore);
  expect(secondAttempt.score).toBeLessThan(secondAttempt.rawScore);
  expect(firstAttempt.score).not.toBe(secondAttempt.score);
  expect(firstAttempt.comparison.averageScore).toBeGreaterThan(firstAttempt.score);
  expect(secondAttempt.comparison.averageScore).toBeGreaterThan(secondAttempt.score);
  expect(firstAttempt.comparison.sampleSize).not.toBe(secondAttempt.comparison.sampleSize);
});
