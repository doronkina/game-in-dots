import React, { useState, Dispatch, SetStateAction } from 'react'
import { GameStatusEnum, ModeType } from '../../types/types'
import SettingsContainer from './Settings/SettingsContainer'
import ResultPanelContainer from './ResultPanel/ResultPanelContainer'
import PlayField from './PlayField/PlayField'

const GameBoard = () => {
    let [gameStatus, setGameStatus] = useState(GameStatusEnum.isPreparing)
    let [gameMode, setGameMode]: [ModeType, Dispatch<SetStateAction<ModeType>>] | [null, Dispatch<SetStateAction<null>>] = useState(null)
    let [userName, setUserName]: [string, Dispatch<SetStateAction<string>>] = useState('')
    let [finalPoints, setFinalPoints] = useState( {user: 0, computer:0} )

    return (
        <div className="gameBoard">
            <SettingsContainer gameStatus={gameStatus} setGameStatus={setGameStatus} setGameMode={setGameMode} setUserName={setUserName} />
            {gameStatus === GameStatusEnum.gameOver && <ResultPanelContainer gameStatus={gameStatus} finalPoints={finalPoints} userName={userName} />}
            {gameMode && <PlayField gameMode={gameMode} gameStatus={gameStatus} setGameStatus={setGameStatus} setFinalPoints={setFinalPoints} />}
        </div>
    )
}

export default GameBoard