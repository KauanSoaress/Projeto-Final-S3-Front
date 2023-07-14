import { IUserInitialState } from "../../types/common/IUserInitialState";
import { IUserRegister } from "../../types/models/IUserRegister";
interface IUserLogged {
  UserLogged: IUserRegister;
}
export const UserLogged: IUserLogged = {
  UserLogged: IUserInitialState
};