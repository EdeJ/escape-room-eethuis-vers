import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import gsap from 'gsap';
import Draggable from "gsap/Draggable";
import { ArrowsMove } from 'react-bootstrap-icons';
import $ from 'jquery';

function App() {
  gsap.registerPlugin(Draggable);

  useEffect(() => {
    const overlapThreshold = "0%";

    const targets = $(".target");
    const draggables = $('.draggable');

    const dragElements = document.querySelectorAll(".draggable");
    const dropElements = document.querySelectorAll(".target");
    const dragTiles = Array.prototype.map.call(dragElements, createDragTile);
    const dropTiles = Array.prototype.map.call(dropElements, createDropTile);

    function createDropTile(element, index) {
      const tile = {
        element: element,
        child: null,
        value: element.dataset.value
      };
      return tile;
    }

    let top = $('#shared-lists').offset().top + $('.draggable').height();
    const dragList = $('#source-list');
    const dropList = $('#destination-list');
    const distance = $('#shared-lists').height() / 4;

    for (let i = 0; i < draggables.length; i++) {
      $(draggables[i]).css({ "position": "absolute", "top": `${top}px`, "left": `${dragList.left}px` });
      $(targets[i]).css({ "position": "absolute", "top": `${top}px`, "left": `${dropList.left}px` });
      top = top + distance;
    }

    function createDragTile(element, index) {

      const tile = {
        element: element,
        parent: null,
        value: element.dataset.value
      };


      Draggable.create(element, {
        bounds: "#content",
        // edgeResistance: 0.65,
        type: "x,y",
        throwProps: true,
        onDragStart: function (e) {
          element.classList.remove("correct", "wrong");
        },

        onDrag: function (e) {
          let parent = tile.parent;
          if (parent) {
            if (this.hitTest(parent.element, overlapThreshold)) {
              // exit the function
              // tile is still hitting parent, so no need to proceed any further.
              return;
            }
            // tile is no longer hitting parent, so clear any references between the two
            parent = tile.parent = parent.child = null;
          }

          for (let i = 0; i < dropTiles.length; i++) {
            const dropTile = dropTiles[i];
            if (dropTile.child) {
              // continue to next loop iteration
              // drop tile already has a child, so no need to proceed any further
              continue;
            }

            if (this.hitTest(dropTile.element, overlapThreshold)) {

              // we hit an empty drop tile, so link the two together and exit the function
              tile.parent = dropTile;
              dropTile.child = tile;
              element.classList.add("hitting");
              return;
            }
          }
          // if we made it this far, we're not hitting an empty drop tile
          element.classList.remove("hitting");
        },

        onDragEnd: function (e) {

          let x = 0;
          let y = 0;

          // move to parent
          if (tile.parent) {

            const rect1 = element.getBoundingClientRect();
            const rect2 = tile.parent.element.getBoundingClientRect();

            x = "+=" + (rect2.left - rect1.left);
            y = "+=" + (rect2.top - rect1.top);
          }

          gsap.to(e.target, { duration: 0.1, x: x, y: y });
          return tile;
        }
      });













    }





    // prevent scrolling
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
    // console.log('is EQUEL??? : ' + (newArray.toString() === winningOrder));

    console.log('reduced array', newArray);
  }

  return (
    <>
      <button style={{ position: 'absolute', bottem: '0' }} onClick={checkAnswer} type="button" className="btn btn-lg btn-primary">Controleer Antwoord</button>
      <h4>1. Zet de volgende koffiesoorten in de volgorde van hoeveelheid melk (versie 3)</h4>
      <div id="content">
        <div id="shared-lists">
          <div className="list-box" id="source-list" >
            <div id="2" className="box draggable">Latte<ArrowsMove className='arrow' /></div>
            <div id="0" className="box draggable">Espresso macchiato<ArrowsMove className='arrow' /></div>
            <div id="3" className="box draggable">Cortado<ArrowsMove className='arrow' /></div>
            <div id="1" className="box draggable">Cappucino<ArrowsMove className='arrow' /></div>
          </div>
          <div className="list-box" id="destination-list">
            <div id="0" className="box target"></div>
            <div id="1" className="box target"></div>
            <div id="2" className="box target"></div>
            <div id="3" className="box target"></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App;
