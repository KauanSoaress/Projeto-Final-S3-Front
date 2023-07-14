import { IUserRegister } from "../../types/models";

export interface IProduct {
    name: string,
    type: string,
    price: string,
    description: string,
    seller: IUserRegister, 
}

export const ProductArray: IProduct[] = [];