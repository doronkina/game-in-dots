import React, { useState, Dispatch, SetStateAction } from 'react'
import { PropsType } from './SettingsContainer'
import { GameStatusEnum } from '../../../types/types'

const Settings: React.FC<PropsType> = props => {
    let [selectedMode, setSelectedMode]: [string, Dispatch<SetStateAction<string>>] = useState('')

    const changedGameMode = (e: any) => {
        setSelectedMode(e.target.value)
        props.setGameMode( { ...props.gameSettings[e.target.value] } )
    }

    const onClickHandler = () => {
        if (props.gameStatus === GameStatusEnum.isPreparing) {
            props.setGameStatus(GameStatusEnum.isPlaying)
        } else {
            props.setGameStatus(GameStatusEnum.isPreparing)
            setSelectedMode('')
            props.setGameMode(null)
            props.setPoints( {user: 0, computer:0} )
        }
    }

    return (
        <form>
            <select disabled={props.gameStatus !== GameStatusEnum.isPreparing} value={selectedMode} onChange={changedGameMode}>
                {!selectedMode && <option value=''>Pick game mode</option>}
                <option value='easyMode'>Easy</option>
                <option value='normalMode'>Normal</option>
                <option value='hardMode'>Hard</option>
            </select>
            <input type='text' disabled={props.gameStatus !== GameStatusEnum.isPreparing} placeholder='Enter your name' value={props.userName} onChange={ e => props.setUserName(e.target.value) } />
            <button type='button' disabled={!selectedMode || !props.userName || props.gameStatus === GameStatusEnum.isPlaying} onClick={onClickHandler}>
                {props.gameStatus !== GameStatusEnum.gameOver ? 'PLAY' : 'PLAY AGAIN'}
            </button>
        </form>
    )
}

export default Settings