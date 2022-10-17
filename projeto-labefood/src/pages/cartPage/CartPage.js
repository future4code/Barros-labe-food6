import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import Loading from '../../components/loading/loading';

import Navegacao from '../../components/navBar/Navegação';
import { BASE_URL } from '../../constants/url';
import { useProtect } from '../../hooks/useProtect';
import useRequestData from '../../hooks/useRequestData';

import * as style from "./style"
export default function CartPage() {
  useProtect()
  const header = { headers:{ auth:localStorage.getItem("token")}}
  const [address, error, loading ] = useRequestData(`${BASE_URL}profile/address`,header)

  const dataForCartToAxios = JSON.parse(localStorage.getItem("dataForAxios"));
  const listProductCart = JSON.parse(localStorage.getItem("listProducts"));
  const shipping = localStorage.getItem("Shipping")
  const [ total, setTotal] = useState(0) // essa variavel ira receber o valores somados e multiplicados
  const [ dataForAxios, setDataForAxios ] = useState([]); // aqui recebe só o id e a quantidade //
  const [ listProducts, setListProducts ] = useState([]); // monta um array com os produtos adicionados //
  // const test1 = {products: dataForAxios} // esse é um teste para ver como recebe os dados
  // console.log(test1)
  console.log(address)
  useEffect( ()=> {
    (dataForCartToAxios !== null && dataForCartToAxios !== undefined && setDataForAxios(dataForCartToAxios))        
  },[]);
  useEffect( ()=> {
    (listProductCart !== null && listProductCart !== undefined && setListProducts(listProductCart))
  },[]);
  useEffect( () => {
    setTotal(sum())
  },[listProducts])
  // abaixo a funcao que remove um produto //
  const removeCart = (product) => {
    let removeProduct = listProducts.filter( (prod)=> {
      return prod.id !== product.id 
    })
    let newArrayForAxios = dataForAxios.filter( (prod) => {
        return prod.id !== product.id
    })
    setListProducts(removeProduct)
    setDataForAxios(newArrayForAxios)
    localStorage.setItem("listProducts",JSON.stringify(removeProduct))
    localStorage.setItem("dataForAxios", JSON.stringify(newArrayForAxios))
  } 
  //Abaixo a função que soma os valores e multiplica pelas quantidades
  const sum = () => { 
    let soma = 0
    listProducts.forEach( product => soma = soma + product.price * product.quantity)
    return soma;
  }

  const cart = listProducts && listProducts.map( (product) => {
    return (
      <style.Products key={product.id}>
        <div>
          <img src={product.photoUrl}/>
        </div>
        <main>
          <div id='quantity'> <span>{product.quantity}</span></div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span id='price'>R$ {product.price.toFixed(2)}</span>
          <button id='btnRemove' onClick={ ()=> {removeCart(product)}}>remover</button>
        </main>
      </style.Products>
    )
  })
 return (
   <style.ContainerCart>
        <style.Title>
          <style.TextTitle>Meu Carrinho</style.TextTitle>
        </style.Title>
        <hr/>
        {loading && <Loading/>}
        {!loading && address && address.address &&
          <div className='div_Address'>
            <span>Endereço de entrega</span>
            <p>{address.address.street}, {address.address.number}</p>
          </div>
        }
        {cart.length === 0 ? <p id='empt'> Carrinho vazio</p> : cart}
        <p>preco {total + Number(shipping)} </p>
        <Navegacao/>
   </style.ContainerCart>
 );
}
