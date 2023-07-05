import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home.tsx'
import Login from '../pages/Login.tsx'
import Register from '../pages/Register.tsx'
import Promotion from '../pages/Promotion.tsx'
import Menu from '../pages/Menu.tsx'
import Cart from '../pages/Cart.tsx'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/promotion" element={<Promotion/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/cart" element={<Cart/>}/>

      <Route path='*' element={<Navigate to="/home"/>}/>
    </Routes>
  );
}