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
    const optionIds = question.options.map(({ id }) => id);
    const optionText = question.options.map(({ text }) => text.trim().toLowerCase());
    expect(optionIds).toEqual('ABCDE'.slice(0, question.options.length).split(''));
    expect(new Set(optionIds).size).toBe(question.options.length);
    expect(new Set(optionText).size).toBe(question.options.length);
    expect(question.options.every(({ text }) => text.trim().length > 0)).toBe(true);
    expect(question.options.some(({ id }) => id === question.correctAnswer)).toBe(true);
    expect(question.explanation.trim().length).toBeGreaterThan(20);
  });
});

test('question prompts and descriptions are not duplicated', () => {
  const signatures = questions.map(({ question, description }) => `${question}|${description || ''}`);
  expect(new Set(signatures).size).toBe(signatures.length);
});

test('randomly selected questions do not depend on unseen earlier items', () => {
  questions.forEach(({ question, description }) => {
    const fullPrompt = `${question} ${description || ''}`;
    expect(fullPrompt).not.toMatch(/using the same|as above|previous (?:question|figure|pattern)/i);
  });
});

test('known ambiguity regressions remain resolved', () => {
  const byId = Object.fromEntries(questions.map((question) => [question.id, question]));

  expect(byId[4].correctAnswer).toBe('D');
  expect(byId[4].options.find(({ id }) => id === 'D').text).toMatch(/no definite relationship/i);
  expect(byId[8].options.filter(({ text }) => /always wet when it rains/i.test(text))).toHaveLength(0);
  expect(byId[14].options.filter(({ text }) => /might be a cat|is not a cat/i.test(text))).toHaveLength(1);
  expect(byId[66].question).toMatch(/painted on every face/i);
  expect(byId[67].question).toMatch(/painted on every face/i);
});
