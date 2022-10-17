import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToProfile } from '../../routes/cordinator';

export default function EditProfile() {
  const navigate = useNavigate()
 return (
   <div>
        <h1>editar perfil</h1>
        <button onClick={ ()=> goToProfile(navigate) }>voltar</button>
   </div>
 );
}
