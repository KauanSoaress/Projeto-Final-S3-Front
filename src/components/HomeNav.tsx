import '../styles/HomeNav.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
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
            <Link className="navbarCategories hover-underline-animation" to="/promotion">Promoções</Link>

          </div>
          <div className="right-side">
            <Link className="navbarCategories user" to="/login">
              <img src="User.svg" alt="User image" />
              <p className='text hover-underline-animation'>FAZER LOGIN<br/>ou CADASTRAR-SE</p>
            </Link>
            <Link to="/cart">
              <img src="Cart.svg" alt="Cart image" />
            </Link>
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