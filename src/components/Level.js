const Level = ({ onLevel }) => {
  const handleClick = e => {
    const level = e.target.innerText.trim().toLowerCase();
    return onLevel(level);
  };

  return (
    <div className='level'>
      <h2 className='level-title'>Choose Level</h2>
      <div className='level-btns'>
        <button className='btn' onClick={handleClick}>
          Beginner
        </button>
        <button className='btn' onClick={handleClick}>
          Intermediate
        </button>
        <button className='btn' onClick={handleClick}>
          Advanced
        </button>
      </div>
    </div>
  );
};

export default Level;
