import '../../styles/Sellers.css'
import {NavBar} from '../../components/NavBar.tsx'
import {PageTitle} from '../../components/PageTitle.tsx'
import {SellerCards} from '../../components/SellerCards.tsx'
import {RegisterButton} from '../../components/RegisterButton.tsx'

export default function Sellers(){
    return (
        <>
          <NavBar isLogged={true} isManager={true} isSeller={true}/>
          <PageTitle>Vendedores</PageTitle>
          <div className='sellers-container'>
            <RegisterButton link='/register-seller'>Cadastrar Vendedor</RegisterButton>
            <SellerCards sellerName='João Sousa da Silva' />
            <SellerCards sellerName='Maria do Socorro' />
            <SellerCards sellerName='Ana Francisca' />
          </div>
        </>
    )
}
