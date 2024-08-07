import { BLACK, WHITE } from "../../constants/game"
import { Matrix } from "../game/game"
import { SocketDataBase } from "./global"

export type GameFoundData = {
    game_id : number
}

export type GameAcceptedData = {
    matrix : Matrix,
    color : typeof BLACK | typeof WHITE
}

export type Data = GameFoundData | GameAcceptedData

export interface SocketData extends SocketDataBase {
    data : Data
}