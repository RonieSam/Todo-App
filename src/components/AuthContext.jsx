import { createContext, useState } from "react"
import { basicAuthenticationProvider } from "./api/TodoRest"
import { apiClient } from "./api/ApiClient"
export const AuthContext=createContext()

export default function AuthProvider({children}) {
    const [isAuthenticated,setisAuthenticated]=useState(false)
    const [username,setUsername]=useState(null)
    const [token,setBaToken]=useState(null)
    // function loginFunction(username,password){
    //   if(username==="ronie"&&password==="123"){
    //     setisAuthenticated(true);
    //     setUsername(username)
    //     return true;
    //   }
    //   else{
    //     setisAuthenticated(false)
    //     setUsername(null)
    //     return false;
    //   }
    // }
    async function loginFunction(username,password){
      const baToken='Basic '+window.btoa(username+':'+password)
      try{
        const response=await basicAuthenticationProvider(baToken)
      if(response.status==200){
        console.log(response.data)
        setisAuthenticated(true)
        setBaToken(baToken)
        apiClient.interceptors.request.use((config)=>{
          config.headers.Authorization=baToken
          return config
        })
        setUsername(username)
        return true
      }
      else {
        setisAuthenticated(false)
        setUsername(null)
        return false;
      }
    }
    catch(err){
        console.log(err)
    }
    }

    function logoutFunction(){
      setisAuthenticated(false);
      setUsername(null)
      
      setBaToken(null)
      
    }
  return (
    <AuthContext.Provider value={{isAuthenticated,loginFunction,logoutFunction,username,token}}>
        {children}
    </AuthContext.Provider>
  )
}

