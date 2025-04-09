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
    correctAnswer: 'B',
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
    correctAnswer: 'E',
    explanation: 'The pattern follows shapes with increasing number of sides: triangle (3), square (4), pentagon (5), so the next would be hexagon (6).'
  },
  {
    id: 4,
    type: 'logical',
    question: 'If all Zorks are Morks, and some Morks are Dorks, then:',
    image: null,
    options: [
      { id: 'A', text: 'All Zorks are definitely Dorks', image: null },
      { id: 'B', text: 'No Zorks are Dorks', image: null },
      { id: 'C', text: 'Some Zorks might be Dorks', image: null },
      { id: 'D', text: 'All Dorks are Zorks', image: null },
      { id: 'E', text: 'None of the above', image: null }
    ],
    description: null,
    correctAnswer: 'C',
    explanation: 'Since all Zorks are Morks, and some Morks are Dorks, it follows that some Zorks might be Dorks.'
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
      { id: 'E', text: 'The ground is always wet when it rains', image: null }
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
    explanation: 'The pattern is ×1, ×2, ×2, so after 12 comes 24.'
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
    explanation: 'Folding a square diagonally creates two congruent right triangles.'
  },
  {
    id: 14,
    type: 'logical',
    question: 'All cats have tails. Fluffy has a tail. Therefore:',
    image: null,
    options: [
      { id: 'A', text: 'Fluffy is definitely a cat', image: null },
      { id: 'B', text: 'Fluffy might be a cat', image: null },
      { id: 'C', text: 'Fluffy is not a cat', image: null },
      { id: 'D', text: 'All tailed animals are cats', image: null },
      { id: 'E', text: 'None of the above', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'Having a tail is necessary but not sufficient to be a cat. Many animals have tails, so Fluffy might be a cat, but could also be another animal.'
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
    question: 'Which of these nets folds into a cube?',
    image: null,
    options: [
      { id: 'A', text: 'T-shape with 5 squares', image: null },
      { id: 'B', text: 'Cross shape with 6 squares', image: null },
      { id: 'C', text: 'Line of 6 squares', image: null },
      { id: 'D', text: '2x3 rectangle of squares', image: null },
      { id: 'E', text: '3x2 rectangle of squares', image: null }
    ],
    description: null,
    correctAnswer: 'B',
    explanation: 'A cross-shaped net with 6 squares can be folded to form a cube, where each square becomes one face.'
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
    question: 'If you look at a clock in a mirror, what time will it show when the actual time is 3:15?',
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
    explanation: 'In a mirror, the hour hand at 3 appears to be at 9, but since we read it as a clock, it looks like 8:45.'
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
    explanation: 'Each letter's position in the alphabet is the sum of the previous two: 1, 2, 4, 7, 11. So the next letter is K (11th letter).'
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
  }
];

export default questions;
