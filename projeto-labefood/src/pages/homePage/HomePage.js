import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToCart, goToLogin, goToProfile } from '../../routes/cordinator';

export default function HomePage() {
  const navigate = useNavigate()
 return (
   <div>
        <h1>HomePage</h1>
        {/* <button onClick={ ()=>  goToLogin(navigate) }>voltar</button> */}
        <button onClick={ ()=> goToProfile(navigate) }>perfil</button>
        <button onClick={ ()=> goToCart(navigate) }>carrinho</button>
   </div>
 );
}
