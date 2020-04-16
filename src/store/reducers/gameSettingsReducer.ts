import { ThunkAction } from 'redux-thunk'
import { RootStateType } from '../store'
import { ModeType, GameSettingsType } from '../../types/types'
import { getGameSettings as toGetGameSettings } from './../../api/api'

const SET_GAME_SETTINGS = 'SET-GAME-SETTINGS'

type InitialStateType = {
    easyMode: ModeType | null,
    normalMode: ModeType | null,
    hardMode: ModeType | null
}
let initialState: InitialStateType = {
    easyMode: null,
    normalMode: null,
    hardMode: null
}

type ActionsTypes = SetGameSettingsActionType

const gameSettingsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_GAME_SETTINGS:
            return {
                ...state,
                easyMode: action.modes.easyMode,
                normalMode: action.modes.normalMode,
                hardMode: action.modes.hardMode
            }
        default:
            return state
    }
}

type SetGameSettingsActionType = {
    type: typeof SET_GAME_SETTINGS
    modes: GameSettingsType
}
const setGameSettings = (modes: GameSettingsType): SetGameSettingsActionType => ( {type: SET_GAME_SETTINGS, modes} )

type ThunkActionType = ThunkAction<Promise<void>, RootStateType, unknown, ActionsTypes>

export const getGameSettings = (): ThunkActionType => async dispatch => {
    const res = await toGetGameSettings()
    await dispatch( setGameSettings(res) )
}

export default gameSettingsReducer