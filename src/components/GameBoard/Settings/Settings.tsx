import React, { useState, Dispatch, SetStateAction } from 'react'
import { PropsType } from './SettingsContainer'
import { GameStatusEnum } from '../../../types/types'

const Settings: React.FC<PropsType> = props => {
    let [selectState, setSelectState]: [string, Dispatch<SetStateAction<string>>] = useState('')
    let [inputState, setInputState]: [string, Dispatch<SetStateAction<string>>] = useState('')

    const changedGameMode = (e: any) => {
        setSelectState(e.target.value)
        props.setGameMode( { ...props.gameSettings[e.target.value] } )
    }

    const onClickHandler = () => {
        if (props.gameStatus === GameStatusEnum.isPreparing) {
            props.setGameStatus(GameStatusEnum.isPlaying)
            props.setUserName(inputState)
        } else {
            props.setGameStatus(GameStatusEnum.isPreparing)
            setSelectState('')
            props.setGameMode(null)
        }
    }

    return (
        <form>
            <select disabled={props.gameStatus !== GameStatusEnum.isPreparing} value={selectState} onChange={changedGameMode}>
                {!selectState && <option value=''>Pick game mode</option>}
                <option value='easyMode'>Easy</option>
                <option value='normalMode'>Normal</option>
                <option value='hardMode'>Hard</option>
            </select>
            <input type='text' disabled={props.gameStatus !== GameStatusEnum.isPreparing} placeholder='Enter your name' value={inputState} onChange={ e => setInputState(e.target.value) } />
            <button type='button' disabled={!selectState || !inputState || props.gameStatus === GameStatusEnum.isPlaying} onClick={onClickHandler}>
                {props.gameStatus !== GameStatusEnum.gameOver ? 'PLAY' : 'PLAY AGAIN'}
            </button>
        </form>
    )
}

export default Settings