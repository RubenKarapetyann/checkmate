import { BLACK, WHITE } from "../../constants/game"
import { getMyMove } from "./game"


describe("Function getMyMove", ()=>{
    test("should start with color white", ()=>{
        expect(getMyMove(0, WHITE)).toBe(true)
        expect(getMyMove(0, BLACK)).toBe(false)
    })

    test("should work if arguments are null", ()=>{
        expect(getMyMove(null, null)).toBe(false)
        expect(getMyMove(2, null)).toBe(false)
        expect(getMyMove(null, WHITE)).toBe(false)
    })

    test("should work correctly", ()=>{
        expect(getMyMove(2, WHITE)).toBe(true)
        expect(getMyMove(4, BLACK)).toBe(false)

        expect(getMyMove(7, BLACK)).toBe(true)
        expect(getMyMove(9, WHITE)).toBe(false)
    })
})