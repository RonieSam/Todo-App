import { createContext, useState } from "react"
export const AuthContext=createContext()

export default function AuthProvider({children}) {
    const [isAuthenticated,setisAuthenticated]=useState(false)

    function loginFunction(username,password){
      if(username==="ronie"&&password==="123"){
        setisAuthenticated(true);
        return true;
      }
      else{
        setisAuthenticated(false)
        return false;
      }
    }

    function logoutFunction(){
      setisAuthenticated(false);
    }
  return (
    <AuthContext.Provider value={{isAuthenticated,loginFunction,logoutFunction}}>
        {children}
    </AuthContext.Provider>
  )
}

