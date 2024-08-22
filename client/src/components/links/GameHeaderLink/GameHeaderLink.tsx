import { NavLink } from "react-router-dom"
import { GameHeaderLinkProps } from "../../../types/components/links"

const GameHeaderLink = ({ path, label, icon }: GameHeaderLinkProps)=>{
    return (
        <NavLink 
            to={path} 
        >
            <div>
                <img src={icon} alt={label}/>
                <p>{label}</p>
            </div>
        </NavLink>
    )
}


export default GameHeaderLink