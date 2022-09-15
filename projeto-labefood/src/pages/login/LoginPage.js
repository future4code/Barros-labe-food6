import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToCreaAccount, goToHomePage } from '../../routes/cordinator';

export default function LoginPage() {
    const navigate = useNavigate()
 return (
   <div>
        <h1>Login</h1>
        <button onClick={ ()=> goToCreaAccount(navigate) }>Criar conta</button>
        <button onClick={()=> goToHomePage(navigate) }>Acessar</button>
   </div>
 );
}
