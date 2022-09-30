import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/url';
import { useProtect } from '../../hooks/useProtect';
import { goToHomePage } from '../../routes/cordinator';
export default function CartPage() {
  useProtect()
  const navigate = useNavigate()
  const header = { 
    headers:{ auth:localStorage.getItem("token")
  }}

  const dataForCartToAxios = JSON.parse(localStorage.getItem("dataForAxios"));
  const listProductCart = JSON.parse(localStorage.getItem("listProducts"));
  const [ dataForAxios, setDataForAxios ] = useState([]); // aqui recebe só o id e a quantidade //
  const [ listProducts, setListProducts ] = useState([]); // monta um array com os produtos adicionados //
  // const test1 = {products: dataForAxios} // esse é um teste para ver como recebe os dados
  // console.log(test1)
  useEffect( ()=> {
    (dataForCartToAxios !== null && dataForCartToAxios !== undefined && setDataForAxios(dataForCartToAxios))        
  },[]);
  useEffect( ()=> {
    (listProductCart !== null && listProductCart !== undefined && setListProducts(listProductCart))
  },[]);
  // abaixo a função que manda os pedidos para o Carrinho / CartPage //
  

 return (
   <div>
        <h1>Meu Carrinho</h1>
        <button onClick={() => goToHomePage(navigate)}>voltar</button>
   </div>
 );
}
