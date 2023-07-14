import '../../styles/Sellers.css'
import {NavBar} from '../../components/NavBar.tsx'
import {PageTitle} from '../../components/PageTitle.tsx'
import {SellerCards} from '../../components/SellerCards.tsx'
import {RegisterButton} from '../../components/RegisterButton.tsx'
import {UserArray} from '../../service/arrays/UserArray.ts'


export default function Sellers(){
  const userArray = UserArray.filter((user) => user.role.toLowerCase() === 'vendedor');
    return (
        <>
          <NavBar />
          <PageTitle>Vendedores</PageTitle>
          <div className='sellers-container'>
            <RegisterButton link='/register-seller'>Cadastrar Vendedor</RegisterButton>
            {
              userArray.map((user) => {
                return <SellerCards sellerName={user.name} />
              })
            }
          </div>
        </>
    )
}
