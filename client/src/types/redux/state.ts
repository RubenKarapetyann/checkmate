import { Matrix } from "../game/game"

export interface AuthenticationState {
    user : Object | null,
    IsAuthenticated : boolean,
    error : null | string,
    isLoading : boolean
}
  
export interface GameState {
    matrix: Matrix | null
}