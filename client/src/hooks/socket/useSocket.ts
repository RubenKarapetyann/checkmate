import { useEffect, useRef } from "react"
import socketEndpoints from "../../api/endpoints/socketEndpoints"

const useSocket = ()=>{
    const socket = useRef<null | WebSocket>(null)

    useEffect(()=>{
        socket.current = new WebSocket(socketEndpoints().game)
    }, [])
    
    return { socket: socket.current }
}

export default useSocket