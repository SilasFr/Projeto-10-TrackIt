import axios from "axios"
import { useContext } from "react/cjs/react.development"
import HabitsContext from "./contexts/HabitsContext"
import UserContext from "./contexts/UserContext"
import { DaylyHabit, Feed } from "./style"

export default function TodaysFeed() {
    const { daylyHabits, setDaylyHabits } = useContext(HabitsContext)
    const { currentUser, setCurrentUser } = useContext(UserContext)
    console.log(daylyHabits)

    function handleIsDone(e) {
        let id

        if (e.target.lastChild) {
            id = (e.target.lastChild.innerText)
        } 
        else id = (e.target.parentNode.nextSibling.innerText)

        console.log('id: ', id)
        const body = {}
        const config = {
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }
        }
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, body, config)
        promise.then(response => {
            console.log('response: ', response.data)
        })

        promise.catch(error => {
            console.log('erro: ', error.response)
            alert(error.response.data.message)
        })
    }
    console.log('daylyHH', daylyHabits)
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