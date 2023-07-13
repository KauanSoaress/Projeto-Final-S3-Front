import '../../styles/ProductsList.css'
import {NavBar} from '../../components/NavBar.tsx'
import {PageTitle} from '../../components/PageTitle.tsx'
import {RegisterButton} from '../../components/RegisterButton.tsx'
import {ProductListCard} from '../../components/ProductListCard.tsx'

export default function ProductsList(){

  let productsArray: string[][] = [
    ["true", "PizzaCalabresa.svg", "Pizza de Calabresa", "Calabresa, queijo e molho de tomate", "39,90"],
    ["true", "PizzaCamarao.svg", "Pizza de Camarão", "Camarão, mussarela, milho", "39,90"],
    ["true", "PizzaCalabresa.svg", "Pizza de Calabresa", "Calabresa, mussarela", "39,90"],
  ];

  return (
    <>
      <NavBar />
      <PageTitle>Produtos</PageTitle>
      <div className="products-list-container">
        <RegisterButton link='/register-product'>Cadastrar Produto</RegisterButton>
        {
          productsArray.map((product) => (
            <ProductListCard
              key={product[2]}
              isPizzaOrCombo={Boolean(product[0])}
              productImg={product[1]}
              productName={product[2]}
              productDescription={product[3]}
              productPrice={product[4]}
            />
          )
          )
        }
        </div>
    </>
  )
}