
import { useNavigate } from 'react-router-dom';
import { goToEditAddress, goToEditProfile, goToHomePage } from '../../routes/cordinator';
import { ButtonHeader, Container, ContainerBase, DivCard, DivDados, DivE, DivEndereco, DivHistorico, Header } from './style';
import React, { useEffect, useState } from "react";
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/url';
import Navegacao from '../../components/navBar/Navegação';
import axios from 'axios';
import editar from '../../img/editar.png'

export default function PerfilPage() {

  const navigate = useNavigate()

  const token = localStorage.getItem("token")
  const [perfil, setPerfil] = useState()
  const [historico, setHistorico] = useState()
  //const [user] = useRequestData(`${BASE_URL}profile`, Header)

  const getProfile = () =>{
      axios.get(`${BASE_URL}profile`,{
        headers:{ auth: token }
      }).then((response)=>{ setPerfil(response.data); console.log(response)})
      .catch((erro)=>{ console.log(erro) })
  }

  useEffect(() => {getProfile()},[])
  
  const getHistoricoPedidos = () =>{
    axios.get(`${BASE_URL}orders/history`, {
      headers:{ auth: token }
    }).then((response)=>{ setHistorico(response.data); console.log(response)})
    .catch((erro)=>{ console.log(erro) })
  }

  useEffect(() => {getHistoricoPedidos()},[])
  console.log(historico)
 return (
   <div>
     <ContainerBase>
      <Container>
      <Header><p> Meu perfil</p></Header>
        <DivDados>
            <div className='dados'>
              <p>{perfil && perfil.user && perfil.user.name}</p>
              <p>{perfil && perfil.user && perfil.user.email}</p>
              <p>{perfil && perfil.user && perfil.user.cpf}</p>
            </div>
            <div className='btn'>
              <button onClick={()=> goToEditProfile(navigate)}><img src={editar}/></button>
            </div>
        </DivDados>
         
            <DivEndereco>
              <div>
              <p className='endCadastrado'>Endereço cadastrado</p>
              <p>{perfil && perfil.user && perfil.user.address}</p>
              </div>
              <div className='btn'>
                <button onClick={()=> goToEditAddress(navigate)}><img src={editar}/></button>
              </div>

            </DivEndereco>

            <DivHistorico>
              <p>Histórico de pedidos</p>

            </DivHistorico>
            {historico && historico.orders && historico.orders.map((i)=>{
              return(
                  <DivCard>
                    <p className='restaurante'>{i.restaurantName}</p>
                    <p className='valor'>SUBTOTAL: R$ {i.totalPrice}</p>
                  </DivCard>
              )
            })}
            
    <Navegacao></Navegacao>
    </Container>
    </ContainerBase>

        
   </div>
 );
}
