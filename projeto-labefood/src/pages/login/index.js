import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate()
 return (
   <div>
        <h1>Login</h1>
        <button onClick={()=>{navigate("createAccount")}}>Criar conta</button>
        <button onClick={()=>{navigate("homePage")}}>Acessar</button>
   </div>
 );
}
