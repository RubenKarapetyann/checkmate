import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { AuthenticationState } from '../../types/redux/state';

const initialState: AuthenticationState = {
    user : null,
    IsAuthenticated : false,
    error : null,
    isLoading : false
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export const { } = authenticationSlice.actions;

export const selectUser = (state: RootState) => state.authentication.user;
export const selectError = (state: RootState) => state.authentication.error;
export const selectLoading = (state: RootState) => state.authentication.isLoading;

export default authenticationSlice.reducer;
