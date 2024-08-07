import { Box } from "@mui/material";
import { BoardProps } from "../../../types/game/component-types";
import styles from "./Board.module.css"
import Row from "../Row/Row";

const Board = ({ matrix, handle, reverse }: BoardProps)=>{
    return (
        <Box className={styles.container} sx={{ rotate: reverse ? "180deg" : 0 }}>
            {matrix.map((list, row)=>{
                return <Row list={list} row={row} handle={handle} key={row} reverse={reverse}/>
            })}
        </Box>
    )
}

export default Board