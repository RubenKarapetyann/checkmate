import { Box } from "@mui/material"
import { GameTimerProps } from "../../../../types/components/timers"
import AnimatedClock from "../../details/AnimatedClock/AnimatedClock"
import { useEffect, useState } from "react"
import styles from "./GameTimer.module.scss"

const GameTimer = ({ time, onFinish }: GameTimerProps) => {
    const [seconds, setSeconds] = useState<number>(time)
    const date = new Date(seconds*1000)

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
            <p>
                {String(date.getMinutes()).padStart(2, "0")} : {String(date.getSeconds()).padStart(2, "0")}
            </p>
        </Box>
    )
}

export default GameTimer