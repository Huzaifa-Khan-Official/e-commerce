import axios from "axios";

export const axiosHandler = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {
        "Content-Type": "application/json"
    }
})

axiosHandler.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

axiosHandler.interceptors.response.use(
    (response) => {
        return response.data
    },
    (err) => {
        if (err.response.status === 400) {
            const err = "Bad Request";
            return err
        }
        return Promise.reject(err)
    }
)