import { Action } from "../socket/global"

export type Listeners = Record<Action, Listener<unknown>>
export type Listener<D> = (data: D)=>void