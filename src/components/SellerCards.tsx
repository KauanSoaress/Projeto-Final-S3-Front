import '../styles/SellerCards.css'

interface SellerCardsProps {
  sellerName: string;
}

export const SellerCards = ({sellerName}: SellerCardsProps) => {
  return (
    <>
      <div className="seller-container">
        <p>{sellerName}</p>
        <img src="Lixeira.svg" alt="Lixeira" />
      </div>
    </>
  )
}