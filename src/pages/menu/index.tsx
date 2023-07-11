import NavBar from '../../components/NavBar'
import { PromotionCard } from '../../components/PromotionCard.tsx'
import { PageTitle } from '../../components/PageTitle.tsx'

export default function Home () {
  return (
    <>
      <NavBar />
      <PageTitle>Cardápio</PageTitle>
      <div className="cards">
        <PromotionCard img="pizzas.svg"/>
        <PromotionCard img="bebidas.svg"/>
        <PromotionCard img="sobremesas.svg"/>
      </div>
    </>
  )
}