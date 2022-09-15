import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditAddress() {
  const navigate = useNavigate()
 return (
   <div>
        <h1>Editar Endereço</h1>
        <button onClick={()=>{navigate(-1)}}>voltar</button>
   </div>
 );
}
