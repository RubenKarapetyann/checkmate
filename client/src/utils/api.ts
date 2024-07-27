import { CONTENT_TYPES, METHODS } from "../constants/api";

export const fetchData = async (
    url: string, 
    method: METHODS=METHODS.GET, 
    data?: Object, 
    contentType: CONTENT_TYPES=CONTENT_TYPES.APPLICATION_JSON
)=>{
    try {
        const options = {
            method,
            headers: {
                "Content-Type": contentType,
            },
            body : JSON.stringify(data)
        }
        const response = await fetch(url, options)
        return await response.json()
    }catch (err){
        console.log(err);
    }
}