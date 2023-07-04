import NavBar from '../components/NavBar'
import { PromotionCard } from '../components/PromotionCard'
import { PageTitle } from '../components/PageTitle.tsx'
import '../styles/Promotion.css'

export default function Home () {
  return (
    <>
      <NavBar />
      <PageTitle>Promoções</PageTitle>
      <div className="cards">
        <PromotionCard img="pizzas.svg"/>
        <PromotionCard img="bebidas.svg"/>
        <PromotionCard img="sobremesas.svg"/>
      </div>
    </>
  )
}