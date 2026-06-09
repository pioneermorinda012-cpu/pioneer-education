export const COURSES = [
  {
    id: 'ielts',
    name: 'IELTS Preparation',
    emoji: '🎯',
    color: 'blue',
    level: 'Band 6–8',
    totalLessons: 48,
    description: 'Master all four IELTS skills: Reading, Writing, Listening and Speaking.',
    lessons: [
      { id: 1, title: 'Introduction to IELTS', sub: 'Test format & band scoring', done: true },
      { id: 2, title: 'Reading strategies', sub: 'Skimming, scanning & detailed reading', done: true },
      { id: 3, title: 'Listening — Section 1 & 2', sub: 'Form completion & multiple choice', done: true },
      { id: 4, title: 'Writing Task 1 — Graphs', sub: 'Bar charts, line graphs, pie charts', done: false, active: true },
      { id: 5, title: 'Writing Task 2 — Opinion essays', sub: 'Structure, vocabulary & coherence', done: false },
      { id: 6, title: 'True / False / Not Given', sub: 'Advanced reading strategy', done: false },
      { id: 7, title: 'Speaking Part 1', sub: 'Introduction & everyday topics', done: false },
      { id: 8, title: 'Speaking Part 2 — Cue card', sub: 'Long turn & how to structure answers', done: false },
      { id: 9, title: 'Vocabulary for Band 7+', sub: 'Academic word list & collocations', done: false },
      { id: 10, title: 'Writing Task 1 — Process diagrams', sub: 'Passive voice & sequencing language', done: false },
      { id: 11, title: 'Listening — Section 3 & 4', sub: 'Discussions & academic monologues', done: false },
      { id: 12, title: 'Full mock test', sub: 'Timed practice exam with scoring', done: false },
    ]
  },
  {
    id: 'english',
    name: 'Spoken English',
    emoji: '🗣️',
    color: 'teal',
    level: 'Beginner–Advanced',
    totalLessons: 60,
    description: 'Build fluency and confidence in everyday and professional English.',
    lessons: [
      { id: 1, title: 'Greetings & introductions', sub: 'First conversations & small talk', done: true },
      { id: 2, title: 'Present tenses', sub: 'Simple, continuous & perfect', done: true },
      { id: 3, title: 'Asking questions', sub: 'WH-questions & yes/no questions', done: true },
      { id: 4, title: 'Daily routine vocabulary', sub: 'Morning, work, evening phrases', done: true },
      { id: 5, title: 'Past tenses', sub: 'Simple past & past continuous', done: false, active: true },
      { id: 6, title: 'Talking about the future', sub: 'Will, going to & present continuous', done: false },
      { id: 7, title: 'Idioms & phrases', sub: 'Most common English idioms', done: false },
      { id: 8, title: 'Professional English', sub: 'Emails, meetings & presentations', done: false },
      { id: 9, title: 'Debate & opinion language', sub: 'Agreeing, disagreeing, hedging', done: false },
      { id: 10, title: 'Pronunciation practice', sub: 'Stress, intonation & connected speech', done: false },
    ]
  },
  {
    id: 'german',
    name: 'German A1',
    emoji: '🇩🇪',
    color: 'amber',
    level: 'Absolute Beginner',
    totalLessons: 87,
    description: 'Start from zero and reach A1 level German — grammar, vocabulary and speaking.',
    lessons: [
      { id: 1, title: 'Ich bin Max! — Introductions', sub: 'Ich bin, du bist, er/sie ist', done: true },
      { id: 2, title: 'Numbers 1–100', sub: 'Counting & telling the time', done: true },
      { id: 3, title: 'Colors & basic adjectives', sub: 'Farben und Eigenschaften', done: false, active: true },
      { id: 4, title: 'Family vocabulary', sub: 'Mutter, Vater, Geschwister...', done: false },
      { id: 5, title: 'Articles — der, die, das', sub: 'Nominative case & gender rules', done: false },
      { id: 6, title: 'Food & drink', sub: 'Ordering in a restaurant', done: false },
      { id: 7, title: 'Days, months & seasons', sub: 'Time expressions', done: false },
      { id: 8, title: 'Modal verbs', sub: 'Können, müssen, wollen, dürfen', done: false },
      { id: 9, title: 'Accusative case', sub: 'Direct objects & articles', done: false },
      { id: 10, title: 'Mock exam A1', sub: 'Full test — Goethe A1 format', done: false },
    ]
  },
  {
    id: 'pte',
    name: 'PTE Academic',
    emoji: '📝',
    color: 'purple',
    level: 'Test prep',
    totalLessons: 36,
    description: 'Prepare for PTE Academic with AI-scored practice and test strategies.',
    lessons: [
      { id: 1, title: 'PTE test overview', sub: 'Format, timing & scoring system', done: false, active: true },
      { id: 2, title: 'Read Aloud', sub: 'Pronunciation & fluency tips', done: false },
      { id: 3, title: 'Repeat Sentence', sub: 'Memory & listening strategies', done: false },
      { id: 4, title: 'Describe Image', sub: 'Templates for all image types', done: false },
      { id: 5, title: 'Summarize Written Text', sub: 'One-sentence summary technique', done: false },
      { id: 6, title: 'Fill in the Blanks', sub: 'Reading & listening versions', done: false },
      { id: 7, title: 'Essay writing', sub: 'Argumentative essay structure', done: false },
      { id: 8, title: 'Full mock test', sub: 'Timed PTE practice exam', done: false },
    ]
  }
]

export const VOCAB_TOPICS = [
  { topic: 'Environment', words: ['sustainable', 'biodiversity', 'deforestation', 'renewable', 'emissions'] },
  { topic: 'Technology', words: ['artificial intelligence', 'automation', 'cybersecurity', 'algorithm', 'disruption'] },
  { topic: 'Health', words: ['sedentary', 'immunity', 'epidemic', 'nutritious', 'ailment'] },
  { topic: 'Education', words: ['curriculum', 'pedagogy', 'literacy', 'cognitive', 'assessment'] },
]
