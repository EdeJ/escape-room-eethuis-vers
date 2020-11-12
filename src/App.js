import { useState } from 'react';
import TypeGame from './TypeGame';
import DragGame from './DragGame';
import Sounds from './SamplePlayer';

function App() {

  const sounds = new Sounds();

  // prevent scrolling
  function preventBehavior(e) {
    e.preventDefault();
  }
  document.addEventListener("touchmove", preventBehavior, { passive: false });

  const [showGame, setShowGame] = useState(0);
  const [dragGameFinished, setDragGameFinished] = useState(false);


  function setFinished(isFinished) {
    if (isFinished) {
      setDragGameFinished(true);
    }
  }

  return (
    <div id="home">
      {showGame !== 0 || (
        <button onClick={() => {
          setShowGame(1);
          sounds.play('click');
        }
        } type="button" className="btn btn-lg btn-primary">play drag game</button>
      )}
      {showGame !== 0 || (
        <button onClick={() => {
          setShowGame(2);
          sounds.play('click');
        }
        } type="button" className="btn btn-lg btn-primary">play type game</button>
      )}
      {showGame === 1 && <DragGame setFinished={setFinished} setShowGame={setShowGame} />}
      {showGame === 2 && <TypeGame setFinished={setFinished} setShowGame={setShowGame} />}
      {/* {dragGameFinished && <h1 style={{ color: 'white' }} >drag game finished!</h1>} */}
    </div>
  )
}

export default App;
