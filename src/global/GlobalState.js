import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../constants/Url/BASE_URL';
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    getPokemonNames();
  }, []);

  const getPokemonNames = () => {
    axios
      .get(`${BASE_URL}?offset=0&limit=20`)
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => console.log(error.message));
  };

  const addToPokedex = (url) => {
    const newPokedex = pokemons.filter((poke) => {
      if (poke.url === url){
         return url
      }else {
        return poke.url
      }
     
    })

    setPokedex([...pokedex, ...newPokedex])
    console.log('lista a poke', {pokedex})
  };

  const data = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
    addToPokedex
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
