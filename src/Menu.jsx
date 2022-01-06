import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="menu">
            <Link to={'/habitos'} >
                <p className="menu-item">Hábitos</p>
            </Link>
            
            <div className="menu-center">
                <Link to={'/hoje'} >
                    <div className="menu-center-item">Hoje</div>
                </Link>
            </div>

            <Link to={'/historico'} >
                <p className="menu-item">Histórico</p>
            </Link>
        </div>
    )
}