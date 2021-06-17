import CardPoke from '../../components/CardPoke/CardPoke';
import { ToastContainer, toast } from 'react-toastify'
import { ContainerCard } from './style'
import Header from '../../components/Header/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Home = () => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {


   axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
      .then((res) => {
        // console.log(res.data.results)
        setPokemons(res.data.results)
 console.log(`id`, res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  
}, [])
  // let idPokemon= pokemons.url.slice(34,35)
  

  const listPokemons = pokemons.map((poke) => {
    return <CardPoke poke={poke} />
  })

  return (
    <div>
      <Header />
     {console.log(`tamanhos`,pokemons.length)}
         <ContainerCard>
        {listPokemons}
      </ContainerCard>
    </div>
  );
};

export default Home;
