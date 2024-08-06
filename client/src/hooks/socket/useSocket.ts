import { useEffect, useState } from "react"
import socketEndpoints from "../../api/endpoints/socketEndpoints"
import { Action } from "../../types/api/socket"
import { receiveParser } from "../../api/socket/parsers"
import { Listener, Listeners } from "../../types/hooks/socket"

const useSocket = (endpoint: keyof ReturnType<typeof socketEndpoints>, id?: number)=>{
    const [socket, setSocket] = useState<null | WebSocket>(null)
    const [listeners, setListeners] = useState<Listeners>({} as Listeners)

    useEffect(()=>{
        setSocket(new WebSocket(socketEndpoints(id)[endpoint]))

        return ()=>{
            if (socket?.readyState === 1){
                socket?.close()
            }
        }
    }, [endpoint, id])

    useEffect(()=>{
        if(!socket){
            return
        }        
        
        socket.onmessage = (message) => {            
            const { action, data } = receiveParser(message.data)
            if (listeners.hasOwnProperty(action)){
                const operation = listeners[action]
                operation(data)
            }
        }
    }, [listeners, socket])


    const listen = <D>(action: Action, func: Listener<D>)=>{        
        setListeners(listeners=>({...listeners, [action] : func}))
    }

    return { socket: socket, listen }
} 

export default useSocket