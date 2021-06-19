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
  ButtonRemove
} from "./style";
import {EachPokemonContainer} from './style'
// import useRequestImage from "../../hooks/useRequestImage";

const EachPokemon = (props) => {
  const {pokedex, setPokedex, pokemonDetail, setPokemonDetail} = useContext(GlobalStateContext)

  const removeFromPokedex = () => {
    const pokeIndex = pokedex.findIndex((item) => {
      return item.name === props.poke.name
    })

    const newPokedexList = [...pokedex]
    newPokedexList.splice(pokeIndex, 1)

    const newPokemonList = [...pokemonDetail, props.poke]
    const order = newPokemonList.sort((a, b) => {
      return a.id - b.id
    })

    setPokedex(newPokedexList)
    setPokemonDetail(order)
  }

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
          <ButtonRemove onClick={removeFromPokedex}>
            Remover da Pokedex
            {/* <Icon src={pokeIcon} /> */}
          </ButtonRemove>
        </ContainerButton>
      </Container>
    </EachPokemonContainer>
  );
};

export default EachPokemon;
