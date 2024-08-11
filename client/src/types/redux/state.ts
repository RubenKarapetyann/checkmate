import { Color, Matrix } from "../game/game"

export interface AuthenticationState {
    user : Object | null,
    IsAuthenticated : boolean,
    error : null | string,
    isLoading : boolean
}
  
export interface GameState {
    matrix: Matrix | null,
    selfColor: Color | null,
    activeFigure: ActiveFigure | null,
    movesCount: null | number,
    myMove: boolean
}

export type ActiveFigure = {
    row: number,
    column: number,
    number: number,
    id: string,
    moves: Array<Array<number>>
}