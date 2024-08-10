import { SocketDataBase } from "./global"

export type ChosenFigure = {
    row : number,
    column : number,
    figure_id : string
}

export interface FigureMove extends ChosenFigure {
    to_row : number,
    to_column : number
}

export type SendData = ChosenFigure

export interface SendSocketData extends SocketDataBase {
    data : SendData
}