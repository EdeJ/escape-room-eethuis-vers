import React, { useState } from 'react';
import Header from './Header';
import Keyboard from './Keyboard';
import ResultButton from './ResultButton';
import Sounds from './SamplePlayer';
import './type-game.css';

function TypeGame({ setShowGame }) {

    const winningWord = 'kopiluwak';
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const sounds = new Sounds();

    const [buttenText, setButtonText] = useState('Controleer Antwoord');
    const [status, setStatus] = useState('hidden');



    function keyPressed(key) {
        switch (key) {
            case 'delete':
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
        } else if (evaluateWrong) {
            setStatus('wrong');
            setButtonText('Antwoord onjuist');
            // setMessage('Antwoord onjuist');
            sounds.play('wrong');
        }
    }

    return (
        <div>
            <Header
                setShowGame={setShowGame}
                headerText={'Hoe heet de duurste koffie ter wereld?'}
            />
            <div className="content">
                <div className="center">
                    <ResultButton buttenText={buttenText} status={status} />
                </div>
                {/* <div id="message">{message}</div> */}
                <div id="text-field">{text}</div>
            </div>
            <Keyboard keyPressed={keyPressed} />
        </div>
    )
}

export default TypeGame
