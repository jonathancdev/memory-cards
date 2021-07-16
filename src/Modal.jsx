import React from 'react'
function Modal (props) {
    const handleClick = function () {
        props.chooseModal(null)
    }
    return(
        <div id="my-modal" className="modal is-hidden is-visually-hidden">
            <div className="modal-content">
                <p>This game will put your memory to the test. When you click on a dog that you have NOT clicked on
                    before you receive one point. Each time a dog is clicked, the order of the
                    images is randomized. If you click any dog twice, the score will be reset.
                    Try to beat your record score!
                </p>
                <button onClick={handleClick}>start</button>
            </div>
        </div>
    )

}

export default Modal;
