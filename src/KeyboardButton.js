import React from 'react'
import Sounds from './SamplePlayer';

function KeyboardButton({ keyName, keyPressed }) {

    const sounds = new Sounds();

    return (
        <li key={keyName}>
            <button
                value={keyName}
                className="key"
                onClick={(e) => {
                    keyPressed(e.currentTarget.value);
                    sounds.play('click');
                }
                }
            >
                <span>{keyName}</span>
            </button>
        </li>
    )
}

export default KeyboardButton
