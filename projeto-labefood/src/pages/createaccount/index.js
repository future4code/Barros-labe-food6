import React, { useState } from "react";
import { 
    Button, 
    Container, 
    Header, 
    Title,Text, 
    Input, 
    Subtitle, 
    ImageLogo, 
    ButtonHeader, 
    ContainerPrinc 
} from "./styled";
import rappi4 from "../../img/rappi4.jpeg"
import icon from "../../img/icon.png"
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/cordinator";
import useForm from "../../hooks/useForm";
import {
    InputGroup,
    InputRightElement
  } from '@chakra-ui/react'
  import { FaEyeSlash,FaEye } from "react-icons/fa";

export const CreateAccount = () => {
    const navigate = useNavigate
    const [ form, onChange ] = useForm({name:"", email:"", cpf:"", password:"", confirm:""})
    const [showPassword, setShowPassord] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const onClickShowPassword = () => {
        setShowPassord(!showPassword);
    }
    
    const onClickShowConfirm = () => {
        setShowConfirm(!showConfirm);
    }

   return(
    <>
    <Header>
        <ButtonHeader onClick={ ()=> goToLogin(navigate) }>
        <img src={icon}></img>
        </ButtonHeader>
    </Header>
        
    <ContainerPrinc>
    <Container>
        <ImageLogo src={rappi4}></ImageLogo>
        <Title>
    <Text>Cadastrar</Text>
        </Title>

 <form onSubmit="">
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
    type="text"
    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
    value={form.cpf}
    onChange={onChange}
    placeholder="000.000.000-00"></Input>

    <Subtitle>Senha*</Subtitle>
    <InputGroup size='md'>
    <Input 
    name="password"
    type={showPassword ? 'text' : 'password'}
    value={form.password}
    onChange={onChange}
    pr='2.5rem'
    placeholder="Senha">
    </Input>
    <InputRightElement width='8.1rem' height='4.5rem' >
        <Button 
        h='1.75rem' 
        size='sm' 
        onClick={onClickShowPassword}>
        {showPassword ? <FaEyeSlash/> :  <FaEye/> }
        </Button>
      </InputRightElement>
    </InputGroup>

    <Subtitle>Confirmar*</Subtitle>
    <InputGroup>
    <Input 
    name="confirm"
    type={showConfirm? 'text' : 'password'}
    value={form.confirm}
    onChange={onChange}
    placeholder="Confirmar">
    </Input>
    <InputRightElement width='8.1rem' height='4.5rem'>
        <Button 
        h='1.75rem' 
        size='sm' 
        onClick={onClickShowConfirm}>
        {showConfirm ? <FaEyeSlash/> :  <FaEye/> }
        </Button>
      </InputRightElement>
    </InputGroup>
    
    <Button>
        <button type="submit" onClick={() => (navigate)}>Criar</button>
    </Button>
    </form>
    </Container>
</ContainerPrinc>
    </>
   )
}


