import { createContext, useState } from "react"
export const AuthContext=createContext()

export default function AuthProvider({children}) {
    const [isAuthenticated,setisAuthenticated]=useState(false)
    const [username,setUsername]=useState(null)
    function loginFunction(username,password){
      if(username==="ronie"&&password==="123"){
        setisAuthenticated(true);
        setUsername(username)
        return true;
      }
      else{
        setisAuthenticated(false)
        setUsername(null)
        return false;
      }
    }

    function logoutFunction(){
      setisAuthenticated(false);
    }
  return (
    <AuthContext.Provider value={{isAuthenticated,loginFunction,logoutFunction,username}}>
        {children}
    </AuthContext.Provider>
  )
}

