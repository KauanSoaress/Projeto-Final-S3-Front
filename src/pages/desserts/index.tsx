import {NavBar} from '../../components/NavBar'
import { PageTitle } from '../../components/PageTitle.tsx'
import '../../styles/Menu.css'
import { ProductCard } from '../../components/ProductCard.tsx'


export default function Desserts () {
  return (
    <>
      <NavBar isLogged={false}/>
      <PageTitle>Sobremesas</PageTitle>

      <ProductCard isPizzaOrCombo={false} productImg="MilkshakeChocolate.svg" productName="Milkshake de Chocolate" productDescription="Delicioso milkshake de chocolate com chantilly e calda" productPrice="15,90" />
      <ProductCard isPizzaOrCombo={false} productImg="MilkshakeBaunilha.svg" productName="Milkshake de Baunilha" productDescription="Delicioso milkshake de baunilha com chantilly e calda" productPrice="15,90" />
      <ProductCard isPizzaOrCombo={false} productImg="Brownie.svg" productName="Brownie" productDescription="Delicioso brownie com recheio de chocolate" productPrice="5,90" />
    
      <br />
    </>   
  ) 
}