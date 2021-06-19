import React, { useState } from "react";
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
import { EachPokemonContainer } from "./style";
import useRequestImage from "../../hooks/useRequestImage";

const EachPokemon = (props) => {
  const imgPoke = useRequestImage([], props.poke.url);

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
            <ImgPoke src={imgPoke} />
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
