import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Habits from './Habits'
import Login from './Login'
import SignUp from './SignUp'
import Today from './Today'

export default function App() {
    const [currentUser, setCurrentUser] = useState()
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login setCurrentUser={setCurrentUser} />} />
                <Route path='/cadastro' element={<SignUp />} />
                <Route path='/habitos' element={<Habits currentUser={currentUser}/>} />
                <Route path='/hoje' element={<Today currentUser={currentUser} />} />
            </Routes>
        </BrowserRouter>
    )
}