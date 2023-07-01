import Axios, {AxiosInstance} from "axios";

export const httpClient: AxiosInstance = Axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})