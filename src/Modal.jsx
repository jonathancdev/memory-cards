import React from 'react'
function Modal (props) {
    const handleClick = function () {
        props.chooseModal(null)
    }
    return(
        <div id="my-modal" className="modal is-hidden is-visually-hidden">
            <div className="modal-content">
                <h2>TEST YOUR MEMORY!</h2>
                <p> Don't click the same dog twice! Each time a dog is clicked, the order of the
                    images is randomized. Try to beat your record score!
                </p>
                <button onClick={handleClick}>start</button>
            </div>
        </div>
    )

}

export default Modal;
