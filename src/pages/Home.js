import React from 'react';
import Header from "../components/Header/Header";
import styled from 'styled-components';
import CardPoke from '../components/CardPoke/CardPoke';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2%;
`

function Home() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPoke()
  }, [])
  
  const getPoke = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    .then((res) => {
      // console.log(res.data.results)
      setPokemons(res.data.results)
      
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const listPokemons = pokemons.map((poke) => {
    return <CardPoke poke={poke}/>
  })

  return (
    <div>
      <Header />
      <ContainerCard>
        {listPokemons}
      </ContainerCard>
    </div>
  );
}

export default Home;
