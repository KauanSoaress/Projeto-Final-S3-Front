import {NavBar} from '../../components/NavBar.tsx'
import {PageTitle} from '../../components/PageTitle.tsx'
import {SaleCard} from '../../components/SaleCard.tsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/SalesList.css'

export default function SalesListByName(){

  let saleList = [
    ["Pizza de Calabresa", "34,90"],
    ["Pizza de Camarão", "34,90"],
    ["Refrigerante Guaraná 2L", "13,90"]
  ]

  let sales = [
    [1, "Victoria", "08h41 - 12/05/2023", saleList],
    [2, "Bruna", "08h41 - 10/05/2023", saleList],
    [3, "Kauan", "08h41 - 09/05/2023", saleList],
    [4, "Erik", "08h41 - 02/05/2023", saleList],
    [5, "Leonan", "08h41 - 02/05/2023", saleList],
    [6, "Gustavo", "08h41 - 02/05/2023", saleList],
    [7, "Beatriz", "08h41 - 02/05/2023", saleList],
    [8, "Jean", "08h41 - 02/05/2023", saleList],
    [9, "Guilherme", "08h41 - 02/05/2023", saleList],
    [10, "Levy", "08h41 - 02/05/2023", saleList],
  ]

  const [searchName, setSearchName] = useState('');
  const saleFilterName = (sales.filter(sale => String(sale[1]).toLowerCase().includes(searchName.toLowerCase())))

  return (
    <>
      <NavBar isLogged={true} isManager={true} isSeller={true}/>
      <PageTitle>Vendas</PageTitle>
      <div className="filter">
        <p>Filtrar por:</p>
        <input type="search" placeholder="Nome" value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
        <Link to="/sales-list-by-date"  className='tradeTypeFilter'>Trocar para pesquisa por data</Link>
      </div>
      <div className="sales-list-container">
        {
          saleFilterName.map((element) => (
            <SaleCard saleNumber={Number(element[0])} sellerName={String(element[1])} dateTime={String(element[2])} productsList={element[3]}/>
          ))
        }
      </div>
      <br />
    </>
  )
}