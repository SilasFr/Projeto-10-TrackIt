import axios from "axios"
import { useEffect, useContext } from "react"
import Top from "./TopBar"
import { Trackit } from "./style"
import Menu from "./Menu"
import UserContext from "./contexts/UserContext"
import HabitsContext from "./contexts/HabitsContext"
import HabitsFeed from "./HabitsFeed"
import TodaysFeed from "./TodaysFeed"

export default function Today() {

    const { currentUser, setCurrentUser } = useContext(UserContext)
    const { habits, setHabits } = useContext(HabitsContext)
    const { daylyHabits, setDaylyHabits } = useContext(HabitsContext)

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${currentUser.token}`
            }
        }
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then(response => {
            setDaylyHabits(response.data)
        })
        promise.catch(error => {
            alert(error.data)
        })
    }, [])
    
    return (
        <Trackit>
            <Top userImg={currentUser.image} />
            <div className="today">
                <div className="today-header">
                    <h2>Dia de hoje, datda de hoje</h2>
                    <p>
                        Porcentagem de progresso.
                    </p>
                </div>
                {
                    daylyHabits.length !== 0 ?
                        <TodaysFeed />
                        :
                        <p className="today-body" >Você não tem nenhum hábito cadastrado ainda.
                            Adicione um hábito para começar a trackear!
                        </p>

                }
            </div>
            <Menu></Menu>
        </Trackit>
    )
}