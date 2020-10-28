import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Sortable from "sortablejs";
// import { Sortable, MultiDrag, Swap, OnSpill, AutoScroll } from "sortablejs";


function App() {


  useEffect(() => {

    const exampleLeft = document.getElementById("example-left");
    const exampleRight = document.getElementById("example-right");


    new Sortable(exampleLeft, {
      group: 'shared', // set both lists to same group
      animation: 150,
      sort: false
    });

    new Sortable(exampleRight, {
      group: 'shared',
      animation: 150
    });


  }, []);




  return (
    <div>
      <div id="shared-lists" className="row">
        <h4 className="col-12">Shared lists</h4>
        <div id="example-left" className="list-group col">
          <div className="list-group-item">Item 1</div>
          <div className="list-group-item">Item 2</div>
          <div className="list-group-item">Item 3</div>
          <div className="list-group-item">Item 4</div>
          <div className="list-group-item">Item 5</div>
          <div className="list-group-item">Item 6</div>
        </div>

        <div id="example-right" className="list-group col">
          {/* <div className="list-group-item tinted">Item 1</div>
          <div className="list-group-item tinted">Item 2</div>
          <div className="list-group-item tinted">Item 3</div>
          <div className="list-group-item tinted">Item 4</div>
          <div className="list-group-item tinted">Item 5</div>
          <div className="list-group-item tinted">Item 6</div> */}
        </div>
      </div>
    </div>
  )
}

export default App;
