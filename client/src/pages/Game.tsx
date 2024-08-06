import { useLocation } from "react-router-dom"
import useSocket from "../hooks/socket/useSocket";
import Board from "../components/game/Board/Board";
import { useEffect, useState } from "react";
import { GAME_ACCEPTED } from "../constants/actions";
import { GameAcceptedData } from "../types/api/socket";
import { CellHandle } from "../types/game/component-types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectMatrix, setMatrix } from "../features/game/gameSlice";

export default function Game(){
    const location = useLocation()
    const matrix = useAppSelector(selectMatrix)
    const { socket, listen } = useSocket("game", location.state.game_id)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        listen<GameAcceptedData>(GAME_ACCEPTED, (data)=>[
            dispatch(setMatrix(data.matrix))
        ])
    }, [socket])

    if(!matrix){
        return <div>loading</div>
    }

    const handle: CellHandle = (row, column)=>{
        console.log(row, column)
    }

    return <Board matrix={matrix} handle={handle}/>
}