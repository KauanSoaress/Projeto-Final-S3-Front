import '../styles/HomeCards.css'
import { Link } from 'react-router-dom'

interface HomeCardsProps {
  img: string;
}

export const HomeCards = ({img}: HomeCardsProps) => {
  return (
    <>
      <Link to="/menu" className="home-card-container">
        <img src={img} alt="Products" />
      </Link>
    </>
  )
}