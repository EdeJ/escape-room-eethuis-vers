import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Sortable from "sortablejs";
// import { Sortable, MultiDrag, Swap, OnSpill, AutoScroll } from "sortablejs";

function App() {

  const winningOrder = "3,2,1,0";

  useEffect(() => {
    const sourceList = document.getElementById("source-list");
    const destinationList = document.getElementById("destination-list");

    new Sortable(sourceList, {
      group: 'shared', // set both lists to same group
      animation: 150,
      sort: false,
    });

    new Sortable(destinationList, {
      group: 'shared',
      animation: 150,
    });

    function preventBehavior(e) {
      e.preventDefault();
    }

    document.addEventListener("touchmove", preventBehavior, { passive: false });

  }, []);

  function checkAnswer() {

    console.log('check');
    const answerList = document.getElementById('destination-list');
    // answerList.forEach(element => {
    //   console.log(element.id);
    // });
    // console.log(answerList);
    const myArray = Array.prototype.slice.call(answerList.childNodes);

    console.log(Array.isArray(myArray));
    console.log(myArray);

    // const newArray = myArray.reduce((acc, node) => {
    //   return acc + node.id;
    // }, []);
    const newArray = myArray.map(node => (node.id));
    console.log('TO STRING' + newArray.toString());
    console.log('is EQUEL??? : ' + (newArray.toString() === winningOrder));

    console.log('reduced array', newArray);
  }

  return (
    <>
      <h4>1. Zet de volgende koffiesoorten in de volgorde van hoeveelheid melk</h4>
      <button style={{ position: 'absolute', bottem: '0' }} onClick={checkAnswer} type="button" className="btn btn-lg btn-primary">Controleer Antwoord</button>
      <div className="content">
        <div id="shared-lists" className="row">
          <div id="source-list" className="list-group col">
            <div id="2" className="list-group-item">Latte</div>
            <div id="0" className="list-group-item">Espresso macchiato</div>
            <div id="3" className="list-group-item">Cortado</div>
            <div id="1" className="list-group-item">Cappucino</div>
          </div>
          <div id="destination-list" className="list-group col">
          </div>
        </div>
      </div>

    </>
  )
}

export default App;
