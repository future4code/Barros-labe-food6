import React from "react";
import { Button, Container, Header, Title,Text, Input, Subtitle, ButtonHeader } from "./styled";
import icon from "../../img/icon.png"
import { useNavigate } from "react-router-dom";
import { goToProfile } from "../../routes/cordinator";
import useForm from "../../hooks/useForm";


export const MyAddress = () => {
    const navigate = useNavigate()
    const [ form, onChange ] = useForm({street:"", number:"", complement:"", neighbourhood:"", city:"", state:""})
   return(
    <>
    <Header>
        <ButtonHeader onClick={ ()=> goToProfile(navigate) }>
          <img src={icon}></img>
        </ButtonHeader>
    </Header>

    <Container>
        <Title>
    <Text>Meu Endereço</Text>
        </Title>
        
    <Subtitle>Logradouro*</Subtitle>
    <Input 
    name="Logradouro"
    type="text"
    value={form.street}
    onChange={onChange}
    placeholder="Logradouro"></Input>
        
    <Subtitle>Número*</Subtitle>
    <Input
    name="Número"
    type="Number"
    value={form.number}
    onChange={onChange}
    placeholder="Número"></Input>
    
    <Subtitle>Complemento*</Subtitle>
    <Input 
    name="Complemento"
    type="text"
    value={form.complement}
    onChange={onChange}
    placeholder="Complemento"></Input>
    
    <Subtitle>Bairro*</Subtitle>
    <Input
    name="Bairro"
    type="text"
    value={form.neighbourhood}
    onChange={onChange}
    placeholder="Bairro"></Input>

    <Subtitle>Cidade*</Subtitle>
    <Input 
    name="Cidade"
    type="text"
    value={form.city}
    onChange={onChange}
    placeholder="Cidade"></Input>

    <Subtitle>Estado*</Subtitle>
    <Input
    name="Estado"
    type="text"
    value={form.state}
    onChange={onChange}
    placeholder="Estado"></Input>
    
    <Button>
        <button onClick={() => (navigate)}>Salvar</button>
    </Button>
    </Container>
    </>
   )
}

