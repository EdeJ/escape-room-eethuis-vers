import { useEffect, useState } from 'react';
import DragGame from './DragGame';

function App() {

  // prevent scrolling
  function preventBehavior(e) {
    e.preventDefault();
  }
  document.addEventListener("touchmove", preventBehavior, { passive: false });

  const [showDragGame, setShowDragGame] = useState(false);
  const [dragGameFinished, setDragGameFinished] = useState(false);

  function setFinished(isFinished) {
    if (isFinished) {
      setDragGameFinished(true);
    }
  }

  return (
    <div>
      {showDragGame || (
        <button onClick={() => setShowDragGame(true)} type="button" className="btn btn-primary">play drag game</button>
      )}
      {(!dragGameFinished && showDragGame) && <DragGame setFinished={setFinished} />}
      {dragGameFinished && <h1 style={{ color: 'white' }} >drag game finished!</h1>}
    </div>
  )
}

export default App;
