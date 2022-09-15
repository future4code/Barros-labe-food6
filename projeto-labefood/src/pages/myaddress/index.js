import React from "react";
import { Button, Container, Header, ImageIcon, Title,Text, Input, Subtitle } from "./styled";
import icon from "../../img/icon.png"
import { useNavigate } from "react-router-dom";


export const MyAddress = () => {
    const navigate = useNavigate()
   return(
    <>
    <Header>
        <ImageIcon src={icon}></ImageIcon>
    </Header>

    <Container>
        <Title>
    <Text>Meu Endereço</Text>
        </Title>
        
    <Subtitle>Logradouro*</Subtitle>
    <Input placeholder="Logradouro"></Input>
        
    <Subtitle>Número*</Subtitle>
    <Input placeholder="Número"></Input>
    
    <Subtitle>Complemento*</Subtitle>
    <Input placeholder="Complemento"></Input>
    
    <Subtitle>Bairro*</Subtitle>
    <Input placeholder="Bairro"></Input>

    <Subtitle>Cidade*</Subtitle>
    <Input placeholder="Cidade"></Input>

    <Subtitle>Estado*</Subtitle>
    <Input placeholder="Estado"></Input>
    
    <Button>
        <button onClick={() => (navigate)}>Salvar</button>
    </Button>
    </Container>
    </>
   )
}

