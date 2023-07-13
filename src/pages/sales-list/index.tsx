import {NavBar} from '../../components/NavBar.tsx'
import {PageTitle} from '../../components/PageTitle.tsx'
import {SaleCard} from '../../components/SaleCard.tsx'
import '../../styles/SalesList.css'

export default function SalesList(){

  let saleList = [
    ["Pizza de Calabresa", "34,90"],
    ["Pizza de Camarão", "34,90"],
    ["Refrigerante Guaraná 2L", "12,90"]
  ]
  
  return (
    <>
      <NavBar isLogged={true} isManager={true} isSeller={true}/>
      <PageTitle>Vendas</PageTitle>
      <div className="sales-list-container">
        <SaleCard saleNumber={1} sellerName="João" dateTime="08h41 - 12/05/2023" productsList={saleList}/>
      </div>
    </>
  )
}