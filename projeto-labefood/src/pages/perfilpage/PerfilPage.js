import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToEditAddress, goToEditProfile, goToHomePage } from '../../routes/cordinator';

export default function PerfilPage() {
  const navigate = useNavigate()
 return (
   <div>
        <h1>Perfil Page</h1>
        <button onClick={()=> goToHomePage(navigate)}>voltar</button>
        <button onClick={()=> goToEditProfile(navigate)}>Editar Perfil</button>
        <button onClick={()=> goToEditAddress(navigate)}> Editar Endereço</button>
   </div>
 );
}
