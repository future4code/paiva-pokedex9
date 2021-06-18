import React from "react";
import Header from "../components/Header/Header";
import EachPokemon from '../components/EachPokemon/EachPokemon'
import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalStateContext";
import { useEffect } from "react";
import axios from "axios";
import useRequestImage from "../hooks/useRequestImage";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2%;
  color : black;
`


function Pokedex() {
  const { pokedex } = useContext(GlobalStateContext)


  const listPokedex = pokedex.map((poke) => {
    return <EachPokemon poke={poke} />
  })

  return (
    <div>
      <Header />
      <h1>pokedex</h1>
      <Container>{listPokedex}</Container>
    </div>
  );
}
export default Pokedex;
