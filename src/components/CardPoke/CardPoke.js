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
  Icon,
  ButtonPoke,
  ContainerButton
} from "./style";
import pokeIcon from "../../img/poke-icon.png";
import { Link } from "react-router-dom";
import useRequestImage from '../../hooks/useRequestImage'
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { RiAddCircleLine, RiFileListLine } from 'react-icons/ri'

function CardPoke(props) {
  const imgPoke = useRequestImage([], props.poke.url)
  const { addToPokedex, pokedex } = useContext(GlobalStateContext)



  // const isInPokedex = (pokemon) => {
  //   const index = pokedex.findIndex((item) => {
  //     return item.name === pokemon.name
  //   })
  //   return index > -1
  // }

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
          <ImgPoke src={imgPoke} />
          <p>{props.poke.name}</p>
        </BorderWhite>
      </BorderBlack>
      <ContainerButton>
        <ButtonPoke onClick={() => addToPokedex(props.poke.url)}>
          <RiAddCircleLine size='36px' />
        </ButtonPoke>
        {/* {pokedex && pokedex.name === props.poke.name? <ButtonPoke onClick={() => addToPokedex(props.poke.url)}>
          <RiAddCircleLine size='36px' />
        </ButtonPoke> : 'ja tá'} */}

        <Link to={`/pokemon/${props.poke.name}`}>
          <RiFileListLine size='32px' />
        </Link>
      </ContainerButton>
    </Container>
  );
}

export default CardPoke;
