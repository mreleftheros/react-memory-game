import { useEffect, useState } from 'react';
import Level from './components/Level';
import Modal from './components/Modal';
import levels from './data/levels';
import CardList from './components/CardList';

const App = () => {
  const [level, setLevel] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (level) {
      return setModal(false);
    } else {
      return setModal(true);
    }
  }, [level]);

  const handleLevel = level => {
    return setLevel(levels.find(l => l.name === level));
  };

  return (
    <div className='app'>
      <header className='header'>
        <h2 className='header-title'>Memory Game</h2>
        <button className='btn' onClick={() => setLevel(null)}>
          New Game
        </button>
      </header>
      <main className='main'>{level && <CardList level={level} />}</main>
      {modal && (
        <Modal>
          <Level onLevel={handleLevel} />
        </Modal>
      )}
      <footer className='footer'>
        <p>
          &copy; 2022 created by{' '}
          <span className='footer-name'>mreleftheros</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
