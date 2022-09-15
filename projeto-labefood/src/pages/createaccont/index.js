import React from "react";
import { Button, Container, Header, ImageIcon, Title,Text, Input, Subtitle, ImageLogo } from "./styled";
import rappi4 from "../img/rappi4.jpeg"
import icon from "../img/icon.png"

export const CreateAccont = () => {
   return(
    <>
    <Header>
        <ImageIcon src={icon}></ImageIcon>
    </Header>

    <Container>
        <ImageLogo src={rappi4}></ImageLogo>
        <Title>
    <Text>Cadastrar</Text>
        </Title>
        
    <Subtitle>Nome*</Subtitle>
    <Input placeholder="Nome"></Input>
    
    <Subtitle>E-mail*</Subtitle>
    <Input placeholder="E-mail"></Input>
    
    <Subtitle>CPF*</Subtitle>
    <Input placeholder="CPF"></Input>

    <Subtitle>Senha*</Subtitle>
    <Input placeholder="Senha"></Input>

    <Subtitle>Confirmar*</Subtitle>
    <Input placeholder="Confirmar"></Input>
    
    <Button>
        <button onClick={() => (navigate)}>Criar</button>
    </Button>
    </Container>
    </>
   )
}

