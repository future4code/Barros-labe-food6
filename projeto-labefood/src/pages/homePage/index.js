import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate()
 return (
   <div>
        <h1>HomePage</h1>
        <button onClick={()=>{navigate(-1)}}>voltar</button>
        <button onClick={()=>{navigate("/profile")}}>perfil</button>
        <button onClick={()=>{navigate("/cart")}}>carrinho</button>
   </div>
 );
}
