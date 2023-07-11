import '../styles/CartCards.css'

interface CartCardsProps {
    priceProduct: number;
}

export const CartCards = ({priceProduct}: CartCardsProps) => {
    return (
        <>
        <div className="products-cart-container">
            <div className="priceProduct">
                Resumo do pedido
                Total: R${priceProduct}
                <button>Finalizar</button>
            </div>
        </div>
        </>
    )
}