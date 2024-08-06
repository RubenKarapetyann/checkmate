import { GAME_ACCEPTED, GAME_FOUND } from "../../constants/actions"
import { Matrix } from "../game/game"

export type SocketData = {
    action : Action,
    data : Data
}

export type Action = typeof GAME_ACCEPTED | typeof GAME_FOUND

export type GameFoundData = {
    game_id : number
}

export type GameAcceptedData = {
    matrix : Matrix
}

export type Data = GameFoundData
