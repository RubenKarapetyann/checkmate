import { createSlice } from '@reduxjs/toolkit';
import { GameState } from '../../types/redux/state';

const name = "game"
const initialState: GameState = {

}

export const gameSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export const { } = gameSlice.actions;

export default gameSlice.reducer;
