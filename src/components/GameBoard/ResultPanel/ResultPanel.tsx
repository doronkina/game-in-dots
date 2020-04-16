import React from 'react'
import { PropsType } from './ResultPanelContainer'
import { GameStatusEnum } from '../../../types/types'

const ResultPanel: React.FC<PropsType> = ( {gameStatus, points, userName} ) => {
    return (
        <div className="resultPanel">
            {gameStatus === GameStatusEnum.gameOver &&
                `${points.user > points.computer ? userName : 'computer'} won`
            }
        </div>
    )
}

export default ResultPanel