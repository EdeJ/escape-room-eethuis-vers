import React from 'react'
import Header from './Header';
import Tiles from './Tiles';

function DragGame({ setShowGame, setFinished }) {
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

    return (
        <>
            <Header
                setShowGame={setShowGame}
                headerText={'1. Zet de volgende koffiesoorten in de volgorde van hoeveelheid melk (versie 8-11)'}
            />
            <Tiles
                tileData={tileData}
                setFinished={setFinished}
            />

        </>
    )
}

export default DragGame
