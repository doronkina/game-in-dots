import axios from 'axios'
import { GameSettingsType, WinnerType, WinnersType } from '../types/types'

const instance = axios.create({
    baseURL: 'https://starnavi-frontend-test-task.herokuapp.com'
})

export const getGameSettings = async () => {
    const res = await instance.get<GameSettingsType>('/game-settings')
    return res.data
}

export const getWinners = async () => {
    const res = await instance.get<WinnersType>('/winners')
    return res.data
}

export const postWinner = async (winner: WinnerType) => {
    const res = await instance.post('/winners', winner)
    return res.data
}