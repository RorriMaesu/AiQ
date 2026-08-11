import { render, screen } from '@testing-library/react';
import ResultsPage from './ResultsPage';

const result = {
  score: 79,
  rawScore: 100,
  correctCount: 20,
  timedOutCount: 0,
  totalQuestions: 20,
  passMark: 80,
  scoreCeiling: 79,
  passed: false,
  categoryResults: [
    { type: 'pattern', correct: 5, total: 5 },
    { type: 'verbal', correct: 5, total: 5 },
    { type: 'spatial', correct: 5, total: 5 },
    { type: 'logical', correct: 5, total: 5 },
  ],
  review: [],
};

test('reveals that the test is impossible to pass and why the score is unreliable', () => {
  render(<ResultsPage result={result} onRestart={jest.fn()} onHome={jest.fn()} />);

  expect(screen.getByRole('heading', { name: /denied by design/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /you could not pass. nobody can/i })).toBeInTheDocument();
  expect(screen.getByText(/caps every displayed score at 79/i)).toBeInTheDocument();
  expect(screen.getByText(/cannot reliably reduce the full range of human intelligence/i)).toBeInTheDocument();
});
