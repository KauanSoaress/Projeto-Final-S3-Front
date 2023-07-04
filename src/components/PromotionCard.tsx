import '../styles/PromotionCard.css'
import { Link } from 'react-router-dom';

interface PromotionCardProps {
  img: string;
}

export const PromotionCard = ({img}: PromotionCardProps) => {
  return (
    <>
      <Link to="/" className="card-container">
        <img src={img} alt="Products" />
      </Link>
    </>
  )
}