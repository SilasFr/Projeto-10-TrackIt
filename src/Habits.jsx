import { Trackit } from "./style"
import Menu from "./Menu"
import Top from "./TopBar"

export default function Habits() {
    return (
        <Trackit>
            <Top />
            <div className="habits">
                <div className="habits-header">
                    <h2>Meus hábitos</h2>
                    <button className="habits-header-btn">+</button>
                </div>
                <p className="habits-body" >Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!
                </p>
            </div>
            <Menu />
        </Trackit>
    )
}