import { BLACK, CHECK, CHECKMATE, DRAW, LOSE, REGULAR, STALEMATE, WHITE, WIN } from "../../constants/game"

export type Matrix = Array<Array<MatrixCell>>
export type Row = Array<MatrixCell>

export type MatrixCell = 0 | Figure

export type Figure = {
    image : string,
    id : string,
    color : Color,
    number : number
}

export type GameStates = 
    typeof CHECKMATE |
    typeof CHECK | 
    typeof REGULAR |
    typeof STALEMATE

export type Results =
    typeof WIN | typeof LOSE | typeof DRAW

export type Color = typeof BLACK | typeof WHITE
