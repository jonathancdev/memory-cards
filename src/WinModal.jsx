import React from 'react'
function WinModal (props) {
    const handleClick = function () {
        
    }
    const handleClick2 = function () {
        props.chooseModal(null)
        props.resetScore()
        props.updateClicked([])
    }
    return(
        <div id="my-modal" className="modal is-hidden is-visually-hidden">
            <div className="modal-content">
                <p>You did it! Play again or keep going to beat your high score of {props.highScore}</p>
                <button onClick={handleClick}>play again</button>
                <button onClick={handleClick2}>keep going</button>
            </div>
        </div>
    )

}

export default WinModal;
