import {httpClient} from "../http";
import {IUserRegister, IUserAuth} from "../../types/models";
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

    authenticate: async (credentials: IUserAuth)=> {
        const response: AxiosResponse<IUserAuth> = await httpClient.post(
        `${resourceURL}/authenticate`,
        {...credentials}
        )
        return response.data;
    }

})