import BackHome from '../../components/BackHome.tsx'
import '../../styles/FinishedOrder.css'

export default function FinishedOrder() {
  return (
    <>
      <BackHome />
      <div className="container">
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100 finishMessage">
                Seu pedido<br />
                foi finalizado<br />
                com sucesso!
            </div>
          </div>
        </div>
      </div>
    </>
  )
}