import { useState } from 'react';
import TypeGame from './TypeGame';
import DragGame from './DragGame';
import Sounds from './SamplePlayer';
import SelectGame from './SelectGame';

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
    setTimeout(() => setShowGame(0), 2000);
  }

  return (
    <div id="home">
      {showGame !== 0 || (
        <button onClick={() => {
          setShowGame(1);
          sounds.play('click');
        }
        } type="button"
          className={'btn btn-lg btn-primary ' + (finishedGames.dragGame ? 'finished' : '')}
        >play drag game</button>
      )}
      {showGame !== 0 || (
        <button onClick={() => {
          setShowGame(2);
          sounds.play('click');
        }
        } type="button"
          className={'btn btn-lg btn-primary ' + (finishedGames.typeGame ? 'finished' : '')}
        >play type game</button>
      )}
      {showGame !== 0 || (
        <button onClick={() => {
          setShowGame(3);
          sounds.play('click');
        }
        } type="button"
          className={'btn btn-lg btn-primary ' + (finishedGames.selectGame ? 'finished' : '')}
        >play select game</button>
      )}
      {showGame === 1 && <DragGame setFinished={setFinished} setShowGame={setShowGame} />}
      {showGame === 2 && <TypeGame setFinished={setFinished} setShowGame={setShowGame} />}
      {showGame === 3 && <SelectGame setFinished={setFinished} setShowGame={setShowGame} />}
      {/* {dragGameFinished && <h1 style={{ color: 'white' }} >drag game finished!</h1>} */}
    </div>
  )
}

export default App;
