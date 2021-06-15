import React from 'react';
import {HeaderContainer,BallContainer, Logo, LogoContainer} from './style'
import PokemonLogo from '../../img/pokemon-logo.png'
import Pokeball from '../../img/pokeball.gif'


const Header = () => {
    return(
        <HeaderContainer>
       
            <LogoContainer src={PokemonLogo} alt="Logo Pokemon"/>
          
           <BallContainer>
               <img src={Pokeball}/>
           </BallContainer>
        
        </HeaderContainer>

    )

}
export default Header