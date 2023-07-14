import {NavBar} from '../../components/NavBar'
import { PageTitle } from '../../components/PageTitle.tsx'
import '../../styles/Menu.css'
import { ProductArray } from '../../service/arrays/ProductArray.ts'
import { ProductCard } from '../../components/ProductCard.tsx';

export default function Home () {

  const productsArray = ProductArray;

  return (
    <>
      <NavBar />
      <PageTitle>Produtos</PageTitle>
      {
        productsArray.map((element) => (
          <ProductCard 
            key={element.name} 
            isPizzaOrCombo={false}
            productImg={"PizzaCalabresa.svg"} 
            productName={element.name} 
            productDescription={element.description} 
            productPrice={element.price} 
          />
        ))
      } 
    </>
  )
}