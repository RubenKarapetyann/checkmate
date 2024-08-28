import { render } from "@testing-library/react"
import LobbySpinner from "./LobbySpinner"

describe("Component Lobby Spinner", ()=>{
    test("should be rendered", ()=>{
        const { getByAltText } = render(<LobbySpinner/>)

        expect(getByAltText("spinner")).toBeInTheDocument()
    })

    test("Lobby Spinner Snapshot", ()=>{
        const spinner = render(<LobbySpinner/>)

        expect(spinner).toMatchSnapshot()
    })
})