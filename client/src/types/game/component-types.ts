import { DARK_CELL, LIGHT_CELL } from "../../constants/colors"
import { Matrix, Row } from "./game" 

type CellHandle = (row: number, column: number) => void

export type CellProps = {
    color : typeof LIGHT_CELL | typeof DARK_CELL,
    row : number,
    column : number,
    handle : CellHandle,
    figure : string
}

export type RowProps = {
    list : Row,
    row : number,
    handle : CellHandle
}

export type BoardProps = {
    matrix : Matrix,
    handle : CellHandle
}
