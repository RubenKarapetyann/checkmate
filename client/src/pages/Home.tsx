import { Link } from "react-router-dom"
import { LOBBY_PATH } from "../constants/paths"

export default function Home(){
    return (
        <>
            <h1>Home</h1>
            <Link to={LOBBY_PATH}>PLAY</Link>
        </>
    )
}