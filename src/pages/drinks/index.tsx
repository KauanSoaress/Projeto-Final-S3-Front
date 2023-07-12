import NavBar from '../../components/NavBar'
import { PageTitle } from '../../components/PageTitle.tsx'
import { ProductCard } from '../../components/ProductCard.tsx'
import '../../styles/Menu.css'


export default function Drinks () {
  return (
    <>
      <NavBar />
      <PageTitle>Bebidas</PageTitle>

      <ProductCard productImg="Pepsi.svg" productName="Pepsi 2L" productDescription="" productPrice="13,90" />
      <ProductCard productImg="Coca.svg" productName="Coca 2L" productDescription="" productPrice="14,90" />
      <ProductCard productImg="Guarana.svg" productName="Guarana 2L" productDescription="" productPrice="13,90" />
    </>
  )
}