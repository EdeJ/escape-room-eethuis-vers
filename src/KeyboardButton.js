import React from 'react'

function KeyboardButton({ keyName, keyPressed }) {


    return (
        <li key={keyName}>
            <button
                value={keyName}
                className="key"
                onClick={(e) => keyPressed(e.currentTarget.value)}
            >
                <span>{keyName}</span>
            </button>
        </li>
    )
}

export default KeyboardButton
