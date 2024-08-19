import { BLACK, MATRIX_SIZE, WHITE } from "../constants/game"
import { Color, Matrix } from "../types/game/game"

export const createMatrix = ()=>{
    const matrix: Matrix = []
    for (let i = 0; i < MATRIX_SIZE; i++){
        matrix[i] = []
        for(let j = 0; j < MATRIX_SIZE; j++){
            matrix[i][j] = 0
        }
    }
    
    return matrix
}

export const getMyMove = (movesCount: number | null, selfColor: Color | null)=>{
    // movesCount migth be 0 what is falsy expression
    if(movesCount === null || !selfColor) {
        return false
    }
    return (movesCount % 2 === 0 && selfColor === WHITE) || 
    (movesCount % 2 === 1 && selfColor === BLACK) ? true : false
}
