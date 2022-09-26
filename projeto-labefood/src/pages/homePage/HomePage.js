import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToCart, goToLogin, goToProfile, goToRestaurantPage } from '../../routes/cordinator';
import { useProtect } from '../../hooks/useProtect'
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/loading/loading';

export default function HomePage() {
  const myHeader = {
      headers:{
          auth:localStorage.getItem("token")
      }
  }
  const [ data, error, isLoading ] = useRequestData(`${BASE_URL}restaurants`, myHeader)
  
  const navigate = useNavigate()
  useProtect()
  

  const rest = data.restaurants && data.restaurants.map((rest)=>{
    return(
      <p onClick={()=>{
        localStorage.setItem("idRest", rest.id)
        goToRestaurantPage(navigate)
      }}>{rest.name}</p>
    )
  })

 return (
   <div>
        <h1>HomePage</h1>
        <button onClick={ ()=> goToProfile(navigate) }>perfil</button>
        <button onClick={ ()=> goToCart(navigate) }>carrinho</button>
        {isLoading && <Loading/>}
        {!isLoading && rest }
   </div>
 );
}
