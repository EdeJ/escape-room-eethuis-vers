import { useEffect } from 'react';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Sortable from "sortablejs";
// import { Sortable, MultiDrag, Swap, OnSpill, AutoScroll } from "sortablejs";

function App() {

  const winningOrder = "3,2,1,0";
  let orderToCheck = [];


  useEffect(() => {

    const preventBehavior = (e) => {
      e.preventDefault();
    }

    document.addEventListener("touchmove", preventBehavior, { passive: false });

    const sourceList = document.getElementById("source-list");
    const destinationList = document.getElementById("destination-list");

    new Sortable(sourceList, {
      group: 'shared', // set both lists to same group
      animation: 150,
      sort: false,
      // onEnd: function (event) {
      //   console.log('event.oldIndex', event.oldIndex);
      //   console.log('event.newIndex', event.newIndex);
      //   console.log(event.oldDraggableIndex);
      //   console.log(event.newDraggableIndex);
      //   console.log(event.from);
      //   console.log(event.item.id);
      //   orderToCheck.push(event.item.id);
      //   console.log(orderToCheck);
      //   // event.oldIndex; // element's old index within old parent
      //   // event.newIndex; // element's new index within new parent
      // },

    });

    new Sortable(destinationList, {
      group: 'shared',
      animation: 150,
      // onEnd: function (event) {
      //   console.log('destinationList', destinationList.childNodes);

      //   console.log('event.oldIndex', event.oldIndex);
      //   console.log('event.newIndex', event.newIndex);
      //   console.log('fom', event.from);
      //   console.log('to', event.to.children);
      //   // orderToCheck.push(event.item.id);
      //   orderToCheck[event.newIndex] = event.item.id;
      //   console.log(orderToCheck);
      //   // event.oldIndex; // element's old index within old parent
      //   // event.newIndex; // element's new index within new parent
      // },
      // onMove: function (/**Event*/ evt, /**Event*/ originalEvent) {
      //   console.log('move evt', evt);
      //   console.log('move originalEvent', originalEvent);
      //   // // Example: https://jsbin.com/nawahef/edit?js,output
      //   // evt.dragged; // dragged HTMLElement
      //   // evt.draggedRect; // DOMRect {left, top, right, bottom}
      //   // evt.related; // HTMLElement on which have guided
      //   // evt.relatedRect; // DOMRect
      //   // evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
      //   // originalEvent.clientY; // mouse position
      //   // // return false; — for cancel
      //   // // return -1; — insert before target
      //   // // return 1; — insert after target
      //   // // return true; — keep default insertion point based on the direction
      //   // // return void; — keep default insertion point based on the direction
      // },
    });

    function preventBehavior(e) {
      e.preventDefault();
    };

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
    <div>
      <h4>1. Zet de volgende koffiesoorten in de volgorde van hoeveelheid melk
          </h4>
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
      {/* <button style={{ position: 'absolute', bottem: '0' }} onClick={checkAnswer} type="button" className="btn btn-lg btn-primary">Controleer Antwoord</button> */}
    </div>
  )
}

export default App;
