import '../../styles/Cart.css'
import {NavBar} from '../../components/NavBar.tsx'
import {PageTitle} from '../../components/PageTitle.tsx'
import { CartCards } from '../../components/CartCards.tsx'
import { ConfirmPurchaseCard } from '../../components/ConfirmPurchaseCard.tsx'
import { CartArray } from '../../service/arrays/CartArray'


export default function Cart(){ 

  const cartArray = CartArray;

  return (
    <>
      <NavBar />
      <PageTitle>Meu Carrinho</PageTitle>
      <div className="cart-container">
        <div className="cart-cards-container">
          {
            cartArray.map((element) => (
              <CartCards 
                img="PizzaCogumelo.svg" 
                productName={element.name}
                productDescription={element.description}
                priceProduct={element.price}/>
            ))
          }
        </div>
        
        <div className="confirm-purchase">
          <ConfirmPurchaseCard />
        </div>
      </div>
    </>   
  )
}