import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/url';
import { ContainerBase, ContainerRestaurant, EachProducts, InfoRestaurant, MainRestaurant, Products, TittleRestaurant } from './style';
import ImgBack from '../../imgs/back.png'
import { useNavigate } from 'react-router-dom';
import {goToHomePage} from '../../routes/cordinator'

export default function RestaurantPage() {
    const navigate = useNavigate()

    const [ restDetail, setRestDetail ] = useState([])
    const myHeader = {
        headers:{
            auth:localStorage.getItem("token")
        }
    }

    useEffect(()=>{
        axios
            .get(`${BASE_URL}restaurants/${localStorage.getItem("idRest")}`, myHeader)
            .then((resp)=>{
                setRestDetail([resp.data.restaurant])
                console.log([resp.data.restaurant]);
            })
            .catch((err)=>{console.log(err)})
        },[])

 return (
   <ContainerBase>
    <ContainerRestaurant>
        <TittleRestaurant>
            <img onClick={()=>{goToHomePage(navigate)}} src={ImgBack}/>
            <h2> Restaurante</h2>
        </TittleRestaurant>
        <MainRestaurant>
            {restDetail.map((product, i)=>{
                return(
                    <>
                        <img src={product.logoUrl}/>
                        <InfoRestaurant>
                        <h3>{product.name}</h3>
                        <span>{product.category}</span>
                        <div>
                            <span>{product.deliveryTime} min.</span>
                            <p>Frete: R$ 6,00</p>
                        </div>
                        <span>{product.address}</span>

                        </InfoRestaurant>
                            <h3>Produtos</h3>
                        <Products>
                            {product.products.map((product)=>{
                                console.log(product);
                                return(
                                    <EachProducts>
                                        <div>
                                            <img src={product.photoUrl}/>
                                        </div>
                                        <main>
                                            <span>{product.name}</span>
                                            <p>{product.description}</p>
                                            <label>R$ {product.price.toFixed(2)}</label>
                                            <button>Adicionar</button>
                                        </main>
                                    </EachProducts>
                                )
                            })}    
                        </Products>
                    </>
                )
            })}
        </MainRestaurant>
    </ContainerRestaurant>
   </ContainerBase>
 );
}