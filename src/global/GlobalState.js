import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Url/BASE_URL";
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);

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

  const data = {
    pokemons,
    setPokemons,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
