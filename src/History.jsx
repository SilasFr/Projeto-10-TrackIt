import Menu from "./Menu";
import { Trackit } from "./style";
import Top from "./TopBar";

export default function History() {
    return (
        <Trackit>
            <Top />
            <div className="history">
                <h2>Historico</h2>

                <div className="history-body">
                    <p>
                        Em breve você poderá ver
                        o histórico dos seus hábitos aqui!
                    </p>
                </div>
            </div>
            <Menu />

        </Trackit>
    )
}