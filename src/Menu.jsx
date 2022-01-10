import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import HabitsContext from "./contexts/HabitsContext";

export default function Menu() {
    const {percentage, setPercentage} = useContext(HabitsContext)

    return (
        <div className="menu">
            <Link to={'/habitos'} >
                <p className="menu-item">Hábitos</p>
            </Link>

            <div className="menu-center">
                <Link to={'/hoje'} >
                    <div className="menu-center-item">
                        <CircularProgressbar
                            value={60}
                            text={'Hoje'}
                            background={true}
                            styles={{
                                root: {},
                                path: {
                                    stroke: `#fff`,
                                    strokeLinecap: 'round',
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    transformOrigin: 'center center',
                                },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'butt',
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                text: {
                                    fill: '#fff',
                                    fontSize: '20px',
                                },
                                background: {
                                    fill: '#52B6FF',
                                },
                            }} />
                    </div>
                </Link>
            </div>

            <Link to={'/historico'} >
                <p className="menu-item">Histórico</p>
            </Link>
        </div>
    )
}