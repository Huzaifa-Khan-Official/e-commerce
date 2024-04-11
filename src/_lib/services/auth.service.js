import { axiosHandler } from "../axiosHandler";

export const login = async (paylod) => {
    try {
        let data = JSON.stringify(paylod);

        const response = await axiosHandler.post("/auth/login", data);
        if (response !== "Bad Request") {
            return response
        } else {
            throw "Bad Request"
        }
    } catch (error) {
        return Promise.reject(error);
    }
}