import React from 'react'

function ResultButton({ buttenText, status }) {

    return (
        <button
            id="check"
            type="button"
            className={`btn btn-lg btn-primary ${status}`}
        >
            {buttenText}
        </button>
    )
}

export default ResultButton
