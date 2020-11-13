import React, { useState } from 'react';
import Header from './Header';
import Keyboard from './Keyboard';
import ResultButton from './ResultButton';
import Sounds from './SamplePlayer';
import './type-game.css';

function TypeGame({ setShowGame, setFinished }) {

    const winningWord = 'kopiluwak';
    const [text, setText] = useState('');
    // const [message, setMessage] = useState('');
    const sounds = new Sounds();

    const [buttenText, setButtonText] = useState('Controleer Antwoord');
    const [status, setStatus] = useState('hidden');



    function keyPressed(key) {
        switch (key) {
            case 'delete':
                setStatus('hidden');
                setText(text.slice(0, -1));
                checkAnswer(text.slice(0, -1));
                break;
            case 'Enter':
                checkAnswer(text, true);
                break;
            case 'spacebar':
                setText(text + ' ');
                break;
            default:
                setText(text + key);
                checkAnswer(text + key);
                break;
        }
    }

    function checkAnswer(word, evaluateWrong) {
        console.log(word.replace(' ', ''));
        if (word.replace(' ', '') === winningWord) {
            // setMessage('Goed');
            setStatus('correct');
            setButtonText('Goed');
            sounds.play('correct');
            setFinished('typeGame');
        } else if (evaluateWrong) {
            setStatus('wrong');
            setButtonText('Antwoord onjuist');
            // setMessage('Antwoord onjuist');
            sounds.play('wrong');
        }
    }

    return (
        <div id="type-game">
            <Header
                setShowGame={setShowGame}
                headerText={'Hoe heet de duurste koffie ter wereld?'}
            />

            <div id="text-field">
                <span className="text-input">{text}</span>
                <div className="center">
                    <ResultButton buttenText={buttenText} status={status} />
                </div>
            </div>
            <Keyboard keyPressed={keyPressed} />
        </div>
    )
}

export default TypeGame
