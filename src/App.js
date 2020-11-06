import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import gsap from 'gsap';
import Draggable from "gsap/Draggable";
import { ArrowsMove } from 'react-bootstrap-icons';
import $ from 'jquery';

function App() {
  gsap.registerPlugin(Draggable);
  const winningOrder = "3,2,1,0";

  useEffect(() => {
    const sourceList = document.getElementById("source-list");
    const destinationList = document.getElementById("destination-list");
    const coffeeDragable = document.getElementsByClassName("list-group-item");

    const targets = $(".target");
    const draggables = $('.draggable');
    const overlapThreshold = "0%";

    let top = $('#shared-lists').offset().top + $('.draggable').height();
    const dragList = $('#source-list');
    const dropList = $('#destination-list');
    const distance = $('#shared-lists').height() / 4;

    for (let i = 0; i < draggables.length; i++) {
      $(draggables[i]).css({ "position": "absolute", "top": `${top}px`, "left": `${dragList.left}px` });
      $(targets[i]).css({ "position": "absolute", "top": `${top}px`, "left": `${dropList.left}px` });
      top = top + distance;
    }

    Draggable.create(".draggable", {
      bounds: "#content",
      // edgeResistance: 0.65,
      type: "x,y",
      throwProps: true,
      onDragStart: function (e) {

      },

      onDrag: function (e) {

        for (let i = 0; i < targets.length; i++) {
          if (this.hitTest(targets[i], overlapThreshold)) {
            $(targets[i]).addClass("showOver");
          } else {
            $(targets[i]).removeClass("showOver");
          }
          if (e.target.id === $(targets[i]).data('dragItemId')) {
            $(targets[i]).removeClass("occupied");
          }
        }
      },

      onDragEnd: function (e) {
        // var snapMade = false;
        for (let i = 0; i < targets.length; i++) {
          if (this.hitTest(targets[i], overlapThreshold)) {

            if (!$(targets[i]).hasClass("occupied")) {

              let p = $(targets[i]).position();

              console.log('addClass("occupied")');
              $(targets[i]).addClass("occupied");

              // tween onto target
              gsap.to(e.target, { duration: 0.1, left: p.left, top: p.top, x: 0, y: 0 });
              // $(targets[i]).data('dragItem', e.target);

              $(targets[i]).data('dragItemId', e.target.id);
              // $('#0').data('myval', 20); //setter
              // console.log($(targets[i]).data('dragItem'));
              // let test = $(targets[i]).data('dragItem')
              // $(test).css('background-color', 'red');
              // console.log(test);

            }
          }
        }

        // if the dragged item isn't over a target send it back to its
        // start position
        // if (!snapMade) {
        //     if (e.target.targetAttachedTo != undefined) {
        //         e.target.targetAttachedTo.removeClass("occupied");
        //     };
        //     //  gsap.to(e.target, 0.1, { x: 0, y: 0, top: e.target.originalTop, left: e.target.originalLeft });
        // }
        console.log('All targets: ', targets);
      }
    })

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
    console.log('is EQUEL??? : ' + (newArray.toString() === winningOrder));

    console.log('reduced array', newArray);
  }

  return (
    <>
      <button style={{ position: 'absolute', bottem: '0' }} onClick={checkAnswer} type="button" className="btn btn-lg btn-primary">Controleer Antwoord</button>
      <h4>1. Zet de volgende koffiesoorten in de volgorde van hoeveelheid melk (versie 2)</h4>
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
