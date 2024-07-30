import { useEffect, useRef } from "react"
import socketEndpoints from "../../api/endpoints/socketEndpoints"

const useSocket = (endpoint: keyof ReturnType<typeof socketEndpoints>)=>{
    const socket = useRef<null | WebSocket>(null)

    useEffect(()=>{
        socket.current = new WebSocket(socketEndpoints()[endpoint])
    }, [endpoint])
    
    return { socket: socket.current }
}

export default useSocket