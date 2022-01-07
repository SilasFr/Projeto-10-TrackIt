import { useContext } from "react"
import HabitsContext from "./contexts/HabitsContext"
import { Feed, Habit } from "./style"
import Trash from "./Trash"

export default function HabitsFeed() {
    const { habits, setHabits } = useContext(HabitsContext)
    const weekDays = [
        { day: 'D', id: 0 },
        { day: 'S', id: 1 },
        { day: 'T', id: 2 },
        { day: 'Q', id: 3 },
        { day: 'Q', id: 4 },
        { day: 'S', id: 5 },
        { day: 'S', id: 6 },
    ]

    function handleHabitDays(targetHabit) {
        return (
            weekDays.map(weekday => {
                const contain = targetHabit.filter(item => weekday.id === item)
                return (
                    <button
                        className={contain[0] === weekday.id ? 'selected' : ''}
                        key={weekday.id}
                        disabled
                    >
                        {weekday.day}
                    </button>
                )
            })
        )
    }
    console.log(habits)
    return (
        <Feed>
            {habits.map(habit => {
                return (
                    <Habit key={habit.id}>

                        <Trash id={habit.id} />
                        <p className="name">{habit.name}</p>
                        <div className="days">
                            {handleHabitDays(habit.days)}
                        </div>
                    </Habit>
                )
            })}
        </Feed>
    )
}