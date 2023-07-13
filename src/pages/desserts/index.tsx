import {NavBar} from '../../components/NavBar'
import { PageTitle } from '../../components/PageTitle.tsx'
import '../../styles/Menu.css'
import { ProductCard } from '../../components/ProductCard.tsx'


export default function Desserts () {
  let dessertsArray: string[][] = [
    ["MilkshakeChocolate.svg", "Milkshake de Chocolate", "elicioso milkshake de chocolate com chantilly e calda", "15,90"],
    ["MilkshakeBaunilha.svg", "Milkshake de Baunilha", "Delicioso milkshake de baunilha com chantilly e calda", "15,90"],
    ["Brownie.svg", "Brownie", "Delicioso brownie com recheio de chocolate", "5,90"],
  ];
  return (
    <>
      <NavBar />
      <PageTitle>Sobremesas</PageTitle>

      {
        dessertsArray.map((element) => (
          <ProductCard 
            key={element[1]} 
            isPizzaOrCombo={false} 
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