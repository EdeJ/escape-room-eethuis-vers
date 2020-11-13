import React, { useState } from 'react';
import { CheckSquare, Square } from 'react-bootstrap-icons';
import Header from './Header';
import ResultButton from './ResultButton';
import Sounds from './SamplePlayer';
import './SelectGame.css';

function SelectGame({ setShowGame, setFinished }) {

    const [countries, setCountries] = useState([
        { name: 'Brazil', checked: false },
        { name: 'Vietnam', checked: false },
        { name: 'Ethiopia', checked: false },
        { name: 'Indonesia', checked: false },
        { name: 'Jordan', checked: false },
        { name: 'Canada', checked: false },
        { name: 'Italy', checked: false },
        { name: 'Spain', checked: false }
    ]);

    const winningCountries = ['Brazil', 'Vietnam', 'Ethiopia', 'Indonesia'];

    const sounds = new Sounds();

    const [buttenText, setButtonText] = useState('Controleer Antwoord');
    const [status, setStatus] = useState('hidden');

    const [text, setText] = useState();

    function isAllChecked() {
        let count = 0;
        countries.forEach(item => {
            if (item.checked) {
                count++;
            }
        });
        if (count === 4) {
            return true;
        }
        return false;
    }
    function checkAnswers() {
        let gameWinning = true;
        countries.forEach(item => {
            if (item.checked) {
                if (!winningCountries.includes(item.name)) {
                    gameWinning = false;
                }
            }
        });
        return gameWinning;
    }

    return (
        <div id="select-game">
            <Header
                setShowGame={setShowGame}
                headerText={'Welke van de volgende landen produceren koffie?'}
            />
            <div id="game-content">
                {text}
                <div className="center">
                    <ResultButton buttenText={buttenText} status={status} />
                </div>
                <div id="countries">
                    {countries.map((country, i) => (
                        <div
                            key={i}
                            className="box draggable"
                            onClick={() => {
                                const updateCountries = [...countries];
                                if (countries[i].checked) {
                                    sounds.play('click');
                                    updateCountries[i].checked = false;
                                    setCountries(updateCountries);
                                } else if (!isAllChecked()) {
                                    sounds.play('click');
                                    updateCountries[i].checked = !countries[i].checked;
                                    setCountries(updateCountries);
                                } else {
                                    // sounds.play('wrong');
                                    // setStatus('wrong');
                                    // setButtonText('Select a maximum of 4 countries');
                                }
                                if (isAllChecked()) {
                                    console.log('WINNIG' + checkAnswers());
                                    if (checkAnswers()) {
                                        sounds.play('correct');
                                        setStatus('correct');
                                        setButtonText('Goed');
                                        setFinished('selectGame');
                                    } else {
                                        sounds.play('wrong');
                                        setStatus('wrong');
                                        setButtonText('Antwoord onjuist');
                                    }
                                } else {
                                    setStatus('hidden');
                                }
                            }}
                        >{country.name}
                            {country.checked ? <CheckSquare /> : <Square />}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SelectGame
