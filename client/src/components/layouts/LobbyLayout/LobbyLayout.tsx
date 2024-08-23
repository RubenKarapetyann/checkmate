import { Box, Button } from "@mui/material"
import FlyingFigures from "../../backgrounds/FlyingFigures/FlyingFigures"
import LobbySpinner from "../../ui/spinners/LobbySpinner/LobbySpinner"
import { LOBBY_PHRASES } from "../../../constants/ui"
import ChangingText from "../../ui/texts/ChangingText/ChangingText"
import { Link } from "react-router-dom"
import { HOME_PATH } from "../../../constants/paths"
import styles from "./LobbyLayout.module.scss"

const LobbyLayout = ()=>{
    return (
        <Box className={styles.container}>
            <FlyingFigures>
                <Box className={styles.content}>
                    <LobbySpinner/>
                    <ChangingText phraseList={LOBBY_PHRASES}/>
                    <br />
                    <Button color="warning" component={Link} to={HOME_PATH} variant="contained" size="large">cancel</Button>
                </Box>  
            </FlyingFigures>
        </Box>
    )
}

export default LobbyLayout