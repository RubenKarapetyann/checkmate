import { FIGURE_MOVE, GAME_ACCEPTED, GAME_FINISHED, GAME_FOUND, GET_MOVES } from "../../constants/actions"

export type Action = 
    typeof GAME_ACCEPTED | 
    typeof GAME_FOUND | 
    typeof GET_MOVES | 
    typeof FIGURE_MOVE |
    typeof GAME_FINISHED

export interface SocketDataBase {
    action : Action
}
