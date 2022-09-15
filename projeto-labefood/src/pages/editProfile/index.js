import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
  const navigate = useNavigate()
 return (
   <div>
        <h1>editar perfil</h1>
        <button onClick={()=>{navigate(-1)}}>voltar</button>
   </div>
 );
}
