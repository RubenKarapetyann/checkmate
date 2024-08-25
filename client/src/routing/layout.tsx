import GamePagesLayout from "../components/layouts/GamePagesLayout/GamePagesLayout"
import MainPagesLayout from "../components/layouts/MainPagesLayout/MainPagesLayout"
import { FIGHT, GAME, HOME, LOBBY, LOGIN, TEST } from "./routes"

const gameLayout = {
    element: <GamePagesLayout/>,
    children: [ FIGHT ] 
}

const mainLayout = {
    element: <MainPagesLayout/>,
    children: [ HOME, LOGIN ] 
}

const noLayout = [ GAME, LOBBY, TEST ]


export const ROUTES = [gameLayout, mainLayout, ...noLayout]

export default ROUTES