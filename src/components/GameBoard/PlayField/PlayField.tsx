import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { ModeType, GameStatusEnum, PointsType, PlayFieldType } from '../../../types/types'

type PropsType = {
    gameMode: ModeType
    gameStatus: GameStatusEnum
    setGameStatus: Dispatch<SetStateAction<GameStatusEnum>>
    setFinalPoints: Dispatch<SetStateAction<PointsType>>
}
const PlayField: React.FC<PropsType> = props => {
    let [playField, setPlayField]: any = useState(null)
    let [currentCell, setCurrentCell]: any = useState(null)
    let [points, setPoints]: [PointsType, Dispatch<SetStateAction<PointsType>>] = useState( {user: 0, computer:0} )

    const createPlayField = (field: number): PlayFieldType => {
        let playField: PlayFieldType = []
        for (let y = 0; y < field; y++) {
            playField[y] = []
            for (let x = 0; x < field; x++) {
                playField[y][x] = 0
            }
        }

        return playField
    }

    useEffect(() => {
        if (props.gameMode.field) setPlayField( createPlayField(props.gameMode.field) )
    }, [props.gameMode.field])

    const changePlayField = (player: 'user' | 'computer') => {
        const newPlayField = []
        for (let y = 0; y < playField.length; y++) {
            newPlayField[y] = [...playField[y]]
        }
        newPlayField[currentCell.y][currentCell.x] = player === 'user' ? 2 : 3

        return newPlayField
    }

    const randomCell = (playField: PlayFieldType) => {
        let x, y
        do {
            x = Math.floor(Math.random() * playField.length)
            y = Math.floor(Math.random() * playField.length)
        } while (playField[y][x])
        
        setCurrentCell( {x, y} )
    }

    useEffect(() => {
        if (props.gameStatus === GameStatusEnum.isPlaying) {
            if (!currentCell) {
                randomCell(playField)
            } else {
                const timerId = setInterval(() => {
                    const newPlayField = changePlayField('computer')
                    setPlayField(newPlayField)

                    const newPoints = points.computer + 1
                    if (newPoints > playField.length ** 2 / 2 ||
                        (newPoints === points.user && newPoints === playField.length ** 2 / 2)
                    ) {
                        props.setFinalPoints( {...points, computer: newPoints} )
                        props.setGameStatus(GameStatusEnum.gameOver)
                        setCurrentCell(null)
                    } else {
                        setPoints( {...points, computer: newPoints} )
                        randomCell(newPlayField)
                    }
                }, props.gameMode.delay)

                return () => clearTimeout(timerId)
            }
        }
    })

    const onClickHandler = (e: any) => {
        if (props.gameStatus === GameStatusEnum.isPlaying) {
            const posY = e.target.parentElement.className.lastIndexOf(' ') + 1
            const y = +e.target.parentElement.className.slice(posY)

            const posX = e.target.className.lastIndexOf(' ') + 1
            const x = +e.target.className.slice(posX)

            const setGameOver = (points: PointsType) => {
                props.setGameStatus(GameStatusEnum.gameOver)
                props.setFinalPoints(points)
            }

            let newPlayField, newPoints
            if (currentCell.y === y && currentCell.x === x) {
                newPlayField = changePlayField('user')

                newPoints = points.user + 1
                if (newPoints > playField.length ** 2 / 2 ||
                    (newPoints === points.computer && newPoints === playField.length ** 2 / 2)
                ) {
                    setGameOver( {...points, user: newPoints} )
                } else {
                    setPoints( {...points, user: newPoints} )
                }
            } else {
                newPlayField = changePlayField('computer')

                newPoints = points.computer + 1
                if (newPoints > playField.length ** 2 / 2 ||
                    (newPoints === points.user && newPoints === playField.length ** 2 / 2)
                ) {
                    setGameOver( {...points, computer: newPoints} )
                } else {
                    setPoints( {...points, computer: newPoints} )
                }
            }

            setPlayField(newPlayField)
            setCurrentCell(null)
        }
    }

    const cellStatus = ['free', 'current', 'hit', 'miss']

    return (
        <>
            {props.gameStatus === GameStatusEnum.isPlaying ?
                <div className='resultPanel'>
                    {points.user} : {points.computer}
                </div> :
                (props.gameStatus === GameStatusEnum.isPreparing &&
                    <div className='resultPanel'></div>
                )
            }
            <div className="playField">
                {playField && playField.map((row: Array<number>, y: number) => {
                    return (
                        <div key={y} className={`row${row.length} ${y}`}>
                            {row.map((cell, x) => {
                                return (
                                    <div key={x} onClick={onClickHandler}
                                        className={`cell ${cellStatus[currentCell && currentCell.y === y && currentCell.x === x ? 1 : cell]} ${x}`}
                                    ></div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PlayField