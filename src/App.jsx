import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Habits from './Habits'
import Login from './Login'
import SignUp from './SignUp'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<SignUp />} />
                <Route path='/habitos' element={<Habits />} />
            </Routes>
        </BrowserRouter>
    )
}