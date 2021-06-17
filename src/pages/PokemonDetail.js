import React from "react";
import styled from "styled-components";
import { Progress, Stack, Text, Tab } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../Url/BASE_URL";
import { useParams } from "react-router-dom";

const DetailsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  margin-top: 150px;
  h3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 15px 0 10px 0;
    padding: 10px 0px 0px 0px;
    font-size: 14px;
  }
`;
const DetailsCard1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0px;
  margin: 0;
  img {
    height: 300px;
    width: 300px;
    text-align: center;
    padding: 0px;
  }
`;
const DetailsCard2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-left: 70px;
  width: 125px;
`;
const Title = styled.h1`
  color: orange;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  height: 20px;
  padding: 2px;
  text-shadow: 1px 1px 0 #000;
  font-size: 30px;
`;

const PokemonDetail = () => {
  const [DetailPoke, setDetailPoke] = useState({
    habilidades: {},
    ataques: {},
    peso: "",
    tipo: {},
  });

  const params = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${params.name}`)
      .then((res) => {
        setDetailPoke.habilidades(res.data.abilities.ability);
      })
      .catch((erro) => {
        console.log(erro);
      });
  });

  return (
    <DetailsContainer>
      {console.log(DetailPoke.habilidades)}
      <DetailsCard1>
        <Title>Bulbasaur</Title>
        <img
          src={
            "https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/1.png"
          }
        />
        <Text fontWeight="bold">Tipo: grama</Text>
      </DetailsCard1>
      <Stack spacing={2} justify="center">
        <Title>Poderes</Title>
        <h3>
          <p>hp</p>
          <p>80</p>
        </h3>
        <Progress colorScheme="red" size="sm" value={80} />
        <h3>
          <p>attack</p>
          <p>82</p>
        </h3>
        <Progress colorScheme="red" size="sm" value={82} />
        <h3>
          <p>defense</p>
          <p>83</p>
        </h3>
        <Progress colorScheme="red" size="sm" value={83} />
        <h3>
          <p>special-attack</p>
          <p>100</p>
        </h3>
        <Progress colorScheme="red" size="sm" value={100} />
        <h3>
          <p>special-defense</p>
          <p>100</p>
        </h3>
        <Progress colorScheme="red" size="sm" value={100} />
        <h3>
          <p>speed</p>
          <p>80</p>
        </h3>
        <Progress colorScheme="red" size="sm" value={80} />
      </Stack>
      <DetailsCard2>
        <Title>Ataques</Title>
        <br />
        <br />
        <Text fontSize={16} fontWeight="bold">
          swords-dance
        </Text>
        <Text fontSize={16} fontWeight="bold">
          cut
        </Text>
        <Text fontSize={16} fontWeight="bold">
          bind
        </Text>
        <Text fontSize={16} fontWeight="bold">
          vine-whip
        </Text>
        <Text fontSize={16} fontWeight="bold">
          headbutt
        </Text>
        <Text fontSize={16} fontWeight="bold">
          tackle
        </Text>
        <Text fontSize={16} fontWeight="bold">
          body-slam
        </Text>
        <Text fontSize={16} fontWeight="bold">
          take-down
        </Text>
        <Text fontSize={16} fontWeight="bold">
          double-edge
        </Text>
        <Text fontSize={16} fontWeight="bold">
          growl
        </Text>
      </DetailsCard2>
    </DetailsContainer>
  );
};
export default PokemonDetail;
