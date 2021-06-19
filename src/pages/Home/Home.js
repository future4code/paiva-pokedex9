import React, { useContext } from "react";
import { ContainerCard, HomeContainer } from "./style";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import CardPoke from "../../components/CardPoke/CardPoke";

const Home = () => {
  const { pokemonDetail } =
    useContext(GlobalStateContext);

  const listPokemons = pokemonDetail.map((poke) => {

    return <CardPoke poke={poke}/>
 
  });

  return (
    <HomeContainer>
{console.log(pokemonDetail)}
      <Header />
      <ContainerCard>{listPokemons}</ContainerCard>
    </HomeContainer>
  );
};

export default Home;
