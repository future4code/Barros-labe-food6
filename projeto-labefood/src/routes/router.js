import React from 'react';
import LoginPage from '../pages/login/LoginPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage';
import PerfilPage from '../pages/perfilpage/PerfilPage';
import EditProfile from '../pages/editProfile/EditProfile';
import CartPage from '../pages/cartPage/CartPage';
import RestaurantPage from '../pages/restaurant/restaurant';
import { CreateAccount } from '../pages/createaccount/CreateAccount';
import { MyAddress } from '../pages/myaddress/MyAddress';
import { InitialPage } from '../pages/initialPage/initialPage';


export default function RouterPage() {
 return (
  <BrowserRouter>
    <Routes>
      <Route index element={ <InitialPage/>} />
      <Route path="/Login" element={<LoginPage/>}/>
      <Route path="/HomePage" element={<HomePage/>}/>
      <Route path="/CreateAccount" element={<CreateAccount/>}/>
      <Route path="/Profile" element={<PerfilPage/>}/>
      <Route path="/:teste" element={<MyAddress/>}/>
      <Route path="/EditProfile" element={<EditProfile/>}/>
      <Route path="/Cart" element={<CartPage/>}/>
      <Route path="/Restaurant" element={<RestaurantPage/>}/>
    </Routes>
  </BrowserRouter>
 );
}
