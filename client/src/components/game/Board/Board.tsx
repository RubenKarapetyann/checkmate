import { Box } from "@mui/material";
import { BoardProps } from "../../../types/game/component-types";
import styles from "./Board.module.css"
import Row from "../Row/Row";

const Board = ({ matrix, handle, reverse, activeCells }: BoardProps)=>{   
    
    // this is not the best solution, fix it later
    const modifiedActiveCells = activeCells?.reduce<Array<Array<number>>>((accumulator, currentMoves)=>{
        if (accumulator[currentMoves[0]]){
            accumulator[currentMoves[0]].push(currentMoves[1])
        }else{
            accumulator[currentMoves[0]] = [currentMoves[1]]
        }
        return accumulator 
    }, [])

    return (
        <Box className={styles.container} sx={{ rotate: reverse ? "180deg" : 0 }}>
            {matrix.map((list, row)=>{
                return <Row 
                    list={list} 
                    row={row} 
                    handle={handle} 
                    key={row} 
                    reverse={reverse}
                    activeCells={modifiedActiveCells && modifiedActiveCells[row]}
                />
            })}
        </Box>
    )
}

export default Board