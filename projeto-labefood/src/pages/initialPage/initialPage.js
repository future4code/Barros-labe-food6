import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styleInitialPage"
import logo from "../../img/logoRappi4.svg"
import { goToLogin } from "../../routes/cordinator";

export const InitialPage = () => {
  const navigate = useNavigate()
  setTimeout( () => goToLogin(navigate) , 4000)
  
  return (
    <style.Container>
      <style.Logo src={logo}/>
    </style.Container>
  )
}