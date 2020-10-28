import './App.css';
import { useEffect, useState } from 'react';

import Sortable from "sortablejs";
// import { Sortable, MultiDrag, Swap, OnSpill, AutoScroll } from "sortablejs";


function App() {


  useEffect(() => {

    let el = document.getElementById("items");
    let sortable = Sortable.create(el, {
      delay: 0,
      animation: 500,
      easing: "cubic-bezier(1, 0, 0, 1)",
      group: 'shared',

      onEnd: function (event) {
        let itemEl = event.item; // dragged HTMLElement
        console.log('event.to: ', event.to); // target list
        console.log('event.from: ', event.from); // previous list
        console.log('event.oldIndex: ', event.oldIndex); // element's old index within old parent
        console.log('event.newIndex: ', event.newIndex); // element's new index within new parent
        console.log('event.oldDraggableIndex: ', event.oldDraggableIndex); // element's old index within old parent, only counting draggable elements
        console.log('event.newDraggableIndex: ', event.newDraggableIndex); // element's new index within new parent, only counting draggable elements
        console.log('event.clone: ', event.clone); // the clone element
        console.log('event.pullMode: ', event.pullMode); // when item is in another sortable: `"clone"` if cloning, `true` if moving
      },
      // Element dragging started
      onStart: function (event) {
        const oldIndex = event.oldIndex;

      },
      // Element is dropped into the list from another list
      onAdd: function (/**Event*/ evt) {
        console.log('droped from other list');
        // same properties as onEnd
      },
    });


    let el2 = document.getElementById("drop-1");
    let sortable2 = Sortable.create(el2, {
      delay: 0,
      animation: 500,
      easing: "cubic-bezier(1, 0, 0, 1)",
      group: 'shared',
      onEnd: function (event) {
      },
      // Element dragging started
      onStart: function (event) {
        const oldIndex = event.oldIndex;

      },
    });

    let el3 = document.getElementById("drop-2");
    let sortable3 = Sortable.create(el3, {
      delay: 0,
      animation: 500,
      easing: "cubic-bezier(1, 0, 0, 1)",
      group: 'shared',
      onEnd: function (event) {
      },
      // Element dragging started
      onStart: function (event) {
        const oldIndex = event.oldIndex;

      },
    });






  }, []);




  return (
    <div>
      <ul id="items">
        <li className="draggable" id="item-1" >item 1</li>
        <li className="draggable" id="item-2" >item 2</li>
        <li className="draggable" id="item-3" >item 3</li>
      </ul>
      <br />
      <br />
      <br />
      <ul>
        <li className="drop" id="drop-1" ></li>
        <li className="drop" id="drop-2" ></li>
        <li className="drop" id="drop-3" ></li>
      </ul>
    </div>
  )
}

export default App;
