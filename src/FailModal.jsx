import React from 'react'
function FailModal (props) {
    const handleClick = function () {
        props.chooseModal(null)
        props.resetTotalClicks()
    }
    return(
        <div id="my-modal" className="modal is-hidden is-visually-hidden">
            <div className="modal-content">
                <p>Uh oh! You already clicked that dog!
                </p>
                <button onClick={handleClick}>try again</button>
            </div>
        </div>
    )

}

export default FailModal;
