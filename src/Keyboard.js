import React from 'react';
import './keyboard.css';
import KeyboardButton from './KeyboardButton';

function Keyboard({ keyPressed }) {
    return (
        <div>
            <div id="keyboard">
                <div className="inner-board">
                    {/* <ul class="cf">
                    <li style={{ opacity: 0 }} key="1" ><button className="key c27 fn"><span id="esc">esc</span></button></li>
                    <li style={{ opacity: 0 }} key="2"><button className="key c112 fn"><span>F1</span></button></li>
                    <li style={{ opacity: 0 }} key="3"><button className="key c113 fn"><span>F2</span></button></li>
                    <li style={{ opacity: 0 }} key="4"><button className="key c114 fn"><span>F3</span></button></li>
                    <li style={{ opacity: 0 }} key="5"><button className="key c115 fn"><span>F4</span></button></li>
                    <li style={{ opacity: 0 }} key="6"><button className="key c116 fn"><span>F5</span></button></li>
                    <li style={{ opacity: 0 }} key="7"><button className="key c117 fn"><span>F6</span></button></li>
                    <li style={{ opacity: 0 }} key="8"><button className="key c118 fn"><span>F7</span></button></li>
                    <li style={{ opacity: 0 }} key="9"><button className="key c119 fn"><span>F8</span></button></li>
                    <li style={{ opacity: 0 }} key="10"><button className="key c120 fn"><span>F9</span></button></li>
                    <li style={{ opacity: 0 }} key="11"><button className="key c121 fn"><span>F10</span></button></li>
                    <li style={{ opacity: 0 }} key="12"><button className="key c122 fn"><span>F11</span></button></li>
                    <li style={{ opacity: 0 }} key="13"><button className="key c123 fn"><span>F12</span></button></li>
                    <li style={{ opacity: 0 }} key="14"><button className="key fn"><span>Eject</span></button></li>
                </ul>
                <ul className="cf" id="numbers">
                    <li style={{ opacity: 0 }} ><button className="key c192"><b>~</b><span>`</span></button></li>
                    <li style={{ opacity: 0 }} ><button className="key c49"><b>!</b><span>1</span></button></li>
                    <li style={{ opacity: 0 }} ><button className="key c50"><b>@</b><span>2</span></button></li>
                    <li style={{ opacity: 0 }} ><button className="key c51"><b>#</b><span>3</span></button></li>
                    <li style={{ opacity: 0 }} ><button className="key c52"><b>$</b><span>4</span></button></li>
                    <li style={{ opacity: 0 }} ><button className="key c53"><b>%</b><span>5</span></button></li>
                    <li style={{ opacity: 0 }} ><button className="key c54"><b>^</b><span>6</span></button></li>
                    <li style={{ opacity: 0 }} ><button className="key c55"><b>&amp;</b><span>7</span></button></li>
                    <li style={{ opacity: 0 }} ><button className="key c56"><b>*</b><span>8</span></button></li>
                    <li style={{ opacity: 0 }} ><button className="key c57"><b>(</b><span>9</span></button></li>
                    <li style={{ opacity: 0 }} ><button className="key c48"><b>)</b><span>0</span></button></li>
                    <li style={{ opacity: 0 }} ><button className="key c189 alt"><b>_</b><span>-</span></button></li>
                    <li style={{ opacity: 0 }} ><button className="key c187"><b>+</b><span>=</span></button></li>
                    <li><button className="key c46" id="delete"><span>Delete</span></button></li>
                </ul> */}
                    <ul className="cf" id="qwerty">
                        {/* <li style={{ opacity: 0 }} ><button className="key c9" id="tab"><span>tab</span></button></li> */}
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
                        {/* <li style={{ opacity: 0 }} ><button className="key c219 alt"><b>&#123;</b><span>[</span></button></li> */}
                        {/* <li style={{ opacity: 0 }} ><button className="key c221 alt"><b>&#125;</b><span>]</span></button></li> */}
                        {/* <li style={{ opacity: 0 }} ><button className="key c220 alt"><b>|</b><span>\</span></button></li> */}
                        {/* <li><button className="key c46" id="delete"><span>Delete</span></button></li> */}
                        <KeyboardButton keyName={'delete'} keyPressed={keyPressed} />
                    </ul>
                    <ul className="cf" id="asdfg">
                        {/* <li style={{ opacity: 0 }} ><button className="key c20 alt" id="caps"><b></b><span>caps lock</span></button></li> */}
                        <KeyboardButton keyName={'a'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'s'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'d'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'f'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'g'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'h'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'j'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'k'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'l'} keyPressed={keyPressed} />

                        {/* <li style={{ opacity: 0 }} ><button className="key c186 alt"><b>:</b><span>;</span></button></li>
                    <li style={{ opacity: 0 }} ><button className="key c222 alt"><b>"</b><span>'</span></button></li> */}
                        {/* <li><button className="key c13 alt" id="enter"><span>return</span></button></li> */}
                        <KeyboardButton keyName={'Enter'} keyPressed={keyPressed} />
                    </ul>
                    <ul className="cf" id="zxcvb">
                        {/* <li style={{ opacity: 0 }} ><button className="key c16 shiftleft"><span>Shift</span></button></li> */}
                        <KeyboardButton keyName={'z'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'x'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'c'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'v'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'b'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'n'} keyPressed={keyPressed} />
                        <KeyboardButton keyName={'m'} keyPressed={keyPressed} />

                        {/* <li style={{ opacity: 0 }} ><button className="key c188 alt"><b>&lt;</b><span>,</span></button></li>
                        <li style={{ opacity: 0 }} ><button className="key c190 alt"><b>&gt;</b><span>.</span></button></li>
                        <li style={{ opacity: 0 }} ><button className="key c191 alt"><b>?</b><span>/</span></button></li>
                        <li style={{ opacity: 0 }} ><button className="key c16 shiftright"><span>Shift</span></button></li> */}
                    </ul>
                    {/* <ul className="cf" id="bottomrow">
                    <li><button className="key" id="fn"><span>fn</span></button></li>
                    <li><button className="key c17" id="control"><span>control</span></button></li>
                    <li><button className="key option" id="optionleft"><span>option</span></button></li>
                    <li><button className="key command" id="commandleft"><span>command</span></button></li>
                    <li><button className="key c32" id="spacebar"></button></li>
                    <li><button className="key command" id="commandright"><span>command</span></button></li>
                    <li><button className="key option" id="optionright"><span>option</span></button></li>
                    <ol className="cf">
                        <li><button className="key c37" id="left"><span>&#9666;</span></button></li>
                        <li>
                            <button className="key c38" id="up"><span>&#9652;</span></button>
                            <button className="key c40" id="down"><span>&#9662;</span></button>
                        </li>
                        <li><button className="key c39" id="right"><span>&#9656;</span></button></li>
                    </ol>
                </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Keyboard
