import { BrowserRouter } from "react-router-dom"
import {AppRoutes} from './routes/Index.tsx'

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
