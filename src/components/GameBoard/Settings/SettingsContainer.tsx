import React, { Dispatch, SetStateAction } from 'react'
import { connect } from 'react-redux'
import { GameSettingsType, GameStatusEnum } from '../../../types/types'
import Settings from './Settings'

export type PropsType = {
    gameSettings: GameSettingsType | any
    gameStatus: GameStatusEnum
    setGameStatus: Dispatch<SetStateAction<GameStatusEnum>>
    setGameMode: Dispatch<SetStateAction<null>>
    setUserName: Dispatch<SetStateAction<string>>
}
const GameContainer: React.FC<PropsType> = props => {
    return <Settings {...props} />
}

type StateType = {
    gameSettings: GameSettingsType
}
let mapStateToProps = (state: StateType) => {
    return {
        gameSettings: state.gameSettings
    }
}
export default connect(mapStateToProps)(GameContainer)