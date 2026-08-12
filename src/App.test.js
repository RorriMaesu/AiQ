import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
  window.scrollTo = jest.fn();
});

test('starts a balanced twenty-question timed round from the intro', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /cognitive reasoning assessment/i })).toBeInTheDocument();
  expect(screen.getByText(/assessment is free/i)).toBeInTheDocument();
  expect(screen.queryByText(/questions in the vault/i)).not.toBeInTheDocument();
  fireEvent.click(screen.getAllByRole('button', { name: /^begin assessment/i })[0]);

  expect(screen.getAllByText(/item 1 of 20/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('timer', { name: /8 seconds remaining/i })).toBeInTheDocument();
  expect(screen.getByRole('progressbar', { name: /quiz progress/i })).toBeInTheDocument();
});
