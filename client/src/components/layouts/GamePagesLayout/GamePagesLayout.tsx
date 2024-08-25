import { Outlet } from "react-router-dom";
import GameHeader from "../../headers/GameHeader/GameHeader";

const GamePagesLayout = ()=>(
    <>
        <GameHeader/>
        <Outlet/>
    </>
)

export default GamePagesLayout