import React from "react";
import Header from "../components/Header/Header";
import EachPokemon from '../components/EachPokemon/EachPokemon'

function Pokedex() {
  
  return (
    <div>
      <Header />
      <h1>pokedex</h1>
      <EachPokemon/>
    </div>
  );
}
export default Pokedex;
