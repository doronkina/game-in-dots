import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGameSettings } from './store/reducers/gameSettingsReducer'
import { getWinners } from './store/reducers/winnersReducer'
import App from './App'

type PropsType = {
    getGameSettings: () => void
    getWinners: () => void
}
const AppContainer: React.FC<PropsType> = props => {
    useEffect( () => {
        props.getGameSettings()
        props.getWinners()
    } )

    return <App />
}

export default connect( null, {getGameSettings, getWinners} )(AppContainer)