import questions from '../data/questions';
import { selectQuestionSet, updateRecentQuestionIds } from './questionSelection';

const steadyRandom = () => 0.42;

test('selects three questions from each category for a twelve-question round', () => {
  const selected = selectQuestionSet(questions, 12, [], steadyRandom);
  const counts = selected.reduce((totals, question) => ({
    ...totals,
    [question.type]: (totals[question.type] || 0) + 1,
  }), {});

  expect(selected).toHaveLength(12);
  expect(new Set(selected.map(({ id }) => id)).size).toBe(12);
  expect(counts).toEqual({ pattern: 3, verbal: 3, spatial: 3, logical: 3 });
});

test('avoids recently shown questions while fresh questions are available', () => {
  const recentIds = [1, 2, 3, 4];
  const selected = selectQuestionSet(questions, 12, recentIds, steadyRandom);
  expect(selected.every(({ id }) => !recentIds.includes(id))).toBe(true);
});

test('caps repeat history so another complete round remains available', () => {
  const history = updateRecentQuestionIds(
    Array.from({ length: 90 }, (_, index) => index + 1),
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
    100,
    12
  );

  expect(history).toHaveLength(88);
  expect(history.at(-1)).toBe(100);
});
