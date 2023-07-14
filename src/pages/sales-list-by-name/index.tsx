import {NavBar} from '../../components/NavBar.tsx'
import {PageTitle} from '../../components/PageTitle.tsx'
import {SaleCard} from '../../components/SaleCard.tsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/SalesList.css'
import { SalesArray } from '../../service/arrays/SalesArray.ts'

export default function SalesListByName(){

  const sales = SalesArray;

  const [searchName, setSearchName] = useState('');
  const saleFilterName = (sales.filter(sale => sale.sellers[0].name.toLowerCase().includes(searchName.toLowerCase())))
  
  console.log(sales);
  
  
  return (
    <>
      <NavBar />
      <PageTitle>Vendas</PageTitle>
      <div className="filter">
        <p>Filtrar por:</p>
        <input type="search" placeholder="Nome" value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
        <Link to="/sales-list-by-date"  className='tradeTypeFilter'>Trocar para pesquisa por data</Link>
      </div>
      <div className="sales-list-container">
        {
          saleFilterName.map((element) => (
            <SaleCard sellerName={element.sellers[0].name} dateTime={element.date} productsList={element.products}/>
          ))
        }
      </div>
      <br />
    </>
  )
}