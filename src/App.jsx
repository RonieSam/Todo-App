
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Welcome from './components/Welcome'
import Error from './components/Error'
import Todo from './components/Todo'
import Navbar from './components/Navbar'
import Logout from './components/Logout'
import AuthContext from './components/AuthContext'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import ServerOffline from './components/ServerOffline'

function App() {
  return (
    <div>
    <AuthContext>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/welcome/:username' element={ <AuthenticatedRoute><Welcome/></AuthenticatedRoute>}/>
      <Route path='/logout' element={ <Logout/>}/>
      <Route path='/todo' element={<AuthenticatedRoute><Todo/></AuthenticatedRoute>}/>
      <Route path='/*' element={<Error/>}/>
      <Route path="offline" element={<ServerOffline/>}/>
    </Routes>
    </BrowserRouter>
    </AuthContext>
    </div>
  )
}

export default App
