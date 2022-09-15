import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToProfile } from '../../routes/cordinator';



export default function EditAddress() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Editar Endereço</h1>
      <button onClick={()=>goToProfile(navigate)}>voltar</button>
    </div>
  );
}
