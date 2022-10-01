import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToRestaurantPage } from '../../routes/cordinator';
import { useProtect } from '../../hooks/useProtect'
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { Card, FotoRestaurante, Grid, MainContainer, NomeRestaurante, RodapeCard, RodapeDetalhe } from './style';
import Loading from '../../components/loading/loading';
import Navegacao from '../../components/navBar/Navegação';



export default function HomePage() {
  const navigate = useNavigate()

  const [ rests, setRests ] = useState([])
  const [ isLoading, setIsloading ] = useState(true)
    useProtect()
    const myHeader = {
        headers:{
            auth:localStorage.getItem("token")
        }
    }

    const listRestaurants = () => {
      setIsloading(true)
      axios.get(`${BASE_URL}restaurants`, myHeader )
      .then((resp)=>{
        setRests(resp.data.restaurants)
        setIsloading(false)
      }).catch( (resp) => { 
        alert(resp.message)
      })
  }

    useEffect(() => { listRestaurants()},[])

  const rest = rests.map((rest, i)=>{
    return(
      <Card key={i} onClick={()=>{
        localStorage.setItem("idRest", rest.id)
        goToRestaurantPage(navigate)
      }}>
        <FotoRestaurante src={rest.logoUrl}/>
        <NomeRestaurante>{rest.name}</NomeRestaurante>
        <RodapeCard>
          <RodapeDetalhe>{rest.deliveryTime} Min</RodapeDetalhe>
          <RodapeDetalhe>R${rest.shipping.toFixed(2)}</RodapeDetalhe>
        </RodapeCard>
      </Card>
      )
        })

 return (
  <MainContainer>
    <Grid>
      <div>
          
          <NomeRestaurante>Restaurantes:</NomeRestaurante>
      </div>

        <main>
          {isLoading && <Loading/>}
          {!isLoading && rest}
          
        </main>
      </Grid>
      <Navegacao/>
   </MainContainer>
 );
}
