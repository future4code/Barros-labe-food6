import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/url';
import { ContainerProduct, Products, TittleProducts } from './style';
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/loading/loading'

export default function EachProducts({setProduct,setListProducts,listProducts,dataForAxios,setDataForAxios}) {
    const myHeader = {
        headers:{
            auth:localStorage.getItem("token")
        }
    }    

const [restaurant, setRestaurant] = useState({})
const [categories, setCategories] = useState([])
const [ data, error, isLoading ] = useRequestData(`${BASE_URL}restaurants/${localStorage.getItem("idRest")}`, myHeader)
    const getRest = ()=>{
        axios
            .get(`${BASE_URL}restaurants/${localStorage.getItem("idRest")}`, myHeader)
            .then((resp)=>{setRestaurant(resp.data.restaurant)})
            .catch((err)=>{console.log(err)})
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

    // a funcao abaixo passa tudo que é nessecario para o cart, via props para a outra funcao que esta no component pai, e cria um array com os produtos adicionados
    let newListProducts;
    const addCart = (product)=>{
      document.getElementById("Modal").style.display = "flex"
        setListProducts(product) // monta a lista de produtos
        setProduct(product) // pega o produto
        newListProducts = [...listProducts, product] // atualiza a lista de produtos
        setListProducts(newListProducts)
    }
    // funcao abaixo remove o produto da lista do carrinho e da lista de objetos que vai ser usada no axios
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
        getRest()
    }  

    // a função abaixo faz uma verificacao se os produtos que tem em cada um dos arrays sao iguais, se forem ela adiciona a quantidade no array original
    listProducts.map( (prod) => {
        return restaurant && restaurant.products && restaurant.products.forEach((product) => {
            if (product.id === prod.id){
                product["quantity"] = prod.quantity
            }
        })
    })
    /// --- /// -////-/ ---------------------------------------/ /
    
  const showRest = restaurant.products && categories.map((category, i) =>{
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
                        .map((prod,index)=>{
                            return(
                                <ContainerProduct key={prod.id}>
                                    <Products>
                                        <div>
                                            <img src={prod.photoUrl}/>
                                        </div>
                                        <main>
                                            {prod.quantity && <div id='quantity'> <span>{prod.quantity}</span></div>} 
                                            <h3>{prod.name}</h3>
                                            <p>{prod.description}</p>
                                            <span id='price'>R$ {prod.price.toFixed(2)}</span>
                                            {prod.quantity ? // aqui faz uma verificação se existe a quantidade, e caso exista ele muda o botao para o de remover
                                                <button id='btnRemove' onClick={ ()=> {removeCart(prod)}}>remover</button>
                                                 : 
                                              <button  onClick={()=>{addCart(prod)}}>adicionar</button>
                                            }
                                        </main>
                                    </Products>
                                </ContainerProduct>
                            )
                        })
                }  
        </div>
    )
  })
               

    return (
        <>
            {isLoading && <Loading/>}
            {!isLoading && showRest}
        </>
    )
}