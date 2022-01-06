import { useContext } from "react"
import HabitsContext from "./contexts/HabitsContext"

export default function HabitsFeed() {
    const { habits, setHabits } = useContext(HabitsContext)

    return (
        <>
            {habits.map(habit => {
                return (
                    <div key={habit.id} className="habits-body-habit">
                        <h2 className="habits-body-habit-name">{habit.name}</h2>
                        {habit.days.map(day => {
                            return (
                                <button key={day} > {day} </button>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}