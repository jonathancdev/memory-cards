import React from 'react'
function Card (props) {
    console.log(props.clickedCards)
    const handleClick = function (e) {
        const cardKey = e.currentTarget.getAttribute('datakey')
        if (!props.clickedCards.includes(cardKey)) {
            let array = props.clickedCards
            array.push(cardKey)
            props.updateClicked([...array])
            props.increment()
            //props.shuffle()
        } else {
            props.chooseModal('fail')
            props.resetScore()
            props.updateClicked([])
        }
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

