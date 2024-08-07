import { Box } from "@mui/material"
import { CellProps } from "../../../types/game/component-types"
import styles from "./Cell.module.css"
import { SERVER_URL } from "../../../constants/api"

const Cell = ({ color, row, column, handle, figure, reverse }: CellProps)=>{
    const onClick = ()=> handle(row, column)

    return (
        <Box className={styles.container} style={{backgroundColor : color}} onClick={onClick}>
            { figure === 0 ? null :
            <Box className={styles.image} sx={{ rotate : reverse ? "180deg" : 0 }}>
                <img src={`${SERVER_URL}/static/${figure.image}`} alt="figure"/>
            </Box>}
        </Box>
    )
}

export default Cell