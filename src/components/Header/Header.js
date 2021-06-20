import React from "react";
import { HeaderContainer, BallContainer, LogoContainer } from "./style";
import PokemonLogo from "../../img/pokemon-logo.png";
import Pokeball from "../../img/pokeball.gif";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  return (
    <HeaderContainer>
      <Link to="/">
        <LogoContainer src={PokemonLogo} alt="Logo Pokemon" />
      </Link>
      <BallContainer> 
        {history.location.pathname === "/pokedex" ? <p></p> : <Link to="/pokedex">
          <img src={Pokeball} alt="imagem pokebola" />
        </Link>
        }
        
      </BallContainer>
    </HeaderContainer>
  );
};
export default Header;
