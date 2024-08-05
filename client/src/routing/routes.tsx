import { RouteObject } from "react-router-dom"
import { HOME_PATH, LOBBY_PATH, LOGIN_PATH, TEST_PATH } from "../constants/paths"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Lobby from "../pages/Lobby"

const TEST: RouteObject = {
    element : <p>test</p>,
    path : TEST_PATH
}

const HOME: RouteObject = {
    element : <Home/>,
    path : HOME_PATH
}

const LOGIN: RouteObject = {
    element : <Login/>,
    path : LOGIN_PATH
}

const LOBBY: RouteObject = {
    element : <Lobby/>,
    path : LOBBY_PATH
}

const ROUTES = [TEST, HOME, LOGIN, LOBBY]
export default ROUTES