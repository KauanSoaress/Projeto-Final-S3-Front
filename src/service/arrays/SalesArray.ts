import { IProduct } from './ProductArray';
import { IUserRegister } from '../../types/models';

interface Sales {
  date: string;
  products: IProduct[];
  sellers: IUserRegister[];
}

export const SalesArray: Sales[] = [];