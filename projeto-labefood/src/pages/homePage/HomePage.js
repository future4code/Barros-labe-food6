import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToCart, goToLogin, goToProfile, goToRestaurantPage } from '../../routes/cordinator';
import { useProtect } from '../../hooks/useProtect'
import axios from 'axios';
import { BASE_URL } from '../../constants/url';

export default function HomePage() {
  const navigate = useNavigate()

  const [ rests, setRests ] = useState([])

    useProtect()
    const myHeader = {
        headers:{
            auth:localStorage.getItem("token")
        }
    }

    useEffect(() => {
      const listRestaurants = ()=>{
        axios.get(`${BASE_URL}restaurants`, myHeader)
        .then((resp)=>{setRests(resp.data.restaurants)})
    }
    })


 return (
   <div>
        <h1>HomePage</h1>
        <button onClick={ ()=> goToProfile(navigate) }>perfil</button>
        <button onClick={ ()=> goToCart(navigate) }>carrinho</button>

        {rests.map((rest, i)=>{
              return(
                <ul key={i} onClick={()=>{
                  localStorage.setItem("idRest", rest.id)
                  goToRestaurantPage(navigate)
                }}>
                  {rest.name}
                </ul>
              )
                })}
   </div>
 );
}
