import { AuthContext } from './AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext } from 'react'



function AuthenticatedRoute({children}) {
    const navigate=useNavigate()
    const authContext=useContext(AuthContext)
    if(authContext.isAuthenticated){
        return children
    }else{
        return <Navigate to='/'/>
    }
}

export default AuthenticatedRoute