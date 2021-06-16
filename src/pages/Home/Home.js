import CardPoke from '../../components/CardPoke/CardPoke';
import { ToastContainer, toast } from 'react-toastify'
import {ContainerCard} from './style'
import Header from '../../components/Header/Header';


const Home = () => {
  const AddPokemon = () => {
    toast.success("🦄 Pokemon adicionado na Pokedex", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <Header />

      <button onClick={AddPokemon}>Adiciona Pokemon</button>
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
      />
      <ContainerCard>
        <CardPoke />

        <CardPoke />
        <CardPoke />
        <CardPoke />
        <CardPoke />
        <CardPoke />
        <CardPoke />
        <CardPoke />
        <CardPoke />
        <CardPoke />
        <CardPoke />
      </ContainerCard>
    </div>
  );
};

export default Home;
