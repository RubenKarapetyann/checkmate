import { Box, Container } from "@mui/material"
import { GameLayoutProps } from "../../../types/components/layouts"
import FunctionalBoard from "../../game/FunctionalBoard/FunctionalBoard"
import styles from "./GameLayout.module.scss"
import GameTimer from "../../ui/timers/GameTimer/GameTimer"

const GameLayout = ({ send }: GameLayoutProps)=>{

    return (
        <Container>
            <Box className={styles.container}>
                <Box>
                    <FunctionalBoard send={send}/>
                </Box>
                <Box className={styles.statistics}>
                    <Box>
                        <GameTimer time={150} onFinish={()=>{}}/>
                    </Box>
                    <Box>
                        <GameTimer time={150} onFinish={()=>{}}/>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}


export default GameLayout