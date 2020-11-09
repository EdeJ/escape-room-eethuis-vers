import React, { useState } from 'react'
import Tiles from './Tiles';

function DragGame({ setFinished }) {
    const tileData = [
        {
            order: 2,
            name: 'Latte (3)'
        }, {
            order: 0,
            name: 'Espresso macchiato (1)'
        },
        {
            order: 3,
            name: 'Cortado (4)'
        },
        {
            order: 1,
            name: 'Cappucino (2)'
        }
    ];

    // const [allCorrect, setAllcorrect] = useState(false);

    // function checkAllCorrect(allCorrect) {
    //     allCorrect ? setAllcorrect(true) : setAllcorrect(false);
    //     allCorrect ? setFinished(true) : setFinished(false);
    // }

    return (
        <>
            <header>
                {/* <div>all Correct: {allCorrect ? 'YES' : 'NO'}</div> */}
                <h4>1. Zet de volgende koffiesoorten in de volgorde van hoeveelheid melk (versie 8-11)</h4>
            </header>
            <Tiles
                tileData={tileData}
                checkAllCorrect={setFinished}
            />

        </>
    )
}

export default DragGame
