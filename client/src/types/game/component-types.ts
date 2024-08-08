import { DARK_CELL, LIGHT_CELL } from "../../constants/colors"
import { Matrix, MatrixCell, Row } from "./game" 

export type CellHandle = (row: number, column: number) => void

export type CellProps = {
    color : typeof LIGHT_CELL | typeof DARK_CELL,
    row : number,
    column : number,
    handle : CellHandle,
    figure : MatrixCell,
    reverse : boolean,
    isActive : boolean
}

export type RowProps = {
    list : Row,
    row : number,
    handle : CellHandle,
    reverse : boolean,
    activeCells? : Array<number> | null
}

export type BoardProps = {
    matrix : Matrix,
    handle : CellHandle,
    reverse : boolean,
    activeCells? : Array<Array<number>> | null
}
