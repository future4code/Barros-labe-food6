import React from "react";
import { Button, Container, Header, Title,Text, Input, Subtitle, ImageLogo, ButtonHeader } from "./styled";
import rappi4 from "../../img/rappi4.jpeg"
import icon from "../../img/icon.png"
import { useNavigate } from "react-router-dom";
import { goToProfile } from "../../routes/cordinator";
import useForm from "../../hooks/useForm";

export const CreateAccont = () => {
    const navigate = useNavigate
    const [ form, onChange ] = useForm({name:"", email:"", cpf:"", password:""})

   return(
    <>
    <Header>
        <ButtonHeader onClick={ ()=> goToProfile(navigate) }>
        <img src={icon}></img>
        </ButtonHeader>
    </Header>

    <Container>
        <ImageLogo src={rappi4}></ImageLogo>
        <Title>
    <Text>Cadastrar</Text>
        </Title>
        
    <Subtitle>Nome*</Subtitle>
    <Input 
    name="name"
    type="text"
    value={form.name}
    onChange={onChange}
    placeholder="Nome"></Input>
    
    <Subtitle>E-mail*</Subtitle>
    <Input
     name="email"
     type="email"
     value={form.email}
     onChange={onChange}
     placeholder="E-mail"></Input>
    
    <Subtitle>CPF*</Subtitle>
    <Input 
    name="cpf"
    type="Number"
    value={form.cpf}
    onChange={onChange}
    placeholder="CPF"></Input>

    <Subtitle>Senha*</Subtitle>
    <Input 
    name="password"
    type="password"
    value={form.password}
     onChange={onChange}
    placeholder="Senha"></Input>

    <Subtitle>Confirmar*</Subtitle>
    <Input 
    name="password"
    type="password"
    value={form.password}
     onChange={onChange}
    placeholder="Confirmar"></Input>
    
    <Button>
        <button onClick={() => (navigate)}>Criar</button>
    </Button>
    </Container>
    </>
   )
}


