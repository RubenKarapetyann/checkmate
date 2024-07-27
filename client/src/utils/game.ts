import { MATRIX_SIZE } from "../constants/game"
import { Matrix } from "../types/game/game"

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