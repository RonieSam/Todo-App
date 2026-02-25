
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './components/login'
import Welcome from './components/Welcome'
import Error from './components/Error'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/welcome/:username' element={ <Welcome/>}/>
      <Route path='/' element={<>To Do App</>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
