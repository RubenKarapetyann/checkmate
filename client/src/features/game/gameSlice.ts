import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActiveFigure, GameState } from '../../types/redux/state';
import { RootState } from '../../app/store';
import { Matrix } from '../../types/game/game';
import { FigureMoveData, GameAcceptedData } from '../../types/socket/receiveData';
import { getMyMove } from '../../utils/game/game';

const name = "game"
const initialState: GameState = {
    matrix: null,
    selfColor: null,
    activeFigure: null,
    movesCount: null,
    myMove: false
}

export const gameSlice = createSlice({
  name,
  initialState,
  reducers: {
    setMatrix : (state, action: PayloadAction<Matrix>)=>{
      state.matrix = action.payload
    },
    setInitialGameState : (state, action: PayloadAction<GameAcceptedData>)=>{
      state.matrix = action.payload.matrix
      state.selfColor = action.payload.color
      state.movesCount = action.payload.moves_count
      state.myMove = getMyMove(state.movesCount, state.selfColor)
    },
    setActiveFigure : (state, action: PayloadAction<ActiveFigure>)=>{
      state.activeFigure = action.payload
    },
    deactivateFigure : (state)=>{
      state.activeFigure = null
    },
    figureMove : (state, action: PayloadAction<FigureMoveData>)=>{
      state.matrix = action.payload.matrix
      state.movesCount = action.payload.moves_count
      state.myMove = getMyMove(state.movesCount, state.selfColor)
    }
  },
  extraReducers: (builder) => {}
})

export const { setMatrix, setInitialGameState, setActiveFigure, deactivateFigure, figureMove } = gameSlice.actions;

export const selectMatrix = (state: RootState) => state.game.matrix;
export const selectColor = (state: RootState) => state.game.selfColor;
export const selectActiveFigure = (state: RootState) => state.game.activeFigure;
export const selectMyMove = (state: RootState) => state.game.myMove

export default gameSlice.reducer;
