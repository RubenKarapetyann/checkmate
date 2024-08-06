import { Action } from "../api/socket";

export type Listeners = Record<Action, Listener<unknown>>
export type Listener<D> = (data: D)=>void