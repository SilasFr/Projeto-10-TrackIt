import axios from "axios"
import { useState } from "react"
import { useContext } from "react/cjs/react.development"
import HabitsContext from "./contexts/HabitsContext"
import UserContext from "./contexts/UserContext"
import { HabitOutput, LoaderApp, NewHabit, WeekDays } from "./style"

export default function NewHabitBox({ toggleBox }) {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const {habits, setHabits} = useContext(HabitsContext)
    const [weekDays, setWeekDays] = useState([
        { day: 'D', isSelected: false, id: 0 },
        { day: 'S', isSelected: false, id: 1 },
        { day: 'T', isSelected: false, id: 2 },
        { day: 'Q', isSelected: false, id: 3 },
        { day: 'Q', isSelected: false, id: 4 },
        { day: 'S', isSelected: false, id: 5 },
        { day: 'S', isSelected: false, id: 6 },
    ])
    const [newHabit, setNewHabit] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function handleNewHabit() {
        setIsLoading(true)
        const daysId = weekDays.filter(item => item.isSelected === true)
        const body = {
            name: newHabit,
            days: [...daysId.map(item => item.id)]
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${currentUser.token}`
            }
        }

        console.log(config)
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
        promise.then(response => {
            console.log('deu certo: ', response.data)
            setHabits([...habits, response.data])
            setIsLoading(false)
            toggleBox(false)
        })

        promise.catch(error => {
            console.log('deu erro: ', error.response)
            setIsLoading(false)
            alert('Erro: ', error.response.data)
        })
    }

    function handleSelection(e) {
        const daySelected = weekDays.filter(item => {
            if (item.id == e.target.lastChild.innerHTML) {
                item.isSelected = !item.isSelected
                return (item)
            }
        })
        setWeekDays([...weekDays])
    }
    return (
        <>
            <NewHabit>
                <input
                    type='text'
                    value={newHabit}
                    onChange={e => setNewHabit(e.target.value)}
                    placeholder="nome do hábito" 
                    disabled = {isLoading}
                    name="habito">
                </input>
                <WeekDays>
                    {weekDays.map(item => {
                        return <button
                            key={item.id}
                            onClick={handleSelection}
                            className={item.isSelected ? 'selected' : 'default'}
                        >{item.day}
                            <span key={item.id} className="id">
                                {item.id}
                            </span>
                        </button>
                    })}
                </WeekDays>
                <HabitOutput>
                    <button
                        onClick={() => toggleBox(false)}
                        className="cancel">
                        Cancelar
                    </button>

                    <button
                        onClick={handleNewHabit}
                        className="save" >
                        {isLoading ? <LoaderApp /> : `Salvar`}
                    </button>
                </HabitOutput>
            </NewHabit>
        </>
    )
}