import {NavBar} from '../../components/NavBar'
import { Card } from '../../components/Card.tsx'
import { PageTitle } from '../../components/PageTitle.tsx'
import '../../styles/Menu.css'


export default function Home () {
  return (
    <>
      <NavBar isLogged={false}/>
      <PageTitle>Cardápio</PageTitle>
      <div className="cards">
        <Card link="/pizzas" img="pizzas.svg"/>
        <Card link="/drinks" img="bebidas.svg"/>
        <Card link="/desserts " img="sobremesas.svg"/>
      </div>
    </>
  )
}