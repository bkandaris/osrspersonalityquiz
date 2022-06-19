const questions = [
  {
    question: 'How many hours a week do you play OSRS?',
    id: 1,
    answerA: {
      answer: '0-10',
      traits: ['intelligence'],
    },
    answerB: {
      answer: '10-20',
      traits: ['responsible'],
    },
    answerC: {
      answer: '20-30',
      traits: ['predictable'],
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
      traits: ['loyal'],
    },
    answerB: {
      answer: 'Sense of humor',
      traits: ['humor'],
    },
    answerC: {
      answer: 'Intelligence',
      traits: ['intelligence'],
    },
    answerD: {
      answer: 'Kindness',
      traits: ['empathy', 'kind'],
    },
  },
  {
    question: 'If you see me at a party, you will most likely find me...',
    id: 3,
    answerA: {
      answer: 'Petting whatever dog or cat is around',
      traits: ['empathy', 'kind'],
    },
    answerB: {
      answer: 'Having a conversation about the latest book I have read',
      traits: ['intelligence', 'creative'],
    },
    answerC: {
      answer: 'Doing a Kegstand',
      traits: ['powerful', 'humor', 'courage', 'impulsive', 'careless'],
    },
    answerD: {
      answer: 'Looking at my phone and wishing it was over',
      traits: ['predictable'],
    },
  },
  {
    question: 'I would say my favorite quality in others is…',
    id: 4,
    answerA: {
      answer: 'Honesty / Loyalty',
      traits: ['loyal'],
    },
    answerB: {
      answer: 'Kindness',
      traits: ['kind'],
    },
    answerC: {
      answer: 'Respectfulness',
      traits: ['empathy'],
    },
    answerD: {
      answer: 'Playfulness',
      traits: ['humor'],
    },
  },
  {
    question: 'My friends and I are going out on a Friday night…',
    id: 5,
    answerA: {
      answer: 'I suggest going to our normal hangout',
      traits: ['predictable'],
    },
    answerB: {
      answer: 'I pick something new for us to try',
      traits: ['persuasive', 'leader', 'impulsive', 'creative'],
    },
    answerC: {
      answer: 'Do whatever my friends want to do',
      traits: ['loyal'],
    },
    answerD: {
      answer: 'Going out? I have xp to gain!',
      traits: ['gamer', 'greedy'],
    },
  },
  {
    question:
      'Your friends are about to play a mean prank on the lady next door. What is your role?',
    id: 6,
    answerA: {
      answer: 'I am the lookout',
      traits: ['loyal'],
    },
    answerB: {
      answer: 'It was my idea to pull the prank',
      traits: ['humor', 'impulsive', 'careless'],
    },
    answerC: {
      answer: 'Nervously joining along even though I do not want to do it',
      traits: ['courage'],
    },
    answerD: {
      answer:
        'Try talking my friends out of it, she does not deserve to be pranked',
      traits: ['honest', 'kind'],
    },
  },
  {
    question: 'A new raid has arrived in Gilenor! What do you do?',
    id: 7,
    answerA: {
      answer: 'Probably still skilling',
      traits: ['responsible'],
    },
    answerB: {
      answer: 'Wait for a guide to come out on the raid',
      traits: ['predictable'],
    },
    answerC: {
      answer: 'My friends will learn and show me how to do it',
      traits: ['persuasive'],
    },
    answerD: {
      answer: 'YOLO LETS GO!!!',
      traits: ['powerful', 'gamer', 'impulsive'],
    },
  },
  {
    question:
      'And I wake up in the morning and I step outside and I take a deep breath…. What kind of drink do I have in my hands?',
    id: 8,
    answerA: {
      answer: 'Orange Juice (No pulp ofc)',
      traits: ['gamer'],
    },
    answerB: {
      answer: 'Coffee',
      traits: ['honest'],
    },
    answerC: {
      answer: 'Tea',
      traits: ['intelligence'],
    },
    answerD: {
      answer: 'Water',
      traits: ['outspoken'],
    },
  },
  {
    question:
      'You are part of a group who is raising money for a good cause. My role would probably be…',
    id: 9,
    answerA: {
      answer: 'Handling all of the finances',
      traits: ['intelligence', 'predictable'],
    },
    answerB: {
      answer: 'Assigning tasks to new members',
      traits: ['persuasive', 'leader'],
    },
    answerC: {
      answer: 'Going out and getting donations from people in the community',
      traits: ['courage', 'outspoken'],
    },
    answerD: {
      answer: 'Creating a new plan to increase funds',
      traits: ['power hungry'],
    },
  },
  {
    question: 'If I am choosing a snack, I would grab…',
    id: 10,
    answerA: {
      answer: 'Laundrymat candy bar',
      traits: ['persuasive'],
    },
    answerB: {
      answer: 'Deep fried pickle spears',
      traits: ['power hungry'],
    },
    answerC: {
      answer: 'Deep fried pickle chips',
      traits: ['intelligence'],
    },
    answerD: {
      answer: 'Buttered bread with salt and pepper',
      traits: ['powerful'],
    },
  },
  {
    question: 'I just won a billion gp in the OSRS lotto. What do I do?',
    id: 11,
    answerA: {
      answer: 'Finally buy that Scythe I have always wanted',
      traits: ['powerful', 'greedy'],
    },
    answerB: {
      answer: 'Max all of my stats using the fastest methods',
      traits: ['gamer', 'predictable'],
    },
    answerC: {
      answer: 'Host a drop party at my POH',
      traits: ['empathy', 'kind'],
    },
    answerD: {
      answer: 'Let my friends tell me what gear to buy with it',
      traits: ['responsible'],
    },
  },
  {
    question: 'I am at a Castle Wars event. You would find me…',
    id: 12,
    answerA: {
      answer: 'Ice barraging everything that gets in my way!',
      traits: ['powerful'],
    },
    answerB: {
      answer: 'I am not wasting xp spending time here',
      traits: ['gamer', 'greedy'],
    },
    answerC: {
      answer: 'Doing emotes and telling people to sit',
      traits: ['humor'],
    },
    answerD: {
      answer: 'Giving callouts for my team',
      traits: ['power hungry', 'leader', 'outspoken'],
    },
  },
  {
    question:
      'My friend is in fashionscape that is hideous! What should I say?',
    id: 12,
    answerA: {
      answer: 'Looks good',
      traits: ['empathy'],
    },
    answerB: {
      answer: 'Crack a joke about how they are dressed',
      traits: ['humor'],
    },
    answerC: {
      answer: 'Show them a better alternative',
      traits: ['honest', 'kind'],
    },
    answerD: {
      answer: 'Teleport away, I cannot be seen with them!',
      traits: ['predictable', 'greedy'],
    },
  },
  {
    question: 'If I could choose a superpower, it would be...',
    id: 13,
    answerA: {
      answer: 'Invisibility',
      traits: ['predictable'],
    },
    answerB: {
      answer: 'Strength',
      traits: ['powerful', 'courage'],
    },
    answerC: {
      answer: 'Mind-reading',
      traits: ['intelligence'],
    },
    answerD: {
      answer: 'Flight',
      traits: ['outspoken'],
    },
  },
  {
    question: 'What animal are you most like?',
    id: 14,
    answerA: {
      answer: 'Cat',
      traits: ['impulsive', 'greedy'],
    },
    answerB: {
      answer: 'Dog',
      traits: ['loyal'],
    },
    answerC: {
      answer: 'Bird',
      traits: ['responsible'],
    },
    answerD: {
      answer: 'Bear',
      traits: ['powerful'],
    },
  },
  {
    question: 'I can only choose one...',
    id: 15,
    answerA: {
      answer: 'Fame and fortune',
      traits: ['outspoken', 'careless', 'greedy'],
    },
    answerB: {
      answer: 'World peace',
      traits: ['honest', 'kind'],
    },
    answerC: {
      answer: 'My crush to fall in love with me',
      traits: ['power hungry'],
    },
    answerD: {
      answer: 'End world hunger',
      traits: ['responsible', 'kind'],
    },
  },
  {
    question: 'My favorite OSRS player is...',
    id: 16,
    answerA: {
      answer: 'Who is React',
      traits: ['honest'],
    },
    answerB: {
      answer: 'Who is React',
      traits: ['outspoken'],
    },
    answerC: {
      answer: 'Who is React',
      traits: ['powerful', 'leader'],
    },
    answerD: {
      answer: 'who is react (but in all lowercase)',
      traits: ['creative'],
    },
  },
];

export default questions;
