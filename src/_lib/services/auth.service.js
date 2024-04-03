import axios from "axios"

export const login = async (paylod) => {
    try {
        let data = JSON.stringify(paylod);

        console.log("data ==>", data);
        const response = await axios.post(
                "https://dummyjson.com/auth/login",
                data
        )

        return response
    } catch (error) {
        return Promise.reject(error);
    }
}