export interface AuthenticationState {
    user : Object | null,
    IsAuthenticated : boolean,
    error : null | string,
    isLoading : boolean
}
  