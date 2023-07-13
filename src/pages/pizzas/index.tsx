import {NavBar} from '../../components/NavBar'
import { PageTitle } from '../../components/PageTitle.tsx'
import { ProductCard } from '../../components/ProductCard.tsx'
import '../../styles/Menu.css'


export default function Pizzas () {
  return (
    <>
      <NavBar isLogged={false}/>
      <PageTitle>Promoções</PageTitle>
      <ProductCard isPizzaOrCombo={true} productImg="Combo1.svg" productName="1 pizza + refri 2L" productDescription="1 pizza de camarão e Coca-Cola 2L " productPrice="39,90" />
      <ProductCard isPizzaOrCombo={true} productImg="Combo2.svg" productName="2 pizzas salgadas" productDescription="1 pizza de calabresa e 1 pizza de camarão" productPrice="64,90" />
      <ProductCard isPizzaOrCombo={true} productImg="Combo3.svg" productName="1 pizza salgada + 1 doce" productDescription="1 pizza de calabresa e 1 pizza de chocolate" productPrice="49,90" />

      <PageTitle>Pizzas Salgadas</PageTitle>
      <ProductCard isPizzaOrCombo={true} productImg="PizzaCogumelo.svg" productName="Pizza de Cogumelo" productDescription="Cogumelo, azeitonas, tomate, cebolinha" productPrice="34,90" />
      <ProductCard isPizzaOrCombo={true} productImg="PizzaCalabresa.svg" productName="Pizza de Calabresa" productDescription="Calabresa, mussarela" productPrice="34,90" />
      <ProductCard isPizzaOrCombo={true} productImg="PizzaCamarao.svg" productName="Pizza de Camarão" productDescription="Camarão, mussarela, milho" productPrice="34,90" />
      
      <PageTitle>Pizzas Doces</PageTitle>
      <ProductCard isPizzaOrCombo={true} productImg="PizzaChocolate.svg" productName="Pizza de Chocolate" productDescription="Chocolate" productPrice="34,90" />
      <ProductCard isPizzaOrCombo={true} productImg="PizzaMEMs.svg" productName="Pizza de M&Ms" productDescription="Chocolate, M&M ’s" productPrice="34,90" />

      <br />
    </>
  )
}