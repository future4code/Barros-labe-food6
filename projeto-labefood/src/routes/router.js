import React from 'react';
import LoginPage from '../pages/login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage';
import CreateAccount from '../pages/createAccount/CreateAccount';
import PerfilPage from '../pages/perfilpage/PerfilPage';
import EditAddress from '../pages/editAddress/EditAddress';
import EditProfile from '../pages/editProfile/EditProfile';
import CartPage from '../pages/cartPage/CartPage';

export default function RouterPage() {
 return (
  <BrowserRouter>
    <Routes>
      <Route index element={<LoginPage/>}/>
      <Route path="/HomePage" element={<HomePage/>}/>
      <Route path="/CreateAccount" element={<CreateAccount/>}/>
      <Route path="/Profile" element={<PerfilPage/>}/>
      <Route path="/EditAddress" element={<EditAddress/>}/>
      <Route path="/EditProfile" element={<EditProfile/>}/>
      <Route path="/Cart" element={<CartPage/>}/>
    </Routes>
  </BrowserRouter>
 );
}
