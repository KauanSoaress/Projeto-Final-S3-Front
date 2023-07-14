import { IProduct } from '../service/arrays/ProductArray';
import '../styles/SaleCard.css'

interface SaleCardProps {
  sellerName: string;
  dateTime: string;
  productsList: IProduct[];
}

export const SaleCard = ({sellerName, dateTime, productsList}: SaleCardProps) => {

  let total = 0;

  return (
    <div className="sale-card-container">
      <div className="head">
        <p>{dateTime}</p>
        <p>{sellerName}</p>
      </div>
      <div className="main">
        {
          productsList.map((element) => (
            <>
              <div>
                <p>{element.name}</p>
                <p>R${element.price}</p>
              </div>
              {
                <p hidden>
                  {total += parseFloat(element.price.replace(",", "."))}
                </p>
              }
            </>
          ))
        }
      </div>
      <div className="footer">
        <p>Valor total:&nbsp;</p>
        {
          <p>R${total}</p>
        }
      </div>
    </div>
  )
}