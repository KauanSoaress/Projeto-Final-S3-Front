import NavBar from '../../components/NavBar.tsx'
import { PromotionCard } from '../../components/PromotionCard.tsx'
import { PageTitle } from '../../components/PageTitle.tsx'
import '../../styles/Promotion.css'

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