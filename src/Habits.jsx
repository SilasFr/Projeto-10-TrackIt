import Menu from "./Menu"
import Top from "./TopBar"

export default function Habits() {
    return (
        <>
            <Top />
            <h1>Meus hábitos</h1>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            <Menu />
        </>
    )
}