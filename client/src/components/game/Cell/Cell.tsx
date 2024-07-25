import { Box } from "@mui/material"
import { CellProps } from "../../../types/game/component-types"
import styles from "./Cell.module.css"

const Cell = ({ color, row, column, handle, figure }: CellProps)=>{
    const onClick = ()=> handle(row, column)

    return (
        <Box className={styles.container} style={{backgroundColor : color}} onClick={onClick}>
            <div className={styles.image}>
                <img src={figure} alt="figure"/>
            </div>
        </Box>
    )
}

export default Cell