import home from '../img/casinha.png'
import perfil from '../img/perfil.png'
import carrinho from '../img/carrinho.png'
import { ContainerNavegacao } from './styledNav'
import { useNavigate } from 'react-router-dom'
import { goToCart, goToHomePage, goToProfile } from '../routes/cordinator'

export default function Navegacao(){
    const navigate = useNavigate()

    return(
        <ContainerNavegacao>
            <button onClick={()=> goToHomePage(navigate)} ><img src={home}/></button>
            <button onClick={()=> goToCart(navigate)} ><img src={carrinho}/></button>
            <button onClick={()=> goToProfile(navigate)} ><img src={perfil}/></button>
        </ContainerNavegacao>
    )
}