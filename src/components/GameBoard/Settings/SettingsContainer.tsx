import React, { Dispatch, SetStateAction } from 'react'
import { connect } from 'react-redux'
import { GameSettingsType, GameStatusEnum, PointsType } from '../../../types/types'
import Settings from './Settings'

export type PropsType = {
    gameSettings: GameSettingsType | any
    gameStatus: GameStatusEnum
    setGameStatus: Dispatch<SetStateAction<GameStatusEnum>>
    setGameMode: Dispatch<SetStateAction<null>>
    setPoints: Dispatch<SetStateAction<PointsType>>
    userName: string
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