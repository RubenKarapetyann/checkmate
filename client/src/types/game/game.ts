import { BLACK, WHITE } from "../../constants/game"

export type Matrix = Array<Array<MatrixCell>>
export type Row = Array<MatrixCell>

export type MatrixCell = 0 | Figure

export type Figure = {
    image : string,
    id : string,
    color : Color,
    number : number
}

export type Color = typeof BLACK | typeof WHITE
