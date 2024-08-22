import { NavLink } from "react-router-dom"
import { GameHeaderLinkProps } from "../../../types/components/links"
import styles from "./GameHeaderLink.module.scss"

const GameHeaderLink = ({ path, label, icon }: GameHeaderLinkProps)=>{
    return (
        <NavLink 
            to={path} 
            className={styles.link}
        >
            <div>
                <img src={icon} alt={label}/>
                <p>{label}</p>
            </div>
        </NavLink>
    )
}


export default GameHeaderLink