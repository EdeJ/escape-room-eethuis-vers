import { useEffect, useState } from 'react';
import DragGame from './DragGame';

function App() {

  // prevent scrolling
  function preventBehavior(e) {
    e.preventDefault();
  }
  document.addEventListener("touchmove", preventBehavior, { passive: false });

  const [showDragGame, setShowDragGame] = useState(false);

  return (
    <div>
      {showDragGame || (
        <button onClick={() => setShowDragGame(true)} type="button" className="btn btn-primary">play drag game</button>
      )}
      {showDragGame && <DragGame />}
    </div>
  )
}

export default App;
