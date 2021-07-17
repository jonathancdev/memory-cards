import React from 'react'
function WinModal (props) {
    const array = []
    const handleClick = function () {
        props.chooseModal(null)
        props.updateClicked([...array])
        props.resetTotalClicks()
        props.resetScore()
        props.updateHighScore(0)
    }
    const handleClick2 = function () {
        props.chooseModal(null)
        props.updateClicked([...array])
    }
    return(
        <div id="my-modal" className="modal is-hidden is-visually-hidden">
            <div className="modal-content">
                <p>You did it! Start over or keep going to beat your high score of {props.highScore} points!</p>
                <div className="modal-buttons">
                    <button onClick={handleClick}>start over</button>
                    <button onClick={handleClick2}>keep going</button>
                </div>
            </div>
        </div>
    )

}

export default WinModal;
