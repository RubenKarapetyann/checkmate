import { Container } from "@mui/material"
import { GameLayoutProps } from "../../../types/components/layouts"
import FunctionalBoard from "../../game/FunctionalBoard/FunctionalBoard"

const GameLayout = ({ send }: GameLayoutProps)=>{

    return (
        <Container>
            <FunctionalBoard send={send}/>
        </Container>
    )
}


export default GameLayout