interface IUser {
    name: string,
    cpf: string,
    password: string,
    role: string,
}

export const UserArray: IUser[] = [
    {
        name: "admin",
        cpf: "123",
        password: "123",
        role: "GERENTE",
    }
];