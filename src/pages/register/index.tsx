import '../../styles/Forms.css'
import '../../styles/Forms2.css'

import {Inputs} from '../../components/Inputs.tsx'
import {Button} from '../../components/Button.tsx'
import BackHome from '../../components/BackHome.tsx'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {IUserRegister} from "../../types/models";
import {UserArray} from "../../service/arrays/UserArray.ts";
import {IUserInitialState} from "../../types/common/IUserInitialState.ts";

export default function Register () {

  const navigate = useNavigate();

  const [userToRegister, setUserToRegister] = useState<IUserRegister>(IUserInitialState);

  const UsersArray: IUserRegister[] = UserArray;

  function handleChangeName(newName: string){
    const objectToSave: IUserRegister = {
      ...userToRegister,
    }
    objectToSave.name = newName

    setUserToRegister({
      ...objectToSave,
    })
  }

  function handleChangeCPF(newCPF: string){
    const objectToSave: IUserRegister = {
      ...userToRegister,
    }

    objectToSave.cpf = newCPF;

    setUserToRegister({
      ...objectToSave,
    })
  }

  function handleChangePassword(newPassword: string){
    const objectToSave: IUserRegister = {
      ...userToRegister,
    }

    objectToSave.password = newPassword;

    setUserToRegister({
      ...objectToSave,
    })
  }

  function handleChangeConfirmPassword(newConfirmPassword: string){
    const objectToSave: IUserRegister = {
      ...userToRegister,
    }

    objectToSave.confirmPassword = newConfirmPassword;

    setUserToRegister({
      ...objectToSave,
    })
  }

  function handleSave(){
    UsersArray.push(userToRegister);
    navigate('/home');
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
                  Cadastre-se
                </span>
                
                <Inputs name="Nome" isPassword={false} handleChange={handleChangeName}/>

                <Inputs name="CPF" isPassword={false} handleChange={handleChangeCPF}/>

                <Inputs name="Senha" isPassword={true} handleChange={handleChangePassword}/>

                <Inputs name="Confirme sua senha" isPassword={true} handleChange={handleChangeConfirmPassword}/>

                <Button onClick={handleSave}>Cadastrar</Button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}