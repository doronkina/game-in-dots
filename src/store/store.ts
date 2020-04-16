import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import gameSettingsReducer from './reducers/gameSettingsReducer'
import winnersReducer from './reducers/winnersReducer'

let rootReducer = combineReducers({
    gameSettings: gameSettingsReducer,
    winners: winnersReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

let store = createStore( rootReducer, applyMiddleware(thunk) )

export default store