

import {apiClient} from "./ApiClient"

export  function retrieveHelloWorld(){
    return apiClient.get("/hello");
}
export function retrieveHelloWorldName(name){
    return apiClient.get(`/hello/${name}`);
}