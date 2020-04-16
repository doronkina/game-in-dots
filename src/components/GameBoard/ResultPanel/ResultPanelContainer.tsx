import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { postWinner } from '../../../store/reducers/winnersReducer'
import { GameStatusEnum, PointsType, WinnerType } from '../../../types/types'
import ResultPanel from './ResultPanel'

export type PropsType = {
    gameStatus: GameStatusEnum
    points: PointsType
    userName: string
    postWinner: (winner: WinnerType) => Promise<void>
}
const ResultPanelContainer: React.FC<PropsType> = props => {
    useEffect(() => {
        const winner = props.points.user > props.points.computer ? props.userName : 'computer'
        const date = moment().format('lll')

        props.postWinner( {winner, date} )
    })

    return <ResultPanel {...props} />
}

export default connect( null, {postWinner} )(ResultPanelContainer)