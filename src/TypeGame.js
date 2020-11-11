import React, { useState } from 'react';
import Keyboard from './Keyboard';
import Sounds from './SamplePlayer';
import './type-game.css';

function TypeGame() {

    const winningWord = 'fiets';
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const sounds = new Sounds();

    function keyPressed(key) {
        switch (key) {
            case 'delete':
                setText(text.slice(0, -1));
                checkAnswer(text.slice(0, -1));
                break;
            case 'Enter':
                checkAnswer(text, true);
                break;

            default:
                setText(text + key);
                checkAnswer(text + key);
                break;
        }
    }

    function checkAnswer(word, evaluateWrong) {
        if (word === winningWord) {
            setMessage('Goed');
            sounds.play('correct');
        } else if (evaluateWrong) {
            setMessage('Antwoord onjuist');
            sounds.play('wrong');
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
