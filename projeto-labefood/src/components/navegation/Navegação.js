import home from '../../img/casinha.png'
import perfil from '../../img/perfil.png'
import carrinho from '../../img/carrinho.png'
import { ContainerNavegacao } from './styledNav'

export default function Navegacao(){

    return(
        <ContainerNavegacao>
            <button><img src={home}/></button>
            <button><img src={carrinho}/></button>
            <button><img src={perfil}/></button>
        </ContainerNavegacao>
    )
}