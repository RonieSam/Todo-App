import axios from "axios";


const apiClient=axios.create({
    baseURL:"http://localhost:8080"
}
    )
export  function retrieveHelloWorld(){
    return apiClient.get("/hello");
}
export function retrieveHelloWorldName(name){
    return apiClient.get(`/hello/${name}`);
}