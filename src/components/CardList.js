import { useEffect, useRef, useState } from 'react';
import { getCards } from '../data/cards';
import Card from './Card';

const CardList = ({ level: { cardSum } }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [cards, setCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    setCards(
      getCards(cardSum).map(card => ({
        value: card,
        isOpened: false,
        isMatched: false,
        id: idRef.current++,
      }))
    );

    return setIsPlay(true);
  }, []);

  useEffect(() => {
    if (openedCards.length !== 2) return;
    setIsPlay(false);

    let isMatch = checkMatch();
    let timer;

    if (isMatch) {
      matchCards();
      return setIsPlay(true);
    } 

    timer = setTimeout(() => {
      closeCards();
      setIsPlay(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [openedCards.length === 2]);

  const matchCards = () => {
    const value = openedCards[0]?.value;

    setCards(
      cards.map(card =>
        card.value === value ? { ...card, isMatched: true } : card
      )
    );

    return setOpenedCards([]);
  };

  const closeCards = () => {
    setCards(prev =>
      prev.map(card =>
        !card.isMatched && card.isOpened ? { ...card, isOpened: false } : card
      )
    );

    return setOpenedCards([]);
  };

  const checkMatch = () => openedCards[0]?.value === openedCards[1]?.value;

  const openCard = id => {
    if (!isPlay) return;
    let value;
    let modifiedCards;

    modifiedCards = cards.map(card => {
      if (card.id === id) {
        value = card.value;
        return { ...card, isOpened: true };
      } else return card;
    });

    setCards(modifiedCards);
    return setOpenedCards(prev => [...prev, { id, value }]);
  };

  return (
    <ul
      className={`card-list${
        cardSum === 12 ? '-big' : cardSum === 10 ? '-medium' : ''
      }`}
    >
      {!!cards.length &&
        cards.map(card => <Card key={card.id} {...card} onOpen={openCard} />)}
    </ul>
  );
};

export default CardList;
