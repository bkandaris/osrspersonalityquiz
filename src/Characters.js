const Characters = [
  {
    id: 1,
    charName: 'Evil Bob',
    picture: 'https://oldschool.runescape.wiki/images/Evil_Bob.png?e6922',
    alt: 'Evil Bob',
    description:
      'You are a creative, intelligent creature, with a great sense of humor, but you are also stubborn and impulsive. Your mind is a bit twisted and you see the world a little different than everyone around you.',
    traits: ['impulsive', 'humor', 'greedy'],
    score: 0,
  },
  {
    id: 2,
    charName: 'Evil Dave',
    picture: 'https://oldschool.runescape.wiki/images/Evil_Dave.png?1d687',
    alt: 'Evil Dave',
    description:
      "You probably live in your mother's basement! Even though you are an intelligent, persuasive, and powerful creature, you often find yourself being careless and greedy.",
    traits: ['intelligence', 'greedy', 'power hungry'],
    score: 0,
  },
  {
    id: 3,
    charName: 'Dad',
    picture:
      'https://oldschool.runescape.wiki/images/thumb/Dad.png/800px-Dad.png?18a30',
    alt: 'Dad',
    description:
      'One of the most powerful and courageous of your kind! You are loyal to your fellow companions and show great leadership. You may be stubborn at times.',
    traits: ['courage', 'predictable', 'careless'],
    score: 0,
  },
  {
    id: 4,
    charName: 'Hazelmere',
    picture: 'https://oldschool.runescape.wiki/images/Hazelmere.png?4d1ce',
    alt: 'Hazelmere',
    description:
      'You are one of the best of your kind! You are loyal, honest, intelligent, funny, empathetic... and I could go on! Your kind has leaned on you in the past and you always come through! The world of Gilenor is better with you in it!',
    traits: ['loyal', 'creative', 'intelligence'],
    score: 0,
  },
  {
    id: 5,
    charName: 'Goblin',
    picture:
      'https://oldschool.runescape.wiki/images/thumb/Goblin.png/800px-Goblin.png?3e49a',
    alt: 'Goblin',
    description:
      'There are lots of you in this world... probably too many. You are loyal to what you believe in and always show courage. You can be careless and greedy at times, but you always do what you believe is best.',
    traits: ['loyal', 'courage', 'impulsive'],
    score: 0,
  },
  {
    id: 6,
    charName: 'King Black Dragon',
    picture:
      'https://oldschool.runescape.wiki/images/King_Black_Dragon.png?d25f0',
    alt: 'King Black Dragon',
    description:
      'You have existed since before the first age. Even though you were a failed experiment, you turned into one of the most powerful and feared creatures! Your three heads and split personalities do not stop you.',
    traits: ['powerful', 'courage', 'impulsive'],
    score: 0,
  },
  {
    id: 7,
    charName: 'Baby Mole',
    picture:
      'https://oldschool.runescape.wiki/images/Baby_Mole_%28follower%29.png?c4d59',
    alt: 'Baby Mole',
    description:
      'A very cute and lovable one you are. One of the most sought after creatures in all of Gilenor. You have a fun and loving personality that shines even though you choose to spend most of your time out of the sunlight.',
    traits: ['humor', 'predictable', 'kind'],
    score: 0,
  },
  {
    id: 8,
    charName: 'White Knight',
    picture:
      'https://oldschool.runescape.wiki/images/thumb/White_Knight.png/320px-White_Knight.png?8b8e4',
    alt: 'White Knight',
    description:
      'You are a brave warrior! While not being one of the strongest in Gilenor, you give it your all and fight for your kingdom. Anyone would be lucky to have you by their side. Your loyalty, courage, and kindness is valued.',
    traits: ['honest', 'loyal', 'responsible'],
    score: 0,
  },
  {
    id: 9,
    charName: 'Gertrude',
    picture:
      'https://oldschool.runescape.wiki/images/thumb/Gertrude.png/320px-Gertrude.png?70a1b',
    alt: 'Gertrude',
    description:
      'Well known as the cat lady. Even though you and your home are kinda smelly, you are a very loving person and everyone can appreciate that! The world of Gilenor is a greater place because of you!',
    traits: ['empathy', 'responsible', 'kind'],
    score: 0,
  },
  {
    id: 10,
    charName: 'King Awowogei',
    picture: 'https://oldschool.runescape.wiki/images/Awowogei.png?0ea6b',
    alt: 'King Awowogei',
    description:
      'You are a very powerful creature! Your loyalty and intelligence is overwhelming. You can be very persuasive at times and that is part of what makes you a great leader. What a gamer!',
    traits: ['powerful', 'leader', 'outspoken'],
    score: 0,
  },
  {
    id: 11,
    charName: 'Vanescula Drakan',
    picture:
      'https://oldschool.runescape.wiki/images/Vanescula_Drakan.png?e78ba',
    alt: 'Vanescula Drakan',
    description:
      'You are an intrical part of an outsider society. You do your best to ensure the survival of your kind. Although many will see you as dark and evil at times, you are a great leader and do what you think is right.',
    traits: ['intelligence', 'leader', 'outspoken'],
    score: 0,
  },
  {
    id: 12,
    charName: 'Bob',
    picture:
      'https://oldschool.runescape.wiki/images/Bob_the_Jagex_cat.png?eabc9',
    alt: 'Bob the cat',
    description:
      'You are an enigmatic creature and the reincarnation of a hero. You are courageous and kind. Your carelessness may get the best of you sometimes.',
    traits: ['loyal', 'impulsive', 'courage'],
    score: 0,
  },
  {
    id: 13,
    charName: 'Cyrisus',
    picture:
      'https://oldschool.runescape.wiki/images/thumb/Cyrisus.png/320px-Cyrisus.png?378e3',
    alt: 'Cyrisus',
    description:
      'Sometimes you do not know your own self-worth. You are very kind. With the help of a friend and some words of encuragment, you are capable of accomplishing great things!',
    traits: ['gamer', 'persuasive', 'predictable'],
    score: 0,
  },
  {
    id: 14,
    charName: 'Ugthonki',
    picture:
      'https://oldschool.runescape.wiki/images/thumb/Ugthanki.png/800px-Ugthanki.png?96455',
    alt: 'Ugthonki',
    description:
      'You are a very powerful yet predictable creature with a great sense of humor. Creatures of less might should watch out though, because you can be dangerous!',
    traits: ['courage', 'self-reliant', 'predictable'],
    score: 0,
  },
  {
    id: 15,
    charName: 'Drunken Dwarf',
    picture: 'https://oldschool.runescape.wiki/images/Drunken_Dwarf.png?7f142',
    alt: 'Drunken Dwarf',
    description:
      'What a giving and loveable creature. A lot of people do not appreciate your kindness, but you have the courage to keep giving it. The world of Gilenor is a better place because of you.',
    traits: ['empathy', 'courage', 'kind'],
    score: 0,
  },
  {
    id: 16,
    charName: 'Wise Old Man',
    picture:
      'https://oldschool.runescape.wiki/images/thumb/Wise_Old_Man.png/351px-Wise_Old_Man.png?b2e69',
    alt: 'Wise Old Man',
    description:
      'A very powerful Saradominist wizard and formerly an adventurer. You play an intricate part in the world. You are helpful to many and make the world a better place.',
    traits: ['intelligence', 'persuasive', 'outspoken'],
    score: 0,
  },
  {
    id: 17,
    charName: 'Gnome Child',
    picture: 'https://oldschool.runescape.wiki/images/Gnome_child.png?7fd05',
    alt: 'Gnome Child',
    description:
      'You have a playful soul. You spend most of your time wandering around Gilenor being playful and happy.',
    traits: ['impulsive', 'creative', 'kind'],
    score: 0,
  },
  {
    id: 18,
    charName: 'Varrock Stray Dog',
    picture:
      'https://oldschool.runescape.wiki/images/thumb/Stray_dog_%28Varrock%2C_grey%29.png/800px-Stray_dog_%28Varrock%2C_grey%29.png?51c19',
    alt: 'Varrock Stray Dog',
    description:
      'What a playful and loveable creature you are! Although sometimes misunderstood, you deserve all the love in the world. One day your dreams will come true!',
    traits: ['loyal', 'humor', 'empathy'],
    score: 0,
  },
  {
    id: 19,
    charName: 'Hans',
    picture: 'https://oldschool.runescape.wiki/images/Hans.png?1a5c5',
    alt: 'Hans',
    description:
      'Does anyone know what time it is? You do! You may not be courageous, but you are always willing to be helpful and answer questions.',
    traits: ['honest', 'intelligence', 'empathy'],
    score: 0,
  },
  {
    id: 20,
    charName: 'Elena',
    picture:
      'https://oldschool.runescape.wiki/images/thumb/Elena.png/336px-Elena.png?5b181',
    alt: 'Elena',
    description:
      'Always seem to be getting yourself into sticky situations, huh? You are a beautiful creature with a fantastic heart. Many people are willing to help you, because of your kindness',
    traits: ['honest', 'persuasive', 'kind'],
    score: 0,
  },
];

export default Characters;
