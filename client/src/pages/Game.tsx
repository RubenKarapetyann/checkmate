import { useLocation, useNavigate } from "react-router-dom"
import useSocket from "../hooks/socket/useSocket";
import { useEffect } from "react";
import { FIGURE_MOVE, GAME_ACCEPTED, GAME_FINISHED, GET_MOVES } from "../constants/actions";
import { useAppDispatch } from "../app/hooks";
import { figureMove, setActiveFigure, setInitialGameState } from "../features/game/gameSlice";
import { FigureMoveData, GameAcceptedData, GameFinishedData, GetActiveFigureMoves } from "../types/socket/receiveData";
import { HOME_PATH } from "../constants/paths";
import GameLayout from "../components/layouts/GameLayout/GameLayout";

export default function Game(){
    const location = useLocation()
    const navigate = useNavigate()
    const { socket, listen } = useSocket("game", location.state.game_id)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        listen<GameAcceptedData>(GAME_ACCEPTED, (data)=>{
            dispatch(setInitialGameState(data))
        })
        listen<GetActiveFigureMoves>(GET_MOVES, (data)=>{
            dispatch(setActiveFigure(data))
        })
        listen<FigureMoveData>(FIGURE_MOVE, (data)=>{
            dispatch(figureMove(data))
        })
        listen<GameFinishedData>(GAME_FINISHED, (data)=>{
            return navigate(HOME_PATH)
        })
    }, [socket])

    const send = (data: string)=> socket?.send(data)

    return <GameLayout send={send}/>
}