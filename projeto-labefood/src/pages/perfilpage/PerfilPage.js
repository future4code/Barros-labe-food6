
import { useNavigate } from 'react-router-dom';
import { goToEditAddress, goToEditProfile, goToHomePage } from '../../routes/cordinator';
import { ButtonHeader, Container, ContainerBase, Header } from './style';
import React, { useState } from "react";
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/url';
import Navegacao from '../../components/Navegação';

export default function PerfilPage() {

  const navigate = useNavigate()
  const [user] = useRequestData(`${BASE_URL}profile`)

  console.log(user)

  const InfoUser = user && user.user && user.user.map((u)=>{
      return(
        <div>
          <p>{u.name}</p>
          <p>{u.email}</p>
          <p>{u.cpf}</p>
        </div>
      )
  })

 return (
   <div>
     <ContainerBase>

      <Container>

      <Header> <p> Meu perfil</p></Header>

    <li>{InfoUser}</li>
    <Navegacao></Navegacao>
    </Container>
    </ContainerBase>


        <h1>Perfil Page</h1>
        <button onClick={()=> goToEditProfile(navigate)}>Editar Perfil</button>
        <button onClick={()=> goToEditAddress(navigate)}> Editar Endereço</button>

        
   </div>
 );
}
