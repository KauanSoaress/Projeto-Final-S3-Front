import '../styles/ProductsListCard.css'

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
      <div className="product-list">

        <div className="product-list-left">
          <img className={isPizzaOrCombo ? 'pizzaOrCombo' : 'otherProducts'} src={productImg} alt="Product" />
          <div className="product-list-info">
            <p className='product-list-name'>{productName}</p>
            <p className='product-list-description'>{productDescription}</p>
          </div>
        </div>

        <div className="product-list-right">
          <div className="product-list-price">
            R${productPrice}
          </div>
        </div>

      </div>
    </>
  )
}