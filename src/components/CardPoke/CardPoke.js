import React, {useState, useEffect} from "react";  
import axios from "axios";
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
import pokeIcon from "../../img/poke-icon.png";
import { Link } from "react-router-dom";

function CardPoke(props) {  
  const [imgPoke, setImgPoke] = useState([]);

  useEffect(() => {
    getImgPoke()
  }, [])
   const getImgPoke = () => {
    axios
      .get(props.poke.url)
      .then((res) => {
        // console.log(res.data.sprites.versions["generation-v"].["black-white"].animated.front_default)
        setImgPoke(
          res.data.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }; 




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
          <button onClick={""}> detalhes</button>
        </Link>
      </ContainerButton>
    </Container>
  );
}

export default CardPoke;
