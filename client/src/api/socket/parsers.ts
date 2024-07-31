import { Action, SocketData } from "../../types/api/socket"

export const receiveParser = (textData: string)=>{
    const jsonData: SocketData = JSON.parse(textData)
    const action = jsonData.action
    const data = jsonData.data

    return [action, data]
}


export const sendParser = (action: Action, data: Object)=>{
    const jsonData: SocketData = {action, data}
    const textData = JSON.stringify(jsonData)

    return textData
}