import axios from "axios";

const axiosHandler = axios.create({
    baseURL: "https://dummyjson.com"
})

axiosHandler.interceptors.request.use()