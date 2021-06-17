import React, { useContext } from "react";
import CardPoke from "../../components/CardPoke/CardPoke";
// import { ToastContainer, toast } from 'react-toastify'
import { ContainerCard } from "./style";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const Home = () => {
  const { pokemons, pokedex, setPokemons, imgPoke, setImgPoke } =
    useContext(GlobalStateContext);

  const listPokemons = pokemons.map((poke) => {
    return <CardPoke poke={poke} />;
  });


  return (
    <div>
      <Header />
      <ContainerCard>{listPokemons}</ContainerCard>
    </div>
  );
};

export default Home;
