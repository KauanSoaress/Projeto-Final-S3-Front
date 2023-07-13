import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
import {UserLogged} from "../service/arrays/UserLogged.ts";

export const NavBar = () => {

  let userLogged = UserLogged;

  return (
    <>
      <div className="container-navbar">
        <div className="left-side">
          <Link to="/home">
            <img src="Logo.svg" alt="Logo image" />
          </Link>

          {
              userLogged && (userLogged.role == 'VENDEDOR' || userLogged.role == 'GERENTE')
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
            userLogged
            ?
              <>
                {
                  (userLogged.role == 'VENDEDOR' || userLogged.role == 'GERENTE')
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