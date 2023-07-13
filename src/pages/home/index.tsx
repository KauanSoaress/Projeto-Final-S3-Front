import {HomeNav} from '../../components/HomeNav'
import '../../styles/Home.css'
import { HomeCards } from '../../components/HomeCards'

export default function Home () {
  return (
    <>
      <HomeNav />
      <h1>Promoções</h1>
      <div className="carousel">
        <HomeCards img="promo1.svg"/>
        <HomeCards img="promo2.svg"/>
        <HomeCards img="promo3.svg"/>
      </div>
    </>
  )
}