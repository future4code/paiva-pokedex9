import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../constants/Url/BASE_URL';
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [pokemonsNames, setPokemonsNames] = useState([]);
  const [pokedex, setPokedex] = useState([])
  const [pokemonDetail, setPokemonDetail] = useState([])

  useEffect(() => {
    getPokemonNames();
  }, []);

  useEffect(() => {
    pokemonsDetail()
  }, [pokemonsNames])

  const getPokemonNames = () => {
    axios
      .get(`${BASE_URL}?offset=0&limit=20`)
      .then((response) => {
        setPokemonsNames(response.data.results);
      })
      .catch((error) => console.log(error.message));
  };

  const pokemonsDetail = () => {
    const newPokemonDetail = []
    pokemonsNames.forEach((poke) => {
      axios.get(poke.url)
      .then((res) => {
        newPokemonDetail.push(res.data)
        if (newPokemonDetail.length === 20) {
          const order = newPokemonDetail.sort((a, b) => {
            return a.id - b.id
          })
          setPokemonDetail(order)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    })
  }

  const data = {
    pokedex,
    setPokedex,
    pokemonDetail,
    setPokemonDetail
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
