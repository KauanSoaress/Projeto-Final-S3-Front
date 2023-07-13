import {NavBar} from '../../components/NavBar'
import { PageTitle } from '../../components/PageTitle.tsx'
import { ProductCard } from '../../components/ProductCard.tsx'
import '../../styles/Menu.css'


export default function Drinks () {
  return (
    <>
      <NavBar isLogged={false}/>
      <PageTitle>Bebidas</PageTitle>

      <ProductCard isPizzaOrCombo={false} productImg="Pepsi.svg" productName="Pepsi 2L" productDescription="Refrigerante geladinho de 2L" productPrice="13,90" />
      <ProductCard isPizzaOrCombo={false} productImg="Coca.svg" productName="Coca 2L" productDescription="Refrigerante geladinho de 2L" productPrice="14,90" />
      <ProductCard isPizzaOrCombo={false} productImg="Guarana.svg" productName="Guarana 2L" productDescription="Refrigerante geladinho de 2L" productPrice="13,90" />
    
      <br />
    </>
  )
}