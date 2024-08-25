import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ROUTES from "./layout"

const router = createBrowserRouter(ROUTES)

const Router = ()=> <RouterProvider router={router}/>
export default Router