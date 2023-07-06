import { Routes, Route, Navigate } from 'react-router-dom'
import Index from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import Promotion from '../pages/promotion'
import Menu from '../pages/Menu.tsx'
import Cart from '../pages/cart'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Index/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/promotion" element={<Promotion/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/cart" element={<Cart/>}/>

      <Route path='*' element={<Navigate to="/home"/>}/>
    </Routes>
  );
}