import '../styles/NavBar.css'
import { Link } from 'react-router-dom'

interface NavBarProps {
  isLogged: boolean;
  isSeller: boolean;
  isManager: boolean;
}

export const NavBar = ({isLogged, isSeller, isManager}: NavBarProps) => {
  return (
    <>
      <div className="container-navbar">
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
                  <Link className="navbarCategories hover-underline-animation" to="/sales-list-by-name">Vendas</Link>
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
    </>
  )
}