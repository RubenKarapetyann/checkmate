import { Box } from "@mui/material"
import { GameTimerProps } from "../../../../types/components/timers"
import AnimatedClock from "../../details/AnimatedClock/AnimatedClock"
import { useState } from "react"
import styles from "./GameTimer.module.scss"

const GameTimer = ({ time, onFinish }: GameTimerProps) => {
    const [seconds, setSeconds] = useState<number>(time)
    const minutes = Math.floor(seconds / 60)

    return (
        <Box className={styles.container}>
            <AnimatedClock/>
            <p>{minutes} : {seconds - minutes * 60}</p>
        </Box>
    )
}

export default GameTimer