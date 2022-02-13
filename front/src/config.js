import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://passion-timer.herokuapp.com/"
})