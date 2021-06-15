import React from "react";
import { HeaderContainer, BallContainer, LogoContainer } from "./style";
import PokemonLogo from "../../img/pokemon-logo.png";
import Pokeball from "../../img/pokeball.gif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoContainer src={PokemonLogo} alt="Logo Pokemon" />
      </Link>
      <BallContainer>
        <Link to="/pokedex">
          <img src={Pokeball} alt="imagem pokebola" />
        </Link>
      </BallContainer>
    </HeaderContainer>
  );
};
export default Header;
