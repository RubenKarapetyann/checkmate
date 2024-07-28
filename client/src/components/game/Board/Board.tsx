import { Box } from "@mui/material";
import { BoardProps } from "../../../types/game/component-types";
import styles from "./Board.module.css"
import Row from "../Row/Row";

const Board = ({ matrix, handle }: BoardProps)=>{
    return (
        <Box className={styles.container}>
            {matrix.map((list, row)=>{
                return <Row list={list} row={row} handle={handle} key={row}/>
            })}
        </Box>
    )
}

export default Board