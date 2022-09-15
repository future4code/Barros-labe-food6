import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToHomePage } from '../../routes/cordinator';
export default function CartPage() {
  const navigate = useNavigate()
 return (
   <div>
        <h1>Meu Carrinho</h1>
        <button onClick={() => goToHomePage(navigate)}>voltar</button>
   </div>
 );
}
