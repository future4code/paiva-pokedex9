import React from "react";
import styled from "styled-components";
import { Progress, Stack, Text, Flex } from "@chakra-ui/react";
import { BASE_URL } from "../Url/BASE_URL";
import { useParams } from "react-router-dom";
import useRequestDetail from "../hooks/useRequestDetail";

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
  text-shadow: 1px 1px 0 #000;
  font-size: 30px;
  margin-bottom: 10px;
`;

const PokemonDetail = () => {
  const params = useParams();
  const detailPoke = useRequestDetail([], `${BASE_URL}/${params.name}`);

  console.log("DETALHES", detailPoke.stats);

  const poderes =
    detailPoke.stats &&
    detailPoke.stats.map((stat) => {
      return (
        <>
          <h3>
            <p>{stat.stat.name}</p>
            <p>{stat.base_stat}</p>
          </h3>
          <Progress
            colorScheme="red"
            size="sm"
            max={150}
            value={stat.base_stat}
          />
        </>
      );
    });

  const ataques =
    detailPoke.moves &&
    detailPoke.moves.map((ataque, index) => {
      return (
        index < 5 && (
          <Text key={ataque.move.name} fontSize={16} fontWeight="bold">
            {ataque.move.name}
          </Text>
        )
      );
    });

  return (
    <>
      {detailPoke && detailPoke.sprites ? (
        <DetailsContainer>
          <DetailsCard1>
            <Title>{params.name}</Title>
            <img src={detailPoke.sprites.other["official-artwork"].front_default} />
            <Text fontWeight="bold">Tipo:</Text>
            {detailPoke &&
              detailPoke.types.map((type) => {
                return <Text key={type.type.name}>{type.type.name}</Text>;
              })}
          </DetailsCard1>
          <Stack spacing={2} justify="center">
            <Title>Poderes</Title>
            <div>{poderes}</div>
          </Stack>
          <DetailsCard2>
            <Title>Ataques</Title>
            <br />
            <br />
            {ataques}
          </DetailsCard2>
        </DetailsContainer>
      ) : (
        <p>Carregando informações</p>
      )}
    </>
  );
};
export default PokemonDetail;
