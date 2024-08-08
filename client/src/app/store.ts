import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authentication/authenticationSlice';
import gameReducer from "../features/game/gameSlice";

export const store = configureStore({
  reducer: {
    authentication : authenticationReducer,
    game : gameReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
