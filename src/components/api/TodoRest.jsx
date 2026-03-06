import axios from "axios"

const apiClient=axios.create({
    baseURL:"http://localhost:8080"
})

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