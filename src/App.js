import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import gsap from 'gsap';
import Draggable from "gsap/Draggable";

import Sortable from "sortablejs";
// import { Sortable, MultiDrag, Swap, OnSpill, AutoScroll } from "sortablejs";

function App() {

  const winningOrder = "3,2,1,0";

  useEffect(() => {
    const sourceList = document.getElementById("source-list");
    const destinationList = document.getElementById("destination-list");

    gsap.registerPlugin(Draggable);
    // Draggable.create("#destination-list");
    const coffeeDragable = document.getElementsByClassName("list-group-item");

    Draggable.create(coffeeDragable, {
      type: "x,y",
      bounds: document.getElementById("shared-lists"),
      throwProps: true,
      onDrag: function () {
        if (this.hitTest(destinationList, '')) {
          console.log('HIT');
        }
      },
      liveSnap: [10, 200],
      // liveSnap: {
      //   //snaps to the closest point in the array, but only when it's within 15px (new in GSAP 1.20.0 release):
      //   points: [{ x: 508, y: 0 },
      //   { x: 508, y: 60 },
      //   { x: 508, y: 120 },
      //   { x: 508, y: 180 }],
      //   radius: 30
      // },
      onClick: function () {
        console.log("clicked");
      },
      onDragEnd: function () {
        console.log("drag ended");
      }
    });


    // new Sortable(sourceList, {
    //   group: 'shared', // set both lists to same group
    //   animation: 150,
    //   sort: false,
    // });

    // new Sortable(destinationList, {
    //   group: 'shared',
    //   animation: 150,
    // });

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
            <div id="2" className="box draggable">Latte</div>
            <div id="0" className="box draggable">Espresso macchiato</div>
            <div id="3" className="box draggable">Cortado</div>
            <div id="1" className="box draggable">Cappucino</div>
          </div>
          <div id="destination-list" className="list-group col">
            <div id="0" className="box draggable">target 1</div>
            <div id="1" className="box draggable">target 1</div>
            <div id="2" className="box draggable">target 1</div>
            <div id="3" className="box draggable">target 1</div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App;
