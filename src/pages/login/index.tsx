import '../../styles/Forms.css'
import '../../styles/Forms2.css'
import {Inputs} from '../../components/Inputs.tsx'
import {Link} from 'react-router-dom'
import { Button } from '../../components/Button.tsx'
import {UserArray} from "../../service/arrays/UserArray.ts";
import BackHome from '../../components/BackHome.tsx'
import {IAuthInitialState} from "../../types/common/IAuthInitialState.ts";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {IUserAuth, IUserRegister} from "../../types/models";
import {UserLogged} from "../../service/arrays/UserLogged.ts";

export default function Login() {

  const navigate = useNavigate();

  const [userToAuth, setUserToAuth] = useState<IUserAuth>(IAuthInitialState);

  let userLogged = UserLogged;

  const UsersArray: IUserRegister[] = UserArray;

  function handleChangeCPF(newCPF: string){
    const objectToSave: IUserAuth = {
      ...userToAuth,
    }

    objectToSave.cpf = newCPF;

    setUserToAuth({
      ...objectToSave,
    })
  }

  function handleChangePassword(newPassword: string){
    const objectToSave: IUserAuth = {
      ...userToAuth,
    }

    objectToSave.password = newPassword;

    setUserToAuth({
      ...objectToSave,
    })
  }

  function handleAuth(){
    const userLogin = UsersArray.find(user => user.cpf == userToAuth.cpf && user.password == userToAuth.password)

    if (userLogin != undefined) {
      userLogged = userLogin;      
      navigate('/home');
    } else {
      navigate('/login');
    }
  }

  return (
    <>
      <BackHome />

      <div className="container">
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-26">
                  Faça seu login
                </span>

                <Inputs name="CPF" isPassword={false} handleChange={handleChangeCPF}/>

                <Inputs name="Senha" isPassword={true} handleChange={handleChangePassword}/>

                <Button onClick={handleAuth}>Fazer Login</Button>

                <div className="text-center p-t-50">
                  <span className="txt1">
                    Ainda não tem conta? &nbsp;
                  </span>

                  <Link className="txt2" to="/register">
                    Crie a sua
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}