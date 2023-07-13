import '../styles/HomeNav.css'
import { Link } from 'react-router-dom'


interface HomeNavProps {
  isLogged: boolean;
  isSeller: boolean;
  isManager: boolean;
}

export const HomeNav = ({isLogged, isSeller, isManager}: HomeNavProps) => {
  return (
    <>
      {/* Div para a navbar da home */}
      <div className="geral">
        <div className="container-HomeNav">

          <div className="left-side">
            <Link to="/home">
              <img src="Logo.svg" alt="Logo image" />
            </Link>

            {
              isSeller || isManager
              ?
                <>
                  <Link className="navbarCategories hover-underline-animation" to="/sellers">Vendedores</Link>
                  <Link className="navbarCategories hover-underline-animation" to="/products-list">Produtos</Link>
                  <Link className="navbarCategories hover-underline-animation" to="/sales-list">Vendas</Link>
                </>
              :
                <Link className="navbarCategories hover-underline-animation" to="/menu">Cardápio</Link>
            }

            

          </div>
          
          <div className="right-side">
          {
            isLogged 
            ?
              <>
                <Link className="navbarCategories user" to="/profile" >
                  <img src="User.svg" alt="User image"/>
                </Link>
                {
                  isSeller || isManager
                  ?
                  <></>
                  :
                  <Link to="/cart">
                    <img src="Cart.svg" alt="Cart image" />
                  </Link>
                }
                <p className="hover-underline-animation out">Sair</p>
              </>
            :
              <>
                <Link className="navbarCategories user" to="/login" >
                  <img src="User.svg" alt="User image" />
                  <p className="text hover-underline-animation">FAZER LOGIN<br/>ou CADASTRAR-SE</p>
                </Link>
              </>
          }
          </div>
        </div>

        {/* Div para o container da home */}
        <div className="container-inicio">

          <div className="inicio-left-side">
            <p>Do tamanho ideal<br/>para a sua fome!</p>
            <Link to="/menu" className='button'>Peça agora!</Link>
          </div>

          <div className="inicio-right-side">
            <img src="pizzaHome.svg" alt="Inicio image" />
          </div>
          
        </div>
      </div>
    </>
  )
}