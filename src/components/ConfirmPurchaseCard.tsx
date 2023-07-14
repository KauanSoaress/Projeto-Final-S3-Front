import '../styles/ConfirmPurchaseCard.css'
import { Link } from 'react-router-dom'
import { CartArray } from '../service/arrays/CartArray'
import { SalesArray } from '../service/arrays/SalesArray'
import { ISaleInitialStage } from '../types/common/ISaleInitialStage'

export const ConfirmPurchaseCard = () => {

    const cartArray = CartArray;
    const salesArray = SalesArray;

    const sale = ISaleInitialStage

    let price: number = 0;

    function handleSale() {
        sale.date = new Date().toLocaleDateString();
        sale.products = cartArray;
        sale.sellers = cartArray.map((element) => (
            element.seller
        ));
        console.log(sale.sellers);
        
        salesArray.push(sale);
        console.log(SalesArray)
    }

    return (
        <>
            <div className="price-product">
                <p>Resumo do pedido</p>
                <p className='total'>
                    Total: R$ 
                    {
                        cartArray.map((element) => (
                            price = price + Number(element.price)
                        ))
                    }               
                </p>
                <Link onClick={handleSale} to='/finished-order'>Finalizar</Link>
            </div>
        </>
    )
}