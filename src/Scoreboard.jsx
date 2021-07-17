import React, { useEffect } from 'react'
import fx3 from './audio/fx3.wav'

function Scoreboard (props) {

    const audio3 = new Audio(fx3)

    useEffect(() => {
        if (props.currScore > props.highScore) {
            props.updateHighScore(props.currScore)
        }
      },[props, props.currScore, props.highScore])
      
      useEffect(() => {
        const array = []
        if (props.totalClicks !== 0 && props.totalClicks % 12 === 0) {
            audio3.play()
            if (props.totalClicks === 12) {
                props.chooseModal('win')
                props.updateClicked([...array])
            } else {
                props.updateClicked([...array])
            }
        }
      },[props.totalClicks])
    return(
        <div className="scoreboard">
            <div className="scores">
                <div className="score-wrap">
                    <p>score</p>
                    <div className="curr-score score">
                        <p>{props.currScore}</p>
                    </div>
                </div>
                <div className="score-wrap">
                    <p>record</p>
                    <div className="high-score score">
                        <p>{props.highScore}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Scoreboard;