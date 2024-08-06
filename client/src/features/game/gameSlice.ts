import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from '../../types/redux/state';
import { RootState } from '../../app/store';
import { Matrix } from '../../types/game/game';

const name = "game"
const initialState: GameState = {
    matrix: null
}

export const gameSlice = createSlice({
  name,
  initialState,
  reducers: {
    setMatrix : (state, action: PayloadAction<Matrix>)=>{
        state.matrix = action.payload
    }
  },
  extraReducers: (builder) => {}
})

export const { setMatrix } = gameSlice.actions;

export const selectMatrix = (state: RootState) => state.game.matrix

export default gameSlice.reducer;
