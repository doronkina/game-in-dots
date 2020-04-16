export enum GameStatusEnum {
    isPreparing = 0,
    isPlaying = 1,
    gameOver = 2
}

export type ModeType = {
    field: 5 | 10 | 15
    delay: 2000 | 1000 | 900
}
export type GameSettingsType = {
    easyMode: ModeType
    normalMode: ModeType
    hardMode: ModeType
}

export type WinnerType = {
    winner: string
    date: string
    id?: number
}
export type WinnersType = Array<WinnerType>

export type PlayFieldType = Array< Array<number> >

export type PointsType = {
    user: number
    computer: number
}