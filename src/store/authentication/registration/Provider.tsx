import {PropsWithChildren, useMemo, useState} from "react";
import { UserRegisterContext } from "./Context";
import {useNavigate} from "react-router-dom";
import {useAuthService} from "../../../service/api/auth.service.ts";
import {IUserRegister} from "../../../types/models";
import {userRegisterInitialState} from "./types.ts";

import { toast } from "react-toastify";

const UserRegistrationProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const api = useAuthService();
    const navigate = useNavigate();

    const [userToRegister, setUserToRegister] = useState<IUserRegister>(userRegisterInitialState);
    function handleSave(){
        api.register(userToRegister)
            .then(() => {
                toast.success("Cadastro finalizado com sucesso");
            })
        .finally(() => {
            navigate("/home")
        })
    }

    const context = useMemo(() => ({
        handleSave,
    }),[]);
    return (
        <UserRegisterContext.Provider value={context} >
            {children}
        </UserRegisterContext.Provider>
    );
}