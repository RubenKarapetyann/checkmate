import { SERVER_URL } from "../../constants/api"
import { GAME, LOBBY } from "../../constants/endpoints"
import { TOKEN } from "../../constants/storage"
import { getItemFromStorage } from "../../utils/storage"

const socketEndpoints = (id?: number)=>({
    game: `${SERVER_URL}/${GAME}/${id}/?token=${getItemFromStorage(TOKEN)}`,
    lobby: `${SERVER_URL}/${LOBBY}/?token=${getItemFromStorage(TOKEN)}`
})

export default socketEndpoints