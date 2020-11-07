import { useEffect } from 'react';
import Tiles from './Tiles';

function App() {

  // prevent scrolling
  function preventBehavior(e) {
    e.preventDefault();
  }
  document.addEventListener("touchmove", preventBehavior, { passive: false });

  const tileData = [
    {
      order: 2,
      name: '2 Latte'
    }, {
      order: 0,
      name: '0 Espresso macchiato'
    },
    {
      order: 3,
      name: '3 Cortado'
    },
    {
      order: 1,
      name: '1 Cappucino'
    }
  ];

  return (
    <>
      <header>
        <h4>1. Zet de volgende koffiesoorten in de volgorde van hoeveelheid melk (versie 7-11)</h4>
      </header>
      <Tiles tileData={tileData} />

    </>
  )
}

export default App;
