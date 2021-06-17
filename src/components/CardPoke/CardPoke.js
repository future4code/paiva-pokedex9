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
  ContainerButton,
} from "./style";
import { Button } from "@chakra-ui/react";
import pokeIcon from "../../img/poke-icon.png";
import { Link } from "react-router-dom";
import useRequestImage from '../../hooks/useRequestImage'

function CardPoke(props) {
  const imgPoke = useRequestImage([], props.poke.url)

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
        <ButtonPoke onClick={""}>
          <Icon src={pokeIcon} />
        </ButtonPoke>
        <Link to={`/pokemon/${props.poke.name}`}>
          <Button colorScheme="red" variant="solid">
            Detalhes
          </Button>
        </Link>
      </ContainerButton>
    </Container>
  );
}

export default CardPoke;
