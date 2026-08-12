// IQ Test Questions
// These questions are designed to look like legitimate IQ test questions

const questions = [
  {
    id: 1,
    type: 'pattern',
    question: 'What comes next in this sequence?',
    image: null,
    options: [
      { id: 'A', text: '16', image: null },
      { id: 'B', text: '25', image: null },
      { id: 'C', text: '36', image: null },
      { id: 'D', text: '49', image: null },
      { id: 'E', text: '64', image: null }
    ],
    description: '1, 4, 9, ?',
    correctAnswer: 'A',
    explanation: 'The sequence is 1², 2², 3², so the next number is 4² = 16.'
  },
  {
    id: 2,
    type: 'verbal',
    question: 'SYMPHONY is to COMPOSER as NOVEL is to:',
    image: null,
    options: [
      { id: 'A', text: 'LIBRARY', image: null },
      { id: 'B', text: 'AUTHOR', image: null },
      { id: 'C', text: 'BOOK', image: null },
      { id: 'D', text: 'READER', image: null },
      { id: 'E', text: 'PUBLISHER', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'A composer creates a symphony, and an author creates a novel.'
  },
  {
    id: 3,
    type: 'spatial',
    question: 'Which shape would complete the pattern?',
    image: null,
    options: [
      { id: 'A', text: 'Triangle', image: null },
      { id: 'B', text: 'Square', image: null },
      { id: 'C', text: 'Circle', image: null },
      { id: 'D', text: 'Pentagon', image: null },
      { id: 'E', text: 'Hexagon', image: null }
    ],
    description: 'If a triangle has 3 sides, and a square has 4 sides, what comes next?',
    correctAnswer: 'D',
    explanation: 'The shapes increase by one side: triangle (3), square (4), then pentagon (5).'
  },
  {
    id: 4,
    type: 'logical',
    question: 'All Zorks are Morks, and some Morks are Dorks. What can be concluded about Zorks and Dorks?',
    image: null,
    options: [
      { id: 'A', text: 'All Zorks are Dorks', image: null },
      { id: 'B', text: 'No Zorks are Dorks', image: null },
      { id: 'C', text: 'Some Zorks are Dorks', image: null },
      { id: 'D', text: 'No definite relationship follows', image: null },
      { id: 'E', text: 'All Dorks are Zorks', image: null }
    ],
    description: null,
    correctAnswer: 'D',
    explanation: 'The Dork Morks may overlap with the Zorks, but they may also be different Morks. The premises establish no definite relationship between Zorks and Dorks.'
  },
  {
    id: 5,
    type: 'pattern',
    question: 'What number should replace the question mark?',
    image: null,
    options: [
      { id: 'A', text: '8', image: null },
      { id: 'B', text: '10', image: null },
      { id: 'C', text: '12', image: null },
      { id: 'D', text: '14', image: null },
      { id: 'E', text: '16', image: null }
    ],
    description: '2, 4, 6, ?',
    correctAnswer: 'A',
    explanation: 'The pattern is adding 2 each time, so after 6 comes 8.'
  },
  {
    id: 6,
    type: 'verbal',
    question: 'FISH is to SCHOOL as WOLF is to:',
    image: null,
    options: [
      { id: 'A', text: 'PACK', image: null },
      { id: 'B', text: 'HERD', image: null },
      { id: 'C', text: 'FLOCK', image: null },
      { id: 'D', text: 'SWARM', image: null },
      { id: 'E', text: 'PRIDE', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'A group of fish is called a school, and a group of wolves is called a pack.'
  },
  {
    id: 7,
    type: 'spatial',
    question: 'If a cube has 6 faces, how many faces does a tetrahedron have?',
    image: null,
    options: [
      { id: 'A', text: '3', image: null },
      { id: 'B', text: '4', image: null },
      { id: 'C', text: '5', image: null },
      { id: 'D', text: '8', image: null },
      { id: 'E', text: '12', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'A tetrahedron is a triangular pyramid with 4 triangular faces.'
  },
  {
    id: 8,
    type: 'logical',
    question: 'Which statement logically follows from: "If it rains, the ground gets wet"?',
    image: null,
    options: [
      { id: 'A', text: 'If the ground is wet, then it rained', image: null },
      { id: 'B', text: 'If the ground is not wet, then it did not rain', image: null },
      { id: 'C', text: 'If it does not rain, the ground does not get wet', image: null },
      { id: 'D', text: 'Rain is the only thing that can make the ground wet', image: null },
      { id: 'E', text: 'The ground can get wet only when it rains', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'This is the contrapositive of the original statement, which is logically equivalent.'
  },
  {
    id: 9,
    type: 'pattern',
    question: 'What is the next letter in the sequence: A, C, E, G, ?',
    image: null,
    options: [
      { id: 'A', text: 'H', image: null },
      { id: 'B', text: 'I', image: null },
      { id: 'C', text: 'J', image: null },
      { id: 'D', text: 'K', image: null },
      { id: 'E', text: 'L', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'The sequence is every other letter of the alphabet, so after G comes I.'
  },
  {
    id: 10,
    type: 'verbal',
    question: 'DOCTOR is to PATIENT as TEACHER is to:',
    image: null,
    options: [
      { id: 'A', text: 'SCHOOL', image: null },
      { id: 'B', text: 'EDUCATION', image: null },
      { id: 'C', text: 'STUDENT', image: null },
      { id: 'D', text: 'CLASSROOM', image: null },
      { id: 'E', text: 'PRINCIPAL', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'A doctor treats a patient, and a teacher teaches a student.'
  },
  {
    id: 11,
    type: 'pattern',
    question: 'What number completes the pattern?',
    image: null,
    options: [
      { id: 'A', text: '15', image: null },
      { id: 'B', text: '18', image: null },
      { id: 'C', text: '21', image: null },
      { id: 'D', text: '24', image: null },
      { id: 'E', text: '27', image: null }
    ],
    description: '3, 6, 12, ?',
    correctAnswer: 'D',
    explanation: 'Each term doubles: 3, 6, 12, 24.'
  },
  {
    id: 12,
    type: 'verbal',
    question: 'CANVAS is to PAINTER as STAGE is to:',
    image: null,
    options: [
      { id: 'A', text: 'AUDIENCE', image: null },
      { id: 'B', text: 'THEATER', image: null },
      { id: 'C', text: 'ACTOR', image: null },
      { id: 'D', text: 'DIRECTOR', image: null },
      { id: 'E', text: 'CURTAIN', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'A painter works on a canvas, and an actor performs on a stage.'
  },
  {
    id: 13,
    type: 'spatial',
    question: 'If you fold a square paper in half diagonally, what shape do you get?',
    image: null,
    options: [
      { id: 'A', text: 'Rectangle', image: null },
      { id: 'B', text: 'Triangle', image: null },
      { id: 'C', text: 'Rhombus', image: null },
      { id: 'D', text: 'Trapezoid', image: null },
      { id: 'E', text: 'Pentagon', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'The diagonal divides the square into two congruent right triangles, which overlap when the paper is folded.'
  },
  {
    id: 14,
    type: 'logical',
    question: 'All cats have tails, and Fluffy has a tail. Which conclusion about Fluffy is possible but not proven?',
    image: null,
    options: [
      { id: 'A', text: 'Fluffy is definitely a cat', image: null },
      { id: 'B', text: 'Fluffy might be a cat', image: null },
      { id: 'C', text: 'Fluffy has no tail', image: null },
      { id: 'D', text: 'All tailed animals are cats', image: null },
      { id: 'E', text: 'None of the above', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'Having a tail is necessary but not sufficient to be a cat. Fluffy might be a cat, but the premise does not prove it.'
  },
  {
    id: 15,
    type: 'pattern',
    question: 'What is the missing number?',
    image: null,
    options: [
      { id: 'A', text: '9', image: null },
      { id: 'B', text: '12', image: null },
      { id: 'C', text: '15', image: null },
      { id: 'D', text: '18', image: null },
      { id: 'E', text: '21', image: null }
    ],
    description: '3, 6, ?, 24, 48',
    correctAnswer: 'B',
    explanation: 'Each number is multiplied by 2 to get the next number: 3×2=6, 6×2=12, 12×2=24, 24×2=48.'
  },
  {
    id: 16,
    type: 'verbal',
    question: 'OASIS is to DESERT as ISLAND is to:',
    image: null,
    options: [
      { id: 'A', text: 'BEACH', image: null },
      { id: 'B', text: 'PALM', image: null },
      { id: 'C', text: 'OCEAN', image: null },
      { id: 'D', text: 'SAND', image: null },
      { id: 'E', text: 'TROPICAL', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'An oasis is a fertile spot in a desert, and an island is a piece of land surrounded by ocean.'
  },
  {
    id: 17,
    type: 'spatial',
    question: 'How many edges does a triangular prism have?',
    image: null,
    options: [
      { id: 'A', text: '6', image: null },
      { id: 'B', text: '7', image: null },
      { id: 'C', text: '8', image: null },
      { id: 'D', text: '9', image: null },
      { id: 'E', text: '12', image: null }
    ],
    description: null,
    correctAnswer: 'D',
    explanation: 'A triangular prism has 9 edges: 3 edges on each triangular face (6 total) plus 3 edges connecting the triangular faces.'
  },
  {
    id: 18,
    type: 'logical',
    question: 'If no heroes are cowards and some soldiers are cowards, then:',
    image: null,
    options: [
      { id: 'A', text: 'All soldiers are heroes', image: null },
      { id: 'B', text: 'No soldiers are heroes', image: null },
      { id: 'C', text: 'Some soldiers are not heroes', image: null },
      { id: 'D', text: 'Some heroes are soldiers', image: null },
      { id: 'E', text: 'All heroes are soldiers', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'Since some soldiers are cowards and no heroes are cowards, it follows that some soldiers cannot be heroes.'
  },
  {
    id: 19,
    type: 'pattern',
    question: 'What comes next in this sequence?',
    image: null,
    options: [
      { id: 'A', text: '13', image: null },
      { id: 'B', text: '15', image: null },
      { id: 'C', text: '17', image: null },
      { id: 'D', text: '19', image: null },
      { id: 'E', text: '21', image: null }
    ],
    description: '3, 5, 7, 11, ?',
    correctAnswer: 'A',
    explanation: 'The sequence consists of prime numbers, so after 11 comes 13.'
  },
  {
    id: 20,
    type: 'verbal',
    question: 'HAMMER is to NAIL as SCREWDRIVER is to:',
    image: null,
    options: [
      { id: 'A', text: 'DRILL', image: null },
      { id: 'B', text: 'WRENCH', image: null },
      { id: 'C', text: 'SCREW', image: null },
      { id: 'D', text: 'TOOL', image: null },
      { id: 'E', text: 'BOLT', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'A hammer is used to drive nails, and a screwdriver is used to drive screws.'
  },
  {
    id: 21,
    type: 'spatial',
    question: 'A cube is unfolded into a flat net. How many squares must the net contain?',
    image: null,
    options: [
      { id: 'A', text: '5', image: null },
      { id: 'B', text: '6', image: null },
      { id: 'C', text: '8', image: null },
      { id: 'D', text: '10', image: null },
      { id: 'E', text: '12', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'A cube has 6 faces, so every valid cube net contains exactly 6 squares.'
  },
  {
    id: 22,
    type: 'logical',
    question: 'If X > Y and Y > Z, which statement must be true?',
    image: null,
    options: [
      { id: 'A', text: 'X = Z', image: null },
      { id: 'B', text: 'X < Z', image: null },
      { id: 'C', text: 'X > Z', image: null },
      { id: 'D', text: 'X = Y', image: null },
      { id: 'E', text: 'Y = Z', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'By the transitive property, if X > Y and Y > Z, then X > Z.'
  },
  {
    id: 23,
    type: 'pattern',
    question: 'What is the next number in this sequence?',
    image: null,
    options: [
      { id: 'A', text: '8', image: null },
      { id: 'B', text: '9', image: null },
      { id: 'C', text: '10', image: null },
      { id: 'D', text: '11', image: null },
      { id: 'E', text: '12', image: null }
    ],
    description: '1, 2, 4, 7, ?',
    correctAnswer: 'D',
    explanation: 'The pattern is +1, +2, +3, +4, so after 7 comes 7+4=11.'
  },
  {
    id: 24,
    type: 'verbal',
    question: 'LIGHT is to DARK as NOISE is to:',
    image: null,
    options: [
      { id: 'A', text: 'SOUND', image: null },
      { id: 'B', text: 'LOUD', image: null },
      { id: 'C', text: 'QUIET', image: null },
      { id: 'D', text: 'MUSIC', image: null },
      { id: 'E', text: 'HEARING', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'Light and dark are opposites, and noise and quiet are opposites.'
  },
  {
    id: 25,
    type: 'spatial',
    question: 'What time appears on an analog clock’s mirror image when the actual clock reads 3:15?',
    image: null,
    options: [
      { id: 'A', text: '3:15', image: null },
      { id: 'B', text: '8:45', image: null },
      { id: 'C', text: '9:45', image: null },
      { id: 'D', text: '8:15', image: null },
      { id: 'E', text: '6:45', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'For an analog clock, subtract the actual time from 11:60. The mirror image of 3:15 therefore reads 8:45.'
  },
  {
    id: 26,
    type: 'logical',
    question: 'All mammals are warm-blooded. No reptiles are warm-blooded. Therefore:',
    image: null,
    options: [
      { id: 'A', text: 'All warm-blooded animals are mammals', image: null },
      { id: 'B', text: 'No mammals are reptiles', image: null },
      { id: 'C', text: 'Some reptiles might be mammals', image: null },
      { id: 'D', text: 'All reptiles are cold-blooded', image: null },
      { id: 'E', text: 'Some mammals might be reptiles', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'Since all mammals are warm-blooded and no reptiles are warm-blooded, it follows that no mammals can be reptiles.'
  },
  {
    id: 27,
    type: 'pattern',
    question: 'What letter comes next in this sequence?',
    image: null,
    options: [
      { id: 'A', text: 'F', image: null },
      { id: 'B', text: 'K', image: null },
      { id: 'C', text: 'H', image: null },
      { id: 'D', text: 'I', image: null },
      { id: 'E', text: 'J', image: null }
    ],
    description: 'A, B, D, G, ?',
    correctAnswer: 'B',
    explanation: 'The jumps increase by one letter each time: +1, +2, +3, then +4. G + 4 is K.'
  },
  {
    id: 28,
    type: 'verbal',
    question: 'WATER is to THIRST as FOOD is to:',
    image: null,
    options: [
      { id: 'A', text: 'EAT', image: null },
      { id: 'B', text: 'HUNGER', image: null },
      { id: 'C', text: 'NUTRITION', image: null },
      { id: 'D', text: 'MEAL', image: null },
      { id: 'E', text: 'TASTE', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'Water satisfies thirst, and food satisfies hunger.'
  },
  {
    id: 29,
    type: 'spatial',
    question: 'If a pyramid has a square base, how many edges does it have?',
    image: null,
    options: [
      { id: 'A', text: '4', image: null },
      { id: 'B', text: '5', image: null },
      { id: 'C', text: '6', image: null },
      { id: 'D', text: '8', image: null },
      { id: 'E', text: '12', image: null }
    ],
    description: null,
    correctAnswer: 'D',
    explanation: 'A square pyramid has 4 edges on the base and 4 edges connecting the base to the apex, for a total of 8 edges.'
  },
  {
    id: 30,
    type: 'logical',
    question: 'If it is false that "all birds can fly", then which statement must be true?',
    image: null,
    options: [
      { id: 'A', text: 'No birds can fly', image: null },
      { id: 'B', text: 'Some birds cannot fly', image: null },
      { id: 'C', text: 'Most birds cannot fly', image: null },
      { id: 'D', text: 'All birds cannot fly', image: null },
      { id: 'E', text: 'Some birds can fly', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'The negation of "all birds can fly" is "some birds cannot fly".'
  },
  {
    id: 31,
    type: 'pattern',
    question: 'What number comes next?',
    image: null,
    options: [
      { id: 'A', text: '24', image: null },
      { id: 'B', text: '28', image: null },
      { id: 'C', text: '30', image: null },
      { id: 'D', text: '32', image: null }
    ],
    description: '2, 6, 12, 20, ?',
    correctAnswer: 'C',
    explanation: 'The gaps are +4, +6, +8, so the next gap is +10. That gives 30.'
  },
  {
    id: 32,
    type: 'pattern',
    question: 'Complete the shrinking sequence.',
    image: null,
    options: [
      { id: 'A', text: '0', image: null },
      { id: 'B', text: '1', image: null },
      { id: 'C', text: '2', image: null },
      { id: 'D', text: '3', image: null }
    ],
    description: '81, 27, 9, 3, ?',
    correctAnswer: 'B',
    explanation: 'Each term is divided by 3, so 3 becomes 1.'
  },
  {
    id: 33,
    type: 'pattern',
    question: 'Which letter continues the pattern?',
    image: null,
    options: [
      { id: 'A', text: 'R', image: null },
      { id: 'B', text: 'S', image: null },
      { id: 'C', text: 'T', image: null },
      { id: 'D', text: 'U', image: null }
    ],
    description: 'B, E, I, N, ?',
    correctAnswer: 'C',
    explanation: 'The jumps are +3, +4, +5, then +6 letters. N + 6 is T.'
  },
  {
    id: 34,
    type: 'pattern',
    question: 'What is the next number?',
    image: null,
    options: [
      { id: 'A', text: '6', image: null },
      { id: 'B', text: '7', image: null },
      { id: 'C', text: '8', image: null },
      { id: 'D', text: '10', image: null }
    ],
    description: '1, 1, 2, 3, 5, ?',
    correctAnswer: 'C',
    explanation: 'Each term is the sum of the previous two, so 3 + 5 = 8.'
  },
  {
    id: 35,
    type: 'pattern',
    question: 'What number belongs at the end?',
    image: null,
    options: [
      { id: 'A', text: '39', image: null },
      { id: 'B', text: '47', image: null },
      { id: 'C', text: '49', image: null },
      { id: 'D', text: '51', image: null }
    ],
    description: '4, 7, 13, 25, ?',
    correctAnswer: 'C',
    explanation: 'Double each term and subtract 1: 25 × 2 − 1 = 49.'
  },
  {
    id: 36,
    type: 'pattern',
    question: 'Find the missing final term.',
    image: null,
    options: [
      { id: 'A', text: '56', image: null },
      { id: 'B', text: '60', image: null },
      { id: 'C', text: '62', image: null },
      { id: 'D', text: '64', image: null }
    ],
    description: '100, 96, 88, 76, ?',
    correctAnswer: 'B',
    explanation: 'Subtract 4, then 8, then 12, then 16. The next term is 60.'
  },
  {
    id: 37,
    type: 'pattern',
    question: 'Which letter comes next?',
    image: null,
    options: [
      { id: 'A', text: 'G', image: null },
      { id: 'B', text: 'H', image: null },
      { id: 'C', text: 'I', image: null },
      { id: 'D', text: 'J', image: null }
    ],
    description: 'Z, W, S, N, ?',
    correctAnswer: 'B',
    explanation: 'Move backward 3, 4, 5, then 6 letters. N − 6 is H.'
  },
  {
    id: 38,
    type: 'pattern',
    question: 'What follows 12?',
    image: null,
    options: [
      { id: 'A', text: '15', image: null },
      { id: 'B', text: '16', image: null },
      { id: 'C', text: '17', image: null },
      { id: 'D', text: '18', image: null }
    ],
    description: '2, 3, 5, 8, 12, ?',
    correctAnswer: 'C',
    explanation: 'The gaps grow from +1 through +4, so the next gap is +5. That gives 17.'
  },
  {
    id: 39,
    type: 'pattern',
    question: 'Complete the alternating operation.',
    image: null,
    options: [
      { id: 'A', text: '24', image: null },
      { id: 'B', text: '26', image: null },
      { id: 'C', text: '28', image: null },
      { id: 'D', text: '30', image: null }
    ],
    description: '5, 10, 8, 16, 14, ?',
    correctAnswer: 'C',
    explanation: 'The operations alternate between ×2 and −2. So 14 × 2 = 28.'
  },
  {
    id: 40,
    type: 'pattern',
    question: 'What is the fifth cube?',
    image: null,
    options: [
      { id: 'A', text: '100', image: null },
      { id: 'B', text: '121', image: null },
      { id: 'C', text: '125', image: null },
      { id: 'D', text: '144', image: null }
    ],
    description: '1, 8, 27, 64, ?',
    correctAnswer: 'C',
    explanation: 'These are consecutive cubes: 1³, 2³, 3³, 4³, then 5³ = 125.'
  },
  {
    id: 41,
    type: 'pattern',
    question: 'Which number is next?',
    image: null,
    options: [
      { id: 'A', text: '39', image: null },
      { id: 'B', text: '40', image: null },
      { id: 'C', text: '41', image: null },
      { id: 'D', text: '43', image: null }
    ],
    description: '13, 17, 23, 31, ?',
    correctAnswer: 'C',
    explanation: 'The gaps are +4, +6, +8, then +10. So 31 + 10 = 41.'
  },
  {
    id: 42,
    type: 'pattern',
    question: 'Complete the letter sequence.',
    image: null,
    options: [
      { id: 'A', text: 'Q', image: null },
      { id: 'B', text: 'R', image: null },
      { id: 'C', text: 'S', image: null },
      { id: 'D', text: 'T', image: null }
    ],
    description: 'A, D, H, M, ?',
    correctAnswer: 'C',
    explanation: 'The jumps are +3, +4, +5, then +6 letters. M + 6 is S.'
  },
  {
    id: 43,
    type: 'pattern',
    question: 'What square comes next?',
    image: null,
    options: [
      { id: 'A', text: '64', image: null },
      { id: 'B', text: '72', image: null },
      { id: 'C', text: '75', image: null },
      { id: 'D', text: '77', image: null }
    ],
    description: '144, 121, 100, 81, ?',
    correctAnswer: 'A',
    explanation: 'These are 12², 11², 10², 9², then 8² = 64.'
  },
  {
    id: 44,
    type: 'pattern',
    question: 'What comes after 23?',
    image: null,
    options: [
      { id: 'A', text: '45', image: null },
      { id: 'B', text: '46', image: null },
      { id: 'C', text: '47', image: null },
      { id: 'D', text: '48', image: null }
    ],
    description: '2, 5, 11, 23, ?',
    correctAnswer: 'C',
    explanation: 'Double each term and add 1. So 23 × 2 + 1 = 47.'
  },
  {
    id: 45,
    type: 'pattern',
    question: 'Finish the two-step pattern.',
    image: null,
    options: [
      { id: 'A', text: '40', image: null },
      { id: 'B', text: '42', image: null },
      { id: 'C', text: '44', image: null },
      { id: 'D', text: '46', image: null }
    ],
    description: '7, 14, 12, 24, 22, ?',
    correctAnswer: 'C',
    explanation: 'The operations alternate between ×2 and −2. So 22 × 2 = 44.'
  },
  {
    id: 46,
    type: 'pattern',
    question: 'What is the next product?',
    image: null,
    options: [
      { id: 'A', text: '96', image: null },
      { id: 'B', text: '100', image: null },
      { id: 'C', text: '120', image: null },
      { id: 'D', text: '144', image: null }
    ],
    description: '1, 2, 6, 24, ?',
    correctAnswer: 'C',
    explanation: 'Multiply successively by 2, 3, 4, then 5. The next term is 24 × 5 = 120.'
  },
  {
    id: 47,
    type: 'pattern',
    question: 'Where does the countdown land?',
    image: null,
    options: [
      { id: 'A', text: '14', image: null },
      { id: 'B', text: '15', image: null },
      { id: 'C', text: '16', image: null },
      { id: 'D', text: '17', image: null }
    ],
    description: '30, 29, 27, 24, 20, ?',
    correctAnswer: 'B',
    explanation: 'Subtract 1, 2, 3, 4, then 5. The answer is 15.'
  },
  {
    id: 48,
    type: 'verbal',
    question: 'BIRD is to NEST as BEE is to:',
    image: null,
    options: [
      { id: 'A', text: 'HONEY', image: null },
      { id: 'B', text: 'HIVE', image: null },
      { id: 'C', text: 'FLOWER', image: null },
      { id: 'D', text: 'SWARM', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'A nest is a bird’s home, and a hive is a bee’s home.'
  },
  {
    id: 49,
    type: 'verbal',
    question: 'GLOVE is to HAND as SOCK is to:',
    image: null,
    options: [
      { id: 'A', text: 'SHOE', image: null },
      { id: 'B', text: 'ANKLE', image: null },
      { id: 'C', text: 'FOOT', image: null },
      { id: 'D', text: 'TOE', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'A glove covers a hand, and a sock covers a foot.'
  },
  {
    id: 50,
    type: 'verbal',
    question: 'BOOK is to READING as SONG is to:',
    image: null,
    options: [
      { id: 'A', text: 'LISTENING', image: null },
      { id: 'B', text: 'WRITE', image: null },
      { id: 'C', text: 'DANCE', image: null },
      { id: 'D', text: 'SPEAK', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'Reading is how a book is experienced; listening is how a song is experienced.'
  },
  {
    id: 51,
    type: 'verbal',
    question: 'Which word is the best opposite of GENEROUS?',
    image: null,
    options: [
      { id: 'A', text: 'KIND', image: null },
      { id: 'B', text: 'STINGY', image: null },
      { id: 'C', text: 'CHEERFUL', image: null },
      { id: 'D', text: 'WEALTHY', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'Stingy means unwilling to give or share, the opposite of generous.'
  },
  {
    id: 52,
    type: 'verbal',
    question: 'PUPPY is to DOG as KITTEN is to:',
    image: null,
    options: [
      { id: 'A', text: 'CUB', image: null },
      { id: 'B', text: 'CAT', image: null },
      { id: 'C', text: 'LITTER', image: null },
      { id: 'D', text: 'FUR', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'A puppy is a young dog, and a kitten is a young cat.'
  },
  {
    id: 53,
    type: 'verbal',
    question: 'SCALPEL is to SURGEON as GAVEL is to:',
    image: null,
    options: [
      { id: 'A', text: 'LAWYER', image: null },
      { id: 'B', text: 'JUDGE', image: null },
      { id: 'C', text: 'CARPENTER', image: null },
      { id: 'D', text: 'WITNESS', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'A scalpel is associated with a surgeon’s work, and a gavel with a judge’s work.'
  },
  {
    id: 54,
    type: 'verbal',
    question: 'WHISPER is to SHOUT as DRIZZLE is to:',
    image: null,
    options: [
      { id: 'A', text: 'CLOUD', image: null },
      { id: 'B', text: 'MIST', image: null },
      { id: 'C', text: 'DOWNPOUR', image: null },
      { id: 'D', text: 'PUDDLE', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'A shout is an intense whisper; a downpour is an intense drizzle.'
  },
  {
    id: 55,
    type: 'verbal',
    question: 'CLOCK is to TIME as THERMOMETER is to:',
    image: null,
    options: [
      { id: 'A', text: 'WEATHER', image: null },
      { id: 'B', text: 'TEMPERATURE', image: null },
      { id: 'C', text: 'MERCURY', image: null },
      { id: 'D', text: 'HEAT', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'A clock measures time; a thermometer measures temperature.'
  },
  {
    id: 56,
    type: 'verbal',
    question: 'CHAPTER is to BOOK as SCENE is to:',
    image: null,
    options: [
      { id: 'A', text: 'ACTOR', image: null },
      { id: 'B', text: 'PLAY', image: null },
      { id: 'C', text: 'STAGE', image: null },
      { id: 'D', text: 'AUDIENCE', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'A chapter is a division of a book; a scene is a division of a play.'
  },
  {
    id: 57,
    type: 'verbal',
    question: 'SEED is to PLANT as EGG is to:',
    image: null,
    options: [
      { id: 'A', text: 'NEST', image: null },
      { id: 'B', text: 'SHELL', image: null },
      { id: 'C', text: 'BIRD', image: null },
      { id: 'D', text: 'FEATHER', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'A seed can develop into a plant; an egg can develop into a bird.'
  },
  {
    id: 58,
    type: 'verbal',
    question: 'ODOMETER is to DISTANCE as SCALE is to:',
    image: null,
    options: [
      { id: 'A', text: 'HEIGHT', image: null },
      { id: 'B', text: 'WEIGHT', image: null },
      { id: 'C', text: 'SPEED', image: null },
      { id: 'D', text: 'SIZE', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'An odometer measures distance; a scale measures weight.'
  },
  {
    id: 59,
    type: 'verbal',
    question: 'BARK is to TREE as SKIN is to:',
    image: null,
    options: [
      { id: 'A', text: 'HUMAN', image: null },
      { id: 'B', text: 'HAIR', image: null },
      { id: 'C', text: 'BONE', image: null },
      { id: 'D', text: 'CLOTHING', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'Bark is the protective outer covering of a tree; skin is the outer covering of a human.'
  },
  {
    id: 60,
    type: 'verbal',
    question: 'OPTIMIST is to HOPEFUL as PESSIMIST is to:',
    image: null,
    options: [
      { id: 'A', text: 'GLOOMY', image: null },
      { id: 'B', text: 'CERTAIN', image: null },
      { id: 'C', text: 'CURIOUS', image: null },
      { id: 'D', text: 'LOUD', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'An optimist tends to be hopeful; a pessimist tends to be gloomy.'
  },
  {
    id: 61,
    type: 'verbal',
    question: 'Which word does not belong?',
    image: null,
    options: [
      { id: 'A', text: 'COPPER', image: null },
      { id: 'B', text: 'IRON', image: null },
      { id: 'C', text: 'GRANITE', image: null },
      { id: 'D', text: 'SILVER', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'Copper, iron, and silver are metals. Granite is a rock.'
  },
  {
    id: 62,
    type: 'verbal',
    question: 'BAKER is to BREAD as POTTER is to:',
    image: null,
    options: [
      { id: 'A', text: 'CLAY', image: null },
      { id: 'B', text: 'POTTERY', image: null },
      { id: 'C', text: 'KILN', image: null },
      { id: 'D', text: 'PAINT', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'A baker produces bread; a potter produces pottery.'
  },
  {
    id: 63,
    type: 'verbal',
    question: 'COMPASS is to DIRECTION as CALENDAR is to:',
    image: null,
    options: [
      { id: 'A', text: 'CLOCK', image: null },
      { id: 'B', text: 'DATE', image: null },
      { id: 'C', text: 'YEAR', image: null },
      { id: 'D', text: 'PAPER', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'A compass identifies direction; a calendar identifies a date.'
  },
  {
    id: 64,
    type: 'verbal',
    question: 'SILENT is to QUIET as RAPID is to:',
    image: null,
    options: [
      { id: 'A', text: 'FAST', image: null },
      { id: 'B', text: 'LATE', image: null },
      { id: 'C', text: 'NOISY', image: null },
      { id: 'D', text: 'STILL', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'Silent and quiet are synonyms; rapid and fast are synonyms.'
  },
  {
    id: 65,
    type: 'spatial',
    question: 'A cube is painted on every face, then cut into 27 equal cubes. How many small cubes have paint on three faces?',
    image: null,
    options: [
      { id: 'A', text: '4', image: null },
      { id: 'B', text: '6', image: null },
      { id: 'C', text: '8', image: null },
      { id: 'D', text: '12', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'Only the 8 corner cubes touch three painted faces.'
  },
  {
    id: 66,
    type: 'spatial',
    question: 'A cube is painted on every face, then cut into 27 equal cubes. How many small cubes have paint on exactly two faces?',
    image: null,
    options: [
      { id: 'A', text: '8', image: null },
      { id: 'B', text: '12', image: null },
      { id: 'C', text: '16', image: null },
      { id: 'D', text: '20', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'Each of the cube’s 12 edges has one non-corner middle cube with exactly two painted faces.'
  },
  {
    id: 67,
    type: 'spatial',
    question: 'A cube is painted on every face, then cut into 27 equal cubes. How many small cubes have paint on exactly one face?',
    image: null,
    options: [
      { id: 'A', text: '6', image: null },
      { id: 'B', text: '8', image: null },
      { id: 'C', text: '12', image: null },
      { id: 'D', text: '18', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'Each of the 6 faces has one center cube that touches only that outer face.'
  },
  {
    id: 68,
    type: 'spatial',
    question: 'How many lines of symmetry does a rectangle that is not a square have?',
    image: null,
    options: [
      { id: 'A', text: '1', image: null },
      { id: 'B', text: '2', image: null },
      { id: 'C', text: '3', image: null },
      { id: 'D', text: '4', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'A non-square rectangle has one horizontal and one vertical line of symmetry.'
  },
  {
    id: 69,
    type: 'spatial',
    question: 'How many distinct orientations make a regular hexagon match its original outline during a full 360° turn?',
    image: null,
    options: [
      { id: 'A', text: '3', image: null },
      { id: 'B', text: '4', image: null },
      { id: 'C', text: '6', image: null },
      { id: 'D', text: '8', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'A regular hexagon has rotational symmetry of order 6, matching every 60 degrees.'
  },
  {
    id: 70,
    type: 'spatial',
    question: 'You face west, turn left, then right, then right again. Which direction are you facing?',
    image: null,
    options: [
      { id: 'A', text: 'NORTH', image: null },
      { id: 'B', text: 'SOUTH', image: null },
      { id: 'C', text: 'EAST', image: null },
      { id: 'D', text: 'WEST', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'West → left to south → right to west → right to north.'
  },
  {
    id: 71,
    type: 'spatial',
    question: 'An arrow points up. Rotate it 135° clockwise, then 45° counterclockwise. Where does it point?',
    image: null,
    options: [
      { id: 'A', text: 'UP', image: null },
      { id: 'B', text: 'RIGHT', image: null },
      { id: 'C', text: 'DOWN', image: null },
      { id: 'D', text: 'LEFT', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'The net rotation is 90° clockwise, so the arrow points right.'
  },
  {
    id: 72,
    type: 'spatial',
    question: 'How many vertices does a cube have?',
    image: null,
    options: [
      { id: 'A', text: '6', image: null },
      { id: 'B', text: '8', image: null },
      { id: 'C', text: '10', image: null },
      { id: 'D', text: '12', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'A cube has 8 corner points, or vertices.'
  },
  {
    id: 73,
    type: 'spatial',
    question: 'How many triangular faces does an octahedron have?',
    image: null,
    options: [
      { id: 'A', text: '6', image: null },
      { id: 'B', text: '8', image: null },
      { id: 'C', text: '10', image: null },
      { id: 'D', text: '12', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'An octahedron is made from 8 triangular faces.'
  },
  {
    id: 74,
    type: 'spatial',
    question: 'How many faces does a pentagonal prism have?',
    image: null,
    options: [
      { id: 'A', text: '5', image: null },
      { id: 'B', text: '6', image: null },
      { id: 'C', text: '7', image: null },
      { id: 'D', text: '10', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'It has 2 pentagonal bases and 5 rectangular side faces, for 7 total.'
  },
  {
    id: 75,
    type: 'spatial',
    question: 'How many vertices does a square-based pyramid have?',
    image: null,
    options: [
      { id: 'A', text: '4', image: null },
      { id: 'B', text: '5', image: null },
      { id: 'C', text: '6', image: null },
      { id: 'D', text: '8', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'There are 4 vertices on the square base plus the apex, making 5.'
  },
  {
    id: 76,
    type: 'spatial',
    question: 'How many squares of all sizes appear in a 3 × 3 arrangement of equal square cells?',
    image: null,
    options: [
      { id: 'A', text: '9', image: null },
      { id: 'B', text: '12', image: null },
      { id: 'C', text: '14', image: null },
      { id: 'D', text: '16', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'There are 9 small squares, 4 medium squares, and 1 large square: 14 total.'
  },
  {
    id: 77,
    type: 'spatial',
    question: 'Which capital letter has a vertical line of symmetry in a typical block font?',
    image: null,
    options: [
      { id: 'A', text: 'A', image: null },
      { id: 'B', text: 'F', image: null },
      { id: 'C', text: 'G', image: null },
      { id: 'D', text: 'R', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'A block capital A mirrors across a vertical line; F, G, and R do not.'
  },
  {
    id: 78,
    type: 'spatial',
    question: 'Fold a rectangle in half, then fold it in half again in the perpendicular direction. How many equal layers cover the final shape?',
    image: null,
    options: [
      { id: 'A', text: '2', image: null },
      { id: 'B', text: '3', image: null },
      { id: 'C', text: '4', image: null },
      { id: 'D', text: '8', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'Each fold doubles the layers: 1 becomes 2, then 4.'
  },
  {
    id: 79,
    type: 'spatial',
    question: 'What is the smaller angle between the hands of a clock at exactly 3:00?',
    image: null,
    options: [
      { id: 'A', text: '45°', image: null },
      { id: 'B', text: '60°', image: null },
      { id: 'C', text: '90°', image: null },
      { id: 'D', text: '120°', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'At 3:00 the minute hand points to 12 and the hour hand to 3, forming a right angle.'
  },
  {
    id: 80,
    type: 'spatial',
    question: 'Which shape has no line of symmetry?',
    image: null,
    options: [
      { id: 'A', text: 'SQUARE', image: null },
      { id: 'B', text: 'CIRCLE', image: null },
      { id: 'C', text: 'EQUILATERAL TRIANGLE', image: null },
      { id: 'D', text: 'SCALENE TRIANGLE', image: null }
    ],
    description: null,
    correctAnswer: 'D',
    explanation: 'A scalene triangle has unequal sides and no reflection symmetry.'
  },
  {
    id: 81,
    type: 'spatial',
    question: 'How many diagonals can be drawn inside a regular pentagon?',
    image: null,
    options: [
      { id: 'A', text: '3', image: null },
      { id: 'B', text: '4', image: null },
      { id: 'C', text: '5', image: null },
      { id: 'D', text: '10', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'A pentagon has n(n − 3)/2 diagonals: 5 × 2 / 2 = 5.'
  },
  {
    id: 82,
    type: 'spatial',
    question: 'What shape is made by slicing a cylinder parallel to its circular base?',
    image: null,
    options: [
      { id: 'A', text: 'CIRCLE', image: null },
      { id: 'B', text: 'RECTANGLE', image: null },
      { id: 'C', text: 'TRIANGLE', image: null },
      { id: 'D', text: 'OVAL ONLY', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'A parallel cross-section of a cylinder matches its circular base.'
  },
  {
    id: 83,
    type: 'logical',
    question: 'All Bloops are Razzies. No Razzies are Tazzies. What must be true?',
    image: null,
    options: [
      { id: 'A', text: 'No Bloops are Tazzies', image: null },
      { id: 'B', text: 'All Tazzies are Bloops', image: null },
      { id: 'C', text: 'Some Bloops are Tazzies', image: null },
      { id: 'D', text: 'All Razzies are Bloops', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'Because every Bloop is a Razzy and no Razzy is a Tazzy, no Bloop can be a Tazzy.'
  },
  {
    id: 84,
    type: 'logical',
    question: 'Some poets are dreamers. All dreamers are readers. What follows?',
    image: null,
    options: [
      { id: 'A', text: 'All poets are readers', image: null },
      { id: 'B', text: 'Some poets are readers', image: null },
      { id: 'C', text: 'No readers are poets', image: null },
      { id: 'D', text: 'All readers are dreamers', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'The poets who are dreamers must also be readers.'
  },
  {
    id: 85,
    type: 'logical',
    question: 'Mia is older than Leo. Leo is older than Sam. Who is oldest?',
    image: null,
    options: [
      { id: 'A', text: 'MIA', image: null },
      { id: 'B', text: 'LEO', image: null },
      { id: 'C', text: 'SAM', image: null },
      { id: 'D', text: 'CANNOT TELL', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'The order is Mia, then Leo, then Sam, so Mia is oldest.'
  },
  {
    id: 86,
    type: 'logical',
    question: 'If the alarm is set, the blue light blinks. The blue light is not blinking. What follows?',
    image: null,
    options: [
      { id: 'A', text: 'The alarm is not set', image: null },
      { id: 'B', text: 'The alarm is set', image: null },
      { id: 'C', text: 'The light is broken', image: null },
      { id: 'D', text: 'Nothing can be concluded', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'This is the contrapositive: if the required blinking is absent, the alarm is not set.'
  },
  {
    id: 87,
    type: 'logical',
    question: 'Nora traveled by exactly one of two options: train or bus. She did not take the train. What did she take?',
    image: null,
    options: [
      { id: 'A', text: 'BUS', image: null },
      { id: 'B', text: 'TRAIN', image: null },
      { id: 'C', text: 'BOTH', image: null },
      { id: 'D', text: 'CANNOT TELL', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'The only two stated possibilities are train or bus; excluding train leaves bus.'
  },
  {
    id: 88,
    type: 'logical',
    question: 'No chefs are careless. Some artists are chefs. What must be true?',
    image: null,
    options: [
      { id: 'A', text: 'All artists are careful', image: null },
      { id: 'B', text: 'Some artists are not careless', image: null },
      { id: 'C', text: 'No artists are chefs', image: null },
      { id: 'D', text: 'Some chefs are careless', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'The artists who are chefs cannot be careless.'
  },
  {
    id: 89,
    type: 'logical',
    question: 'Exactly one of propositions P and Q is true. If P is true, what must Q be?',
    image: null,
    options: [
      { id: 'A', text: 'TRUE', image: null },
      { id: 'B', text: 'FALSE', image: null },
      { id: 'C', text: 'BOTH TRUE AND FALSE', image: null },
      { id: 'D', text: 'IMPOSSIBLE TO KNOW', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'If exactly one statement is true and A is true, B must be false.'
  },
  {
    id: 90,
    type: 'logical',
    question: 'All red blocks are heavy. Some heavy blocks are round. What can you conclude about red blocks and round blocks?',
    image: null,
    options: [
      { id: 'A', text: 'All red blocks are round', image: null },
      { id: 'B', text: 'No red blocks are round', image: null },
      { id: 'C', text: 'Some red blocks are round', image: null },
      { id: 'D', text: 'No definite relationship follows', image: null }
    ],
    description: null,
    correctAnswer: 'D',
    explanation: 'The heavy red blocks and heavy round blocks may or may not overlap.'
  },
  {
    id: 91,
    type: 'logical',
    question: 'A parcel arrives three days after Monday. On which day does it arrive?',
    image: null,
    options: [
      { id: 'A', text: 'TUESDAY', image: null },
      { id: 'B', text: 'WEDNESDAY', image: null },
      { id: 'C', text: 'THURSDAY', image: null },
      { id: 'D', text: 'FRIDAY', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'One day after Monday is Tuesday, two is Wednesday, and three is Thursday.'
  },
  {
    id: 92,
    type: 'logical',
    question: 'Every Fep is a Gorp, and no Gorp is a Niff. Which combination is impossible?',
    image: null,
    options: [
      { id: 'A', text: 'A Fep that is also a Niff', image: null },
      { id: 'B', text: 'A Gorp that is not a Fep', image: null },
      { id: 'C', text: 'A Niff that is not a Gorp', image: null },
      { id: 'D', text: 'A Fep that is a Gorp', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'Every Fep is a Gorp, and no Gorp may be a Niff, so a Fep-Niff is impossible.'
  },
  {
    id: 93,
    type: 'logical',
    question: 'Ana finishes before Ben. Cara finishes after Ben. What is the order?',
    image: null,
    options: [
      { id: 'A', text: 'ANA, BEN, CARA', image: null },
      { id: 'B', text: 'BEN, ANA, CARA', image: null },
      { id: 'C', text: 'CARA, BEN, ANA', image: null },
      { id: 'D', text: 'ANA, CARA, BEN', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'Ana is before Ben, and Cara is after Ben, giving Ana → Ben → Cara.'
  },
  {
    id: 94,
    type: 'logical',
    question: 'A rule says: “If a card has a vowel on one side, it has an even number on the other.” You see A, D, 4, and 7. Which cards must you turn over?',
    image: null,
    options: [
      { id: 'A', text: 'A ONLY', image: null },
      { id: 'B', text: 'A AND 4', image: null },
      { id: 'C', text: 'A AND 7', image: null },
      { id: 'D', text: 'ALL FOUR', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'Check A for an even number and 7 to ensure there is no vowel. D and 4 cannot violate the one-way rule.'
  },
  {
    id: 95,
    type: 'logical',
    question: 'If a word’s code is the sum of its letter positions, CAT = 24. What is DOG?',
    image: null,
    options: [
      { id: 'A', text: '22', image: null },
      { id: 'B', text: '24', image: null },
      { id: 'C', text: '26', image: null },
      { id: 'D', text: '28', image: null }
    ],
    description: 'A = 1, B = 2, C = 3, and so on.',
    correctAnswer: 'C',
    explanation: 'D is 4, O is 15, and G is 7. Their sum is 26.'
  },
  {
    id: 96,
    type: 'logical',
    question: 'All roses are flowers. Some flowers fade quickly. What follows about roses?',
    image: null,
    options: [
      { id: 'A', text: 'All roses fade quickly', image: null },
      { id: 'B', text: 'No roses fade quickly', image: null },
      { id: 'C', text: 'Some roses fade quickly', image: null },
      { id: 'D', text: 'Nothing definite about how quickly roses fade', image: null }
    ],
    description: null,
    correctAnswer: 'D',
    explanation: 'The flowers that fade quickly might be roses or might be other flowers.'
  },
  {
    id: 97,
    type: 'logical',
    question: 'Rowan says, “Kai is lying.” Kai says, “We are both truthful.” Who is truthful?',
    image: null,
    options: [
      { id: 'A', text: 'ROWAN ONLY', image: null },
      { id: 'B', text: 'KAI ONLY', image: null },
      { id: 'C', text: 'BOTH', image: null },
      { id: 'D', text: 'NEITHER', image: null }
    ],
    description: 'Assume each person is either always truthful or always lying.',
    correctAnswer: 'A',
    explanation: 'Kai cannot be truthful because that would make Rowan truthful while Rowan calls Kai a liar. So Kai lies and Rowan tells the truth.'
  },
  {
    id: 98,
    type: 'logical',
    question: 'Task A must happen before B, and B must happen before C. Which task must be last?',
    image: null,
    options: [
      { id: 'A', text: 'TASK A', image: null },
      { id: 'B', text: 'TASK B', image: null },
      { id: 'C', text: 'TASK C', image: null },
      { id: 'D', text: 'ANY OF THEM', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'The required order is A, then B, then C.'
  },
  {
    id: 99,
    type: 'logical',
    question: 'Exactly two of P, Q, and R are true. P is false. What must be true?',
    image: null,
    options: [
      { id: 'A', text: 'Q only', image: null },
      { id: 'B', text: 'R only', image: null },
      { id: 'C', text: 'Q and R', image: null },
      { id: 'D', text: 'Neither Q nor R', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'With P false and exactly two statements true, both Q and R must be true.'
  },
  {
    id: 100,
    type: 'logical',
    question: 'If today is not Tuesday, the meeting is Wednesday. The meeting is not Wednesday. What follows?',
    image: null,
    options: [
      { id: 'A', text: 'Today is Tuesday', image: null },
      { id: 'B', text: 'Today is Wednesday', image: null },
      { id: 'C', text: 'The meeting is Tuesday', image: null },
      { id: 'D', text: 'Nothing follows', image: null }
    ],
    description: null,
    correctAnswer: 'A',
    explanation: 'By contrapositive, if the meeting is not Wednesday, then today is Tuesday.'
  }
];

export default questions;
