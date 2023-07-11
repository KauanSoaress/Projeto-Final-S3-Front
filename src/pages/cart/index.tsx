import '../../styles/Cart.css'
import NavBar from '../../components/NavBar.tsx'
import {PageTitle} from '../../components/PageTitle.tsx'
import { CartCards } from '../../components/CartCards.tsx'

export default function Cart(){ 
  return (
    <>
      <NavBar />
      <PageTitle>Meu Carrinho</PageTitle>
      <div className="cart-cards-container">
        <CartCards img="PizzaCogumelo.svg" productName="Pizza de Calabresa" productDescription="Calabresa, mussarela, tomate e orégano." priceProduct={29.90}/>
        
      </div>
    </>   
  )
}