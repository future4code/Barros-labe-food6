import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react' por enquanto vou deixar aqui commitado
import * as style from "./styleHome"

import { goToCart, goToLogin, goToProfile, goToRestaurantPage } from '../../routes/cordinator';
import { useProtect } from '../../hooks/useProtect'
import { BASE_URL } from '../../constants/url';
import useRequestData from '../../hooks/useRequestData';
import imgSearch from "../../img/iconePesquisa.svg"

export default function HomePage() {
  useProtect()
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const [ list, er, loading ] = useRequestData(`${BASE_URL}restaurants`, { headers: { auth:token } })
  const [ inputName, setInputName ] = useState("")


  const takeRestaurantId = (ID) => {
    localStorage.setItem("idRest", ID)
    goToRestaurantPage(navigate)
  }

  return (
  <style.ContainerLogin>
    <h1>HomePage</h1>
    <button onClick={ ()=> goToProfile(navigate) }>perfil</button>
    <button onClick={ ()=> goToCart(navigate) }>carrinho</button>
    <style.DivImput>
      <style.Label htmlFor='filter'> 
        <style.Icon_Search src={imgSearch}/>
      </style.Label>
      <style.InputFilter type="text"
        name='filter' id='filter'
        value={inputName} onChange={(event)=> setInputName(event.target.value)}
      />
    </style.DivImput>
    <style.Restaurant_Contain>
      {loading  && <p>Carregando</p>}
      {list.restaurants && !loading && list.restaurants.filter( (restaurant) => {
        return restaurant.name.toLowerCase().includes(inputName.toLowerCase())       
        }).map((restaurant)=>{
        return(
        <style.Restaurant_Card
          key={restaurant.id}
          onClick={ ()=> takeRestaurantId(restaurant.id)}>
          <style.Img src={restaurant.logoUrl}/>
            {restaurant.name}
          </style.Restaurant_Card> 
      )})}
    </style.Restaurant_Contain>
  </style.ContainerLogin>
 );
}

/* {rests.map((rest, i)=>{
              return(
                <ul key={i} onClick={()=>{
                  localStorage.setItem("idRest", rest.id)
                  goToRestaurantPage(navigate)
                }}>
                  {rest.name}
                </ul>
              )
                })} */
 // const [ catalog, setCatalog ] = useState([])
  // const getRestaurant = (quantity,ID) => {
  //   let teste = [...restaurantDetail]
  //   if(restaurantDetail.length < quantity) {
  //     return setRestaurantDetail([...teste,ID])
  //   }
  // }
  // let listCatalog = []
  // useEffect( () => {
  // (data.restaurants && data.restaurants.length > 0 ?
  //  data && data.restaurants.forEach( (restaurant) => {
  //   axios.get(`${BASE_URL}restaurants/${restaurant.id}`, { headers: { auth:token } })
  //     .then( (response) => {
  //       listCatalog.push(response.data.restaurant)
  //       if(listCatalog.length === data.restaurants.length){
  //         setCatalog(listCatalog)
  //       }
  //     })
  //   })
  // : console.log("batata"))
    
  // // console.log(data.length)    
  // },[data])
  
  // const myHeader = {
  //     headers:{
  //       auth:localStorage.getItem("token")
  //     }
  // }

  // useEffect(() => {
  //   data.data && data.data.restaurants && setRests(data.data.restaurants)    
  // },[])

  /* {catalog && catalog.map( (prod,index) => {
      // console.log(prod)
      return (
        <>
        <p>{prod.name}</p>
        {prod.products.map( (test) => {
          return (
            <h2>{test.name}</h2>
          )
        })}
        </>
        
      )
    })} */