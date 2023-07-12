import NavBar from '../../components/NavBar'
import { PageTitle } from '../../components/PageTitle.tsx'
import '../../styles/Menu.css'
import { ProductCard } from '../../components/ProductCard.tsx'


export default function Desserts () {
  return (
    <>
      <NavBar />
      <PageTitle>Sobremesas</PageTitle>

      <ProductCard productImg="MilkshakeChocolate.svg" productName="Milkshake de Chocolate" productDescription="" productPrice="15,90" />
      <ProductCard productImg="MilkshakeBaunilha.svg" productName="Milkshake de Baunilha" productDescription="" productPrice="15,90" />
      <ProductCard productImg="Brownie.svg" productName="Brownie" productDescription="" productPrice="5,90" />
    </>   
  ) 
}