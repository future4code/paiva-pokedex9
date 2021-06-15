import React from 'react';
import {HeaderContainer,BallContainer, LogoContainer} from './style'
import PokemonLogo from '../../img/pokemon-logo.png'
import Pokeball from '../../img/pokeball.gif'
import { useHistory } from "react-router-dom";
import { goToPokedex, goToBack } from '../../route/coordinator'
import { Button } from "@chakra-ui/react"

const Header = () => {
    const history = useHistory();

    return(
        <HeaderContainer>
            {console.log(`hisotory` ,history)}
             {/* { history.location.pathname === "/" ? <p></p> :  */}
             <Button 
             size="md"
             height="48px"
             width="200px"
             border="2px"
             borderColor="green.500"
             onClick={goToBack}>Voltar</Button> 
        
            <LogoContainer src={PokemonLogo} alt="Logo Pokemon"/>
            
           <BallContainer>
               <img onClick={goToPokedex} src={Pokeball}/>
           </BallContainer>
        
        </HeaderContainer>

    )

}
export default Header