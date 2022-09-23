import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/url';
import { ContainerBase, ContainerRestaurant, ContainerSpace, InfoRestaurant, MainRestaurant, ModalCamp, ModalContainer, ModalSide, Products, ProductsCamp, TittleRestaurant } from './style';
import ImgBack from '../../imgs/back.png'
import { useNavigate } from 'react-router-dom';
import {goToHomePage} from '../../routes/cordinator'
import EachProducts from '../../components/restaurantProducts/restaurantProducts';

export default function RestaurantPage() {
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState("")
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
            })
            .catch((err)=>{console.log(err)})
        },[])

    const backHome = ()=>{
        document.getElementById("Modal").style.display = "none"
    }
    
    const addCart = ()=>{
        alert(`${localStorage.getItem("idProduct")}------ qtd: ${quantity}`)
        document.getElementById("Modal").style.display = "none"
    }

 return (
   <ContainerBase>
    <ModalCamp id='Modal'>
        <ModalSide onClick={backHome}/>
        <ModalContainer>
            <h2>Selecione a quantidade desejada</h2>
            <select 
                value={quantity}
                onChange={(ev)=>{setQuantity(ev.target.value)}}
            >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        
                <button onClick={addCart}>Adicionar no Carrinho</button>
            
        </ModalContainer>
        <ModalSide onClick={backHome}/>
    </ModalCamp>
    <ContainerRestaurant>
        <TittleRestaurant>
            <img onClick={()=>{goToHomePage(navigate)}} src={ImgBack}/>
            <h2> Restaurante</h2>
        </TittleRestaurant>
        <ContainerSpace>
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
                        <ProductsCamp>
                            <EachProducts
                                products = {product}
                            />
                        </ProductsCamp>
                    </>
                )
            })}
        </MainRestaurant>
        </ContainerSpace>
    </ContainerRestaurant>
   </ContainerBase>
 );
}