import questions from '../data/questions';
import { selectQuestionSet, updateRecentQuestionIds } from './questionSelection';

const steadyRandom = () => 0.42;

test('selects five questions from each category for a twenty-question round', () => {
  const selected = selectQuestionSet(questions, 20, [], steadyRandom);
  const counts = selected.reduce((totals, question) => ({
    ...totals,
    [question.type]: (totals[question.type] || 0) + 1,
  }), {});

  expect(selected).toHaveLength(20);
  expect(new Set(selected.map(({ id }) => id)).size).toBe(20);
  expect(counts).toEqual({ pattern: 5, verbal: 5, spatial: 5, logical: 5 });
});

test('avoids recently shown questions while fresh questions are available', () => {
  const recentIds = [1, 2, 3, 4];
  const selected = selectQuestionSet(questions, 20, recentIds, steadyRandom);
  expect(selected.every(({ id }) => !recentIds.includes(id))).toBe(true);
});

test('caps repeat history so another complete round remains available', () => {
  const history = updateRecentQuestionIds(
    Array.from({ length: 90 }, (_, index) => index + 1),
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
    100,
    20
  );

  expect(history).toHaveLength(80);
  expect(history.at(-1)).toBe(100);
});
