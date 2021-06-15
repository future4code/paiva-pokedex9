import React from 'react';
import {HeaderContainer,BallContainer, LogoContainer} from './style'
import PokemonLogo from '../../img/pokemon-logo.png'
import Pokeball from '../../img/pokeball.gif'
import { useHistory } from "react-router-dom";


const Header = () => {
    const history = useHistory();

    const goToPokedex = () =>{
        history.push("/pokedex")
    }

    return(
        <HeaderContainer>
       
            <LogoContainer src={PokemonLogo} alt="Logo Pokemon"/>
          
           <BallContainer>
               <img onClick={goToPokedex} src={Pokeball}/>
           </BallContainer>
        
        </HeaderContainer>

    )

}
export default Header