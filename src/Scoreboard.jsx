import React from 'react'

function Scoreboard (props) {

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