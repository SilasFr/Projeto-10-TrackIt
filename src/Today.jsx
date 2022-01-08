import axios from "axios"
import { useEffect, useContext } from "react"
import Top from "./TopBar"
import { Trackit } from "./style"
import Menu from "./Menu"
import UserContext from "./contexts/UserContext"
import HabitsContext from "./contexts/HabitsContext"
import TodaysFeed from "./TodaysFeed"
import dayjs from "dayjs"
import updateLocale from 'dayjs/plugin/updateLocale'

export default function Today() {
    dayjs.extend(updateLocale)
    dayjs.updateLocale('en', {
        weekdays: [
            "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
        ]
    })
    let dayOfTheWeek = dayjs().format('dddd')
    let dateTime = dayjs().format('DD/MM')


    const { currentUser, setCurrentUser } = useContext(UserContext)
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
                    <h2>{` ${dayOfTheWeek}, ${dateTime}`}</h2>
                    <p>
                        Porcentagem de progresso.
                    </p>
                </div>
                {
                    daylyHabits.length !== 0 ?
                        <TodaysFeed />
                        :
                        <p className="today-body" >
                            Você não tem nenhum hábito cadastrado ainda.
                            Adicione um hábito para começar a trackear!
                        </p>
                }
            </div>
            <Menu></Menu>
        </Trackit>
    )
}