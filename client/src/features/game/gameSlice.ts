import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from '../../types/redux/state';
import { RootState } from '../../app/store';
import { Matrix } from '../../types/game/game';
import { GameAcceptedData } from '../../types/api/socket';

const name = "game"
const initialState: GameState = {
    matrix: null,
    selfColor: null
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
    }
  },
  extraReducers: (builder) => {}
})

export const { setMatrix, setInitialGameState } = gameSlice.actions;

export const selectMatrix = (state: RootState) => state.game.matrix;
export const selectColor = (state: RootState) => state.game.selfColor;

export default gameSlice.reducer;
