import React from 'react'
import { Check, X } from 'react-bootstrap-icons'

function ResultButton({ buttenText, status }) {

    return (
        <button
            id="check"
            type="button"
            className={`btn btn-lg btn-primary ${status}`}
        >
            <span>{buttenText}</span>
            {status === 'correct' && <Check size={60} />}
            {status === 'wrong' && <X size={60} />}

        </button>
    )
}

export default ResultButton
