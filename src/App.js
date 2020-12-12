import { useEffect, useState } from 'react';
import TypeGame from './TypeGame';
import DragGame from './DragGame';
import Sounds from './SamplePlayer';
import SelectGame from './SelectGame';
import Header from './Header';

function App() {

  const sounds = new Sounds();

  // prevent scrolling
  function preventBehavior(e) {
    e.preventDefault();
  }
  document.addEventListener("touchmove", preventBehavior, { passive: false });

  const [showGame, setShowGame] = useState(0);
  const [timer, setTimer] = useState();
  const [finishedGames, setFinishedGames] = useState({
    dragGame: false,
    typeGame: false,
    selectGame: false
  });

  useEffect(() => {
    if (showGame === 0) {
      clearTimeout(timer);
    }
  }, [showGame, timer])


  function setFinished(game) {
    setFinishedGames({ ...finishedGames, [`${game}`]: true });
    setTimer(setTimeout(() => setShowGame(0), 2500));
  }

  return (
    <div id="home" class="app">
      {/* <Header
        setShowGame={setShowGame}
        headerText={'Escape Room - Eethuis Vers (versie13-11)'}
      /> */}

      {showGame !== 0 || (
        <button onClick={() => {
          setShowGame(1);
          sounds.play('click');
        }
        } type="button"
          className={'btn btn-lg btn-primary app ' + (finishedGames.dragGame ? 'finished' : '')}
        >play drag game</button>
      )}
      {showGame !== 0 || (
        <button onClick={() => {
          setShowGame(2);
          sounds.play('click');
        }
        } type="button"
          className={'btn btn-lg btn-primary app ' + (finishedGames.typeGame ? 'finished' : '')}
        >play type game</button>
      )}
      {showGame !== 0 || (
        <button onClick={() => {
          setShowGame(3);
          sounds.play('click');
        }
        } type="button"
          className={'btn btn-lg btn-primary app ' + (finishedGames.selectGame ? 'finished' : '')}
        >play select game</button>
      )}
      {showGame === 1 && <DragGame setFinished={setFinished} setShowGame={setShowGame} />}
      {showGame === 2 && <TypeGame setFinished={setFinished} setShowGame={setShowGame} />}
      {showGame === 3 && <SelectGame setFinished={setFinished} setShowGame={setShowGame} />}

      <span style={{ position: 'absolute', bottom: '20px', fontWeight: 'bold', color: 'white' }}>VERSION 12-12</span>
    </div >
  )
}

export default App;
