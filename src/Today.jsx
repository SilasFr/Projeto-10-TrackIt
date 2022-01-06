import axios from "axios"
import { useEffect } from "react"
import Top from "./TopBar"
import { LoaderApp, LoaderComponent, Trackit } from "./style"
import Menu from "./Menu"
import Loader from "react-loader-spinner"

export default function Today({ currentUser }) {

    // useEffect(
    //     () => {
    //         const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today')
    //     }
    // )
    // console.log(currentUser)
    return (
        <Trackit>
            {/* <Top userImg={currentUser.image}/> */}
            <div className="today">
                <div className="today-header">
                    <h2>Dia de hoje, datda de hoje</h2>
                    {/* <button className="today-header-btn">
                        <LoaderApp />

                    </button> */}
                    <p>
                        Porcentagem de progresso.
                    </p>
                </div>
                <p className="today-body" >Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!
                </p>
            </div>
            <Menu></Menu>
        </Trackit>
    )
}