export type HeaderItem = {
    displayName : string,
    path : string,
    name : string,
    id : number
}

export interface GameHeaderItem extends HeaderItem {
    icon : string
}