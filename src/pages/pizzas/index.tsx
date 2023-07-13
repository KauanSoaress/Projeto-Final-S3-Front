import {NavBar} from '../../components/NavBar'
import { PageTitle } from '../../components/PageTitle.tsx'
import { ProductCard } from '../../components/ProductCard.tsx'
import '../../styles/Menu.css'


export default function Pizzas () {
  let combosArray: string[][] = [
    ["true", "Combo1.svg", "1 pizza + refri 2L", "1 pizza de camarão e Coca-Cola 2L", "39,90"],
    ["true", "Combo2.svg", "2 pizzas salgadas", "1 pizza de calabresa e 1 pizza de camarão", "64,90"],
    ["true", "Combo3.svg", "1 pizza salgada + 1 doce", "1 pizza de calabresa e 1 pizza de chocolate", "49,90"],
  ];

  let pizzasSalgadasArray: string[][] = [
    ["true", "PizzaCogumelo.svg", "Pizza de Cogumelo", "Cogumelo, azeitonas, tomate, cebolinha", "34,90"],
    ["true", "PizzaCalabresa.svg", "Pizza de Calabresa", "Calabresa, mussarela", "34,90"],
    ["true", "PizzaCamarao.svg", "Pizza de Camarão", "Camarão, mussarela, milho", "34,90"],
  ];

  let pizzasDocesArray: string[][] = [
    ["true", "PizzaChocolate.svg", "Pizza de Chocolate", "Chocolate", "34,90"],
    ["true", "PizzaMEMs.svg", "Pizza de M&Ms", "Chocolate, M&M ’s", "34,90"],
  ];


  return (
    <>
      <NavBar isLogged={true} isManager={false} isSeller={false}/>
      <PageTitle>Promoções</PageTitle>
      {
        combosArray.map((element) => (
          <ProductCard 
            key={element[2]} 
            isPizzaOrCombo={Boolean(element[0])} 
            productImg={element[1]} 
            productName={element[2]} 
            productDescription={element[3]} 
            productPrice={element[4]} 
          />
        ))
      } 

      <PageTitle>Pizzas Salgadas</PageTitle>
      {
        pizzasSalgadasArray.map((element) => (
          <ProductCard 
            key={element[1]} 
            isPizzaOrCombo={true} 
            productImg={element[0]} 
            productName={element[1]} 
            productDescription={element[2]} 
            productPrice={element[3]} 
          />
        ))
      }  
      <PageTitle>Pizzas Doces</PageTitle>
      {
        pizzasDocesArray.map((element) => (
          <ProductCard 
            key={element[1]} 
            isPizzaOrCombo={true} 
            productImg={element[0]} 
            productName={element[1]} 
            productDescription={element[2]} 
            productPrice={element[3]} 
          />
        ))
      }  
      <br />
    </>
  )
}