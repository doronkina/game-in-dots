import React from 'react'
import { PropsType } from './LeaderBoardContainer'

const LeaderBoard: React.FC<PropsType> = props => {
    const winners = props.winners && 
        props.winners.map(winner => {
            return (
                <div key={winner.id} className="winner">
                    <span>{winner.winner}</span>
                    <span>{winner.date}</span>
                </div>
            )
        })
    
    return (
        <div className="leaderBoard">
            <h2>Leader Board</h2>
            <div className="winners">
                {winners}
            </div>
        </div>
    )
}

export default LeaderBoard