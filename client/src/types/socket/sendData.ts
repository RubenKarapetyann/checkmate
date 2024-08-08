import { SocketDataBase } from "./global"

export type ChosenFigure = {
    row : number,
    column : number,
    figure_id : string
}

export type SendData = ChosenFigure

export interface SendSocketData extends SocketDataBase {
    data : SendData
}