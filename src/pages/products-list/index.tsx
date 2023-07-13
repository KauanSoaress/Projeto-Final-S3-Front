import '../../styles/ProductsList.css'
import {NavBar} from '../../components/NavBar.tsx'
import {PageTitle} from '../../components/PageTitle.tsx'
import {RegisterButton} from '../../components/RegisterButton.tsx'
import {ProductListCard} from '../../components/ProductListCard.tsx'

export default function ProductsList(){
  return (
    <>
      <NavBar isLogged={true} isManager={true} isSeller={true}/>
      <PageTitle>Produtos</PageTitle>
      <div className="products-list-container">
        <RegisterButton link='/register-product'>Cadastrar Produto</RegisterButton>
        <ProductListCard isPizzaOrCombo={true} productImg='Pizza.png' productName='Pizza de Calabresa' productDescription='Calabresa, queijo e molho de tomate' productPrice='39,90' />
        <ProductListCard isPizzaOrCombo={true} productImg='Pizza.png' productName='Pizza de Camarão' productDescription='Camarão, mussarela, milho' productPrice='39,90' />
        <ProductListCard isPizzaOrCombo={true} productImg='Pizza.png' productName='Pizza de Calabresa' productDescription='Calabresa, mussarela' productPrice='39,90' />
      </div>
    </>
  )
}