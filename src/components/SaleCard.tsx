import '../styles/SaleCard.css'

interface SaleCardProps {
  saleNumber: number;
  sellerName: string;
  dateTime: string;
  productsList: string[][]
}

export const SaleCard = ({saleNumber, sellerName, dateTime, productsList}: SaleCardProps) => {

  let total = 0;

  return (
    <div className="sale-card-container">
      <div className="head">
        <p>Venda: {saleNumber}</p>
        <p>{dateTime}</p>
        <p>{sellerName}</p>
      </div>
      <div className="main">
        {
          productsList.map((element) => (
            <>
              <div>
                <p>{element[0]}</p>
                <p>R${element[1]}</p>
              </div>
              {
                <p hidden>
                  {total += parseFloat(element[1].replace(",", "."))}
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