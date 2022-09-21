import axios from 'axios';
import React from 'react';
import useForm from '../../hooks/useForm.js'
import { BASE_URL } from '../../constants/url'
import { useNavigate } from 'react-router-dom';
import { ContainerBase, ContainerLogin, LoginCamp, TittleLogin, InputCamp, ButtonCamp } from './style.js';
import ImgLogo from '../../imgs/logo.png'

export default function LoginPage() {

  const navigate = useNavigate()

  const [ form, onChange ] = useForm({email:"", password:""})

  const sendLogin = (ev)=>{
    ev.preventDefault()
    axios
      .post(`${BASE_URL}login`,form)
      .then((resp)=>{
        const hasAddress = (resp.data.user.hasAddress)
        if (hasAddress === true) {
          localStorage.setItem("token", resp.data.token)
          navigate("/HomePage")
        }else{
          localStorage.setItem("token", resp.data.token)
          navigate("/EditAddress")
        }

      })
      .catch((err)=>{
        alert(err.response.data.message)
      })
  }

  return(
    <ContainerBase>
      <ContainerLogin>
      <LoginCamp onSubmit={sendLogin}>
        <TittleLogin>
          <img src={ImgLogo}/>
          <span>Entrar</span>
        </TittleLogin>
        <InputCamp>
          <div>
            <label>Email*</label>
            <input 
              placeholder='email@email.com'
              name='email'
              type='email'
              value={form.email}
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
          </div>
        </InputCamp>
        <ButtonCamp>
          <button type='submit' colorScheme="teal" variant="ghost">Acessar</button>
          <p>Não possui cadastro? <a onClick={()=>{navigate("/CreateAccount")}}>Clique aqui.</a></p>
        </ButtonCamp>
      </LoginCamp>
      </ContainerLogin>
    </ContainerBase>
  )
}
