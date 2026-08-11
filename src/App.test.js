import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
  window.scrollTo = jest.fn();
});

test('starts a balanced twelve-question round from the intro', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /how loud is your brain today/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /test my questionable genius/i }));

  expect(screen.getAllByText(/question 1 of 12/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('progressbar', { name: /quiz progress/i })).toBeInTheDocument();
});
