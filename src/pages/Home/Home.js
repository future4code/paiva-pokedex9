import React, { useContext } from "react";
import { ContainerCard } from "./style";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const Home = () => {
  const { pokemons, setPokemons, imgPoke, setImgPoke } =
    useContext(GlobalStateContext);

  const listPokemons = pokemons.map((poke) => {
    return <CardPoke poke={poke} />;
  });
  console.log()


  return (
    <div>
      <Header />

     
      <ContainerCard>{listPokemons}</ContainerCard>
    </div>
  );
};

export default Home;
