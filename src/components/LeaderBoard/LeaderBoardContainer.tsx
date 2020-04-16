import React from 'react'
import { connect } from 'react-redux'
import { WinnersType } from '../../types/types'
import LeaderBoard from './LeaderBoard'

export type PropsType = {
    winners: WinnersType
}
const LeaderBoardContainer: React.FC<PropsType> = props => {
    return <LeaderBoard {...props} />
}

type StateType = {
    winners: {
        winners: WinnersType
    }
}
let mapStateToProps = (state: StateType) => {
    return {
        winners: state.winners.winners
    }
}

export default connect(mapStateToProps)(LeaderBoardContainer)