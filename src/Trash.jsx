import axios from "axios";
import React from "react";
import { useContext, useEffect } from "react/cjs/react.development";
import HabitsContext from "./contexts/HabitsContext";
import UserContext from "./contexts/UserContext";
import { TrashCan } from "./style";

export default function Trash({ id }) {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const {habits, setHabits} = useContext(HabitsContext)
    function handleDeletion() {
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${currentUser.token}`
                },
                data: ''
            })

        promise.then(response=>{
            const newHabits = habits.filter(item=> item.id !== id)
            setHabits(newHabits)
        })

        promise.catch(error=>{
            alert('Erro: ', error.response.data)
        })
    }
    return (
        <TrashCan onClick={handleDeletion}>
            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 5.5C4.13261 5.5 4.25979 5.55268 4.35355 5.64645C4.44732 5.74021 4.5 5.86739 4.5 6V12C4.5 12.1326 4.44732 12.2598 4.35355 12.3536C4.25979 12.4473 4.13261 12.5 4 12.5C3.86739 12.5 3.74021 12.4473 3.64645 12.3536C3.55268 12.2598 3.5 12.1326 3.5 12V6C3.5 5.86739 3.55268 5.74021 3.64645 5.64645C3.74021 5.55268 3.86739 5.5 4 5.5ZM6.5 5.5C6.63261 5.5 6.75979 5.55268 6.85355 5.64645C6.94732 5.74021 7 5.86739 7 6V12C7 12.1326 6.94732 12.2598 6.85355 12.3536C6.75979 12.4473 6.63261 12.5 6.5 12.5C6.36739 12.5 6.24021 12.4473 6.14645 12.3536C6.05268 12.2598 6 12.1326 6 12V6C6 5.86739 6.05268 5.74021 6.14645 5.64645C6.24021 5.55268 6.36739 5.5 6.5 5.5ZM9.5 6C9.5 5.86739 9.44732 5.74021 9.35355 5.64645C9.25979 5.55268 9.13261 5.5 9 5.5C8.86739 5.5 8.74021 5.55268 8.64645 5.64645C8.55268 5.74021 8.5 5.86739 8.5 6V12C8.5 12.1326 8.55268 12.2598 8.64645 12.3536C8.74021 12.4473 8.86739 12.5 9 12.5C9.13261 12.5 9.25979 12.4473 9.35355 12.3536C9.44732 12.2598 9.5 12.1326 9.5 12V6Z" fill="#666666" />
                <path fillRule="evenodd" clipRule="evenodd" d="M13 3C13 3.26522 12.8946 3.51957 12.7071 3.70711C12.5196 3.89464 12.2652 4 12 4H11.5V13C11.5 13.5304 11.2893 14.0391 10.9142 14.4142C10.5391 14.7893 10.0304 15 9.5 15H3.5C2.96957 15 2.46086 14.7893 2.08579 14.4142C1.71071 14.0391 1.5 13.5304 1.5 13V4H1C0.734784 4 0.48043 3.89464 0.292893 3.70711C0.105357 3.51957 0 3.26522 0 3V2C0 1.73478 0.105357 1.48043 0.292893 1.29289C0.48043 1.10536 0.734784 1 1 1H4.5C4.5 0.734784 4.60536 0.48043 4.79289 0.292893C4.98043 0.105357 5.23478 0 5.5 0L7.5 0C7.76522 0 8.01957 0.105357 8.20711 0.292893C8.39464 0.48043 8.5 0.734784 8.5 1H12C12.2652 1 12.5196 1.10536 12.7071 1.29289C12.8946 1.48043 13 1.73478 13 2V3ZM2.618 4L2.5 4.059V13C2.5 13.2652 2.60536 13.5196 2.79289 13.7071C2.98043 13.8946 3.23478 14 3.5 14H9.5C9.76522 14 10.0196 13.8946 10.2071 13.7071C10.3946 13.5196 10.5 13.2652 10.5 13V4.059L10.382 4H2.618ZM1 3V2H12V3H1Z" fill="#666666" />
            </svg>
        </TrashCan>
    )
}