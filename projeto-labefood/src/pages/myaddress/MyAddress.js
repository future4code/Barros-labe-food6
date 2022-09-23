import React from "react";
import { useState } from "react";
import { Button, Container, Header, Title,Text, Input, Subtitle, ButtonHeader } from "./styled";
import icon from "../../img/icon.png"
import { useNavigate } from "react-router-dom";
import { goToProfile } from "../../routes/cordinator";
import useForm from "../../hooks/useForm";
import { ContainerBase } from "../myaddress/styled";
import { BASE_URL } from "../../constants/url";
import axios from "axios";


export const MyAddress = () => {

        const token = localStorage.getItem('token')
    
        const navigate = useNavigate()

        const [rua, setRua] = useState("")
        const [numero, setNumero] = useState("")
        const [bairro, setBairro] = useState("")
        const [cidade, setCidade] = useState("")
        const [estado, setEstado] = useState("")
        const [complemento, setComplemento] = useState("")

    function enviarDados (event) {
        event.preventDefault()

        const URL_Adress = `${BASE_URL}address`

        const body = {
            street: rua,
            number: numero,
            neighbourhood: bairro,
            city: cidade,
            state: estado,
            complement: complemento 
        }
        axios.put(URL_Adress, body, {
            headers: {
                auth: token
            }
        }) .then (() =>{
            navigate("/profile")
        }) .catch ((e) => {
            alert(e)
        })

    }
    

    const MudaNumero = (event) => {   
        setNumero( event.target.value )
    }

    const MudaBairro = (event) => {
        setBairro (event.target.value)
    }

    const MudaRua = (event) => {   
        setRua( event.target.value )
    }

   const MudaEstado = (event) => {
        setEstado  (event.target.value)
   }

   const MudaCidade = (event) => {
        setCidade (event.target.value)
   }

   const MudaComplemento = (event) => {
        setComplemento (event.target.value)
   }

    return(
    <ContainerBase>
        <Header>
            <ButtonHeader onClick={ ()=> goToProfile(navigate) }>
            <img src={icon}></img>
            </ButtonHeader>
        </Header>

        <Container>
            <Title>
                <Text>Meu Endereço</Text>
            </Title>
            
            <form onSubmit={enviarDados}>
            <Subtitle>Logradouro*</Subtitle>
            <Input 
            name="Logradouro"
            type="text"
            required
            onChange={MudaRua}
            placeholder="Logradouro"></Input>
                
            <Subtitle>Número*</Subtitle>
            <Input
            name="Número"
            type="Number"
            required
            onChange={MudaNumero}
            placeholder="Número"></Input>
            
            <Subtitle>Bairro*</Subtitle>
            <Input
            name="Bairro"
            type="text"
            required
            onChange={MudaBairro}
            placeholder="Bairro"></Input>

            <Subtitle>Cidade*</Subtitle>
            <Input 
            name="Cidade"
            type="text"
            required
            onChange={MudaCidade}
            placeholder="Cidade"></Input>

            <Subtitle>Estado*</Subtitle>
            <Input
            name="Estado"
            type="text"
            required
            onChange={MudaEstado}
            placeholder="Estado"></Input>

            <Subtitle>Complemento*</Subtitle>
            <Input 
            name="Complemento"
            type="text"
            onChange={MudaComplemento}
            placeholder="Complemento"></Input>
            
            <Button>
                <button>Enviar</button>
            </Button>
            </form>
        </Container>
    
    </ContainerBase>
   )
}

