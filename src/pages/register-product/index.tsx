import '../../styles/Forms.css'
import '../../styles/Forms2.css'

import {Inputs} from '../../components/Inputs.tsx'
import {Button} from '../../components/Button.tsx'
import BackHome from '../../components/BackHome.tsx'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { IProduct, ProductArray } from '../../service/arrays/ProductArray.ts'
import { IproductInicialState } from '../../types/common/IproductIniicialState.ts'
import { UserLogged } from '../../service/arrays/UserLogged.ts'
import { IUserRegister } from '../../types/models/IUserRegister.ts'

export default function RegisterProducts () {
  const Navigate=useNavigate();
  const [ProductToRegister, setProductToRegister]=useState<IProduct>(IproductInicialState);
  const ProductsArray: IProduct[]=ProductArray
  const userLogged = UserLogged;

  function handleChangeName(newName: string){
    const objectToSave: IProduct = {
      ...ProductToRegister,
    }
    objectToSave.name = newName

    setProductToRegister({
      ...objectToSave,
    })
  }

  function handleChangeType(newType: string){
    const objectToSave: IProduct = {
      ...ProductToRegister,
    }

    objectToSave.type = newType;

    setProductToRegister({
      ...objectToSave,
    })
  }

  function handleChangePrice(newPrice: string){
    const objectToSave: IProduct = {
      ...ProductToRegister,
    }

    objectToSave.price = newPrice;

    setProductToRegister({
      ...objectToSave,
    })
  }

  function handleChangeDescription(newDescription: string){
    const objectToSave: IProduct = {
      ...ProductToRegister,
    }

    objectToSave.description = newDescription;

    setProductToRegister({
      ...objectToSave,
    })
  }

  function handleChangeSeller(newSeller: IUserRegister){
    const objectToSave: IProduct = {
      ...ProductToRegister,
    }
    
    objectToSave.seller = newSeller;
    console.log(objectToSave);
    
    setProductToRegister({
      ...objectToSave,
    })
  }

  function handleSave(){
    handleChangeSeller(userLogged.UserLogged);
    ProductsArray.push(ProductToRegister);
    console.log(ProductsArray)
    Navigate('/products-list');
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
                  Registrar Produto
                </span>
                
                <Inputs name="Nome" isPassword={false} handleChange={handleChangeName}/>

                <Inputs name="Descrição" isPassword={false} handleChange={handleChangeDescription}/>

                <Inputs name="Valor" isPassword={false} handleChange={handleChangePrice}/>

                <Inputs name="Tipo" isPassword={false} handleChange={handleChangeType}/>

                <Button onClick={handleSave}>Cadastrar</Button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}