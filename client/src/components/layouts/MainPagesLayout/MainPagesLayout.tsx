import { Outlet } from "react-router-dom";
import MainHeader from "../../headers/MainHeader/MainHeader";

const MainPagesLayout = ()=>(
    <>
        <MainHeader/>
        <Outlet/>
    </>
)

export default MainPagesLayout