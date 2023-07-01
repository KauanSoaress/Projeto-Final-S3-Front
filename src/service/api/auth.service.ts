import {httpClient} from "../http";
import {IUserRegister} from "../../types/models";
import {AxiosResponse} from "axios";


const resourceURL = "/api/auth";

export const useAuthService = () => ({
    register: async (user: IUserRegister) => {
        const response: AxiosResponse<IUserRegister> = await httpClient.post(
        `${resourceURL}/register`,
        {...user}
        )
        return response.data;
    },



})