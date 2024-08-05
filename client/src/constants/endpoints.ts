import { PREFIX } from "./api"
import { WS_PREFIX } from "./socket"

// authentication endpoints
const AUTH_NAMESPACE = "auth"
export const LOGIN = `${PREFIX}/${AUTH_NAMESPACE}/token/login`

// socket endpoints
export const GAME = `${WS_PREFIX}/game`
export const LOBBY = `${WS_PREFIX}/lobby`