import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/url';
import { ContainerBase, ContainerRestaurant, ContainerSpace, InfoRestaurant, MainRestaurant, ModalCamp, ModalContainer, ModalSide, Products, ProductsCamp, TittleRestaurant } from './style';
import ImgBack from '../../imgs/back.png'
import { useNavigate } from 'react-router-dom';
import {goToHomePage} from '../../routes/cordinator'
import EachProducts from '../../components/restaurantProducts/restaurantProducts';
import { useProtect } from '../../hooks/useProtect';

export default function RestaurantPage() {
    const navigate = useNavigate()
    useProtect()
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

    // Todo o codigo abaixo faz parte da logica para mandar os pedidos para o cart ///
    const dataForCartToAxios = JSON.parse(localStorage.getItem("dataForAxios"));
    const listProductCart = JSON.parse(localStorage.getItem("listProducts"));
    const [ dataForAxios, setDataForAxios ] = useState([]); // aqui recebe só o id e a quantidade //
    const [ produCT, setProduct ] = useState(""); // aqui Recebe todo produto //
    const [ listProducts, setListProducts ] = useState([]); // monta um array com os produtos adicionados //

    useEffect( ()=> {
        (dataForCartToAxios !== null && dataForCartToAxios !== undefined && setDataForAxios(dataForCartToAxios))        
    },[]);
    useEffect( ()=> {
        (listProductCart !== null && listProductCart !== undefined && setListProducts(listProductCart))
    },[]);
    // abaixo a função que manda os pedidos para o Carrinho / CartPage //
    let add_DataForAxios;
    const addCart = ()=>{
        // o produCT recebe o seu valor por props lá do component EachProducts
        alert(`${produCT.name} ------ quantidade: ${quantity}`);
        document.getElementById("Modal").style.display = "none";
        localStorage.setItem("Shipping", restDetail[0] && restDetail[0].shipping)
        // abaixo a parte que manda o objeto pronto para ser usado na api la no cart // 
        add_DataForAxios = [...dataForAxios,{ "id": produCT.id, "quantity": quantity }];
        localStorage.setItem("dataForAxios", JSON.stringify(add_DataForAxios));
        setDataForAxios(add_DataForAxios);
        // abaixo a parte que manda um array dos produtos que foram adicionados/
        listProducts.forEach( (prod) => { // aqui adiciona a quantidade do produto em cada produto que for adicionado
            if(prod.id === produCT.id){ prod["quantity"] = quantity }
        });
        localStorage.setItem("listProducts", JSON.stringify(listProducts));
        setQuantity("")
    };
    // --- /// -------------------------------------------------- /// ----///
 return (
   <ContainerBase>
    <ModalCamp id='Modal'>
        <ModalSide onClick={backHome}/>
        <ModalContainer>
            <h2>Selecione a quantidade desejada</h2>
            <select value={quantity}
              onChange={(ev)=>{setQuantity(Number(ev.target.value))}}
            >   
                <option>Quantidade</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
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
            {restDetail.map((product, i)=>{
                return(
                    <MainRestaurant key={product.id}>
                        <img src={product.logoUrl}/>
                        <InfoRestaurant>
                        <h3>{product.name}</h3>
                        <span>{product.category}</span>
                        <div>
                            <span>{product.deliveryTime} min.</span>
                            <p>Entrega: R$ {product.shipping.toFixed(2)}</p>
                        </div>
                        <span>{product.address}</span>
                        </InfoRestaurant>
                        <ProductsCamp>
                            <EachProducts
                              setProduct = {setProduct}
                              setListProducts = {setListProducts}
                              listProducts = {listProducts}
                              dataForAxios = {dataForAxios}
                              setDataForAxios = {setDataForAxios}
                            />
                        </ProductsCamp>
                    </MainRestaurant>
                )
            })}
        </ContainerSpace>
    </ContainerRestaurant>
   </ContainerBase>
 );
}