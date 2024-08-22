import { Box, Container } from "@mui/material"
import GameHeaderLink from "../../links/GameHeaderLink/GameHeaderLink"
import { GAME_HEADER_ITEMS } from "../../../constants/header"

const GameHeader = ()=>{
    return (
        <Box>
        <Container maxWidth="xl">
            <Box>
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