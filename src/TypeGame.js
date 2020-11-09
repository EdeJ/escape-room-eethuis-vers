import React, { useState } from 'react';
import Keyboard from './Keyboard';
import './type-game.css';


function TypeGame() {

    const winningWord = 'fiets';
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');

    function keyPressed(key) {
        switch (key) {
            case 'delete':
                setText(text.slice(0, -1));
                break;
            case 'enter':
                text === winningWord ? setMessage('Goed') : setMessage('Antwoord onjuist');
                break;

            default:
                setText(text + key);
                text + key === winningWord && setMessage('Goed');
                break;
        }
    }

    return (
        <div>
            <h1>type: fiets</h1>
            <div id="message">{message}</div>
            <div id="text-field">{text}</div>
            <Keyboard keyPressed={keyPressed} />
        </div>
    )
}

export default TypeGame
