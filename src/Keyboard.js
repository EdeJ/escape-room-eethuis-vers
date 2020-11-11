import React from 'react';
import './keyboard.css';
import KeyboardButton from './KeyboardButton';

function Keyboard({ keyPressed }) {
    return (
        <div>
            <div id="keyboard">
                <div className="inner-board">
                    <ul className="cf" id="qwerty">
                        <KeyboardButton keyName={'q'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'w'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'e'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'r'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'t'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'y'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'u'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'i'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'o'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'p'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'delete'} keyPressed={keyPressed} />
                    </ul>
                    <ul className="cf" id="asdfg">
                        <KeyboardButton keyName={'a'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'s'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'d'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'f'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'g'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'h'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'j'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'k'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'l'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'Enter'} keyPressed={keyPressed} />
                    </ul>
                    <ul className="cf" id="zxcvb">
                        <KeyboardButton keyName={'z'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'x'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'c'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'v'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'b'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'n'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'m'} keyPressed={keyPressed} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Keyboard
