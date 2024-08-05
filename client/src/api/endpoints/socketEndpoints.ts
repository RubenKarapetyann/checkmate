import { SERVER_URL } from "../../constants/api"
import { GAME, LOBBY } from "../../constants/endpoints"
import { TOKEN } from "../../constants/storage"
import { getItemFromStorage } from "../../utils/storage"

const socketEndpoints = ()=>({
    game: `${SERVER_URL}/${GAME}/?token=${getItemFromStorage(TOKEN)}`,
    lobby: `${SERVER_URL}/${LOBBY}/?token=${getItemFromStorage(TOKEN)}`
})

export default socketEndpoints