import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateAccount() {
  const navigate = useNavigate()
 return (
   <div>
        <h1>Criar conta</h1>
        <button onClick={()=>{navigate(-1)}}>voltar</button>
   </div>
 );
}
