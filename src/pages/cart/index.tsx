import '../../styles/Cart.css'
import {NavBar} from '../../components/NavBar.tsx'
import {PageTitle} from '../../components/PageTitle.tsx'
import { CartCards } from '../../components/CartCards.tsx'
import { ConfirmPurchaseCard } from '../../components/ConfirmPurchaseCard.tsx'

export default function Cart(){ 
  return (
    <>
      <NavBar />
      <PageTitle>Meu Carrinho</PageTitle>
      <div className="cart-container">
        <div className="cart-cards-container">
          <CartCards img="PizzaCogumelo.svg" productName="Pizza de Camarão" productDescription="Cogumelo, azeitonas, 
  tomate, cebolinha" priceProduct={29.90}/>
          <CartCards img="PizzaCogumelo.svg" productName="Pizza de Camarão" productDescription="Cogumelo, azeitonas, 
  tomate, cebolinha" priceProduct={29.90}/>
        </div>
        
        <div className="confirm-purchase">
          <ConfirmPurchaseCard priceProduct={59.80}/>
        </div>
      </div>
    </>   
  )
}