import React, { useState } from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import {
  Container,
  CircleBlue,
  CircleRed,
  CircleYellow,
  CircleGreen,
  ContainerCircles,
  BorderBlack,
  BorderWhite,
  ImgPoke,
  Icon,
  ButtonPoke,
  ContainerButton,
} from "../CardPoke/style";
import {EachPokemonContainer} from './style'
// import useRequestImage from "../../hooks/useRequestImage";


const EachPokemon = (props) => {
  

  return (
    <EachPokemonContainer>
      <Container>
        <ContainerCircles>
          <CircleBlue />
          <CircleRed />
          <CircleYellow />
          <CircleGreen />
        </ContainerCircles>

        <BorderBlack>
          <BorderWhite>
            <ImgPoke src={props.poke.sprites.versions['generation-v']['black-white'].animated.front_default} />
            <p>{props.poke.name}</p>
          </BorderWhite>
        </BorderBlack>
        <ContainerButton>
        <ButtonPoke>
            Batalha
            {/* <Icon src={pokeIcon} /> */}
          </ButtonPoke>
          <ButtonPoke>
            Remover da Pokedex
            {/* <Icon src={pokeIcon} /> */}
          </ButtonPoke>
        </ContainerButton>
      </Container>
    </EachPokemonContainer>
  );
};

export default EachPokemon;
