import { Action, Data, SocketData } from "../../types/api/socket"

export const receiveParser = (textData: string): SocketData=>{
    const jsonData: SocketData = JSON.parse(textData)
    const action = jsonData.action
    const data = jsonData.data

    return {action, data}
}


export const sendParser = (action: Action, data: Data)=>{
    const jsonData: SocketData = {action, data}
    const textData = JSON.stringify(jsonData)

    return textData
}