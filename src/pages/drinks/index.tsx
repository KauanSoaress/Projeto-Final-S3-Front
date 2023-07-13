import {NavBar} from '../../components/NavBar'
import { PageTitle } from '../../components/PageTitle.tsx'
import { ProductCard } from '../../components/ProductCard.tsx'
import '../../styles/Menu.css'


export default function Drinks () {
  let drinksArray: string[][] = [
    ["Pepsi.svg", "Pepsi 2L", "Refrigerante geladinho de 2L", "13.90"],
    ["Coca.svg", "Coca 2L", "Refrigerante geladinho de 2L", "14.90"],
    ["Guarana.svg", "Guarana 2L", "Refrigerante geladinho de 2L", "13.90"],
  ];

  return (
    <>
      <NavBar isLogged={false}/>
      <PageTitle>Bebidas</PageTitle>

      {
        drinksArray.map((element) => (
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