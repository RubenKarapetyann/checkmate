import { BLACK, WHITE } from "../../constants/game"
import { GameStates, Matrix, Results } from "../game/game"
import { ActiveFigure } from "../redux/state"
import { SocketDataBase } from "./global"

export type GameFoundData = {
    game_id : number
}

export type GameAcceptedData = {
    matrix : Matrix,
    color : typeof BLACK | typeof WHITE,
    moves_count : number
}

export type MatrixUpdateData = {
    matrix : Matrix
}

export type FigureMoveData = {
    matrix : Matrix,
    moves_count : number
}

export type GameFinishedData = {
    game_state : GameStates,
    result : Results
}

export type GetActiveFigureMoves = ActiveFigure

export type Data = 
    GameFoundData | 
    GameAcceptedData | 
    GetActiveFigureMoves | 
    MatrixUpdateData | 
    FigureMoveData | 
    GameFinishedData

export interface SocketData extends SocketDataBase {
    data : Data
}