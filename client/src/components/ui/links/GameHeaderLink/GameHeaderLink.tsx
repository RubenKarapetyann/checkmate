import { NavLink } from "react-router-dom"
import { GameHeaderLinkProps } from "../../../../types/components/links"
import styles from "./GameHeaderLink.module.scss"
import { Button } from "@mui/material"

const GameHeaderLink = ({ path, label, icon }: GameHeaderLinkProps)=>{
    return (
        <Button 
            component={NavLink} 
            to={path} 
            className={styles.link} 
            variant="outlined" 
            color="warning"
        >
            <div>
                <img src={icon} alt={label}/>
                {/* <p>{label}</p> */}
            </div>
        </Button>
    )
}


export default GameHeaderLink