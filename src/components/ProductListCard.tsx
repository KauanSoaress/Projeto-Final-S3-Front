import '../styles/ProductCard.css'

interface ProductCardProps {
  productImg: string;
  productName: string;
  productDescription: string;
  productPrice: string;
  isPizzaOrCombo: boolean;
}

export const ProductListCard = ({isPizzaOrCombo, productImg, productName, productDescription, productPrice}: ProductCardProps) => {
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

          <img src="Lixeira.svg" alt="Lixeira" />
        </div>

      </div>
    </>
  )
}