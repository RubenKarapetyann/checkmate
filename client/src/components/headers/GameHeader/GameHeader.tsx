import { Box, Container } from "@mui/material"
import styles from "./GameHeader.module.scss"
import GameHeaderLink from "../../ui/links/GameHeaderLink/GameHeaderLink"
import { GAME_HEADER_ITEMS } from "../../../constants/header"

const GameHeader = ()=>{
    return (
        <Box className={styles.container}>
        <Container maxWidth="xl">
            <Box className={styles.content}>
                {GAME_HEADER_ITEMS.map(section=>(
                    <GameHeaderLink 
                        path={section.path}
                        label={section.displayName}
                        icon={section.icon}
                        key={section.id}
                    />
                ))}
            </Box>
        </Container>
    </Box>
    )
}


export default GameHeader