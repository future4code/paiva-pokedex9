import React from "react";
import Header from "../../components/Header/Header";
import EachPokemon from '../../components/EachPokemon/EachPokemon'
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { PokedexContainer, Container} from './style'


function Pokedex() {
  const { pokedex } = useContext(GlobalStateContext)


  const listPokedex = pokedex && pokedex.map((poke) => {
    return <EachPokemon poke={poke} />
  })

  console.log('itens na pokedex',pokedex)

  return (
          <PokedexContainer>
            <Header />
            <h1>pokedex</h1>
            <Container>
              {listPokedex}
            </Container>
            </PokedexContainer>
  );
}
export default Pokedex;