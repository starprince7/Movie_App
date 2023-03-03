import axios from "axios"


let apiConfig;
// Prevent localstorage from becoming undefined during server rendering.
if(typeof window !== "undefined") {
    apiConfig = axios.create({
        headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY
        },
        params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY
        },
        baseURL: "https://api.themoviedb.org/3"
    })
}

const tmdb = apiConfig
export default tmdb;