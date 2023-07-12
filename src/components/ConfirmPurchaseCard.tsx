import '../styles/ConfirmPurchaseCard.css'

interface ConfirmPurchaseCardProps {
    priceProduct: number;
}

export const ConfirmPurchaseCard = ({priceProduct}: ConfirmPurchaseCardProps) => {
    return (
        <>
            <div className="price-product">
                <p>Resumo do pedido</p>
                <p className='total'>
                    Total: R$
                    {priceProduct}
                </p>
                <button>Finalizar</button>
            </div>
        </>
    )
}