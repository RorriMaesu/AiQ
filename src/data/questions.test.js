import questions from './questions';

test('question bank is large, balanced, and structurally valid', () => {
  expect(questions).toHaveLength(100);
  expect(new Set(questions.map(({ id }) => id)).size).toBe(100);

  const countsByType = questions.reduce((counts, question) => ({
    ...counts,
    [question.type]: (counts[question.type] || 0) + 1,
  }), {});

  expect(countsByType).toEqual({ pattern: 25, verbal: 25, spatial: 25, logical: 25 });

  questions.forEach((question) => {
    expect(question.question).toEqual(expect.any(String));
    expect(question.options.length).toBeGreaterThanOrEqual(4);
    expect(new Set(question.options.map(({ id }) => id)).size).toBe(question.options.length);
    expect(question.options.some(({ id }) => id === question.correctAnswer)).toBe(true);
    expect(question.explanation).toEqual(expect.any(String));
  });
});

test('question prompts and descriptions are not duplicated', () => {
  const signatures = questions.map(({ question, description }) => `${question}|${description || ''}`);
  expect(new Set(signatures).size).toBe(signatures.length);
});
