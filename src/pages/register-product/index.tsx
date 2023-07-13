import '../../styles/Forms.css'
import '../../styles/Forms2.css'

import {Inputs} from '../../components/Inputs.tsx'
import {Button} from '../../components/Button.tsx'
import BackHome from '../../components/BackHome.tsx'

export default function RegisterProducts () {
  return (
    <>
      <BackHome />

      <div className="container">
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-26">
                  Registrar Produto
                </span>
                
                <Inputs name="Nome" isPassword={false}/>

                <Inputs name="Descrição" isPassword={false}/>

                <Inputs name="Valor" isPassword={false}/>

                <Inputs name="Tipo" isPassword={false}/>

                <Button>Cadastrar</Button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}