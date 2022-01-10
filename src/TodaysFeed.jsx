import axios from "axios"
import {React} from "react"
import { useContext, useEffect } from "react/cjs/react.development"
import HabitsContext from "./contexts/HabitsContext"
import UserContext from "./contexts/UserContext"
import { DaylyHabit, Feed } from "./style"

export default function TodaysFeed() {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const { daylyHabits, setDaylyHabits } = useContext(HabitsContext)
    const { percentage, setPercentage } = useContext(HabitsContext)

    const config = {
        headers: {
            'Authorization': `Bearer ${currentUser.token}`
        }
    }
    useEffect( handlePercentage,[daylyHabits] )

    function handleIsDone(e) {
        let id
        if (e.target.tagName == 'BUTTON') {
            id = (e.target.lastChild.innerText)
        }
        else if (e.target.tagName == 'path') {
            id = (e.target.parentNode.nextSibling.innerText)
        }
        else if (e.target.tagName == 'svg') {
            id = (e.target.nextSibling.innerText)
        }
        verify(id)
    }

    function verify(id) {
        const [daylyHabit] = daylyHabits.filter(item => item.id == id)
        if (daylyHabit.done) {
            unmarkHabit(daylyHabit)
        } else markHabit(daylyHabit)
    }

    function markHabit(habit) {
        const body = {}
        const id = habit.id
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, body, config)
        promise.then(response => {
            reRenderHabits()})

        promise.catch(error => {
            alert(error.response.data.message)
            reRenderHabits()
        })
    }

    function unmarkHabit(habit) {
        const body = {}
        const id = habit.id

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, body, config)
        promise.then(response => {
            reRenderHabits()})
        promise.catch(error => {
            alert(error.response.data.message)
            reRenderHabits()
        })
    }

    function handlePercentage(){
        const totalHabits = daylyHabits.length
        const result = (daylyHabits.filter(item=> item.done === true)).length / totalHabits
        setPercentage(result)
    }

    function reRenderHabits() {
        const promise2 = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise2.then(response => setDaylyHabits(response.data))
        promise2.catch(error => alert(error.response.data.message))
    }
    return (
        <Feed>
            {
                daylyHabits.map(habit => {
                    return (
                        <DaylyHabit key={habit.id} >
                            <div className="habit-info">
                                <p>{habit.name}</p>
                                <span> Sequência atual: {habit.currentSequence} </span>
                                <span> Seu recorde: {habit.highestSequence} </span>
                            </div>

                            <button onClick={handleIsDone} className={`${habit.done && 'selected'} habit-checkbox`} >
                                <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.5686 0.956629C30.1694 0.350274 30.9857 0.00637472 31.8392 8.77323e-05C32.6928 -0.00619925 33.5141 0.325638 34.1237 0.923077C34.7333 1.52052 35.0816 2.33498 35.0926 3.18846C35.1035 4.04195 34.7761 4.86506 34.182 5.4779L16.9915 26.9682C16.6962 27.2862 16.3398 27.5413 15.9437 27.7185C15.5476 27.8957 15.1198 27.9912 14.6859 27.9994C14.252 28.0076 13.821 27.9283 13.4184 27.7662C13.0159 27.6041 12.6502 27.3625 12.3431 27.0559L0.945601 15.6628C0.339937 15.0569 -0.000205509 14.2351 9.31541e-08 13.3784C0.000205695 12.5216 0.340743 11.7001 0.946698 11.0944C1.55265 10.4887 2.37439 10.1486 3.23113 10.1488C4.08788 10.149 4.90945 10.4895 5.51511 11.0955L14.5292 20.1117L29.4831 1.05749C29.5103 1.02282 29.5396 0.989868 29.5708 0.958822L29.5686 0.956629Z" fill="white" />
                                </svg>
                                <span className="hidden">{habit.id}</span>
                            </button>

                        </DaylyHabit>

                    )
                })
            }
        </Feed>
    )
}