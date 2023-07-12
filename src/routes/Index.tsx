import { Routes, Route, Navigate } from 'react-router-dom'
import Index from '../pages/home/index'
import Login from '../pages/login/index'
import Register from '../pages/register/index'
import Menu from '../pages/menu/index'
import Cart from '../pages/cart/index'
import FinishedOrder from '../pages/finished-order/index'
import Drinks from '../pages/drinks/index'
import Pizzas from '../pages/pizzas/index'
import Desserts from '../pages/desserts/index'
import Sellers from '../pages/sellers/index'
import RegisterSellers from '../pages/register-seller/index'
import RegisterProduct from '../pages/register-product/index'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Index/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/finished-order" element={<FinishedOrder/>}/>
      <Route path="/drinks" element={<Drinks/>}/>
      <Route path="/pizzas" element={<Pizzas/>}/>
      <Route path="/desserts" element={<Desserts/>}/>
      <Route path="/sellers" element={<Sellers/>}/>
      <Route path="/register-seller" element={<RegisterSellers/>}/>
      <Route path="/register-product" element={<RegisterProduct/>}/>

      <Route path='*' element={<Navigate to="/home"/>}/>
    </Routes>
  );
}