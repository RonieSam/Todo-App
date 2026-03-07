import {apiClient} from "./ApiClient"

export const getAllTasks=(username)=>{
    return apiClient.get(`users/${username}/todos`)
}

export const deleteTask=(username,id)=>{
    return apiClient.delete(`users/${username}/todos/${id}`)
}

export const updateTask=(task)=>{
    return apiClient.put(`users/${task.username}/todos/${task.id}`,task)
}

export const addTask=(task)=>{
    return apiClient.post(`users/${task.username}/todos`,task)
}

export const checkOnline=()=>{
    return apiClient.get(`/health`)
}

export const basicAuthenticationProvider=(token)=>{
    return apiClient.get("/basicauth",{
        headers:{
            Authorization:token
        }
    })
}

