import { useNavigate } from "react-router-dom"
import { GAME_FOUND } from "../constants/actions"
import useSocket from "../hooks/socket/useSocket"
import { GAME_PATH } from "../constants/paths"
import { useEffect } from "react"
import { GameFoundData } from "../types/api/socket"

export default function Lobby(){
    const { socket, listen } = useSocket("lobby") 
    const navigate = useNavigate()

    useEffect(()=>{
        listen<GameFoundData>(GAME_FOUND, (data)=>{
            return navigate(GAME_PATH, { state : { game_id : data.game_id } })
        })
    }, [socket])

    return <div>lobby</div>
}