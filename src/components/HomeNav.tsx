import '../styles/HomeNav.css'
import { Link } from 'react-router-dom'


interface HomeNavProps {
  isLogged: boolean;
}

export const HomeNav = ({isLogged}: HomeNavProps) => {
  return (
    <>
      {/* Div para a navbar da home */}
      <div className="geral">
        <div className="container-HomeNav">
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
              <p className={isLogged ? "text" : "text hover-underline-animation"} hidden={isLogged}>FAZER LOGIN<br/>ou CADASTRAR-SE</p>
            </Link>
            <Link to="/cart" hidden={!isLogged}>
              <img src="Cart.svg" alt="Cart image" />
            </Link>
            <p className={isLogged ? "hover-underline-animation out" : ""} hidden={!isLogged}>Sair</p>
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