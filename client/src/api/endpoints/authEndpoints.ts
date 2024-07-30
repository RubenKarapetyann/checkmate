import { SERVER_URL } from "../../constants/api"
import { LOGIN } from "../../constants/endpoints"

const authEndpoints = ()=>({
    login: `${SERVER_URL}/${LOGIN}`
})

export default authEndpoints