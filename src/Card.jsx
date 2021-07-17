import React from 'react'
import fx1 from './audio/fx1.wav'
import fx2 from './audio/fx2.mp3'
function Card (props) {

    const sound1 = new Audio(fx1)
    const sound2 = new Audio(fx2)

    const handleClick = function (e) {
        const cardKey = e.currentTarget.getAttribute('datakey')
        if (!props.clickedCards.includes(cardKey)) {
            sound1.play()
            let array = props.clickedCards
            array.push(cardKey)
            props.updateClicked([...array])
            props.increment()
            props.shuffle()
        } else {
            sound2.play()
            props.chooseModal('fail')
            props.resetTotalClicks()
            props.resetScore()
            props.updateClicked([])
        }
    
        props.incrementClicks()
    }
    return(
        <div className="card" datakey={props.dataKey} onClick={handleClick}>
            <div className="content">
                <img src={props.img} alt="dog"></img>
                <p>{props.title}</p>
            </div>
        </div>
    )

}

export default Card;

