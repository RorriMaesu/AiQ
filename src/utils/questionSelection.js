export const QUESTION_TYPES = ['pattern', 'verbal', 'spatial', 'logical'];

export const shuffle = (items, random = Math.random) => {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
};

export const selectQuestionSet = (
  questions,
  count,
  recentIds = [],
  random = Math.random
) => {
  if (!Array.isArray(questions) || questions.length === 0 || count <= 0) {
    return [];
  }

  const requestedCount = Math.min(count, questions.length);
  const availableTypes = QUESTION_TYPES.filter((type) =>
    questions.some((question) => question.type === type)
  );
  const recentIdSet = new Set(recentIds);
  const selected = [];
  const selectedIds = new Set();

  availableTypes.forEach((type, typeIndex) => {
    const baseQuota = Math.floor(requestedCount / availableTypes.length);
    const quota = baseQuota + (typeIndex < requestedCount % availableTypes.length ? 1 : 0);
    const typeQuestions = questions.filter((question) => question.type === type);
    const freshQuestions = shuffle(
      typeQuestions.filter((question) => !recentIdSet.has(question.id)),
      random
    );
    const recycledQuestions = shuffle(
      typeQuestions.filter((question) => recentIdSet.has(question.id)),
      random
    );

    [...freshQuestions, ...recycledQuestions].slice(0, quota).forEach((question) => {
      selected.push(question);
      selectedIds.add(question.id);
    });
  });

  if (selected.length < requestedCount) {
    const remainingQuestions = shuffle(
      questions.filter((question) => !selectedIds.has(question.id)),
      random
    );
    selected.push(...remainingQuestions.slice(0, requestedCount - selected.length));
  }

  return shuffle(selected, random);
};

export const updateRecentQuestionIds = (
  recentIds,
  selectedIds,
  totalQuestionCount,
  testQuestionCount
) => {
  const maximumHistory = Math.max(0, totalQuestionCount - testQuestionCount);
  const selectedIdSet = new Set(selectedIds);
  const deduplicatedHistory = recentIds.filter((id) => !selectedIdSet.has(id));
  return [...deduplicatedHistory, ...selectedIds].slice(-maximumHistory);
};
