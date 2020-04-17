import React from 'react'
import { PropsType } from './ResultPanelContainer'
import { GameStatusEnum } from '../../../types/types'

const ResultPanel: React.FC<PropsType> = ( {gameStatus, finalPoints, userName} ) => {
    return (
        <div className="resultPanel">
            {gameStatus === GameStatusEnum.gameOver &&
                `${finalPoints.user > finalPoints.computer ? userName : 'computer'} won`
            }
        </div>
    )
}

export default ResultPanel