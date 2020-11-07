import React, { useState } from 'react'
import Tiles from './Tiles';

function DragGame({ setFinished }) {
    const tileData = [
        {
            order: 2,
            name: '2 Latte'
        }, {
            order: 0,
            name: '0 Espresso macchiato'
        },
        {
            order: 3,
            name: '3 Cortado'
        },
        {
            order: 1,
            name: '1 Cappucino'
        }
    ];

    const [allCorrect, setAllcorrect] = useState(false);

    function checkAllCorrect(allCorrect) {
        allCorrect ? setAllcorrect(true) : setAllcorrect(false);
        allCorrect ? setFinished(true) : setFinished(false);
    }

    return (
        <>
            <header>
                {/* <div>all Correct: {allCorrect ? 'YES' : 'NO'}</div> */}
                <h4>1. Zet de volgende koffiesoorten in de volgorde van hoeveelheid melk (versie 7-11)</h4>
            </header>
            <Tiles tileData={tileData} checkAllCorrect={checkAllCorrect} />

        </>
    )
}

export default DragGame
