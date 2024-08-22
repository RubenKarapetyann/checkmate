import { GameHeaderItem } from "../types/components/headers"

export const FIGHT_SECTION = "fight"
export const FIGHT: GameHeaderItem = {
    displayName : "Fight",
    name : FIGHT_SECTION,
    id : 1,
    path : "/",
    icon : "images/icons/fight.svg"
}

export const SHOP_SECTION = "shop"
export const SHOP: GameHeaderItem = {
    displayName : "Shop",
    name : SHOP_SECTION,
    id : 2,
    path : "/",
    icon : "images/icons/shop.svg"
}

export const INVENTORY_SECTION = "inventory"
export const INVENTORY: GameHeaderItem = {
    displayName : "Inventory",
    name : INVENTORY_SECTION,
    id : 3,
    path : "/",
    icon : "images/icons/inventory.svg"
}

export const GAME_HEADER_ITEMS = [SHOP, FIGHT, INVENTORY]