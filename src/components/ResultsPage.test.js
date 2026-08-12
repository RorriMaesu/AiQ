import { fireEvent, render, screen } from '@testing-library/react';
import ResultsPage, { getVerdictSize } from './ResultsPage';

beforeEach(() => {
  Element.prototype.scrollIntoView = jest.fn();
});

const result = {
  score: 43,
  rawScore: 100,
  correctCount: 20,
  timedOutCount: 0,
  totalQuestions: 20,
  passMark: 80,
  scoreCeiling: 79,
  passed: false,
  comparison: {
    averageScore: 69,
    percentile: 22,
    higherPercentage: 78,
    sampleSize: 8421,
  },
  categoryResults: [
    { type: 'pattern', correct: 5, total: 5, reportedScore: 41 },
    { type: 'verbal', correct: 5, total: 5, reportedScore: 47 },
    { type: 'spatial', correct: 5, total: 5, reportedScore: 38 },
    { type: 'logical', correct: 5, total: 5, reportedScore: 44 },
  ],
  review: [],
};

test('presents the score first and reveals the IQ-test lesson only on request', () => {
  render(<ResultsPage result={result} onRestart={jest.fn()} onHome={jest.fn()} />);

  expect(screen.getByRole('heading', { name: /disturbingly adequate/i })).toBeInTheDocument();
  expect(screen.getByText(/8,421 completions/i)).toBeInTheDocument();
  expect(screen.getByText(/22nd percentile/i)).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: /a snapshot. not a definition/i })).not.toBeInTheDocument();
  expect(screen.queryByText(/manipulated|fictional peer comparison/i)).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /reveal the truth about iq tests/i }));

  expect(screen.getByRole('heading', { name: /a snapshot. not a definition/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /test can be consistent and still be incomplete/i })).toBeInTheDocument();
  expect(screen.getByText(/score can describe an event/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /take another assessment/i })).toBeInTheDocument();
  expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
});

test('assigns compact typography to verdicts with long words', () => {
  expect(getVerdictSize('Disturbingly adequate')).toBe('standard');
  expect(getVerdictSize('Decorative reasoning detected')).toBe('medium');
  expect(getVerdictSize('Confidence without documentation')).toBe('long');
});
