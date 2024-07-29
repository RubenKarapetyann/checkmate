import { StorageKeyType } from "../types/global/storage";

export const setItemToStorage = (key: StorageKeyType, value: string): void =>{
    localStorage.setItem(key, value);
}

export const getItemFromStorage = (key: StorageKeyType) : string | null =>{
    return localStorage.getItem(key)
}