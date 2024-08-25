import { RouteObject } from "react-router-dom"
import { FIGHT_PATH, GAME_PATH, HOME_PATH, LOBBY_PATH, LOGIN_PATH, TEST_PATH } from "../constants/paths"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Lobby from "../pages/Lobby"
import Game from "../pages/Game"
import Fight from "../pages/Fight"

export const TEST: RouteObject = {
    element : <p>test</p>,
    path : TEST_PATH
}

export const HOME: RouteObject = {
    element : <Home/>,
    path : HOME_PATH
}

export const LOGIN: RouteObject = {
    element : <Login/>,
    path : LOGIN_PATH
}

export const LOBBY: RouteObject = {
    element : <Lobby/>,
    path : LOBBY_PATH
}

export const GAME: RouteObject = {
    element : <Game/>,
    path : GAME_PATH
}

export const FIGHT: RouteObject = {
    element : <Fight/>,
    path : FIGHT_PATH
}
