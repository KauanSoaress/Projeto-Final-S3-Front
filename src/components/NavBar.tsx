import '../styles/NavBar.css'
import {useNavigate, Link} from "react-router-dom";
import {UserLogged} from "../service/arrays/UserLogged.ts";
import { IUserInitialState } from '../types/common/IUserInitialState.ts';

export const NavBar = () => {

  const navigate = useNavigate();

  function handleOut(){
    userLogged.UserLogged = IUserInitialState;
    navigate('/home');
  }

  function rightSideNavBar() {
    if (userLogged.UserLogged.cpf == '') {
      console.log(userLogged.UserLogged.cpf);
      console.log(userLogged.UserLogged.role);
      
      return (
        <>
          <Link className="navbarCategories user" to="/login" >
            <img src="User.svg" alt="User image" />
            <p className="text hover-underline-animation">FAZER LOGIN<br/>ou CADASTRAR-SE</p>
          </Link>
        </>
      )
    } else if (userLogged.UserLogged.role == 'CLIENTE') {
      return (
        <>
          <Link to="/cart">
            <img src="Cart.svg" alt="Cart image" />
          </Link>
          <p onClick={handleOut} className="hover-underline-animation out">Sair</p>
        </>
      )
    } else {
      return (
        <>
          <p onClick={handleOut} className="hover-underline-animation out">Sair</p>
        </>
      )
    }
  }

  const userLogged = UserLogged;
  

  return (
    <>
      <div className="container-navbar">
        <div className="left-side">
          <Link to="/home">
            <img src="Logo.svg" alt="Logo image" />
          </Link>

          {
              userLogged && (userLogged.UserLogged.role == 'VENDEDOR' || userLogged.UserLogged.role == 'GERENTE')
              ?
                <>
                  <Link className="navbarCategories hover-underline-animation" to="/sellers">Vendedores</Link>
                  <Link className="navbarCategories hover-underline-animation" to="/products-list">Produtos</Link>
                  <Link className="navbarCategories hover-underline-animation" to="/sales-list-by-name">Vendas</Link>
                </>
              :
                <Link className="navbarCategories hover-underline-animation" to="/menu">Produtos</Link>
            }
        </div>

        <div className="right-side">
          {
            rightSideNavBar()
          }
        </div>
      </div>      
    </>
  )
}