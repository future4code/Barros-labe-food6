import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PerfilPage() {
  const navigate = useNavigate()
 return (
   <div>
        <h1>Perfil Page</h1>
        <button onClick={()=>{navigate(-1)}}>voltar</button>
        <button onClick={()=>{navigate('/editprofile')}}>Editar Perfil</button>
        <button onClick={()=>{navigate('/editAddress')}}> Editar Endereço</button>
   </div>
 );
}
