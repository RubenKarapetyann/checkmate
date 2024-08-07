import { GAME_ACCEPTED, GAME_FOUND, GET_MOVES } from "../../constants/actions"

export type Action = typeof GAME_ACCEPTED | typeof GAME_FOUND | typeof GET_MOVES

export interface SocketDataBase {
    action : Action
}
