import { Box, Container, Button } from "@mui/material"
import styles from "./MainHeader.module.scss"
import { Link } from "react-router-dom"
import { LOGIN_PATH } from "../../../constants/paths"

const MainHeader = ()=>{
    return (
        <Box className={styles.container}>
            <Container maxWidth="xl">
                <Box className={styles.content}>
                    <Box><img src="/images/logo/logo48.svg" alt="logo"/></Box>
                    <Box sx={{ gap : "5px", display : "flex" }}>
                        <Button component={Link} to={LOGIN_PATH} variant="contained">Sign in</Button>
                        <Button component={Link} to={"/"} variant="outlined">Sign up</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}


export default MainHeader