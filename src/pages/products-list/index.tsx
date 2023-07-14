import '../../styles/ProductsList.css'
import {NavBar} from '../../components/NavBar.tsx'
import {PageTitle} from '../../components/PageTitle.tsx'
import {RegisterButton} from '../../components/RegisterButton.tsx'
import {ProductListCard} from '../../components/ProductListCard.tsx'
import { ProductArray } from '../../service/arrays/ProductArray.ts'

export default function ProductsList(){

  const productsArray = ProductArray;

  return (
    <>
      <NavBar />
      <PageTitle>Produtos</PageTitle>
      <div className="products-list-container">
        <RegisterButton link='/register-product'>Cadastrar Produto</RegisterButton>

        {
          productsArray.map((product) => (
            <ProductListCard
              key={product.name}
              isPizzaOrCombo={true}
              productImg='PizzaCalabresa.svg'
              productName={product.name}
              productDescription={product.description}
              productPrice={product.price}
            />
          )
          )
        }
        </div>
    </>
  )
}