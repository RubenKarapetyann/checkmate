import useSocket from "../hooks/socket/useSocket"

export default function Lobby(){
    const { socket } = useSocket("lobby") 
    return <div>lobby</div>
}