import { CONTENT_TYPES } from "../../constants/api"

export type Headers = {
    "Content-Type" : CONTENT_TYPES,
    "Authorization"? : string 
}