import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActiveFigure, GameState } from '../../types/redux/state';
import { RootState } from '../../app/store';
import { Matrix } from '../../types/game/game';
import { GameAcceptedData } from '../../types/socket/receiveData';

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
    },
    setActiveFigure : (state, action: PayloadAction<ActiveFigure>)=>{
      state.activeFigure = action.payload
    },
    deactivateFigure : (state)=>{
      state.activeFigure = null
    }
  },
  extraReducers: (builder) => {}
})

export const { setMatrix, setInitialGameState, setActiveFigure, deactivateFigure } = gameSlice.actions;

export const selectMatrix = (state: RootState) => state.game.matrix;
export const selectColor = (state: RootState) => state.game.selfColor;
export const selectActiveFigure = (state: RootState) => state.game.activeFigure;
export const selectMyMove = (state: RootState) => state.game.myMove

export default gameSlice.reducer;
