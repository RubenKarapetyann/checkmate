import { RouteObject } from "react-router-dom"
import { HOME_PATH, TEST_PATH } from "../constants/paths"
import Home from "../pages/Home"

const TEST: RouteObject = {
    element : <p>test</p>,
    path : TEST_PATH
}

const HOME: RouteObject = {
    element : <Home/>,
    path : HOME_PATH
}

const ROUTES = [TEST, HOME]
export default ROUTES