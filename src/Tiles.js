import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import { ArrowsMove } from 'react-bootstrap-icons';
// import 'bootstrap/dist/css/bootstrap.css';
import gsap from 'gsap';
import Draggable from "gsap/Draggable";
import './App.css';
import ResultButton from './ResultButton';

gsap.registerPlugin(Draggable);

function Tiles({ tileData, checkAllCorrect }) {

    const [buttenText, setButtonText] = useState('Controleer Antwoord');

    const [allTilesDroped, setAllTilesDroped] = useState(false);
    const [status, setStatus] = useState('hidden');

    useEffect(() => {
        const overlapThreshold = "10%";

        const targets = $(".target");
        const draggables = $('.draggable');

        const dragElements = document.querySelectorAll(".draggable");
        const dropElements = document.querySelectorAll(".target");

        const dragTiles = Array.prototype.map.call(dragElements, createDragTile);
        const dropTiles = Array.prototype.map.call(dropElements, createDropTile);

        console.log(dropTiles);

        const checkButton = document.getElementById('check');
        checkButton.addEventListener("click", checkTiles);


        function checkTiles() {
            let allCorrect = true;

            for (let i = 0; i < dropTiles.length; i++) {
                const tile = dropTiles[i];
                if (!tile.child) {
                    allCorrect = false;
                    continue;
                }
                if (tile.element.id !== tile.child.element.id) {
                    console.log('false');
                    allCorrect = false;
                }

            }
            if (allCorrect) {
                setButtonText('Goed');
                setStatus('correct');
                setTimeout(function () { checkAllCorrect(true); }, 3000);
            } else {
                setButtonText('fout');
                setStatus('wrong');
                checkAllCorrect(false);
            }
        }

        function createDropTile(element, index) {
            const tile = {
                element: element,
                child: null,
                value: element.dataset.value
            };
            return tile;
        }

        let top = 30; // de helft van de hoogte van een draggable, om het te centreren.
        const dragList = $('#drag-list');
        const dropList = $('#drop-list');
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
                            tile.parent.element.classList.add("hitting");
                            return;
                        }
                    }
                    // if we made it this far, we're not hitting an empty drop tile
                    targets.removeClass("hitting");
                },

                onDragEnd: function () {
                    // const p = $(element).position();
                    // let x = p.x;
                    // let y = p.y;
                    let x = 0;
                    let y = 0;

                    // move to parent
                    if (tile.parent) {
                        const rect1 = element.getBoundingClientRect();
                        const rect2 = tile.parent.element.getBoundingClientRect();

                        x = "+=" + (rect2.left - rect1.left);
                        y = "+=" + (rect2.top - rect1.top);
                    }
                    gsap.to(element, { duration: 0.2, x: x, y: y });

                    // Als alle tile gelegd zijn
                    let allDroped = true;
                    for (let i = 0; i < dropTiles.length; i++) {
                        const tile = dropTiles[i];
                        if (!tile.child) {
                            allDroped = false;
                            continue;
                        }
                    }
                    // allDroped ? setAllTilesDroped(true) : setAllTilesDroped(false);
                    if (allDroped) {
                        setStatus('')
                    } else {
                        setStatus('hidden');
                        setButtonText('Controleer Antwoord');
                    }

                    return tile;
                }
            });
        }

    }, []);

    return (
        <div id="content">
            <div id="shared-lists">
                <div className="list-box" id="drag-list" >
                    {tileData.map((tile, i) => (
                        <div key={i} id={tile.order} className="box draggable">{tile.name}<ArrowsMove className='arrow' /></div>
                    ))}
                    <ResultButton buttenText={buttenText} status={status} />
                </div>
                <div className="list-box" id="drop-list">
                    {tileData.map((tile, i) => (
                        <div key={i} id={i} className="box target"></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tiles
