import React from "react";

type IUserRegisterContext = {
    handleSave(): void;
}

export const UserRegisterContext = React.createContext({} as IUserRegisterContext);