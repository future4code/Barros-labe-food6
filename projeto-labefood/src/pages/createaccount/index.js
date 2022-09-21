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
    ContainerPrinc, 
    ContainerBase,
    ContainerLogin,
    TittleLogin,
    InputCamp,
    ButtonCamp,
    LoginCamp,
    ContainerCadastro
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
  import ImgLogo from '../../imgs/logo.png'

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

    const [isName, setIsName] = useState(true)

    const onSubmit = () =>{
        setIsName(/"[a-z\s]+$"/.test(form.name))
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

      <LoginCamp>
        <TittleLogin>
          <img src={ImgLogo}/>
          <span>Cadastrar</span>
        </TittleLogin>

        <form onSubmit={onSubmit}>
        
            <InputCamp>
                <div>
                    <label>Nome*</label>
                        <input 
                            placeholder='Bruna Oliveira'
                            name='name'
                            type='text'
                            value={form.name}
                            onChange={onChange}  
                            required
                        />

                    <label>Email*</label>
                        <input 
                            placeholder='email@email.com'
                            pattern="/[a-zA-Z0-9]+@[a-z]+[.a-z]?/"
                            name='email'
                            type='email'
                            value={form.email}
                            onChange={onChange}  
                        />

                    <label>CPF*</label>
                        <input 
                            placeholder='333.333.333-33'
                            name='cpf'
                            type='text'
                            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                            value={form.cpf}
                            onChange={onChange}  
                        />

                    <label>Senha*</label>
                        <input
                            placeholder='Mínimo 6 caracteres'
                            name='password'
                            type='password'
                            value={form.password}
                            onChange={onChange}  
                        ></input>

                    <label>Confirmar*</label>
                        <input
                            placeholder='Mínimo 6 caracteres'
                            name='password'
                            type='password'
                            value={form.password}
                            onChange={onChange}  
                        ></input>

                </div>
            </InputCamp>
        
        <ButtonCamp>
          <button type='submit' colorScheme="teal" variant="ghost" onClick={() => (navigate)}>Criar</button>
        </ButtonCamp>
        </form>
      </LoginCamp>
      </ContainerCadastro>
    </ContainerBase>


     {/*    
 
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
*/}
    </>
   )
}


