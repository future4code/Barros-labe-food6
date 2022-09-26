import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/url';
import { ContainerProduct, Products, TittleProducts } from './style';
import useRequestData from "../../hooks/useRequestData"
import Loading from '../../components/loading/loading'

export default function EachProducts() {

const [ restaurant, setRestaurant] = useState({})
const [ categories, setCategories] = useState([])

const myHeader = {
    headers:{
        auth:localStorage.getItem("token")
    }
}    
const [data, isLoading] = useRequestData(`${BASE_URL}restaurants/${localStorage.getItem("idRest")}`, myHeader)

    const getRest = ()=>{
        axios
            .get(`${BASE_URL}restaurants/${localStorage.getItem("idRest")}`, myHeader)
            .then((resp)=>{setRestaurant(resp.data.restaurant)})
            .catch((err)=>{console.log(err);})
}
    useEffect(()=>{
        getRest()
    },[])

    useEffect(()=>{
        if(restaurant.products){
            const newCategory = []
            for(const product of restaurant.products){
                if(!newCategory.includes(product.category)){  // LOGICA PARA BUSCAR NOME DAS CATEGORIAS EXISTENTES
                    newCategory.push(product.category)
                }
            }
            setCategories(newCategory)
        }
    },[restaurant])
    const rest = restaurant.products && categories.map((category, i) => {  // LOGICA PARA EXIBIR NOMES DAS CATEGORIAS
            return(
                <div key={i}>
                    <TittleProducts>
                        <h3>{category}</h3>
                    </TittleProducts>             
                    {   
                        restaurant.products
                            .filter((prod)=>{
                                return prod.category === category // filter com map para renderizar produtos separado por categoria
                            })
                            .map((prod)=>{
                                return(
                                    <ContainerProduct>
                                        <Products>
                                            <div>
                                                <img src={prod.photoUrl}/>
                                            </div>
                                            <main>
                                                <h3>{prod.name}</h3>
                                                <p>{prod.description}</p>
                                                <span>R$ {prod.price.toFixed(2)}</span>
                                                <button onClick={()=>{addCart(prod.id)}}>adicionar</button>
                                            </main>
                                        </Products>
                                    </ContainerProduct>
                                )
                            })
                    }
                </div>  
            )
        })
    
    

    const addCart = (id)=>{
      document.getElementById("Modal").style.display = "flex"
    localStorage.setItem("idProduct", id)
    }
return (
    <div>
        {isLoading && <Loading/>}
        {!isLoading && rest}
    </div>
 )
}