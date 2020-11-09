import { useState } from 'react';
import TypeGame from './TypeGame';
import DragGame from './DragGame';

function App() {

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
    <div>
      {showGame === 1 || (
        <button onClick={() => setShowGame(1)} type="button" className="btn btn-lg btn-primary">play drag game</button>
      )}
      {showGame === 2 || (
        <button onClick={() => setShowGame(2)} type="button" className="btn btn-lg btn-primary">play type game</button>
      )}
      {showGame === 1 && <DragGame setFinished={setFinished} />}
      {showGame === 2 && <TypeGame setFinished={setFinished} />}
      {dragGameFinished && <h1 style={{ color: 'white' }} >drag game finished!</h1>}
    </div>
  )
}

export default App;
