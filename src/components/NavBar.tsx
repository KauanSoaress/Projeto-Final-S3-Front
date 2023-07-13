import '../styles/NavBar.css'
import { Link } from 'react-router-dom'

interface NavBarProps {
  isLogged: boolean;
}

export const NavBar = ({isLogged}: NavBarProps) => {
  return (
    <>
      <div className="container-navbar">
        <div className="left-side">
          <Link to="/home">
            <img src="Logo.svg" alt="Logo image" />
          </Link>

          <Link className="navbarCategories hover-underline-animation" to="/menu">Cardápio</Link>
        </div>

        <div className="right-side">
          <Link className="navbarCategories user" to="/profile" >
            <img src="User.svg" alt="User image"  hidden={!isLogged}/>
          </Link>
          <Link className="navbarCategories user" to="/login" >
            <img src="User.svg" alt="User image"  hidden={isLogged}/>
            <p className={isLogged ? "" : "text hover-underline-animation"} hidden={isLogged}>FAZER LOGIN<br/>ou CADASTRAR-SE</p>
          </Link>
          <Link to="/cart" hidden={!isLogged}>
            <img src="Cart.svg" alt="Cart image" />
          </Link>
          <p className={isLogged ? "hover-underline-animation out" : ""} hidden={!isLogged}>Sair</p>
        </div>
      </div>      
    </>
  )
}