import React from "react";
import {
  Container,
  CircleBlue,
  CircleRed,
  CircleYellow,
  CircleGreen,
  ContainerCircles,
  BorderBlack,
  BorderWhite,
  ImgPoke,
  ButtonPoke,
  ContainerButton,
} from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { RiAddCircleLine, RiFileListLine } from "react-icons/ri";

function CardPoke(props) {
  const { pokedex, setPokedex, pokemonDetail, setPokemonDetail } = useContext(GlobalStateContext)

  const addToPokedex = () => {
    const pokeIndex = pokemonDetail.findIndex((item) => {
      return item.name === props.poke.name
    } )

    const newPokemonList = [...pokemonDetail]
    newPokemonList.splice(pokeIndex, 1)
    const newPokedexList = [...pokedex, props.poke]

    setPokedex(newPokedexList)
    setPokemonDetail(newPokemonList)
  }

  const goToDetail=((id)=>{
    {localStorage.setItem("id", id)}
  })

  return (
    <Container>
      <ContainerCircles>
        <CircleBlue></CircleBlue>
        <CircleRed></CircleRed>
        <CircleYellow></CircleYellow>
        <CircleGreen></CircleGreen>
      </ContainerCircles>

      <BorderBlack>
        <BorderWhite>
          <ImgPoke src={props.poke.sprites.versions['generation-v']['black-white'].animated.front_default} />
          <p>{props.poke.name}</p>
        </BorderWhite>
      </BorderBlack>
      <ContainerButton>
        <ButtonPoke onClick={addToPokedex}>
          <RiAddCircleLine size='36px' />
        </ButtonPoke>
        {/* {pokedex && pokedex.name === props.poke.name? <ButtonPoke onClick={() => addToPokedex(props.poke.url)}>
          <RiAddCircleLine size='36px' />
        </ButtonPoke> : 'ja tá'} */}

        <Link to={`/pokemon/${props.poke.id}`}>
          <RiFileListLine
            size="32px"
            onClick={() => goToDetail(props.poke.id)}
          />
        </Link>
      </ContainerButton>
    </Container>
  );
}

export default CardPoke;
