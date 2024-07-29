import { CONTENT_TYPES, METHODS } from "../../constants/api";
import { TOKEN } from "../../constants/storage";
import { fetchDataProps } from "../../types/api/fetches";
import { Headers } from "../../types/api/global";
import { fetchData } from "../../utils/api";
import { getItemFromStorage } from "../../utils/storage";

export const fetchWithToken = async (
    url: string, 
    method: METHODS=METHODS.GET,
    data?: Object,
    contentTypes: CONTENT_TYPES=CONTENT_TYPES.APPLICATION_JSON
)=>{
    const token = getItemFromStorage(TOKEN)
    if(!token){
        return null
    }

    const headers: Headers = {
        "Content-Type" : contentTypes,
        "Authorization" : `Token ${token}`
    }

    const config: fetchDataProps = { url, method, data, headers }

    return await fetchData(config)
}