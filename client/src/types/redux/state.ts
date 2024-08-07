import { BLACK, WHITE } from "../../constants/game"
import { Matrix } from "../game/game"

export interface AuthenticationState {
    user : Object | null,
    IsAuthenticated : boolean,
    error : null | string,
    isLoading : boolean
}
  
export interface GameState {
    matrix: Matrix | null,
    selfColor: typeof BLACK | typeof WHITE | null,
    activeFigure: ActiveFigure | null
}

export type ActiveFigure = {
    row: number,
    column: number,
    number: number,
    id: string,
    moves: Array<Array<number>>
}