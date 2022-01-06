import { useState } from "react"
import { HabitOutput, NewHabit, WeekDays } from "./style"

export default function NewHabitBox({toggleBox}) {
    const [weekDays, setWeekDays] = useState([
        { day: 'D', isSelected: false, id: 0 },
        { day: 'S', isSelected: false, id: 1 },
        { day: 'T', isSelected: false, id: 2 },
        { day: 'Q', isSelected: false, id: 3 },
        { day: 'Q', isSelected: false, id: 4 },
        { day: 'S', isSelected: false, id: 5 },
        { day: 'S', isSelected: false, id: 6 },
    ])
    function handleSelection(e) {
        
        const daySelected = weekDays.filter(item=> {
            if(item.id == e.target.lastChild.innerHTML){
                item.isSelected = !item.isSelected
                return (item)
            }
        })
        setWeekDays([...weekDays])

    }
    console.log('newWeek: ', weekDays )
    return (
        <>
            <NewHabit>
                <input placeholder="nome do hábito" ></input>
                <WeekDays>
                    {weekDays.map(item => {
                        return <button
                            key={item.id}
                            onClick={handleSelection}
                        >{item.day}
                            <span key={item.id} className="id">
                                {item.id}
                            </span>
                        </button>
                    })}
                </WeekDays>
                <HabitOutput>
                    <button onClick={()=>toggleBox(false)} className="cancel">Cancelar</button>
                    <button className="save" >Salvar</button>
                </HabitOutput>
            </NewHabit>
        </>
    )
}