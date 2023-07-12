import '../styles/Card.css'
import { Link } from 'react-router-dom';

interface CardProps {
  img: string;
  link: string;
}

export const Card = ({img, link}: CardProps) => {
  return (
    <>
      <Link to={link} className="card-container">
        <img src={img} alt="Products" />
      </Link>
    </>
  )
}