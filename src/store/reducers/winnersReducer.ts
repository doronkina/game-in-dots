import { ThunkAction } from 'redux-thunk'
import { RootStateType } from '../store'
import { WinnersType, WinnerType } from '../../types/types'
import { 
    getWinners as toGetWinners,
    postWinner as toPostWinner
} from './../../api/api'

const SET_WINNERS = 'SET-WINNERS'

type InitialStateType = {
    winners: WinnersType | null
}
let initialState: InitialStateType = {
    winners: null
}

type ActionsTypes = SetWinnersActionType

const winnersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_WINNERS:
            return {
                ...state,
                winners: action.winners
            }
        default:
            return state
    }
}

type SetWinnersActionType = {
    type: typeof SET_WINNERS
    winners: WinnersType
}
const setWinners = (winners: WinnersType): SetWinnersActionType => ( {type: SET_WINNERS, winners} )

type ThunkActionType = ThunkAction<Promise<void>, RootStateType, unknown, ActionsTypes>
export const getWinners = (): ThunkActionType => async dispatch => {
    const res = await toGetWinners()
    await dispatch( setWinners( [...res].reverse() ) )
}
export const postWinner = (winner: WinnerType): ThunkActionType => async dispatch => {
    const res = await toPostWinner(winner)
    await dispatch( setWinners( [...res].reverse() ) )
}

export default winnersReducer