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

test('delivers the deeper lesson without disclosing the hidden failure mechanic', () => {
  render(<ResultsPage result={result} onRestart={jest.fn()} onHome={jest.fn()} />);

  expect(screen.getByRole('heading', { name: /disturbingly adequate/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /a number is not a mind/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /iq-style tests are good at measuring performance on iq-style tests/i })).toBeInTheDocument();
  expect(screen.getByText(/you are not the number/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /prove the smug little machine wrong/i })).toBeInTheDocument();
  expect(screen.queryByText(/nobody can|pass mark|maximum awarded/i)).not.toBeInTheDocument();
});
