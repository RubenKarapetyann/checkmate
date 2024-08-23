import { useEffect, useState } from "react"
import { ChangingTextProps } from "../../../../types/components/texts"

const ChangingText = ({ phraseList }: ChangingTextProps)=>{
    const randomIndex = Math.floor(Math.random()*phraseList.length)
    const [phrase, setPhrase] = useState<string>(phraseList[randomIndex])

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            const randomIndex = Math.floor(Math.random()*phraseList.length)
            setPhrase(phraseList[randomIndex])
        }, 3000)
        
        return ()=> clearInterval(intervalId)
    }, [])

    return <p style={{ color : "white" }}>{phrase}</p>
}

export default ChangingText