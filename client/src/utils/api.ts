import { CONTENT_TYPES, METHODS } from "../constants/api";
import { fetchDataProps } from "../types/api/fetches";

export const fetchData = async ({
    url, 
    method=METHODS.GET, 
    data,
    headers={"Content-Type" : CONTENT_TYPES.APPLICATION_JSON}
}:fetchDataProps)=>{
    try {
        const options = {
            method,
            headers,
            body : JSON.stringify(data)
        }

        const response = await fetch(url, options)
        return await response.json()
    }catch (err){
        console.log(err);
    }
}