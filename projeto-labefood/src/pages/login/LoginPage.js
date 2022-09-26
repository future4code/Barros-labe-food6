import axios from 'axios';
import React, { useState } from 'react';
import useForm from '../../hooks/useForm.js'
import { BASE_URL } from '../../constants/url'
import { useNavigate } from 'react-router-dom';
import { ContainerBase, ContainerLogin, LoginCamp, TittleLogin, InputCamp, ButtonCamp } from './style.js';
import ImgLogo from '../../imgs/logo.png'
import ImgHiddenPass from '../../img/senha.png'

export default function LoginPage() {

  const navigate = useNavigate()
  const [ showPass, setShowPass ] = useState(false)
  const [ form, onChange ] = useForm({email:"", password:""})

  const sendLogin = (ev)=>{
    ev.preventDefault()
    axios
      .post(`${BASE_URL}login`,form)
      .then((resp)=>{
        const hasAddress = (resp.data.user.hasAddress)
        if (hasAddress === true) {
          navigate("/HomePage")
          localStorage.setItem("token", resp.data.token)
        }else{
          navigate("/CreateAddress")
        }

      })
      .catch((err)=>{
        alert(err.response.data.message)
      })
  }

  const hiddenPass = ()=>{
    showPass === true ? setShowPass(false) : setShowPass( true)
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
              autoFocus
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
              type={ showPass ? 'text' : 'password'}
              value={form.password}
              onChange={onChange}  
              />
              <p>< img id='troca' onClick={hiddenPass} src={ImgHiddenPass}/></p>
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
