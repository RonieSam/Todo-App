import axios from "axios"

const apiClient=axios.create({
    baseURL:"http://localhost:8080/users"
})

export const getAllTasks=(username)=>{
    return apiClient.get(`${username}/todos`)
}