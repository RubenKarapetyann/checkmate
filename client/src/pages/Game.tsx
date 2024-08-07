import { useLocation } from "react-router-dom"
import useSocket from "../hooks/socket/useSocket";
import Board from "../components/game/Board/Board";
import { useEffect, useState } from "react";
import { GAME_ACCEPTED, GET_MOVES } from "../constants/actions";
import { CellHandle } from "../types/game/component-types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectColor, selectMatrix, setInitialGameState } from "../features/game/gameSlice";
import { WHITE } from "../constants/game";
import { GameAcceptedData } from "../types/socket/receiveData";
import { sendParser } from "../api/socket/parsers";
import { ChosenFigure } from "../types/socket/sendData";

export default function Game(){
    const location = useLocation()
    const matrix = useAppSelector(selectMatrix)
    const selfColor = useAppSelector(selectColor)
    const { socket, listen } = useSocket("game", location.state.game_id)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        listen<GameAcceptedData>(GAME_ACCEPTED, (data)=>{
            dispatch(setInitialGameState(data))
        })
    }, [socket])

    if(!matrix){
        return <div>loading</div>
    }

    const handle: CellHandle = (row, column)=>{
        const cell = matrix[row][column] 
        if (cell === 0 || cell.color !== selfColor){ return } 
        
        socket?.send(sendParser<ChosenFigure>(GET_MOVES, { row, column, figure_id : cell.id }))
    }

    return <Board matrix={matrix} handle={handle} reverse={selfColor === WHITE}/>
}