import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { AuthenticationState } from '../../types/redux/state';
import { LoginPayload } from '../../types/redux/payloads';
import { fetchData } from '../../utils/api';
import authEndpoints from '../../api/endpoints/authEndpoints';
import { METHODS } from '../../constants/api';
import { setItemToStorage } from '../../utils/storage';
import { TOKEN } from '../../constants/storage';

const name = "authentication"
const initialState: AuthenticationState = {
    user : null,
    IsAuthenticated : false,
    error : null,
    isLoading : false
}

export const login = createAsyncThunk(
  `${name}/login`,
  async ({ username, password }: LoginPayload) => {
    const response = await fetchData({ 
      url : authEndpoints().login, 
      data : { username, password },
      method : METHODS.POST
    })

    return response
  }
)

export const authenticationSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action)=>{
        state.isLoading = false
        if(action.payload.auth_token){
          setItemToStorage(TOKEN, action.payload.auth_token)
        }else{
          state.error = "username or password is incorrect"
        }
      })
  }
})

export const { } = authenticationSlice.actions;

export const selectUser = (state: RootState) => state.authentication.user;
export const selectError = (state: RootState) => state.authentication.error;
export const selectLoading = (state: RootState) => state.authentication.isLoading;

export default authenticationSlice.reducer;
