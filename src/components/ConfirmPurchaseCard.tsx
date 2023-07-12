import '../styles/ConfirmPurchaseCard.css'
import { Link } from 'react-router-dom'

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
                <Link to='/finished-order'>Finalizar</Link>
            </div>
        </>
    )
}