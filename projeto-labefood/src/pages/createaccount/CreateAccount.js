import React, { useState } from "react";
import {  
    Header,  
    ButtonHeader,  
    ContainerBase,
    TittleLogin,
    InputCamp,
    ButtonCamp,
    LoginCamp,
    ContainerCadastro
} from "./styled";
import icon from "../../img/icon.png"
import { useNavigate } from "react-router-dom";
import { goToEditAddress, goToLogin } from "../../routes/cordinator";
import useForm from "../../hooks/useForm";
import {
    InputGroup,
    InputRightElement,
    Button,
    FormHelperText,
    FormControl
  } from '@chakra-ui/react'
  import { FaEyeSlash,FaEye } from "react-icons/fa";
  import ImgLogo from '../../imgs/logo.png'
import axios from "axios";
import { BASE_URL } from "../../constants/url";

export const CreateAccount = () => {
    const navigate = useNavigate()
    const [ form, onChange ] = useForm({name:"", email:"", cpf:"", password:"", confirm:""})
    const [showPassword, setShowPassord] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    
    const onClickShowPassword = () => {
        setShowPassord(!showPassword);
    }
    
    const onClickShowConfirm = () => {
        setShowConfirm(!showConfirm);
    }
    
    // const [isName, setIsName] = useState(true)
    
    //const onSubmit = () =>{
        //setIsName(/"[a-z\s]+$"/.test(form.name))
        // }
        
        
        const sendCreate = (e)=>{
            e.preventDefault();
            const body = {name: form.name, 
                          email: form.email,
                          cpf: form.cpf, 
                          password: form.password,
                          confirm: form.confirm
                    }
                     axios
                      .post(`${BASE_URL}signup`,body)
                      .then((resp)=>{
                        localStorage.setItem("token", resp.token)
                        goToEditAddress(navigate)
                      })
                      .catch((error) => {
                      alert(error.resp.data.message)  
                      
                    })
                }
                    
   return(
    <>

    <ContainerBase> 

      <ContainerCadastro>

      <Header>
        <ButtonHeader onClick={ ()=> goToLogin(navigate) }>
        <img src={icon}></img>
        </ButtonHeader>
    </Header>

      <LoginCamp onSubmit={()=>sendCreate()}>
        <TittleLogin>
          <img src={ImgLogo}/>
          <span>Cadastrar</span>
        </TittleLogin>

        {/* <FormControl isInvalid={!isValid}  > */}
        
            <InputCamp>
                <div>
                    <label>Nome*</label>
                        <input 
                            placeholder='Bruna Oliveira'
                            name='name'
                            type='text'
                            pattern=".{2,}"
                            value={form.name}
                            onChange={onChange}  
                            required
                        />

                    <label>Email*</label>
                        <input 
                            placeholder='email@email.com'
                            pattern="/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/"
                            name='email'
                            type='email'
                            value={form.email}
                            onChange={onChange}  
                            required
                        />

                    <label>CPF*</label>
                        <input 
                            placeholder='333.333.333-33'
                            name='cpf'
                            type='text'
                            pattern="^\d{3}\.\d{3}\.\d{3}\-\d{2}$"
                            value={form.cpf}
                            onChange={onChange}  
                            required
                        />

                    <label>Senha*</label>
                            <InputGroup size='md'>
                        <input
                            placeholder='Mínimo 6 caracteres'
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            pattern='.{6,}'
                            value={form.password}
                            onChange={onChange}  
                            errorMessage="A senha deve possuir no mínimo 6 caracteres"
                            required
                        ></input>
                       <InputRightElement width='4.1rem' height='4.5rem' margin='1rem' >
                       <Button 
                            backgroundColor='white'
                            h='1.75rem' 
                            size='sm' 
                            type='button'
                            onClick={onClickShowPassword}>
                            {showPassword ? <FaEye/> : <FaEyeSlash/>  }
                       </Button>
                       </InputRightElement>
                       </InputGroup>

                    <label>Confirmar*</label>
                            <InputGroup>
                        <input
                            placeholder='Confirme a senha anterior'
                            name='confirm'
                            type={showConfirm? 'text' : 'password'}
                            pattern='.{6,}'
                            value={form.confirm}
                            onChange={onChange}
                            errorMessage="A senha deve possuir no mínimo 6 caracteres"  
                            required
                        ></input>

                      <InputRightElement width='4.1rem' height='5.5rem' margin='1rem' >
                      <Button 
                            backgroundColor='white'
                            h='1.75rem' 
                            size='sm' 
                            type='button'
                            onClick={onClickShowConfirm}>
                            {showConfirm ? <FaEye/> : <FaEyeSlash/>  }
                      </Button>
                    </InputRightElement>
                    </InputGroup>
                    {/*!isValid ? (
                    <FormHelperText as="p">
                    A senha deve ser a mesma que a anterior
                    </FormHelperText> 
                    ) : undefined*/}
                </div>
            </InputCamp>
        
        <ButtonCamp>
          <button type='submit' colorScheme="teal" variant="ghost" >Criar</button>
        </ButtonCamp>
        {/* </FormControl> */}
      </LoginCamp>
      </ContainerCadastro>
    </ContainerBase>
</>
   )
}


