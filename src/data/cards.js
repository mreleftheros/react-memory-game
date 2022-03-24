const cards = [
  '🍓',
  '🥥',
  '🥝',
  '🫐',
  '🍒',
  '🍇',
  '🍑',
  '🍋',
  '🍉',
  '🍊',
  '🍎',
  '🍈',
  '🍍',
  '🍌',
  '🍐',
  '🥭',
];

const shuffleCards = cards => {
  return [...cards].sort((a, b) => Math.random() - 0.5);
};

const getCardsBySum = sum => {
  const cardsCopy = [...cards];
  const shuffledCards = shuffleCards(cardsCopy);

  return shuffledCards.slice(0, sum);
};

export const getCards = sum => {
  const cardsCopy = getCardsBySum(sum);
  const totalCards = [...cardsCopy, ...cardsCopy];

  return shuffleCards(totalCards);
};
