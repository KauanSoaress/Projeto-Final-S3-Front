import '../styles/CartCards.css'

interface CartCardsProps {
    img: string;
    productName: string;
    productDescription: string; 
    priceProduct: string;
}

export const CartCards = ({img, productName, productDescription, priceProduct}: CartCardsProps) => {
    return (
        <>
        <div className="products-cart-container">
            <img src={img} alt="Products" />
            <div className="textCard">
                <p className='productTitle'>{productName}</p>
                <p className='productDescription'>{productDescription}</p>
            </div>
            <div className="priceProduct">
                R${priceProduct}
            </div>
        </div>
        </>
    )
}