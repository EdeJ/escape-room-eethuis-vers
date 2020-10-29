import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Sortable from "sortablejs";
// import { Sortable, MultiDrag, Swap, OnSpill, AutoScroll } from "sortablejs";

function App() {

  useEffect(() => {
    const sourceList = document.getElementById("source-list");
    const destinationList = document.getElementById("destination-list");

    new Sortable(sourceList, {
      group: 'shared', // set both lists to same group
      animation: 150,
      sort: false
    });

    new Sortable(destinationList, {
      group: 'shared',
      animation: 150
    });

  }, []);


  return (
    <div>
      <h4>1. Zet de volgende koffiesoorten in de volgorde van hoeveelheid melk
          </h4>
      <div id="shared-lists" className="row">
        <div id="source-list" className="list-group col">
          <div className="list-group-item">Espresso macchiato</div>
          <div className="list-group-item">Cappucino</div>
          <div className="list-group-item">Latte</div>
          <div className="list-group-item">Cortado</div>
        </div>

        <div id="destination-list" className="list-group col">
        </div>
      </div>
    </div>
  )
}

export default App;
