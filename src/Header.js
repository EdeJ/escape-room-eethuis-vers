import React from 'react'
import { ArrowLeftShort } from 'react-bootstrap-icons'
import Sounds from './SamplePlayer'

function Header({ setShowGame, headerText }) {
    const sounds = new Sounds();

    return (
        <header>
            <button className="backBtn"
                onClick={() => {
                    setShowGame(0);
                    sounds.play('click');
                }}
            ><ArrowLeftShort size={40} />
            Terug
            </button>
            <h2>{headerText}</h2>
        </header>
    )
}

export default Header


