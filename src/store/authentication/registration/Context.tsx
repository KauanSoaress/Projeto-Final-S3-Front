import React from "react";

type IUserRegisterContext = {
    handleSave(): void;
    handleChangeName:(newName: string) => void;
    handleChangeCPF:(newCPF: string) => void;
    handleChangePassword:(newPassword: string) => void;
    handleChangeConfirmPassword:(newConfirmPassword: string) => void;
}

export const UserRegisterContext = React.createContext({} as IUserRegisterContext);