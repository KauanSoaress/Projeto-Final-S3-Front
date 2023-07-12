import { Routes, Route, Navigate } from 'react-router-dom'
import Index from '../pages/home/index'
import Login from '../pages/login/index'
import Register from '../pages/register/index'
import Menu from '../pages/menu/index'
import Cart from '../pages/cart/index'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Index/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/cart" element={<Cart/>}/>

      <Route path='*' element={<Navigate to="/home"/>}/>
    </Routes>
  );
}