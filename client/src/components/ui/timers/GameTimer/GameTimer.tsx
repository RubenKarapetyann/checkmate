import { Box } from "@mui/material"
import { GameTimerProps } from "../../../../types/components/timers"
import AnimatedClock from "../../details/AnimatedClock/AnimatedClock"
import { useState } from "react"

const GameTimer = ({ time, onFinish }: GameTimerProps) => {
    const [seconds, setSeconds] = useState<number>(time)
    const minutes = Math.floor(seconds / 60)

    return (
        <Box>
            <AnimatedClock/>
            <p>{minutes} : {seconds - minutes * 60}</p>
        </Box>
    )
}

export default GameTimer