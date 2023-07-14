import {NavBar} from '../../components/NavBar.tsx'
import {PageTitle} from '../../components/PageTitle.tsx'
import {SaleCard} from '../../components/SaleCard.tsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/SalesList.css'
import { SalesArray } from '../../service/arrays/SalesArray.ts'

export default function SalesListByDate(){

  const sales = SalesArray;

  const [searchDate, setSearchDate] = useState('');
  const saleFilterDate = (sales.filter(sale => String(sale.date).toLowerCase().includes(searchDate.toLowerCase())))

  return (
    <>
      <NavBar />
      <PageTitle>Vendas</PageTitle>
      <div className="filter">
        <p>Filtrar por:</p>
        <input type="search" placeholder="Data" value={searchDate} onChange={(e) => setSearchDate(e.target.value)}/>
        <Link to="/sales-list-by-name" className='tradeTypeFilter'>Trocar para pesquisa por nome</Link>
      </div>
      <div className="sales-list-container">
        {
          saleFilterDate.map((element) => (
            <SaleCard sellerName={element.sellers[0].name} dateTime={element.date} productsList={element.products}/>
          ))
        }
      </div>
      <br />
    </>
  )
}