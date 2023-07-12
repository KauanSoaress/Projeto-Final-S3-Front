import '../../styles/Sellers.css'
import NavBar from '../../components/NavBar.tsx'
import {PageTitle} from '../../components/PageTitle.tsx'
import {SellerCards} from '../../components/SellerCards.tsx'


export default function Sellers(){
    return (
        <>
          <NavBar />
          <PageTitle>Vendedores</PageTitle>
          <div className='sellers-container'>
            <SellerCards sellerName='João Sousa da Silva' />
            <SellerCards sellerName='Maria do Socorro' />
            <SellerCards sellerName='Ana Francisca' />
          </div>
        </>
    )
}
