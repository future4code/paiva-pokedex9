import Header from "../components/Header/Header";
import styled from 'styled-components';
import CardPoke from '../components/CardPoke/CardPoke';
import Header from '../../src/components/Header/Header';
import { ToastContainer, toast, Zoom, Bounce} from 'react-toastify'


const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2%;
`

const Home = () =>{

  const AddPokemon = ()=>{
toast.error("Pokemon adicionado na Pokedex")
toast.success("Pokemon adicionado na Pokedex")
toast.info("Pokemon adicionado na Pokedex")
toast.warn("Pokemon adicionado na Pokedex")
  }

return (
    <div>
      <Header />
      <ContainerCard>
          <CardPoke /> 
          <ToastContainer draggable={false}
           transition={Zoom}
           autoClose={8000}>

           <button onClick={AddPokemon} >Add</button>
           </ToastContainer>
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
}

export default Home;
