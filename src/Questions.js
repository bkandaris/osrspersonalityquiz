const questions = [
  {
    question: 'How many hours a week do you play OSRS?',
    id: 1,
    answerA: {
      answer: '0-10',
      traits: ['responsible'],
    },
    answerB: {
      answer: '10-20',
      traits: ['responsible'],
    },
    answerC: {
      answer: '20-30',
      traits: ['gamer'],
    },
    answerD: {
      answer: 'I eat sleep and drink OSRS',
      traits: ['gamer', 'predictable'],
    },
  },
  {
    question: 'My friends would say my greatest trait is...',
    id: 2,
    answerA: {
      answer: 'Loyalty',
      traits: ['loyal', 'honest', 'kind'],
    },
    answerB: {
      answer: 'Sense of humor',
      traits: ['humor', 'kind', 'careless', 'outspoken'],
    },
    answerC: {
      answer: 'Intelligence',
      traits: ['empathy', 'self-reliance', 'leader'],
    },
    answerD: {
      answer: 'Kindness',
      traits: ['kind'],
    },
  },
  {
    question: 'If you see me at a party, you will most likely find me...',
    id: 3,
    answerA: {
      answer: 'Petting whatever dog or cat is around',
      traits: ['kind', 'loyal'],
    },
    answerB: {
      answer: 'Having a conversation about the latest book I have read',
      traits: ['intelligence', 'creative'],
    },
    answerC: {
      answer: 'Doing a Kegstand',
      traits: ['outspoken', 'careless', 'impulsive', 'gamer', 'humor'],
    },
    answerD: {
      answer: 'Looking at my phone and wishing it was over',
      traits: ['stubborn', 'greedy'],
    },
  },
  {
    question: 'I would say my favorite quality in others is…',
    id: 4,
    answerA: {
      answer: 'Honesty / Loyalty',
      traits: ['loyal', 'honest', 'kind'],
    },
    answerB: {
      answer: 'kindness',
      traits: ['honest', 'kind', 'predictable'],
    },
    answerC: {
      answer: 'Respectful',
      traits: ['self-reliant', 'kind'],
    },
    answerD: {
      answer: 'Playfulness',
      traits: ['humor', 'creative'],
    },
  },
  {
    question: 'My friends and I are going out on a Friday night…',
    id: 5,
    answerA: {
      answer: 'I suggest going to our normal hangout',
      traits: ['predictable', 'loyal'],
    },
    answerB: {
      answer: 'I pick something new for us to try',
      traits: ['careless', 'impulsive'],
    },
    answerC: {
      answer: 'Do whatever my friends want to do',
      traits: ['loyal', 'kind', 'predictable'],
    },
    answerD: {
      answer: 'Going out? I have xp to gain!',
      traits: ['gamer'],
    },
  },
  {
    question:
      'Your friends are about to prank the lady next door. What is your role?',
    id: 6,
    answerA: {
      answer: 'I am the lookout',
      traits: ['responsible'],
    },
    answerB: {
      answer: 'It was my idea to pull the prank',
      traits: ['careless', 'impulsive', 'creative', 'courage', 'power hungry'],
    },
    answerC: {
      answer: 'Nervously joining along even though I do not want to do it',
      traits: ['predictable', 'loyal'],
    },
    answerD: {
      answer:
        'Try talking my friends out of it, she does not deserve to be pranked',
      traits: ['kind', 'honest', 'leader'],
    },
  },
  {
    question: 'A new raid has arrived in Gilenor! What do you do?',
    id: 7,
    answerA: {
      answer: 'Probably still skilling',
      traits: ['impulsive'],
    },
    answerB: {
      answer: 'Wait for a guide to come out on the raid',
      traits: ['self-reliant', 'gamer', 'intelligence'],
    },
    answerC: {
      answer:
        'My friends will learn and show me how after they learn how to do it',
      traits: ['intelligence', 'kind'],
    },
    answerD: {
      answer: 'YOLO LETS GO!!!',
      traits: ['self-reliant', 'creative', 'courage', 'leader', 'power hungry'],
    },
  },
  {
    question:
      'And I wake up in the morning and I step outside and I take a deep breath…. What kind of drink do I have in my hands?',
    id: 8,
    answerA: {
      answer: 'Orange Juice (No pulp ofc)',
      traits: ['gamer', 'outspoken', 'impulsive'],
    },
    answerB: {
      answer: 'Coffee',
      traits: ['responsible', 'intelligence'],
    },
    answerC: {
      answer: 'Tea',
      traits: ['creative', 'responsible'],
    },
    answerD: {
      answer: 'Water',
      traits: ['predictable', 'honest'],
    },
  },
  {
    question:
      'You are part of a group who is raising money for a good cause. My role would probably be…',
    id: 9,
    answerA: {
      answer: 'Handling all of the finances',
      traits: ['responsible', 'intelligence'],
    },
    answerB: {
      answer: 'Assigning tasks to new members',
      traits: ['creative', 'leader', 'persuasive', 'outspoken'],
    },
    answerC: {
      answer: 'Going out and getting donations from people in the community',
      traits: ['kind', 'persuasive', 'self-reliant'],
    },
    answerD: {
      answer: 'Creating a new plan to increase funds',
      traits: ['intelligence', 'loyal', 'gamer', 'courage', 'outspoken'],
    },
  },
  {
    question: 'If I am choosing a snack, I would grab…',
    id: 10,
    answerA: {
      answer: '3D Doritos',
      traits: ['creative', 'kind', 'humor'],
    },
    answerB: {
      answer: 'Deep fried pickle spears',
      traits: [
        'honest',
        'gamer',
        'empathy',
        'persuasive',
        'responsible',
        'predictable',
      ],
    },
    answerC: {
      answer: 'Deep fried pickle chips',
      traits: ['loyal', 'honest', 'intelligence', 'empathy'],
    },
    answerD: {
      answer: 'Buttered bread with salt and pepper',
      traits: ['outspoken', 'leader', 'gamer'],
    },
  },
  {
    question: 'I just won a billion gp in the OSRS lotto. What do I do?',
    id: 11,
    answerA: {
      answer: 'Finally buy that Scythe I have always wanted',
      traits: ['power hungry', 'greed', 'impulsive'],
    },
    answerB: {
      answer: 'Max all of my stats using the fastest methods',
      traits: ['gamer', 'predictable', 'responsible'],
    },
    answerC: {
      answer: 'Host a drop party at my POH',
      traits: ['kind', 'humor'],
    },
    answerD: {
      answer: 'Let my friends tell me what gear to buy with it',
      traits: ['predictable', 'outspoken'],
    },
  },
  {
    question: 'I am at a Castle Wars event. You would find me…',
    id: 12,
    answerA: {
      answer: 'Ice barraging everything that gets in my way!',
      traits: ['powerful', 'power hungry'],
    },
    answerB: {
      answer: 'I am not wasting xp spending time here',
      traits: ['greedy', 'predictable'],
    },
    answerC: {
      answer: 'Doing emotes and telling people to sit',
      traits: ['creative', 'humor'],
    },
    answerD: {
      answer: 'Giving callouts for my team',
      traits: ['leader', 'intelligence', 'power hungry'],
    },
  },
  {
    question:
      'My friend is in fashionscape that is hideous! What should I say?',
    id: 12,
    answerA: {
      answer: 'Looks good',
      traits: ['kind', 'empathy'],
    },
    answerB: {
      answer: 'Crack a joke about how they are dressed',
      traits: ['humor', 'creative', 'outspoken'],
    },
    answerC: {
      answer: 'Show them a better alternative',
      traits: ['creative', 'kind', 'leader'],
    },
    answerD: {
      answer: 'Teleport away, I cannot be seen with them!',
      traits: ['greedy', 'stubborn'],
    },
  },
];

export default questions;
