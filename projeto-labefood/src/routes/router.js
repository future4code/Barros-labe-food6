import React from 'react';
import LoginPage from '../pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage';
import CreateAccount from '../pages/createAccount';
import PerfilPage from '../pages/perfilpage';
import EditAddress from '../pages/editAddress';
import EditProfile from '../pages/editProfile';
import CartPage from '../pages/cartPage';

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
