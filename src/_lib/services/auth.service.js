import { axiosHandler } from "../axiosHandler";

export const login = async (paylod) => {
    try {
        let data = JSON.stringify(paylod);

        const response = await axiosHandler.post("/auth/login", data);
        return response
    } catch (error) {
        return Promise.reject(error);
    }
}