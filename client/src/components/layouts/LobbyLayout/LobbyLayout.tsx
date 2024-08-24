import { Box, Button } from "@mui/material"
import LobbySpinner from "../../ui/spinners/LobbySpinner/LobbySpinner"
import { LOBBY_PHRASES } from "../../../constants/ui"
import ChangingText from "../../ui/texts/ChangingText/ChangingText"
import { Link } from "react-router-dom"
import { HOME_PATH } from "../../../constants/paths"
import styles from "./LobbyLayout.module.scss"

const LobbyLayout = ()=>{
    return (
        <Box className={styles.container}>
            <Box className={styles.content}>
                <h3>We are looking for an opponent for you</h3>
                <LobbySpinner/>
                <ChangingText phraseList={LOBBY_PHRASES}/>
                <br />
                <Button color="error" component={Link} to={HOME_PATH} variant="contained" size="large">cancel</Button>
            </Box>  
        </Box>
    )
}

export default LobbyLayout