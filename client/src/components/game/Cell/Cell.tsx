import { Box } from "@mui/material"
import { CellProps } from "../../../types/game/component-types"
import styles from "./Cell.module.css"
import { SERVER_URL } from "../../../constants/api"

const Cell = ({ color, row, column, handle, figure }: CellProps)=>{
    const onClick = ()=> handle(row, column)

    return (
        <Box className={styles.container} style={{backgroundColor : color}} onClick={onClick}>
            { figure === 0 ? null :
            <div className={styles.image}>
                <img src={`${SERVER_URL}/static/${figure.image}`} alt="figure"/>
            </div>}
        </Box>
    )
}

export default Cell