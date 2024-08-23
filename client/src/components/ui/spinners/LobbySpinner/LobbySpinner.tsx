import { Box } from "@mui/material"
import styles from "./LobbySpinner.module.scss"

const LobbySpinner = ()=>{
    return (
        <Box className={styles.container}>
            <img 
                src="images/spinners/board2x2.svg" 
                alt="spinner" 
                width="150px"
            />
        </Box>
    )
}

export default LobbySpinner