import CardPoke from '../../components/CardPoke/CardPoke';
import { ToastContainer, toast } from 'react-toastify'
import { ContainerCard } from './style'
import Header from '../../components/Header/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Home = () => {

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
    return <CardPoke poke={poke} />
  })

  const AddPokemon = () => {
    // toast.success("🦄 Pokemon adicionado na Pokedex", {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
  };

  return (
    <div>
      <Header />

      {/* <button onClick={AddPokemon}>Adiciona Pokemon</button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <ContainerCard>
        {listPokemons}
      </ContainerCard>
    </div>
  );
};

export default Home;
