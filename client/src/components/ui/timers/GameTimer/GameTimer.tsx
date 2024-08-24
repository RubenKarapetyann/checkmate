import { Box } from "@mui/material"
import { GameTimerProps } from "../../../../types/components/timers"
import AnimatedClock from "../../details/AnimatedClock/AnimatedClock"
import { useEffect, useState } from "react"
import styles from "./GameTimer.module.scss"

const GameTimer = ({ time, onFinish }: GameTimerProps) => {
    const [seconds, setSeconds] = useState<number>(time)
    const minutes = Math.floor(seconds / 60)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setSeconds(seconds=>{
                if( seconds > 0 ){
                    return seconds - 1
                }else{
                    clearInterval(intervalId)
                    onFinish()
                    return 0
                }
            })                
        }, 1000)

        return ()=> clearInterval(intervalId)
    }, [])

    return (
        <Box className={styles.container}>
            <AnimatedClock/>
            <p>{minutes} : {seconds - minutes * 60}</p>
        </Box>
    )
}

export default GameTimer