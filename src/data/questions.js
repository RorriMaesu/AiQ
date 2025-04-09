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
    correctAnswer: 'D',
    explanation: 'The sequence is 1², 2², 3², 4², so the next number is 5² = 25.'
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
    correctAnswer: 'C',
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
    correctAnswer: 'I',
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
  }
];

export default questions;
