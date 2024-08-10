import { useLocation } from "react-router-dom"
import useSocket from "../hooks/socket/useSocket";
import Board from "../components/game/Board/Board";
import { useEffect } from "react";
import { FIGURE_MOVE, GAME_ACCEPTED, GET_MOVES } from "../constants/actions";
import { CellHandle } from "../types/game/component-types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { deactivateFigure, selectActiveFigure, selectColor, selectMatrix, setActiveFigure, setInitialGameState, setMatrix } from "../features/game/gameSlice";
import { WHITE } from "../constants/game";
import { GameAcceptedData, GetActiveFigureMoves, MatrixUpdateData } from "../types/socket/receiveData";
import { sendParser } from "../api/socket/parsers";
import { ChosenFigure, FigureMove } from "../types/socket/sendData";

export default function Game(){
    const location = useLocation()
    const matrix = useAppSelector(selectMatrix)
    const selfColor = useAppSelector(selectColor)
    const activeFigure = useAppSelector(selectActiveFigure)
    const { socket, listen } = useSocket("game", location.state.game_id)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        listen<GameAcceptedData>(GAME_ACCEPTED, (data)=>{
            dispatch(setInitialGameState(data))
        })
        listen<GetActiveFigureMoves>(GET_MOVES, (data)=>{
            dispatch(setActiveFigure(data))
        })
        listen<MatrixUpdateData>(FIGURE_MOVE, (data)=>{
            dispatch(setMatrix(data.matrix))
        })
    }, [socket])

    if(!matrix){
        return <div>loading</div>
    }

    const handle: CellHandle = (row, column)=>{
        const cell = matrix[row][column] 

        if (
            (!activeFigure  || (activeFigure.row !== row || activeFigure.column !== column)) && 
            cell !== 0 && 
            cell.color === selfColor
        ){ 
            socket?.send(sendParser<ChosenFigure>(GET_MOVES, { row, column, figure_id : cell.id }))
        }
        
        if(activeFigure){
            const move = activeFigure.moves.find(move=>{
                return move[0] === row && move[1] === column
            })

            if(!move){
                return
            }

            socket?.send(sendParser<FigureMove>(FIGURE_MOVE, {
                row : activeFigure.row,
                column : activeFigure.column,
                figure_id : activeFigure.id,
                to_row : row,
                to_column : column
            }))
            dispatch(deactivateFigure())
        }
    }

    return <Board matrix={matrix} handle={handle} reverse={selfColor === WHITE} activeCells={activeFigure && activeFigure.moves}/>
}