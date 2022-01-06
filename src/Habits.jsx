import { Trackit } from "./style"
import Menu from "./Menu"
import Top from "./TopBar"
import { useEffect, useState } from "react"
import axios from "axios"
import { useContext } from "react/cjs/react.development"
import UserContext from "./contexts/UserContext"
import HabitsContext from "./contexts/HabitsContext"
import NewHabitBox from "./NewHabitBox"
import HabitsFeed from "./HabitsFeed"

export default function Habits() {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const { habits, setHabits } = useContext(HabitsContext)

    const [createHabit, setCreatHabit] = useState(false)

    const config = {
        headers: {
            "Authorization": `Bearer ${currentUser.token}`
        }
    }

    useEffect(
        () => {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
            promise.then(response => {
                console.log(response)
                setHabits(response.data)
            })
            promise.catch(error => {
                console.log('erro: ', error.response)
                alert(error.data)
            })
        }, []
    )
    console.log('habitos: ', habits)
    return (
        <Trackit>
            <Top />
            <div className="habits">
                <div className="habits-header">
                    <h2>Meus  hábitos</h2>
                    <button onClick={() => setCreatHabit(!createHabit)} className="habits-header-btn">+</button>
                </div>
                {createHabit && <NewHabitBox toggleBox={setCreatHabit} />}

                <div className="habits-body" >
                    {
                        habits.length !== 0 ?
                            <HabitsFeed/> :
                            <p>
                                Você não tem nenhum hábito cadastrado ainda.
                                Adicione um hábito para começar a trackear!
                            </p>
                    }

                </div>
            </div>
            <Menu />
        </Trackit>
    )
}