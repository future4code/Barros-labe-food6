import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const navigate = useNavigate()
 return (
   <div>
        <h1>Meu Carrinho</h1>
        <button onClick={()=>{navigate(-1)}}>voltar</button>
   </div>
 );
}
