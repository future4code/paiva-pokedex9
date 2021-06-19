import React, { useContext } from "react";
import { ContainerCard, HomeContainer } from "./style";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import CardPoke from "../../components/CardPoke/CardPoke";

const Home = () => {
  const { pokemons, pokedex, setPokemons, imgPoke, setImgPoke } =
    useContext(GlobalStateContext);

  const listPokemons = pokemons.map((poke, index) => {
    return <CardPoke poke={poke} id={index + 1} />;
  });

  return (
    <HomeContainer>
      <Header />
      <ContainerCard>{listPokemons}</ContainerCard>
    </HomeContainer>
  );
};

export default Home;
