import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import gsap from 'gsap';
import Draggable from "gsap/Draggable";
import { ArrowsMove } from 'react-bootstrap-icons';

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

    var targets = $(".target");
    var overlapThreshold = "0%";

    // go through all the draggable objects and store their starting positions
    // so can return to them when dragged off the targets

    // var boxes = $(".box");
    // $.each(boxes, function (i, e) {
    //     var position = $(e).offset();
    //     e.originalLeft = position.left - 8;
    //     e.originalTop = position.top - 8;
    // });

    Draggable.create(".box", {
      bounds: "#demo",
      // edgeResistance: 0.65,
      type: "x,y",
      throwProps: true,
      onDragStart: function (e) {

      },


      // changes the colour of the targets whilst dragging to give feedback that a
      // dragged object is going to snap to it
      onDrag: function (e) {
        for (var i = 0; i < targets.length; i++) {
          if (this.hitTest(targets[i], overlapThreshold)) {
            $(targets[i]).addClass("showOver");
          } else {
            $(targets[i]).removeClass("showOver");
          }
        }
      },

      onDragEnd: function (e) {
        var snapMade = false;
        for (var i = 0; i < targets.length; i++) {
          if (this.hitTest(targets[i], overlapThreshold)) {

            // only snap to an available target, i.e. 
            // one without a class of "occupied"
            if (!$(targets[i]).hasClass("occupied")) {

              // get the position of the target so can move 
              // dragging item exactly on it when released
              var p = $(targets[i]).position();

              // add a class of occupied to target to stop other items
              // being snapped to it
              $(targets[i]).addClass("occupied");

              // tween onto target
              gsap.to(e.target, 0.1, { left: p.left, top: p.top, x: 0, y: 0 });

              // is a property called targetAttachedTo directly on the dragged item.
              // this stores the target we have snapped to.  Allows us to free up
              // the target if we drag it off it

              // before we update that property first checks that we haven't dragged 
              // from one target straight to another as this would balls it up
              if (e.target.targetAttachedTo != $(targets[i]) && e.target.targetAttachedTo != undefined) {
                e.target.targetAttachedTo.removeClass("occupied"); e.target.targetAttachedTo = undefined;
              }

              // now store new target in targetAttachedTo property
              e.target.targetAttachedTo = $(targets[i]);
              console.log(e.target.id);
              console.log(e.target.targetAttachedTo[0].id);
              snapMade = true;
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
      <h4>1. Zet de volgende koffiesoorten in de volgorde van hoeveelheid melk</h4>
      <div className="content">
        <div id="shared-lists">
          <div className="list-box" id="source-list" >
            <div id="2" className="box draggable">Latte<ArrowsMove /></div>
            <div id="0" className="box draggable">Espresso macchiato<ArrowsMove /></div>
            <div id="3" className="box draggable">Cortado<ArrowsMove /></div>
            <div id="1" className="box draggable">Cappucino<ArrowsMove /></div>
          </div>
          <div className="list-box" id="destination-list">
            <div id="0" className="box drop-area"></div>
            <div id="1" className="box drop-area"></div>
            <div id="2" className="box drop-area"></div>
            <div id="3" className="box drop-area"></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App;
