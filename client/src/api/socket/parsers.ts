import { Action } from "../../types/socket/global"
import { SocketData } from "../../types/socket/receiveData"
import { SendData } from "../../types/socket/sendData"

export const receiveParser = (textData: string): SocketData=>{
    const jsonData: SocketData = JSON.parse(textData)
    const action = jsonData.action
    const data = jsonData.data

    return {action, data}
}


export const sendParser = <D extends SendData>(action: Action, data: D)=>{
    const jsonData = {action, data}
    const textData = JSON.stringify(jsonData)

    return textData
}