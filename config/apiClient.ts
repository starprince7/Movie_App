import axios from "axios"


let apiConfig;
// Prevent localstorage from becoming undefined during server rendering.
if(typeof window !== "undefined") {
    apiConfig = axios.create({
        headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY
        }
    })
}

const apiClient = apiConfig

export default apiClient;