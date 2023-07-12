import React from "react";
import { IUserRegister } from "../../../types/models";

type IUserRegisterContext = {
    handleSave(): void;
    handleChangeName(newName: string): void;
    handleChangeCPF(newCPF: string): void;
    handleChangePassword(newPassword: string): void;
    handleChangeConfirmPassword(newConfirmPassword: string): void;
    userToRegister: IUserRegister;
}

export const UserRegisterContext = React.createContext({} as IUserRegisterContext);