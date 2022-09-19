import React from 'react';
import LoginPage from '../pages/login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage';
import PerfilPage from '../pages/perfilpage/PerfilPage';
import EditProfile from '../pages/editProfile/EditProfile';
import CartPage from '../pages/cartPage/CartPage';
import RestaurantPage from '../pages/restaurant/restaurant';
import { CreateAccount } from '../pages/createaccount';
import { MyAddress } from '../pages/myaddress';

export default function RouterPage() {
 return (
  <BrowserRouter>
    <Routes>
      <Route index element={<LoginPage/>}/>
      <Route path="/HomePage" element={<HomePage/>}/>
      <Route path="/CreateAccount" element={<CreateAccount/>}/>
      <Route path="/Profile" element={<PerfilPage/>}/>
      <Route path="/EditAddress" element={<MyAddress/>}/>
      <Route path="/EditProfile" element={<EditProfile/>}/>
      <Route path="/Cart" element={<CartPage/>}/>
      <Route path="/Restaurant" element={<RestaurantPage/>}/>
    </Routes>
  </BrowserRouter>
 );
}
