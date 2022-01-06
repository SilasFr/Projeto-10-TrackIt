import axios from "axios"
import { useEffect } from "react"
import Top from "./TopBar"

export default function Today({currentUser}) {
    
    useEffect(
        () => {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today')
        }
    )
    console.log(currentUser)
    return (
        <>
            <Top userImg={currentUser.image}/>
            <h2> Dia de hoje, data de hoje </h2>
        </>
    )
}