import { Box } from "@mui/material"
import { ChildrenProps } from "../../../types/components/common"
import styles from "./FlyingFigures.module.scss"

const FlyingFigures = ({ children }: ChildrenProps)=>{
    return (
        <Box className={styles.wrap}>
            {children}
        </Box>
    )
}

export default FlyingFigures