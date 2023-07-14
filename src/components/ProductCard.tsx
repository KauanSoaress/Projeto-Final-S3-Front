import '../styles/ProductCard.css'
import { CartArray } from '../service/arrays/CartArray'
import { ProductArray } from '../service/arrays/ProductArray'

interface ProductCardProps {
  productImg: string;
  productName: string;
  productDescription: string;
  productPrice: string;
  isPizzaOrCombo: boolean;
}

export const ProductCard = ({isPizzaOrCombo, productImg, productName, productDescription, productPrice}: ProductCardProps) => {
  
  const cartArray = CartArray;
  const productArray = ProductArray;

  function handleAddInCart() {
    cartArray.push(productArray.filter((element) => element.name === productName)[0]);
  }

  return (
    <>
      <div className="product">

        <div className="left">
          <img className={isPizzaOrCombo ? 'pizzaOrCombo' : 'otherProducts'} src={productImg} alt="Product" />
          <div className="product-info">
            <p className='product-name'>{productName}</p>
            <p className='product-description'>{productDescription}</p>
          </div>
        </div>

        <div className="right">
          <div className="product-price">
            R${productPrice}
          </div>

          <button onClick={handleAddInCart} className="add-in-cart">Adicionar ao carrinho</button>
        </div>

      </div>
    </>
  )
}