import { DARK_CELL, LIGHT_CELL } from "../../constants/colors"

export type CellProps = {
    color : typeof LIGHT_CELL | typeof DARK_CELL,
    row : number,
    column : number,
    handle : (row: number, column: number) => void,
    figure : string
}