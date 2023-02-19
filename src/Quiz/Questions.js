// Question Types
// 1. MCQs | Multiple Choice | single

export const quiz = {
    topic: 'Porgramming Language',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
          'What \s your preffered drinks?',
        choices: ['Water', 'Cuppa Coffee', 'Coke (the non Bristol kind)', 'Tea (😎)'],
        type: 'MCQs',
        correctAnswer: 'stringify()',
      },
      {
        question:
          'What is your current emotional state?',
        choices: ['depressed', 'hungry', 'caffeine high', 'sleepy'],
        type: 'MCQs',
        correctAnswer: 'var and let',
      },
      {
        question:
          'What is your type?',
        choices: [
          'Smart',
          'Intelligent',
          'I am so alone, anybody will do. Like so alone',
          'No type',
        ],
        type: 'MCQs',
        correctAnswer: 'All of the above',
      },
      {
        question: 'What is your favourite programming language?',
        choices: ['HTML', 'Javascript', 'Java', 'Python'],
        type: 'MCQs',
        correctAnswer: 'const',
      },
    ],
  }