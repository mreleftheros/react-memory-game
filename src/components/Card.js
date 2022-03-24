const Card = ({ value, id, isOpened, isMatched, onOpen }) => {
  const handleClick = () => {
    if (isMatched || isOpened) return;
    return onOpen(id);
  };

  return (
    <li className={`card${isOpened ? '-open' : ''}`} onClick={handleClick}>
      <span className='card-content'>{value}</span>
    </li>
  );
};

export default Card;
