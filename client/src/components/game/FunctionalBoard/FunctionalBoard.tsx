import { sendParser } from "../../../api/socket/parsers"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { FIGURE_MOVE, GET_MOVES } from "../../../constants/actions"
import { WHITE } from "../../../constants/game"
import { deactivateFigure, selectActiveFigure, selectColor, selectMatrix, selectMyMove } from "../../../features/game/gameSlice"
import { CellHandle, FunctionalBoardProps } from "../../../types/game/component-types"
import { ChosenFigure, FigureMove } from "../../../types/socket/sendData"
import Board from "../Board/Board"

const FunctionalBoard = ({ send }: FunctionalBoardProps)=>{
    const activeFigure = useAppSelector(selectActiveFigure)
    const myMove = useAppSelector(selectMyMove)
    const selfColor = useAppSelector(selectColor)
    const matrix = useAppSelector(selectMatrix)
    const dispatch = useAppDispatch()

    if(!matrix){
        return <div>loading</div>
    }

    const handle: CellHandle = (row, column)=>{
        if(!myMove){
            return
        }

        const cell = matrix[row][column] 

        if (
            (!activeFigure  || (activeFigure.row !== row || activeFigure.column !== column)) && 
            cell !== 0 && 
            cell.color === selfColor
        ){ 
            send(sendParser<ChosenFigure>(GET_MOVES, { row, column, figure_id : cell.id }))
        }
        
        if(activeFigure){
            const move = activeFigure.moves.find(move=>{
                return move[0] === row && move[1] === column
            })

            if(!move){
                return
            }

            send(sendParser<FigureMove>(FIGURE_MOVE, {
                row : activeFigure.row,
                column : activeFigure.column,
                figure_id : activeFigure.id,
                to_row : row,
                to_column : column
            }))
            dispatch(deactivateFigure())
        }
    }
    
    
    return (
        <Board 
            matrix={matrix} 
            handle={handle} 
            reverse={selfColor === WHITE} 
            activeCells={activeFigure && activeFigure.moves}
        />
    )
}

export default FunctionalBoard