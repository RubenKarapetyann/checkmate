import { BLACK, WHITE } from "../../constants/game"
import { Matrix } from "../game/game"
import { ActiveFigure } from "../redux/state"
import { SocketDataBase } from "./global"

export type GameFoundData = {
    game_id : number
}

export type GameAcceptedData = {
    matrix : Matrix,
    color : typeof BLACK | typeof WHITE
}

export type GetActiveFigureMoves = ActiveFigure

export type Data = GameFoundData | GameAcceptedData | GetActiveFigureMoves

export interface SocketData extends SocketDataBase {
    data : Data
}