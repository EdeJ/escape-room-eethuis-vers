import { useState } from 'react';
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
  // const [dragGameFinished, setDragGameFinished] = useState(false);
  const [finishedGames, setFinishedGames] = useState({
    dragGame: false,
    typeGame: false,
    selectGame: false
  });



  function setFinished(game) {
    setFinishedGames({ ...finishedGames, [`${game}`]: true });
    setTimeout(() => setShowGame(0), 2500);
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
      {/* {dragGameFinished && <h1 style={{ color: 'white' }} >drag game finished!</h1>} */}
      <span style={{ position: 'absolute', bottom: '20px', fontWeight: 'bold', color: 'white' }}>VERSION 13-11</span>
    </div >
  )
}

export default App;
