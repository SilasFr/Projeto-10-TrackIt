import { useContext } from "react"
import { useState } from "react/cjs/react.development"
import HabitsContext from "./contexts/HabitsContext"

export default function HabitsFeed() {
    const { habits, setHabits } = useContext(HabitsContext)
    const [weekDays, setWeekDays] = useState([
        { day: 'D', isSelected: false, id: 0 },
        { day: 'S', isSelected: false, id: 1 },
        { day: 'T', isSelected: false, id: 2 },
        { day: 'Q', isSelected: false, id: 3 },
        { day: 'Q', isSelected: false, id: 4 },
        { day: 'S', isSelected: false, id: 5 },
        { day: 'S', isSelected: false, id: 6 },
    ])

    function handleHabitDays(targetHabit) {
        return (
            weekDays.map(weekday => {
                const contain = targetHabit.filter(item=> weekday.id === item )
                console.log('contain : ', contain)
                console.log('weekday: ', weekday.id)
                return (
                    <button
                        className={ contain[0] === weekday.id? 'selected' : '' }
                        key={weekday.id}
                        disabled
                    >
                        {weekday.day}
                    </button>
                )
            })
        )
    }

    return (
        <>
            {habits.map(habit => {
                return (
                    <div key={habit.id} className="habits-body-habit">
                        <h2 className="habits-body-habit-name">{habit.name}</h2>
                        { handleHabitDays(habit.days) }
                    </div>
                )
            })}
        </>
    )
}


// const teste = habit.days.map(day => {
//     return (
//         <button key={day} > {day} </button>
//     )
// })